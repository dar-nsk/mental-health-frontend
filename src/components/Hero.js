export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-white">
      <div className="max-w-lg">
        <h2 className="text-4xl font-bold text-teal-600 mb-4">Talk. Resolve. Heal.</h2>
        <p className="text-gray-700 text-lg mb-6">
          Online Counselling Therapy With Top Psychologists Anytime, Anywhere, Any device.
        </p>
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded">
          Get Started
        </button>
      </div>
      <div className="flex-shrink-0 w-full md:w-auto">
        <img
          src="/bg.webp"
          alt="Counselling session"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
