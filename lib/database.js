import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

let db = null;

export async function getDatabase() {
  if (!db) {
    db = await open({
      filename: path.join(process.cwd(), "foodie.db"),
      driver: sqlite3.Database,
    });
    await initializeTables();
  }
  return db;
}

async function initializeTables() {
  await db.exec(`
    CREATE TABLE IF NOT EXISTS meals (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      instructions TEXT NOT NULL,
      image TEXT,
      authors TEXT NOT NULL,
      author_email TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      category TEXT NOT NULL,
      prep_time INTEGER,
      cook_time INTEGER,
      servings INTEGER,
      likes INTEGER DEFAULT 0
    );
  `);
  await db.exec(`
    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE
    );
  `);
  console.log("Database initialized with required tables.");
}
