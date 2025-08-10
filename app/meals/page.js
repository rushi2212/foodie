import MealCard from "@/components/MealCard";
import { getAllMeals } from "@/lib/meals";
import { seedDatabase } from "@/lib/seed";

export default async function MealsPage() {
  // Seed the database if necessary
  await seedDatabase();

  // Fetch all meals from the database
  const meals = await getAllMeals();

  return (
    <div>
      {/* Filter and Search Section */}
      <div className="mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium hover:bg-orange-600 transition-colors">
                All
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                Italian
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                Indian
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                Mexican
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                Asian
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-gray-600 text-sm">
                <span className="font-semibold text-orange-600">
                  {meals.length}
                </span>{" "}
                recipes found
              </div>
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                <option>Sort by: Latest</option>
                <option>Sort by: Popular</option>
                <option>Sort by: Quick</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Meals Grid */}
      {meals.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No meals found
            </h3>
            <p className="text-gray-600">
              Try adjusting your filters or check back later for new recipes.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
