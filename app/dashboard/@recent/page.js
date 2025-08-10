export default function RecentPage() {
  const recentActivities = [
    { id: 1, action: 'User login', time: '2 minutes ago' },
    { id: 2, action: 'Content updated', time: '15 minutes ago' },
    { id: 3, action: 'New comment', time: '1 hour ago' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Recent Activity</h2>
      <ul className="space-y-3">
        {recentActivities.map(activity => (
          <li key={activity.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
            <span>{activity.action}</span>
            <span className="text-gray-500 text-sm">{activity.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}