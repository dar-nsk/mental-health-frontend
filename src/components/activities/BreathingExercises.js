export default function BreathingExercises() {
  const exercises = [
    {
      id: 1,
      title: "Box Breathing",
      description: "A technique to reduce stress and regain focus.",
      steps: [
        "Inhale slowly for 4 counts.",
        "Hold your breath for 4 counts.",
        "Exhale slowly for 4 counts.",
        "Hold your breath again for 4 counts.",
        "Repeat for 5 cycles.",
      ],
    },
    {
      id: 2,
      title: "4-7-8 Breathing",
      description: "Calm your mind before sleep or during anxiety.",
      steps: [
        "Inhale quietly through your nose for 4 counts.",
        "Hold your breath for 7 counts.",
        "Exhale completely through your mouth for 8 counts.",
        "Repeat for 4 cycles.",
      ],
    },
    {
      id: 3,
      title: "Alternate Nostril Breathing",
      description: "Balance and relax your nervous system.",
      steps: [
        "Close your right nostril and inhale through your left.",
        "Close your left nostril and exhale through your right.",
        "Inhale through your right nostril.",
        "Close your right nostril and exhale through your left.",
        "Repeat for 5 cycles.",
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow space-y-6">
      <h1 className="text-2xl font-bold text-teal-700 mb-2">
        Breathing Exercises 🌬️
      </h1>
      <p className="text-gray-600 mb-4">
        Try these simple exercises to feel calm and centered.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {exercises.map((exercise) => (
          <div
            key={exercise.id}
            className="border rounded p-4 shadow hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold text-teal-700">
              {exercise.title}
            </h2>
            <p className="text-gray-600 mb-2">{exercise.description}</p>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              {exercise.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
