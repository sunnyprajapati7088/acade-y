import React from "react";
import { motion } from "framer-motion";

const data = {
  institute: "Tuition Wala",
  tagline: "All Subject Under One Roof",
  location: "British Academy Near Gurudwara, Seohara",
  contact: "8899429888",
  classes: "1st to 12th (U.P. Board & CBSE)",
  specialBatches: ["NEET", "JEE", "English Speaking", "Computer Courses"],
  subjects: ["Maths", "Physics", "Chemistry", "Biology", "Commerce", "English"],
  keyFeatures: [
    "Expert Faculty For All Subjects",
    "Free Demo Class",
    "Weekly Tests & Monthly PTM",
    "Individual Attention & Doubt Session"
  ],
  timing: {
    morning: "7:00 am to 1:00 pm",
    evening: "2:00 pm to 8:00 pm"
  },
  teachers: [
    {
      name: "Shanu Shaikh",
      designation: "Managing Director",
      qualifications:
        "Language Trainer & Motivational Speaker, MBA(HR), M.A. (English), LLB",
      image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1747165562/Screenshot_2025-05-14_011527_tryktl.png"
    },
    {
      name: "Noman Ur Rehman",
      qualifications: "M.Sc (Maths), JAMIA, B.Ed, CTET QUALIFIED",
      image: "/images/noman.jpg"
    },
    {
      name: "Tr. Ankur Kumar",
      qualifications: "B.Ed, M.Sc (Physics), CTET QUALIFIED",
      image: "/images/ankur.jpg"
    },
    {
      name: "Tabassum",
      qualifications: "M.Sc (Chemistry), B.Ed, TET, CTET QUALIFIED",
      image: "/images/tabassum.jpg"
    },
    {
      name: "Aliya Parveen",
      designation: "PGT (Biology)",
      qualifications: "M.Sc (Zoology), B.Ed, CTET, M.Phil",
      image: "/images/aliya.jpg"
    }
  ]
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const TeacherCard = ({ teacher }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.05 }}
    className="bg-white/30 backdrop-blur-md border border-white/40 p-5 rounded-xl text-center shadow-xl hover:shadow-pink-300 transition-all duration-300"
  >
    <img
      src={teacher.image}
      alt={teacher.name}
      className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-pink-300"
    />
    <h3 className="mt-3 font-bold text-lg text-pink-700">{teacher.name}</h3>
    {teacher.designation && (
      <p className="text-sm text-blue-600">{teacher.designation}</p>
    )}
    <p className="text-xs text-gray-700 mt-1">{teacher.qualifications}</p>
  </motion.div>
);

const TuitionBala = () => {
  return (
    <div className="bg-gradient-to-br from-pink-100 via-white to-blue-100 min-h-screen py-12 px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="max-w-6xl mx-auto"
      >
        {/* HEADER */}
        <motion.div
          variants={fadeInUp}
          className="text-center mb-10"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
            {data.institute}
          </h1>
          <p className="text-pink-600 italic">{data.tagline}</p>
          <p className="text-gray-600 text-sm mt-1">
            {data.location} | M. {data.contact}
          </p>
        </motion.div>

        {/* TUITION BALANCE */}
        {/* <motion.div
          variants={fadeInUp}
          className="max-w-md mx-auto bg-white/30 backdrop-blur-md p-6 rounded-xl text-center shadow-lg mb-10"
        >
          <h2 className="text-2xl font-semibold text-blue-700">Tuition Balance</h2>
          <p className="text-gray-600 mt-1">Your current tuition balance is:</p>
          <div className="text-3xl font-bold text-green-600 mt-2">$1,500.00</div>
        </motion.div> */}

        {/* CLASSES & BATCHES */}
        <motion.div variants={fadeInUp} className="text-center mb-6">
          <h2 className="text-xl font-semibold text-pink-700">Classes Offered</h2>
          <p>{data.classes}</p>
          <p className="mt-2 text-sm">
            <strong className="text-blue-600">Special Batches:</strong> {data.specialBatches.join(", ")}
          </p>
        </motion.div>

        {/* SUBJECT TAGS */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {data.subjects.map((subject, idx) => (
            <span
              key={idx}
              className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm shadow-md"
            >
              {subject}
            </span>
          ))}
        </motion.div>

        {/* KEY FEATURES */}
        <motion.div variants={fadeInUp} className="mb-10 text-center">
          <h2 className="text-xl font-semibold text-pink-700 mb-2">Key Features</h2>
          <ul className="inline-block text-left text-gray-700 list-disc list-inside space-y-1">
            {data.keyFeatures.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </motion.div>

        {/* TIMINGS */}
        <motion.div variants={fadeInUp} className="text-center mb-10">
          <h2 className="text-xl font-semibold text-pink-700">Timings</h2>
          <p>
            <strong>Morning Batch:</strong> {data.timing.morning}
          </p>
          <p>
            <strong>Evening Batch:</strong> {data.timing.evening}
          </p>
        </motion.div>

        {/* TEACHERS */}
        <motion.div variants={fadeInUp}>
          <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">
            Our Qualified Teachers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.teachers.map((teacher, idx) => (
              <TeacherCard key={idx} teacher={teacher} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TuitionBala;
