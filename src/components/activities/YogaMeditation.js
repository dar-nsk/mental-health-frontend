export default function YogaMeditation() {
  const guides = [
    {
      id: 1,
      title: "Sun Salutation (Surya Namaskar)",
      description:
        "A series of poses to energize your body and calm your mind. Perfect for mornings.",
      link: "#",
    },
    {
      id: 2,
      title: "Mindful Breathing Meditation",
      description:
        "Sit comfortably and focus on your breath to reduce stress and bring clarity.",
      link: "#",
    },
    {
      id: 3,
      title: "Yoga for Relaxation",
      description:
        "Gentle stretches to release tension and promote relaxation after a long day.",
      link: "#",
    },
    {
      id: 4,
      title: "Guided Body Scan Meditation",
      description:
        "A step-by-step practice to release body tension and improve focus.",
      link: "#",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow space-y-6">
      <h1 className="text-2xl font-bold text-teal-700 mb-2">
        Yoga & Meditation 🧘
      </h1>
      <p className="text-gray-600 mb-4">
        Explore calming practices to support your mental wellbeing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guides.map((guide) => (
          <div
            key={guide.id}
            className="border rounded p-4 shadow hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold text-teal-700">{guide.title}</h2>
            <p className="text-gray-600">{guide.description}</p>
            <a
              href={guide.link}
              className="text-teal-600 hover:underline text-sm"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
