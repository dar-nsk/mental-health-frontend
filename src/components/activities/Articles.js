export default function Articles() {
  const articles = [
    {
      id: 1,
      title: "Understanding Anxiety",
      snippet:
        "Learn how anxiety affects your mind and body, and discover practical techniques to manage it effectively.",
      link: "#",
    },
    {
      id: 2,
      title: "Daily Habits for a Calm Mind",
      snippet:
        "Explore simple daily practices to reduce stress and improve your overall wellbeing.",
      link: "#",
    },
    {
      id: 3,
      title: "Building Resilience in Tough Times",
      snippet:
        "Discover how to strengthen your emotional resilience during periods of change and uncertainty.",
      link: "#",
    },
    {
      id: 4,
      title: "Improving Your Sleep Routine",
      snippet:
        "Find out how better sleep habits can help support your mental health and daily energy.",
      link: "#",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow space-y-6">
      <h1 className="text-2xl font-bold text-teal-700 mb-2">
        Mental Health Articles 📚
      </h1>
      <p className="text-gray-600 mb-4">
        Read about mental health topics and learn practical strategies.
      </p>
      <ul className="space-y-4">
        {articles.map((article) => (
          <li
            key={article.id}
            className="border rounded p-4 shadow hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold text-teal-700">
              {article.title}
            </h2>
            <p className="text-gray-600">{article.snippet}</p>
            <a
              href={article.link}
              className="text-teal-600 hover:underline text-sm"
            >
              Read more →
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
