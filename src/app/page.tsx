import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-gray-800 text-white p-6">
        <nav className="flex flex-col sm:flex-row justify-between container mx-auto font-semibold">
          <Link href="/" className="text-3xl font-bold mb-2 sm:mb-0">
           Tech Blog
          </Link>
          <div className="sm:space-y-0 sm:space-x-4 sm:flex sm:items-center flex gap-4">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <Link href="/blog" className="hover:text-gray-200">Blog</Link>
            <Link href="/about" className="hover:text-gray-200">About</Link>
            <Link href="/contact" className="hover:text-gray-200">Contact</Link>
            <div className="w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-gray-400 w-full sm:w-auto"
              />
            </div>
          </div>
        </nav>
      </header>

      <div>
        {/* Hero Section */}
        <div className="relative w-full h-[600px] bg-cover bg-center flex items-center text-black" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
          <div className="bg-black w-full h-full flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl sm:text-7xl font-semibold uppercase text-white">Welcome to Tech Blog</h1>
            <p className="text-lg sm:text-2xl mt-6 sm:mt-12 text-white">Your daily dose of knowledge and inspiration</p>
            <Link href="/blog">
              <button className="mt-12 sm:mt-24 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg text-lg">
                Explore Blogs
              </button>
            </Link>
          </div>
        </div>

        <footer className="bg-gray-900 text-white p-4 text-center">
          <p>&copy; 2025 Tech Blog. All rights reserved by Isha Khan.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
