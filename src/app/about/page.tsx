"use client";

import { useState } from "react";
import Link from "next/link";

const About = () => {
  // comments ab string[] nahi balki object[] hoga
  const [comments, setComments] = useState<{ name: string; text: string }[]>([]);
  const [comment, setComment] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [name, setName] = useState(""); 

  const handlePostComment = () => {
    if (comment.trim()) {
      // add new comment object
      setComments([...comments, { name: name || "Anonymous", text: comment }]);

      // clear input fields
      setComment(""); 
      setName("");  

      setShowComments(true); 
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Header */}
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
      <div
        className="relative w-full h-[400px] sm:h-[500px] bg-cover bg-center flex items-center text-white"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="bg-black w-full h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl sm:text-7xl font-bold text-white mt-24 sm:mt-48">About Us</h1>
          <p className="text-lg sm:text-2xl mt-6 sm:mt-12 max-w-4xl text-white">
            Welcome to Tech Blog, your go-to source for insightful articles, trends, and stories.
            Our mission is to provide engaging and informative content across various topics,
            helping readers stay updated and inspired.
          </p>
        </div>
      </div>

      {/* Comment Section */}
      <div className="container mx-auto p-6 max-w-xl bg-white bg-opacity-5 mt-12 sm:mt-24 rounded-md">
        <h2 className="text-4xl mb-12 mt-4 text-center text-white uppercase font-semibold">Comments</h2>

        {/* Enter Your Name */}
        <div className="mb-4">
          <textarea
            value={name}
            onChange={(e) => setName(e.target.value)}
            rows={1}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-black"
            placeholder="Enter your name..."
          />
        </div>

        {/* Comment Textarea */}
        <div className="mb-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-black"
            placeholder="Write a comment..."
          />
          <button
            className="mt-6 px-4 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 w-full sm:w-auto lg:w-full"
            onClick={handlePostComment}
          >
            Post Comment
          </button>
        </div>

        {/* Conditional comment section */}
        {showComments && (
          <div className="space-y-2 bg-gray-100 p-4 rounded-md shadow-md text-black">
            {comments.map((cmt, index) => (
              <div key={index} className="bg-white p-2 rounded-md shadow mb-2">
                <p className="font-bold">{cmt.name}</p>
                <p>{cmt.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-4 text-center mt-12 sm:mt-24">
        <p>&copy; 2025 Tech Blog. All rights reserved by Isha Khan.</p>
      </footer>
    </div>
  );
};

export default About;
