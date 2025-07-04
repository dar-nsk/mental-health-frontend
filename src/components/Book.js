import { useState, useEffect } from "react";

export default function Book() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    description: "",
    mode: "in-person",
  });
  const [message, setMessage] = useState("");
  const [bookings, setBookings] = useState([]);
  const [view, setView] = useState("my-bookings"); // dropdown state

  // Fetch user's bookings on load
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("https://mental-health-backend-1.onrender.com", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setBookings(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBookings();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const dateTime = new Date(`${formData.date}T${formData.time}`);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("https://mental-health-backend-1.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          date: dateTime,
          description: formData.description,
          mode: formData.mode,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Booking created successfully!");
        setFormData({
          date: "",
          time: "",
          description: "",
          mode: "in-person",
        });
        setBookings((prev) => [data, ...prev]);
        setView("my-bookings"); // redirect to bookings view
      } else {
        setMessage(`❌ ${data.message || "Error creating booking."}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Server error.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Dropdown Menu */}
      <div className="mb-4">
        <label className="block text-lg font-semibold text-teal-700 mb-2">
          Select Option:
        </label>
        <select
          value={view}
          onChange={(e) => setView(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-teal-500"
        >
          <option value="my-bookings">📋 My Bookings</option>
          <option value="book-session">📆 Book a New Session</option>
        </select>
      </div>

      {/* View My Bookings */}
      {view === "my-bookings" && (
        <div>
          <h1 className="text-2xl font-bold text-teal-700 mb-4">My Bookings</h1>
          {bookings.length === 0 ? (
            <p className="text-gray-600">No bookings yet.</p>
          ) : (
            <table className="w-full border text-sm">
              <thead>
                <tr>
                  <th className="border p-2">Date</th>
                  <th className="border p-2">Mode</th>
                  <th className="border p-2">Description</th>
                  <th className="border p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b._id}>
                    <td className="border p-2">
                      {new Date(b.date).toLocaleString()}
                    </td>
                    <td className="border p-2">{b.mode}</td>
                    <td className="border p-2">{b.description}</td>
                    <td className="border p-2 capitalize">
                      {b.status || "pending"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {/* View Booking Form */}
      {view === "book-session" && (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-teal-700">
            Book a New Session
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Meeting Mode</label>
              <select
                name="mode"
                value={formData.mode}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="in-person">In-person Session</option>
                <option value="virtual">Virtual Meeting</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Select Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Select Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Booking Subject</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                placeholder="e.g., Exam pressure, mental stress, personal challenges..."
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-2 rounded"
            >
              Book Session
            </button>
            {message && (
              <p
                className={`mt-2 text-center font-medium ${
                  message.startsWith("✅")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
