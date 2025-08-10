import React from "react";

function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            About Foodie
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to the Food App! Here you can find delicious recipes and
            food-related content.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Foodie, we believe that great food brings people together. Our
              mission is to inspire home cooks of all skill levels to explore
              new flavors, master classic techniques, and create memorable meals
              that nourish both body and soul.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We envision a world where cooking is accessible, enjoyable, and
              celebrated. Through our carefully curated recipes and culinary
              guidance, we aim to transform kitchens into spaces of creativity,
              learning, and joy for food enthusiasts everywhere.
            </p>
          </div>
        </div>

        {/* Journey Section */}
        <div className="bg-white rounded-xl shadow-lg p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Culinary Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our features and enjoy your culinary journey with us!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Curated Recipes
              </h3>
              <p className="text-gray-600">
                Hand-picked recipes from renowned chefs and home cooking
                enthusiasts around the world.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Community Driven
              </h3>
              <p className="text-gray-600">
                Join a vibrant community of food lovers sharing tips,
                techniques, and culinary adventures.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600">
                Discover modern cooking techniques and innovative approaches to
                traditional recipes.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl p-12 border-l-4 border-orange-500">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              What We Believe
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Quality
                </h3>
                <p className="text-gray-700 text-sm">
                  Every recipe is tested and perfected to ensure the best
                  results.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Simplicity
                </h3>
                <p className="text-gray-700 text-sm">
                  Clear instructions that make cooking accessible to everyone.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Diversity
                </h3>
                <p className="text-gray-700 text-sm">
                  Celebrating cuisines and flavors from around the globe.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Community
                </h3>
                <p className="text-gray-700 text-sm">
                  Building connections through the shared love of food.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
