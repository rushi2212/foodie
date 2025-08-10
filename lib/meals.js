import { getDatabase } from "./database";

export async function getAllMeals() {
  const db = await getDatabase();
  const meals = await db.all("SELECT * FROM meals ORDER BY created_at DESC");
  return meals;
}

export async function getMealById(id) {
  const db = await getDatabase();
  const meal = await db.get("SELECT * FROM meals WHERE id = ?", id);
  return meal;
}

export async function getMealsByCategory(category) {
  const db = await getDatabase();
  const meals = await db.all("SELECT * FROM meals WHERE category = ? ORDER BY created_at DESC", category);
  return meals;
}

