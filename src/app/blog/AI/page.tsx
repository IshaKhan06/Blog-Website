import Image from 'next/image';
import Link from 'next/link';

const AIBlog = () => {
  return (
    <div className="bg-black">
      <header className="bg-gray-800 text-white p-6">
        <nav className="flex justify-between container mx-auto font-semibold">
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">Artificial Intelligence: Transforming the Future</h1>
          <p className="text-lg sm:text-xl text-white mt-8">A deep dive into AI, its capabilities, and future implications.</p>
        </header>

        {/* Hero Image */}
        <div className="w-full flex justify-center">
          <Image 
            src="/images/aipage.jpeg" 
            width={900} 
            height={450} 
            alt="Artificial Intelligence" 
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Introduction */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Introduction</h2>
          <p className="text-black mt-3 leading-relaxed">
            Artificial Intelligence (AI) is a branch of computer science focused on creating intelligent machines
            capable of performing tasks that typically require human intelligence, such as learning, reasoning, and problem-solving.
          </p>
        </section>

        {/* Key Features */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Key Features</h2>
          <ul className="list-disc list-inside mt-3 text-black space-y-3">
            <li><strong>Machine Learning</strong> - Algorithms that improve automatically through experience.</li>
            <li><strong>Natural Language Processing</strong> - Enables machines to understand and process human language.</li>
            <li><strong>Computer Vision</strong> - AI systems interpret and analyze images and videos.</li>
            <li><strong>Automation</strong> - AI enhances efficiency by automating repetitive tasks.</li>
            <li><strong>Deep Learning</strong> - Advanced neural networks that drive modern AI capabilities.</li>
          </ul>
        </section>

        {/* Why Use AI? */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Why Use AI?</h2>
          <p className="text-black mt-3 leading-relaxed">
            AI is transforming industries by improving decision-making, automating workflows, enhancing customer experiences,
            and driving innovations in healthcare, finance, and technology.
          </p>
        </section>

        {/* Example AI Applications */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">AI in Action</h2>
          <p className="text-black mt-3">Here are some real-world applications of AI:</p>
          <ul className="list-disc list-inside mt-3 text-black space-y-3">
            <li><strong>Virtual Assistants</strong> - AI-powered assistants like Siri, Alexa, and Google Assistant.</li>
            <li><strong>Healthcare</strong> - AI is used for diagnosing diseases and drug discovery.</li>
            <li><strong>Autonomous Vehicles</strong> - Self-driving cars rely on AI algorithms.</li>
            <li><strong>Fraud Detection</strong> - AI helps detect fraudulent transactions in banking.</li>
            <li><strong>Content Recommendation</strong> - AI suggests videos, articles, and products (e.g., Netflix, Amazon).</li>
          </ul>
        </section>
      </div>

      <footer className="bg-gray-900 text-white p-4 text-center">
        <p>&copy; 2025 Tech Blog. All rights reserved by Isha Khan.</p>
      </footer>
    </div>
  );
};

export default AIBlog;
