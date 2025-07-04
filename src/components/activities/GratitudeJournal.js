import { useState } from "react";

export default function GratitudeJournal() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    if (!title.trim() || !content.trim()) return;

    const newNote = { id: Date.now(), title, content };
    setNotes([newNote, ...notes]);
    setTitle("");
    setContent("");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow space-y-6">
      <h1 className="text-2xl font-bold text-teal-700 mb-2">
        Gratitude Journal ✍️
      </h1>
      <p className="text-gray-600">
        Reflect on your day and write down what you feel grateful for.
      </p>

      {/* Create Note */}
      <div className="space-y-3">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note Title"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-teal-400"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="4"
          placeholder="Write your thoughts..."
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-teal-400"
        />
        <button
          onClick={handleSave}
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded"
        >
          Save Note
        </button>
      </div>

      {/* List of Saved Notes */}
      {notes.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-teal-700">Your Notes</h2>
          {notes.map((note) => (
            <div
              key={note.id}
              className="border rounded p-3 shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-teal-700">
                {note.title}
              </h3>
              <p className="text-gray-600 whitespace-pre-line">{note.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
