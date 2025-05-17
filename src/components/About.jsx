import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 px-6 py-12 text-gray-800">
      {/* Tech Showcase by Er. Sunny Prajapati */}
      <div className="mt-16 max-w-4xl mx-auto bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">
         Er. Sunny Prajapati
        </h2>
        <p className="text-gray-700 mb-4 text-center">
          Dive into a modern tech stack designed to equip students with 21st-century skills.
          Explore Web Development, Programming, Robotics, and Artificial Intelligence through hands-on projects and expert guidance.
        </p>
        <Link to="/codeStart" className="block text-center text-pink-700 font-medium hover:underline">
          Visit our Technology Section to learn more!
        </Link>
      </div>

      <div className="mt-12 max-w-4xl mx-auto bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-pink-700 mb-6">
          About Tuition Wala
        </h1>

        <p className="text-lg mb-6 leading-relaxed">
          At <span className="font-semibold text-blue-700">Tuition Wala</span>, we believe education is the foundation for a brighter future. Located at <span className="font-medium">British Academy, Near Gurudwara, Seohara</span>, we provide top-quality coaching for students from <strong>Class 1st to 12th (UP Board & CBSE)</strong>, along with competitive exam prep and skill-based learning.
        </p>

        <p className="mb-4 font-semibold text-blue-700">Our special batches include:</p>
        <ul className="list-disc pl-6 mb-6 text-blue-700 font-medium">
          <li>NEET & JEE Preparation</li>
          <li>English Speaking Courses</li>
          <li>Computer Courses</li>
        </ul>

        <p className="mb-6 font-medium">With a team of passionate, experienced educators and subject experts, we provide:</p>
        <ul className="pl-6 mb-6 space-y-2 text-gray-700">
          <li>✔️ Expert faculty for all major subjects</li>
          <li>✔️ Weekly tests & monthly PTMs</li>
          <li>✔️ Free demo classes</li>
          <li>✔️ Personal doubt-clearing sessions</li>
        </ul>

        <p className="text-lg font-medium text-center text-pink-600 italic">
          “We don’t just teach, we build futures.”
        </p>
      </div>
    </div>
  );
};

export default About;
