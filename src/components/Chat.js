import { useEffect, useState } from "react";

export default function Chat() {
  const [activeTab, setActiveTab] = useState("post");
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  // Load questions on mount
  useEffect(() => {
    if (activeTab === "reply") {
      fetchQuestions();
    }
  }, [activeTab]);

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/chat/questions", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setQuestions(data);
    } catch (err) {
      console.error("Failed to fetch questions", err);
    } finally {
      setLoading(false);
    }
  };

  const handlePostQuestion = async () => {
    if (!newQuestion.trim()) return;

    try {
      const res = await fetch("http://localhost:5000/api/chat/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text: newQuestion }),
      });
      if (res.ok) {
        setNewQuestion("");
        setActiveTab("reply");
        fetchQuestions();
      } else {
        const data = await res.json();
        alert(data.message || "Error posting question");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow space-y-4">
      <h1 className="text-2xl font-bold text-teal-700 mb-4">
        Anonymous Support Chat 💬
      </h1>
      <p className="text-gray-600">
        Ask questions anonymously and support others.
      </p>

      {/* Tabs */}
      <div className="flex space-x-2 mt-4">
        <button
          onClick={() => setActiveTab("post")}
          className={`px-4 py-2 rounded ${
            activeTab === "post"
              ? "bg-teal-600 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          Post a Question
        </button>
        <button
          onClick={() => setActiveTab("reply")}
          className={`px-4 py-2 rounded ${
            activeTab === "reply"
              ? "bg-teal-600 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          View & Reply
        </button>
      </div>

      {/* Content */}
      {activeTab === "post" && (
        <div className="space-y-3 mt-4">
          <textarea
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            rows="3"
            placeholder="Type your question here..."
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-teal-400"
          />
          <button
            onClick={handlePostQuestion}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded"
          >
            Post Question
          </button>
        </div>
      )}

      {activeTab === "reply" && (
        <div className="space-y-4 mt-4">
          {loading ? (
            <p className="text-gray-500">Loading questions...</p>
          ) : questions.length === 0 ? (
            <p className="text-gray-500">No questions yet.</p>
          ) : (
            questions.map((q) => (
              <QuestionCard
                key={q._id}
                question={q}
                token={token}
                onReplyPosted={fetchQuestions}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}

function QuestionCard({ question, token, onReplyPosted }) {
  const [replyText, setReplyText] = useState("");
  const [replies, setReplies] = useState([]);
  const [showReplies, setShowReplies] = useState(false);
  const [loadingReplies, setLoadingReplies] = useState(false);

  const fetchReplies = async () => {
    try {
      setLoadingReplies(true);
      const res = await fetch(
        `http://localhost:5000/api/chat/replies/${question._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await res.json();
      setReplies(data);
      setShowReplies(true);
    } catch (err) {
      console.error("Failed to fetch replies", err);
    } finally {
      setLoadingReplies(false);
    }
  };

  const handleReply = async () => {
    if (!replyText.trim()) return;

    try {
      const res = await fetch("http://localhost:5000/api/chat/replies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          questionId: question._id,
          text: replyText,
        }),
      });
      if (res.ok) {
        setReplyText("");
        fetchReplies();
        onReplyPosted();
      } else {
        const data = await res.json();
        alert(data.message || "Error posting reply");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="border rounded p-4 shadow">
      <h2 className="text-teal-700 font-semibold mb-2">{question.text}</h2>

      <div className="mb-3">
        <button
          onClick={fetchReplies}
          className="text-sm text-teal-600 hover:underline"
        >
          {showReplies ? "Refresh Replies" : "Show Replies"}
        </button>
      </div>

      {showReplies && (
        <div className="space-y-1 mb-3">
          {loadingReplies ? (
            <p className="text-gray-500">Loading replies...</p>
          ) : replies.length === 0 ? (
            <p className="text-gray-500">No replies yet.</p>
          ) : (
            replies.map((r) => (
              <p
                key={r._id}
                className="text-gray-700 text-sm bg-gray-50 p-2 rounded"
              >
                <span className="font-semibold">{r.user.username}: </span>
                {r.text}
              </p>
            ))
          )}
        </div>
      )}

      <div className="flex gap-2">
        <input
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          type="text"
          placeholder="Write a reply..."
          className="flex-1 border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring focus:border-teal-400"
        />
        <button
          onClick={handleReply}
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-3 py-1 rounded"
        >
          Reply
        </button>
      </div>
    </div>
  );
}
