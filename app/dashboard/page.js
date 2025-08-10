import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="text-center py-10">
      <h2 className="text-2xl font-semibold mb-4">Welcome to the Dashboard</h2>
      <p className="mb-8 text-gray-600">Select a section to view analytics:</p>
      <div className="flex justify-center gap-6">
        <Link href="/dashboard/analytics" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Analytics
        </Link>
        <Link href="/dashboard/popular" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Popular Content
        </Link>
        <Link href="/dashboard/recent" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Recent Activity
        </Link>
      </div>
    </div>
  );
}