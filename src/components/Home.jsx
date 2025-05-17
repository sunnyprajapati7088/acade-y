import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { center } from "@cloudinary/transformation-builder-sdk/qualifiers/textAlignment";

// Carousel Data
const carouselData = {
  carouselItems: [
    {
      image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1747153908/british_acadmy_bg9hgl.jpg",
      alt: "British"
    },
    {
      image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1747153974/british_acadmy1_e8xvyg.jpg",
      alt: "British"
    },
    {
      image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1747153908/british_acadmy_bg9hgl.jpg",
      alt: "British"
    }
  ],
  welcomeText: "Welcome to the British Academy Home Page!"
};

const coachingCenters = [
  {
    center: "British Kidz - A Play School",
    route: "/britishKidz"
  },
  {
    center: "Tuition Wala - British Academy",
    route: "/tuitionWala"
  }
  ,{
    center: "CodeStart: AI & Robots for Kids",
    route: "/codeStart"
  }
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false
  };

  return (
    <div className="w-full bg-gradient-to-b from-pink-100 to-blue-100 min-h-screen px-4 py-8 font-sans">
      <div className="w-full max-w-screen-xl mx-auto">
        {/* Carousel Section */}
        <Slider {...settings}>
          {carouselData.carouselItems.map((item, index) => (
            <div key={index} className="relative w-full overflow-hidden rounded-xl shadow-xl">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-[300px] sm:h-[450px] rounded-xl"
              />
            </div>
          ))}
        </Slider>

        {/* Welcome Text */}
        <div className="mt-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-pink-700">{carouselData.welcomeText}</h1>
          <p className="text-lg text-blue-700 mt-2">Empowering Education from Playgroup to Academics</p>
        </div>

        {/* Coaching Centers */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-8 underline underline-offset-4">
            Explore Our Centers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
            {coachingCenters.map((center, index) => (
              <Link
                to={center.route}
                key={index}
                className="bg-gradient-to-br from-pink-400 to-blue-400 text-white rounded-2xl p-6 text-center text-xl font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                {center.center}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
