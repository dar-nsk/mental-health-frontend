import { useState } from "react";

export default function VideoRecommendations() {
  const categories = ["All", "Motivation", "Family", "Friendship", "Study"];

  const videos = [
    {
      id: 1,
      category: "Motivation",
      title: "Stay Positive Every Day",
      url: "https://www.youtube.com/embed/Zi6vQ0V2wTI",
    },
    {
      id: 2,
      category: "Family",
      title: "Building Healthy Family Relationships",
      url: "https://www.youtube.com/embed/LEQmURdfY8M",
    },
    {
      id: 3,
      category: "Friendship",
      title: "How to Build Strong Friendships",
      url: "https://www.youtube.com/embed/B7k6dtvH_cQ",
    },
    {
      id: 4,
      category: "Study",
      title: "Study Motivation - Get Inspired",
      url: "https://www.youtube.com/embed/ZXsQAXx_ao0",
    },
    {
      id: 5,
      category: "Motivation",
      title: "Overcome Procrastination",
      url: "https://www.youtube.com/embed/1nBwfZZvjKo",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredVideos =
    selectedCategory === "All"
      ? videos
      : videos.filter((video) => video.category === selectedCategory);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow space-y-6">
      <h1 className="text-2xl font-bold text-teal-700 mb-2">
        Video Recommendations 🎥
      </h1>
      <p className="text-gray-600">
        Choose a topic and watch videos to support your mental wellbeing.
      </p>
      <select
        onChange={(e) => setSelectedCategory(e.target.value)}
        value={selectedCategory}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-teal-400"
      >
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="rounded overflow-hidden shadow hover:shadow-lg transition"
          >
            <iframe
              src={video.url}
              title={video.title}
              className="w-full h-48"
              allowFullScreen
            />
            <div className="p-3 text-center">
              <h2 className="text-teal-700 font-semibold">{video.title}</h2>
              <p className="text-sm text-gray-500">{video.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
