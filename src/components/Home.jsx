import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  welcomeText: "Welcome to the Home Page!"
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
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false
  };

  return (
    <div className="w-full px-4 py-6 flex justify-center">
      <div className="w-full max-w-screen-xl">
        {/* Responsive Carousel Section */}
        <Slider {...settings}>
          {carouselData.carouselItems.map((item, index) => (
            <div key={index} className="relative w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-auto rounded-xl"
              />
            </div>
          ))}
        </Slider>

        {/* Welcome Text */}
        <div className="mt-8 text-center text-2xl sm:text-3xl font-bold text-pink-600">
          {carouselData.welcomeText}
        </div>

        {/* Coaching Centers */}
        <section className="mt-12">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-blue-600 mb-8">
            Coaching Centers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
            {coachingCenters.map((center, index) => (
              <Link
                to={center.route}
                key={index}
                className="bg-gradient-to-br from-pink-400 to-blue-400 text-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
              >
                <h3 className="text-lg sm:text-xl font-semibold">
                  {center.center}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
