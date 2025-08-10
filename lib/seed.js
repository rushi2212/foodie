import { getDatabase } from "./database";   

export async function seedDatabase() {
  const db = await getDatabase();

  // Check if meals table is empty
  const mealCount = await db.get("SELECT COUNT(*) as count FROM meals");
  if (mealCount.count > 0) {
    console.log("Meals table already seeded.");
    return;
  }

  // Sample data to seed
  const sampleMeals = [
    {
      title: "Spaghetti Carbonara",
      description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
      instructions: "Cook spaghetti. In a bowl, mix eggs and cheese. Fry pancetta. Combine all with pepper.",
      image: "https://bing.com/th?id=OSK.c8741fc3c4a4ca1f95a86b748a7843ce",
      authors: "Chef Mario",
      author_email: "mario@chef.com",
      category: "Italian",
      prep_time: 10,
      cook_time: 20,
      servings: 2,
        likes: 7
    },
    {
      title: "Chicken Tikka Masala",
      description: "A popular Indian dish made with marinated chicken in a spiced curry sauce.",
      instructions: "Marinate chicken. Cook onions and spices. Add chicken and tomatoes. Simmer.",
      image: "https://bing.com/th?id=OSK.23be5121ebb417c75e20c7d9e6ab21e2",
      authors: "Chef Priya",
      author_email: "priya@chef.com",
      category: "Indian",
      prep_time: 15,
      cook_time: 30,
      servings: 4,
      likes: 10
    },
    {
      title: "Beef Tacos",
      description: "Soft or hard shell tacos filled with seasoned beef, lettuce, cheese, and salsa.",
      instructions: "Cook beef with spices. Fill shells with beef and toppings.",
      image: "https://bing.com/th?id=OSK.eca189c2d2d67c48c96c8fa79d1ed2bf",
      authors: "Chef Carlos",
      author_email: "carlos@chef.com",
      category: "Mexican",
      prep_time: 10,
      cook_time: 15,
      servings: 4,
        likes: 5
    },
    {
      title: "Vegetable Stir Fry",
      description: "A quick and healthy stir fry with mixed vegetables and tofu.",
      instructions: "Stir fry vegetables and tofu in a pan. Add soy sauce and serve.",
      image: "https://bing.com/th?id=OSK.09e449ab013aa72a500c9a7bcf59fdb4",
      authors: "Chef Lin",
      author_email: "lin@chef.com",
      category: "Asian",
      prep_time: 10,
      cook_time: 15,
      servings: 2,
      likes: 7
    },
    {
      title: "Chocolate Cake",
      description: "A rich and moist chocolate cake topped with chocolate ganache.",
      instructions: "Bake chocolate cake layers. Prepare ganache. Assemble and frost the cake.",
      image: "https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg",
      authors: "Chef Sweet",
      author_email: "sweet@chef.com",
      category: "Dessert",
      prep_time: 20,
      cook_time: 30,
      servings: 8,
      likes: 12
    }
  ];

  // Insert sample data into meals table
  for(const meal of sampleMeals) {
    await db.run(
      `INSERT INTO meals (title, description, instructions, image, authors, author_email, category, prep_time, cook_time, servings, likes) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      meal.title,
      meal.description,
      meal.instructions,
      meal.image,
      meal.authors,
      meal.author_email,
      meal.category,
      meal.prep_time,
      meal.cook_time,
      meal.servings,
      meal.likes
    );
  }
  console.log("Database seeded with sample meals.");
}