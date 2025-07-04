import { useEffect, useState } from "react";

export default function CounselorBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBookings();
  }, []);

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

  const updateStatus = async (id, status) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`https://mental-health-backend-1.onrender.com`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      if (res.ok) {
        // Refresh bookings
        await fetchBookings();
      } else {
        const data = await res.json();
        alert(data.message || "Error updating status");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Bookings</h1>
      {loading && <p className="text-teal-600 mb-2">Updating status...</p>}
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Student</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Mode</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Zoom Meeting</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b._id}>
              <td className="border p-2">{b.user?.email}</td>
              <td className="border p-2">{new Date(b.date).toLocaleString()}</td>
              <td className="border p-2">{b.mode}</td>
              <td className="border p-2">{b.description}</td>
              <td className="border p-2 capitalize">{b.status || "pending"}</td>
              <td className="border p-2">
                {b.zoomLink ? (
                  <a
                    href={b.zoomLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:underline"
                  >
                    Join Meeting
                  </a>
                ) : (
                  "-"
                )}
              </td>
              <td className="border p-2 space-x-2">
                {b.status === "pending" && (
                  <>
                    <button
                      onClick={() => updateStatus(b._id, "accepted")}
                      className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => updateStatus(b._id, "rejected")}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                      Reject
                    </button>
                  </>
                )}
                {b.status !== "pending" && <span className="text-gray-500">No actions</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
