export default function About() {
  return (
    <main className="text-gray-800 bg-white">
      {/* About Heading */}
      <section className="flex flex-col justify-center items-center text-center py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-4">
          About
        </h2>
        <p className="text-base md:text-lg max-w-4xl">
          Welcome to Wisdom Wave, where we combine human empathy with AI technology to support your mental health journey.
          Our mission is to empower individuals to navigate their mental health challenges with compassion and understanding.
        </p>
      </section>

      {/* What We Offer */}
      <section className="max-w-6xl mx-auto py-12 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-4">
          What We Offer
        </h2>
        <p className="mb-8 text-lg">
          At Wisdom Wave, we are dedicated to providing accessible mental health support through a unique blend of human counseling and AI assistance.
          Our vision is a world where everyone has access to the help they need.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 shadow-md max-w-xs hover:scale-105 transform transition">
            <img src="/live.jpg" alt="Live Counseling" className="rounded w-full h-48 object-cover mb-4" />
            <p className="font-semibold">Live Counseling</p>
          </div>
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 shadow-md max-w-xs hover:scale-105 transform transition">
            <img src="/ai.jfif" alt="AI Assistance" className="rounded w-full h-48 object-cover mb-4" />
            <p className="font-semibold">AI Assistance</p>
          </div>
        </div>
      </section>

      {/* Meet Our Psychologist */}
      <section className="max-w-6xl mx-auto py-12 px-4 flex flex-col md:flex-row items-center gap-8">
        <img src="/download.jfif" alt="Dr. Pratibha Chandak" className="rounded-lg w-full md:w-1/3 object-cover" />
        <div className="text-left">
          <h3 className="text-2xl font-bold mb-2">Dr. Pratibha Chandak</h3>
          <p className="mb-2">M.A., M.Phil.</p>
          <p>
            Dr. Pratibha Chandak is a practicing psychologist with over 25 years of experience. Since 2021, she has been serving as a counselor at K K Wagh College of Engineering, Polytechnic, and Pharmacy, supporting more than 300 students and staff through challenging times. She conducts seminars on skill development, time management, mentoring, stress management, communication skills, CV writing, and mock interviews.
          </p>
        </div>
      </section>
    </main>
  );
}
