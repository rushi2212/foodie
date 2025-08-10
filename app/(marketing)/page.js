import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <main className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Foodie
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mx-auto mb-8"></div>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Welcome to the Food App! Here you can find delicious recipes and
              food-related content.
            </p>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Explore our features and enjoy your culinary journey!
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Recipes Feature */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Recipe Collection
              </h3>
              <p className="text-gray-600 mb-6">
                Discover amazing recipes from around the world with detailed
                instructions.
              </p>
              <Link
                href="/meals"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg shadow-md hover:from-orange-600 hover:to-amber-600 transition-all duration-300"
              >
                Browse Meals
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </Link>
            </div>

            {/* About Feature */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                About Us
              </h3>
              <p className="text-gray-600 mb-6">
                Learn more about our mission to bring you the best culinary
                experiences.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg shadow-md hover:from-orange-600 hover:to-amber-600 transition-all duration-300"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </Link>
            </div>

            {/* Contact Feature */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-6">
                Have questions or suggestions? We&apos;d love to hear from you!
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg shadow-md hover:from-orange-600 hover:to-amber-600 transition-all duration-300"
              >
                Contact Us
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white rounded-xl shadow-lg p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Ready to Start Cooking?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of food lovers who have discovered their new
                favorite recipes through our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/meals"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-lg rounded-lg shadow-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Recipes
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    ></path>
                  </svg>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-500 text-orange-500 font-bold text-lg rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page;
