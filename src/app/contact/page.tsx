"use client";
import Link from "next/link";
import { useState } from "react";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  // input states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // popup show
    setShowPopup(true);

    // ✅ clear fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <header className="bg-gray-800 text-white p-6">
        <nav className="flex flex-col sm:flex-row justify-between container mx-auto font-semibold">
          <Link href="/" className="text-3xl font-bold mb-2 sm:mb-0">
         Tech Blog
          </Link>
          <div className="sm:space-y-0 sm:space-x-4 sm:flex sm:items-center space-x-4">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <Link href="/blog" className="hover:text-gray-200">Blog</Link>
            <Link href="/about" className="hover:text-gray-200">About</Link>
            <Link href="/contact" className="hover:text-gray-200">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative w-full h-[400px] bg-cover bg-center flex items-center text-black">
        <div className="bg-black bg-opacity-30 w-full h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mt-24 sm:mt-48">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mt-8 max-w-2xl text-white mx-4">
            Have questions? Feel free to reach out to us anytime! <br />
            Simply fill out the form below or email us directly.
          </p>
        </div>
      </div>

      {/* Contact Form & Details */}
      <section className="py-12 px-6 sm:px-12 max-w-3xl mx-auto">
        {/* Contact Form */}
        <div className="bg-white bg-opacity-5 shadow-lg rounded-lg p-6 mt-12 sm:mt-28">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-white uppercase">
            Send Us a Message
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block font-medium mb-1 text-white">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-white">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-white">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Popup Modal */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
              <h2 className="text-xl font-bold mb-4 text-black">Thank You!</h2>
              <p className="mb-6 text-black">
                Your message has been received.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Contact Information */}
        <div className="bg-white bg-opacity-5 shadow-lg rounded-lg p-6 mt-14 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-white uppercase">
            Contact Details
          </h2>
          <div className="space-y-4 text-center">
            <p className="text-white">
              📍 <strong>Address:</strong> 123 Blog Street, Pakistan.
            </p>
            <p className="text-white">
              📞 <strong>Phone:</strong> +92 (0317) 1234567
            </p>
            <p className="text-white">
              ✉️ <strong>Email:</strong> ishakhan@gmail.com
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white p-4 text-center">
        <p>&copy; 2025 Tech Blog. All rights reserved by Isha Khan.</p>
      </footer>
    </div>
  );
};

export default Contact;
