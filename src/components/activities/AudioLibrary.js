import { useState } from "react";

export default function AudioLibrary() {
  const audios = [
    {
      label: "Flute Music",
      src: "/audios/flute.mp3",
      description: "Gentle flute melodies to soothe your mind.",
    },
    {
      label: "Rain Sounds",
      src: "/audios/rain.wav",
      description: "Relaxing rain ambience for deep focus.",
    },
    {
      label: "Water Stream",
      src: "/audios/water.mp3",
      description: "Calm river sounds to ease anxiety.",
    },
    {
      label: "Soft Instrumental",
      src: "/audios/instrumental.mp3",
      description: "Peaceful instrumental background music.",
    },
  ];

  const [selectedAudio, setSelectedAudio] = useState(audios[0]);

  const handleChange = (e) => {
    const audio = audios.find((a) => a.label === e.target.value);
    setSelectedAudio(audio);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow space-y-4">
      <h1 className="text-2xl font-bold text-teal-700 mb-2">Audio Library 🎵</h1>
      <p className="text-gray-600">
        Select an audio track to relax or focus.
      </p>
      <select
        onChange={handleChange}
        value={selectedAudio.label}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-teal-400"
      >
        {audios.map((audio) => (
          <option key={audio.label}>{audio.label}</option>
        ))}
      </select>
      <audio controls className="w-full mt-4">
        <source src={selectedAudio.src} type="audio/mpeg" />
        Your browser does not support audio playback.
      </audio>
      <p className="text-gray-500">{selectedAudio.description}</p>
    </div>
  );
}
