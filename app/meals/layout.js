export default function MealsLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Delicious <span className="text-orange-600">Meals</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing recipes from talented chefs around the world. Each
            dish tells a story and brings flavors to your table.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"></div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
