export default function PopularPage() {
  const popularItems = [
    { id: 1, title: 'Getting Started Guide', views: 1250 },
    { id: 2, title: 'Advanced Features', views: 980 },
    { id: 3, title: 'Troubleshooting', views: 750 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Popular Content</h2>
      <ul className="space-y-3">
        {popularItems.map(item => (
          <li key={item.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
            <span className="font-medium">{item.title}</span>
            <span className="text-gray-500">{item.views.toLocaleString()} views</span>
          </li>
        ))}
      </ul>
    </div>
  );
}