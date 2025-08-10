export default function AnalyticsPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Analytics Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Total Visitors</h3>
          <p className="text-3xl font-bold mt-2">1,245</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Page Views</h3>
          <p className="text-3xl font-bold mt-2">3,892</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Bounce Rate</h3>
          <p className="text-3xl font-bold mt-2">32%</p>
        </div>
      </div>
    </div>
  );
}