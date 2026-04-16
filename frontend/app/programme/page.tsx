type Event = {
  title: string;
  time: string;
  description: string;
};

// async function getProgram(): Promise<Event[]> {
//   const res = await fetch("http://localhost:3001/program", {
//     cache: "no-store",
//   });
//   return res.json();
// }

export default async function Programme() {
//   const program = await getProgram();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Programme</h1>

      <div className="mt-4 space-y-4">
        {/* {program.map((event, i) => (
          <div key={i} className="border p-4 rounded">
            <h3 className="font-semibold">{event.title}</h3>
            <p>{event.time}</p>
            <p>{event.description}</p>
          </div>
        ))} */}
      </div>
    </main>
  );
}