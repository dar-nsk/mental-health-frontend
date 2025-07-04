import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Dashboard() {
  const [username, setUsername] = useState("");

useEffect(() => {
  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("No token found in localStorage");
        window.location.href = "/auth";
        return;
      }

      const response = await fetch("https://mental-health-backend-1.onrender.com", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.ok) {
        const user = await response.json();
        console.log("Fetched user:", user);
        setUsername(user.username);
      } else {
        console.log("Failed response from /auth/me", response.status);
        window.location.href = "/auth";
      }
    } catch (err) {
      console.error("Fetch error:", err);
      window.location.href = "/auth";
    }
  };

  fetchUser();
}, []);


  // Features array for mapping
  const features = [
    {
      title: "Book a Session",
      description: "Schedule time with a counselor whenever you need support.",
      image: "/images/book-session.jpg",
      link: "/book",
    },
    {
      title: "Mindful Activities",
      description: "Explore exercises to calm your mind and boost wellbeing.",
      image: "/images/activities.jpg",
      link: "/activities",
    },
    {
      title: "Chat Support",
      description: "Start a private conversation with your counselor anytime.",
      image: "/images/chat.jpg",
      link: "/chat",
    },
    {
      title: "Privacy & Safety",
      description: "Learn how we protect your information and privacy.",
      image: "/images/privacy.jpg",
      link: "/privacy",
    },
  ];

  return (
    <div className="space-y-12 px-4">
      {/* Welcome */}
      <div className="text-center mt-8">
        <h1 className="text-3xl font-bold text-green-600 mb-2">
          Welcome back, {username} 🌿
        </h1>
        <p className="text-gray-700 text-lg">
          “Every step you take today is progress. You’re doing better than you think.”
        </p>
      </div>

      {/* Features */}
      <div className="space-y-12">
        {features.map((feature, idx) => (
          <FeatureRow
            key={feature.title}
            feature={feature}
            reverse={idx % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
}

// Feature row component with zig-zag layout
function FeatureRow({ feature, reverse }) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-6`}
    >
      <img
        src={feature.image}
        alt={feature.title}
        className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md"
      />
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-2xl font-bold text-green-700">{feature.title}</h2>
        <p className="text-gray-700">{feature.description}</p>
        <Link
          to={feature.link}
          className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold transition"
        >
          Go to {feature.title}
          <svg
            className="w-4 h-4 ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M12.293 4.293a1 1 0 011.414 0L18 8.586a2 2 0 010 2.828l-4.293 4.293a1 1 0 01-1.414-1.414L15.586 11H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}