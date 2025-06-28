import Image from 'next/image';
import Link from 'next/link';

const NextJsBlog = () => {
  return (
    <div className="bg-black">
      <header className="bg-gray-800 text-white p-6">
        <nav className="flex justify-between items-center container mx-auto font-semibold">
          <Link href="/" className="text-3xl font-bold">
            BlogApp
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

      <div className='max-w-5xl mx-auto p-8 space-y-10 rounded-lg shadow-xl'>
        {/* Header Section */}
        <header className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">Next.js: The Future of React Development</h1>
          <p className="text-lg sm:text-xl text-white mt-8">A comprehensive guide to Next.js and why you should use it.</p>
        </header>

        {/*Image */}
        <div className="w-full flex justify-center">
          <Image 
            src="/images/nextpage.png" 
            width={900} 
            height={450} 
            alt="Next.js" 
            className="rounded-xl"
          />
        </div>

        {/* Introduction */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Introduction</h2>
          <p className="text-black mt-3 leading-relaxed">
            Next.js is a React framework that enables developers to build <strong>server-side rendered</strong> (SSR) and <strong>static web applications</strong> with ease.
            It comes with features like file-based routing, API routes, and automatic image optimization.
          </p>
        </section>

        {/* Key Features */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Key Features</h2>
          <ul className="list-disc list-inside mt-3 text-black space-y-3">
            <li><strong>File-based Routing</strong> - Pages are automatically created based on the file system.</li>
            <li><strong>API Routes</strong> - Create serverless API endpoints easily.</li>
            <li><strong>Static & Server Rendering</strong> - Choose between SSG, SSR, or ISR for each page.</li>
            <li><strong>Image Optimization</strong> - Optimize images automatically with next/image.</li>
            <li><strong>Fast Refresh</strong> - See changes instantly during development.</li>
          </ul>
        </section>

        {/* Why Use Next.js? */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Why Use Next.js?</h2>
          <p className="text-black mt-3 leading-relaxed">
            Next.js improves performance, enhances SEO, and provides a better developer experience compared to traditional React apps.
            It also supports <strong>TypeScript</strong>, <strong>CSS Modules</strong>, and <strong>API routes</strong>, making it ideal for modern web development.
          </p>
        </section>

        {/* Example Code */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Getting Started</h2>
          <p className="text-black mt-3">To create a Next.js app, run the following command:</p>
          <pre className="bg-black text-white p-4 rounded-lg mt-4 overflow-x-auto">
            npx create-next-app@latest my-next-app
          </pre>
        </section>
      </div>

      <footer className="bg-gray-900 text-white p-4 text-center">
        <p>&copy; 2025 BlogApp. All rights reserved by Isha Khan.</p>
      </footer>
    </div>
  );
};

export default NextJsBlog;
