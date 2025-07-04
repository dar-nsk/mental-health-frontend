import { Link } from "react-router-dom";

export default function CounselorDashboard() {
  const features = [
    {
      title: "View Bookings",
      description: "Review and manage all student bookings.",
      link: "/counselordashboard/bookings",
    },
    {
      title: "Manage Activities",
      description: "Create and update activities for students.",
      link: "/counselordashboard/activities",
    },
    {
      title: "Chat with Students",
      description: "Communicate directly with students in real time.",
      link: "/counselordashboard/chat",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-teal-700 mb-6">
        Counselor Dashboard
      </h1>
      <p className="text-gray-700 mb-8">
        Manage appointments, activities, and student communications here.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <Link
            key={feature.title}
            to={feature.link}
            className="block border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-teal-700 mb-2">
              {feature.title}
            </h2>
            <p className="text-gray-600">{feature.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
