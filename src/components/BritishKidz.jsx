import React from "react";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const data = {
  welcomeText: "Welcome to British Kidz - A Play School",
  contact: {
    address: "Near Nagar Palika, Thakurdwara Road, Teachers Colony, Seohara",
    phone: "8899429888",
  },
  carouselItems: [
    {
      image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1747162459/kidz1_rmmeag.jpg",
      alt: "Playful Learning at British Kidz",
    },
    {
      image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1747162460/kidz4_kkkhvk.jpg",
      alt: "Fun and Educational Environment",
    },
    {
      image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1747162459/kidz3_vjet4f.jpg",
      alt: "Creative Activities for Kids",
    },
  ],
  coachingCenters: ["Play Group", "Nursery", "L.K.G.", "U.K.G.", "Day Care", "Evening Tuition"],
  features: [
    "Play way methods",
    "Modern scientific teaching aids",
    "Up-to-date resources and equipment",
    "Audio-visual learning system",
    "Motor skills & personality development",
    "Vibrant and fun classrooms",
    "Etiquette and manners",
    "Advanced modern & traditional learning",
    "Field excursions and picnics",
    "Project-based live learning",
    "School van & full-covered rickshaw",
    "Workshops on projects",
    "Parent participation programs",
  ],
  facilities: [
    "Safe & Loving Day Care",
    "Activity-Based Learning",
    "Homework & Tuition Support",
    "Rhymes, Stories & Games",
    "Personal Attention to Every Child",
  ],
  parentTrust: [
    "Trained & Caring Teachers",
    "Clean & Child-Friendly Environment",
    "Daily Learning + Fun Activities",
    "Focus on Discipline & Morals",
  ],
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const BritishKidz = () => {
  return (
    <div className="bg-gradient-to-b from-pink-100 to-blue-100 min-h-screen px-4 py-8 font-sans">
      {/* Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center mb-6"
      >
        <h1 className="text-4xl font-bold text-pink-700">{data.welcomeText}</h1>
        <p className="text-lg text-blue-700 mt-2">Admissions Open - Play Group to UKG</p>
      </motion.div>

      {/* Carousel */}
      <div className="max-w-5xl mx-auto mb-12 rounded-3xl shadow-2xl overflow-hidden">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          interval={3000}
          transitionTime={600}
          swipeable
          emulateTouch
        >
          {data.carouselItems.map((item, idx) => (
            <div key={idx} className="relative">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-[300px] sm:h-[450px] md:h-[500px] rounded-none"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-6 text-white text-lg sm:text-xl font-semibold">
                {item.alt}
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Coaching Centers */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center text-2xl font-semibold text-blue-800 mb-6"
      >
        Programs We Offer
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
        {data.coachingCenters.map((center, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx}
            className="bg-white rounded-xl shadow p-4 text-center text-pink-600 font-semibold border-2 border-transparent hover:border-pink-400 hover:bg-pink-50 transition-all duration-300"
          >
            {center}
          </motion.div>
        ))}
      </div>

      {/* Features */}
      <motion.h2
        className="text-center text-2xl font-semibold text-pink-700 mb-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Features
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-10">
        {data.features.map((item, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx}
            className="bg-white shadow-md p-4 rounded-xl text-blue-800 hover:scale-105 transition-transform duration-300 border-l-4 border-pink-400"
          >
            {item}
          </motion.div>
        ))}
      </div>

      {/* Facilities & Trust */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-xl p-6 shadow hover:shadow-xl transition-all border border-blue-300"
        >
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Facilities</h2>
          <ul className="list-disc list-inside text-pink-700 space-y-1">
            {data.facilities.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-xl p-6 shadow hover:shadow-xl transition-all border border-pink-300"
        >
          <h2 className="text-xl font-semibold text-pink-700 mb-2">Why Parents Trust Us</h2>
          <ul className="list-disc list-inside text-blue-700 space-y-1">
            {data.parentTrust.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Contact Info */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center text-lg font-semibold text-blue-900 mt-10"
      >
        📍 {data.contact.address} <br />
        📞 <span className="text-pink-700">{data.contact.phone}</span>
      </motion.div>
    </div>
  );
};

export default BritishKidz;
