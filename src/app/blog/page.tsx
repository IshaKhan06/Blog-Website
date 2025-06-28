import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-gray-800 text-white p-6">
        <nav className="flex flex-col sm:flex-row justify-between container mx-auto font-semibold">
          <Link href="/" className="text-3xl font-bold ">
            BlogApp
          </Link>
          <div className="space-x-4 mt-2">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <Link href="/blog" className="hover:text-gray-200">Blog</Link>
            <Link href="/about" className="hover:text-gray-200">About</Link>
            <Link href="/contact" className="hover:text-gray-200">Contact</Link>
          </div>
        </nav>
      </header>

      <div>
        {/* Hero Section */}
        <div className="relative w-full h-[500px] bg-cover bg-center flex items-center text-black">
          <div className="bg-black w-full h-full flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mt-20">The Blog</h1>
            <p className="text-xl sm:text-2xl mt-12 text-white">
              This blog provides insights, news, and trends about technology, software development, 
              programming languages, cybersecurity, and the latest innovations in the tech world. 
              Stay informed with expert advice and enhance your knowledge and skills in the ever-evolving IT industry.
            </p>
          </div>
        </div>

        {/* Featured Posts */}
        <section className="py-12 px-6 bg-black">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 mt-14 uppercase text-white">Recent Blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            <Link href="/blog/next">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image src="/images/next.jpeg" alt="Next.js Blog" width={500} height={300} className="w-full h-52 object-cover" />
                <div className="p-4">
                  <h3 className="text-black text-xl sm:text-2xl font-extrabold uppercase">Next.js</h3>
                  <p className="text-black mt-2">Next.js is a React framework for fast, optimized, and scalable web applications.</p>
                  <span className="text-black hover:underline block mt-4 font-semibold">Read More</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/python">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image src="/images/python.jpeg" alt="Python Blog" width={500} height={300} className="w-full h-52 object-cover" />
                <div className="p-4">
                  <h3 className="text-black text-xl sm:text-2xl font-extrabold uppercase">Python</h3>
                  <p className="text-black mt-2">Python is a versatile programming language for web, data, AI, and automation.</p>
                  <span className="text-black hover:underline block mt-4 font-semibold">Read More</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/AI">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image src="/images/ai.jpeg" alt="AI Blog" width={500} height={300} className="w-full h-52 object-cover" />
                <div className="p-4">
                  <h3 className="text-black text-xl sm:text-2xl font-extrabold uppercase">Artificial Intelligence</h3>
                  <p className="text-black mt-2">AI enables machines to learn, reason, and solve problems intelligently.</p>
                  <span className="text-black hover:underline block mt-4 font-semibold">Read More</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Latest Blogs */}
        <section className="py-12 px-6 bg-black">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 uppercase text-white">Featured Post</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image src="/images/html.jpeg" alt="HTML Blog" width={500} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-black text-xl sm:text-2xl font-extrabold uppercase">HTML</h3>
                <p className="text-black mt-2">HTML is the standard markup language for structuring web content.</p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image src="/images/css.jpeg" alt="CSS Blog" width={500} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-black text-xl sm:text-2xl font-extrabold uppercase">CSS</h3>
                <p className="text-black mt-2">CSS is a stylesheet used to layout, design, and appearance of web pages.</p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image src="/images/java.png" alt="JavaScript Blog" width={500} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-black text-xl sm:text-2xl font-extrabold uppercase">JavaScript</h3>
                <p className="text-black mt-2">Programming language for interactive web functionality.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-gray-900 text-white p-4 text-center">
        <p>&copy; 2025 BlogApp. All rights reserved by Isha Khan.</p>
      </footer>
    </div>
  );
};

export default Blog;
