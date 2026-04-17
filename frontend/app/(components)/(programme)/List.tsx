"use client";

import { useEffect, useState } from "react";

type Event = {
  id: number;
  title: string;
  org: string;
  time: string;
  duration: string;
  public: string;
  category: string;
  level: string;
  spots: number;
  max_spots: number;
};

export default function ProgrammeList() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="px-4 py-6 space-y-6">
      {events.map((event) => {
        const progress = (event.spots / event.max_spots) * 100;

        return (
          <div key={event.id}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl font-semibold text-gray-600">
                {event.time}
              </span>
              <div className="flex-1 h-[1px] bg-gray-300" />
            </div>

            <div className="bg-white rounded-2xl p-4 shadow border">
              <h4 className="font-semibold">{event.title}</h4>
              <p className="text-sm text-gray-500">{event.org}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                <span className="tag">{event.time}</span>
                <span className="tag">{event.duration}</span>
                <span className="tag">{event.public}</span>
                <span className="tag">{event.category}</span>
              </div>

              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-500">
                  {event.level}
                </span>

                <button className="bg-orange-500 text-white px-4 py-2 rounded-xl text-sm">
                  Je m&apos;inscris
                </button>
              </div>

              <div className="mt-4">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>{event.spots} places restantes</span>
                  <span>
                    {event.max_spots - event.spots}/{event.max_spots}
                  </span>
                </div>

                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}