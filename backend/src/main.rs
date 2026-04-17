use axum::{
    routing::get,
    Json, Router,
};
use serde::Serialize;
use tower_http::cors::CorsLayer;

#[derive(Serialize)]
struct Event {
    id: u32,
    title: String,
    org: String,
    time: String,
    duration: String,
    public: String,
    category: String,
    level: String,
    spots: u32,
    max_spots: u32,
}

async fn get_events() -> Json<Vec<Event>> {
    let events = vec![
        Event {
            id: 1,
            title: "Capoeira découverte".into(),
            org: "Brasil Moove".into(),
            time: "10h00".into(),
            duration: "45 min".into(),
            public: "Tout public".into(),
            category: "Danse".into(),
            level: "Tous niveaux".into(),
            spots: 12,
            max_spots: 20,
        },
        Event {
            id: 2,
            title: "Yoga détente".into(),
            org: "Zen Club".into(),
            time: "11h00".into(),
            duration: "30 min".into(),
            public: "Tout public".into(),
            category: "Bien-être".into(),
            level: "Débutant".into(),
            spots: 5,
            max_spots: 15,
        },
    ];

    Json(events)
}

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/events", get(get_events))
        .layer(CorsLayer::permissive());

    println!("Server running on http://localhost:3001");

    // ✅ Nouveau système Axum 0.7+
    let listener = tokio::net::TcpListener::bind("0.0.0.0:3001")
        .await
        .unwrap();

    axum::serve(listener, app)
        .await
        .unwrap();
}