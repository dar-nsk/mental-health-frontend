import { Link } from "react-router-dom";

export default function Activities() {
  const activities = [
    {
      title: "Audio Library",
      description: "Relax with calming audios.",
      image: "/images/audio.jpg",
      link: "/activities/audio", // Later: /activities/audio
    },
    {
      title: "Video Recommendations",
      description: "Watch helpful videos for wellbeing.",
      image: "/images/video.jpg",
      link: "/activities/videos",
    },
    {
      title: "Articles",
      description: "Read about mental health topics.",
      image: "/images/articles.jpg",
      link: "/activities/articles",
    },
    {
      title: "Yoga & Meditation",
      description: "Try guided exercises.",
      image: "/images/yoga.jpg",
      link: "/activities/yoga",
    },
    {
      title: "Breathing Exercises",
      description: "Calm your mind step by step.",
      image: "/images/breathing.jpg",
      link: "/activities/breathing",
    },
    {
      title: "Gratitude Journal",
      description: "Reflect and write down your thoughts.",
      image: "/images/journal.jpg",
      link: "/activities/journal",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Intro */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-teal-600 mb-2">
          Mindful Activities 🌱
        </h1>
        <p className="text-gray-700">
          Choose an activity to start your journey toward calm and clarity.
        </p>
      </div>

      {/* Activity Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center mt-8">
        {activities.map((activity) => (
          <ActivityCard
            key={activity.title}
            title={activity.title}
            description={activity.description}
            image={activity.image}
            link={activity.link}
          />
        ))}
      </div>
    </div>
  );
}

function ActivityCard({ title, description, image, link }) {
  return (
    <Link
      to={link}
      className="group relative w-72 h-72 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 ease-in-out"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4">
        <h2 className="text-white text-lg font-semibold">{title}</h2>
        <p className="text-gray-200 text-sm">{description}</p>
      </div>
    </Link>
  );
}
