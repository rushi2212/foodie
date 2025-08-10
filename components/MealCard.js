import Image from "next/image";
import Link from "next/link";

export default function MealCard({ meal }) {
  const { id, title, description, image, authors, category, likes } = meal;
  console.log("MealCard meal:", image);

  return (
    <Link href={`/meals/${id}`} className="block group">
      <div className="bg-white rounded-xl overflow-hidden shadow-lg border-0 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl">
        <div className="relative">
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            className="w-full h-56 object-cover"
          />
          <div className="absolute top-3 right-3">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {category}
            </span>
          </div>
          <div className="absolute bottom-3 left-3">
            <div className="flex items-center bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 py-1">
              <span className="text-red-500 mr-1">❤️</span>
              <span className="text-gray-700 text-sm font-medium">{likes}</span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
            {title}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
            {description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 text-sm font-semibold">
                  {authors.charAt(0).toUpperCase()}
                </span>
              </div>
              <span className="text-gray-700 text-sm font-medium truncate max-w-24">
                {authors}
              </span>
            </div>

            <div className="flex items-center text-orange-600 group-hover:text-orange-700 transition-colors">
              <span className="text-sm font-medium">View Recipe</span>
              <svg
                className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
