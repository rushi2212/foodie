import { notFound } from "next/navigation";
import { getMealById } from "@/lib/meals";
import Link from "next/link";
import Image from "next/image";

export default async function MealPage({ params }) {
  const { id } = params;

  // Fetch the meal by ID
  const meal = await getMealById(id);

  // If the meal is not found, return a 404 page
  if (!meal) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/meals"
          className="inline-flex items-center text-orange-600 hover:text-orange-800 mb-8 transition-colors"
        >
          ← Back to Meals
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Hero Section */}
          <div className="relative h-96">
            <Image
              src={meal.image}
              alt={meal.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h1 className="text-4xl font-bold mb-2">{meal.title}</h1>
              <p className="text-xl opacity-90">by {meal.authors}</p>
              <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm mt-2">
                {meal.category}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                    Description
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {meal.description}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                    Instructions
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {meal.instructions}
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Info */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Quick Info
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Prep Time</span>
                      <strong className="text-gray-800">
                        {meal.prep_time} min
                      </strong>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Cook Time</span>
                      <strong className="text-gray-800">
                        {meal.cook_time} min
                      </strong>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Servings</span>
                      <strong className="text-gray-800">{meal.servings}</strong>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Likes</span>
                      <strong className="text-orange-600">
                        ❤️ {meal.likes}
                      </strong>
                    </div>
                  </div>
                </div>

                {/* Chef Info */}
                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Chef Info
                  </h3>
                  <div className="space-y-2">
                    <div className="font-medium text-gray-800">
                      {meal.authors}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {meal.author_email}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
