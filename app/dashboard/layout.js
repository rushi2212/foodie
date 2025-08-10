"use client";
import Link from "next/link";

export default function DashboardLayout({
  children,
  analytics,
  popular,
  recent,
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Simple top header */}
      <div className="bg-white/80 backdrop-blur-md px-4 py-4 shadow-sm border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 transition-all duration-200"
            >
              🍽️ Foodie Dashboard
            </Link>
            <div className="text-sm text-gray-600">
              Welcome to your dashboard
            </div>
          </div>
        </div>
      </div>

      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main page content */}
        {children && <div className="mb-8">{children}</div>}

        {/* Analytics section */}
        {analytics && (
          <div className="mb-8 ">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden p-4">
              <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200">
                <h2 className="text-xl font-semibold text-blue-800 flex items-center">
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    ></path>
                  </svg>
                  Analytics
                </h2>
              </div>
              <div>{analytics}</div>
            </div>
          </div>
        )}

        {/* Popular section */}
        {popular && (
          <div className="mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-4 py-4">
              <div className="px-6 py-4 bg-gradient-to-r from-yellow-50 to-amber-100 border-b border-yellow-200">
                <h2 className="text-xl font-semibold text-amber-800 flex items-center">
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    ></path>
                  </svg>
                  Popular Content
                </h2>
              </div>
              <div>{popular}</div>
            </div>
          </div>
        )}

        {/* Recent section */}
        {recent && (
          <div className="mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-4 py-4">
              <div className="px-6 py-4 bg-gradient-to-r from-green-50 to-emerald-100 border-b border-green-200">
                <h2 className="text-xl font-semibold text-emerald-800 flex items-center">
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  Recent Activity
                </h2>
              </div>
              <div>{recent}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
