import Image from 'next/image';
import Link from 'next/link';

const PythonBlog = () => {
  return (
    <div className="bg-black">
      <header className="bg-gray-700 text-white p-6">
        <nav className="flex justify-between items-center container mx-auto font-semibold">
          <Link href="/" className="text-3xl font-bold">
            Tech Blog
          </Link>
          <div className="space-x-4">
            <Link href="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link href="/blog" className="hover:text-gray-200">
              Blog
            </Link>
            <Link href="/about" className="hover:text-gray-200">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-200">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <div className="max-w-5xl mx-auto p-8 space-y-10 rounded-lg shadow-xl">
        {/* Header Section */}
        <header className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Python: The Versatile Programming Language
          </h1>
          <p className="text-lg sm:text-xl text-white mt-8">
            A deep dive into Python and its powerful capabilities.
          </p>
        </header>

        {/* Hero Image */}
        <div className="w-full flex justify-center">
          <Image
            src="/images/pythonpage.jpg"
            width={900}
            height={450}
            alt="Python"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Introduction */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Introduction</h2>
          <p className="text-black mt-3 leading-relaxed">
            Python is a high-level, interpreted programming language known for its simplicity and readability.
            It is widely used for web development, data science, artificial intelligence, automation, and more.
          </p>
        </section>

        {/* Key Features */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Key Features</h2>
          <ul className="list-disc list-inside mt-3 text-black space-y-3">
            <li><strong>Easy to Learn</strong> - Simple and readable syntax.</li>
            <li><strong>Versatile</strong> - Used in web, AI, data science, automation, and more.</li>
            <li><strong>Large Community</strong> - Extensive support and libraries.</li>
            <li><strong>Cross-platform</strong> - Works on Windows, macOS, and Linux.</li>
            <li><strong>Robust Libraries</strong> - Supports NumPy, TensorFlow, Django, and more.</li>
          </ul>
        </section>

        {/* Why Use Python? */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Why Use Python?</h2>
          <p className="text-black mt-3 leading-relaxed">
            Python&rsquo;s simplicity and efficiency make it a favorite among developers.
            Its wide range of applications, strong community support, and extensive libraries make it an essential tool in programming.
          </p>
        </section>

        {/* Example Code */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Getting Started</h2>
          <p className="text-black mt-3">To install Python, run the following command:</p>
          <pre className="bg-black text-white p-4 rounded-lg mt-4 overflow-x-auto">
            python --version
          </pre>
          <p className="text-black mt-3">To write your first Python program, use:</p>
          <pre className="bg-black text-white p-4 rounded-lg mt-4 overflow-x-auto">
            print(&ldquo;Hello, World!&rdquo;)
          </pre>
        </section>
      </div>

      <footer className="bg-gray-900 text-white p-4 text-center">
        <p>&copy; 2025 Tech Blog. All rights reserved by Isha Khan.</p>
      </footer>
    </div>
  );
};

export default PythonBlog;
