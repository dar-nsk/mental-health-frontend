export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto my-12 px-4 bg-white bg-opacity-90 rounded-lg shadow-md">
      <h1 className="text-3xl md:text-4xl font-bold text-teal-600 mb-6 text-center">Contact Us</h1>

      {/* Contact Info */}
      <div className="mb-6 text-center">
        <p className="text-lg"><strong>Email:</strong> your-email@example.com</p>
        <p className="text-lg"><strong>Phone:</strong> (123) 456-7890</p>
        <p className="text-lg"><strong>Office Hours:</strong> Monday to Friday, 9 AM - 5 PM</p>
      </div>

      {/* Form */}
      <form className="grid gap-4">
        <input
          type="text"
          placeholder="Name"
          required
          className="p-3 border-2 border-green-500 rounded w-full focus:outline-none focus:border-green-700"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="p-3 border-2 border-green-500 rounded w-full focus:outline-none focus:border-green-700"
        />
        <input
          type="text"
          placeholder="Subject"
          required
          className="p-3 border-2 border-green-500 rounded w-full focus:outline-none focus:border-green-700"
        />
        <textarea
          placeholder="Message"
          rows="5"
          required
          className="p-3 border-2 border-green-500 rounded w-full focus:outline-none focus:border-green-700"
        />
        <button
          type="submit"
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded"
        >
          Submit
        </button>
      </form>

      <p className="mt-6 text-center">Feel free to reach out to us with any questions or feedback!</p>

      {/* Social Media */}
      <div className="mt-6 text-center">
        <p className="text-lg mb-2">Connect with us on social media:</p>
        <div className="flex justify-center gap-4">
          <a href="#" className="text-teal-600 font-bold hover:underline">Facebook</a>
          <a href="#" className="text-teal-600 font-bold hover:underline">Twitter</a>
          <a href="#" className="text-teal-600 font-bold hover:underline">Instagram</a>
        </div>
      </div>
    </main>
  );
}
