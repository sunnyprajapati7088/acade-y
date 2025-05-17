import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const techData = [
  {
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description:
      "Build responsive, interactive websites and applications using modern front-end and back-end technologies.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Next.js"],
    projects: [
      {
        name: "Portfolio Website",
        tools: ["React", "Tailwind CSS"],
        description: "A personal site to showcase your projects and resume.",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      },
      {
        name: "Blog Platform",
        tools: ["Node.js", "Express", "MongoDB"],
        description: "Users can register, write posts, and comment in this full-stack app.",
        image: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      }
    ]
  },
  {
    category: "Programming Languages",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description:
      "Master core programming languages essential for software development, scripting, and algorithms.",
    technologies: ["Python", "C++", "Java", "JavaScript", "TypeScript"],
    projects: [
      {
        name: "Bank Management System",
        tools: ["C++"],
        description: "Console-based app to manage accounts and transactions.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      },
      {
        name: "Tic-Tac-Toe Game",
        tools: ["Java"],
        description: "Simple GUI game using Java Swing with 2-player mode.",
        image: "https://secure.img1-cg.wfcdn.com/im/10548956/compr-r85/1754/175459690/wood-tic-tac-toe-board-game.jpg"
      }
    ]
  },
  {
    category: "Robotics",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description:
      "Learn to build and program robots using microcontrollers and sensors.",
    technologies: ["Arduino", "Raspberry Pi", "C", "IR Sensor", "Ultrasonic Sensor", "Motor Driver IC"],
    projects: [
      {
        name: "Obstacle Avoiding Robot",
        tools: ["Arduino", "Ultrasonic Sensor"],
        description: "Robot avoids objects using distance sensing.",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      },
      {
        name: "Bluetooth Controlled Car",
        tools: ["HC-05", "Arduino UNO"],
        description: "Control your robot using a mobile phone.",
        image: "https://th.bing.com/th/id/OIP.VLM6R5Rnre48NChGSF1g8QHaHa?rs=1&pid=ImgDetMain"
      }
    ]
  },
  {
    category: "Artificial Intelligence",
    image: "https://th.bing.com/th/id/OIP.SHLfe1feMbWYK1kPRTWWHgHaEK?w=314&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description:
      "Explore AI concepts like machine learning, neural networks, and computer vision.",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "OpenCV", "Pandas", "Keras"],
    projects: [
      {
        name: "Digit Recognition",
        tools: ["TensorFlow", "MNIST Dataset"],
        description: "Neural network to classify handwritten digits.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      },
      {
        name: "AI Chatbot",
        tools: ["Python", "NLTK"],
        description: "Basic chatbot with text responses.",
        image: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      }
    ]
  }
];

const TechShowcase = () => {
  return (
    <div className="bg-gradient-to-br from-pink-100 via-white to-blue-100 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-pink-700 mb-12"
        >
          Explore Technology & Innovation
        </motion.h1>

        {techData.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="mb-12 bg-white border-2 border-pink-300 rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={section.image}
              alt={section.category}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">{section.category}</h2>
              <p className="text-gray-700 mb-4">{section.description}</p>
              <div className="mb-4">
                <h3 className="text-pink-600 font-medium">Technologies:</h3>
                <ul className="list-disc list-inside text-gray-800">
                  {section.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
              <h3 className="text-pink-600 font-medium mb-2">Sample Projects:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {section.projects.map((proj, j) => (
                  <div
                    key={j}
                    className="bg-pink-50 rounded-md shadow border border-pink-200 p-3"
                  >
                    <img
                      src={proj.image}
                      alt={proj.name}
                      className="w-full h-40 object-cover rounded-md mb-2"
                    />
                    <h4 className="font-semibold text-blue-700">{proj.name}</h4>
                    <p className="text-sm text-gray-700">{proj.description}</p>
                    <p className="text-xs text-pink-600 mt-1">Tools: {proj.tools.join(", ")}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Contact Buttons */}
        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://wa.me/917088663075"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full shadow flex items-center gap-2"
          >
            <MessageCircle size={18} /> WhatsApp
          </a>
          <a
            href="tel:7088663075"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow flex items-center gap-2"
          >
            <Phone size={18} /> Call
          </a>
        </div>
      </div>
    </div>
  );
};

export default TechShowcase;