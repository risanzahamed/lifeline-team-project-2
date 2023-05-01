import Slider from "react-slick";
import img1 from "../../public/testimonials/review1.jpg";
import img2 from "../../public/testimonials/review2.jpg";
import img3 from "../../public/testimonials/review3.jpg";
import img4 from "../../public/testimonials/review5.png";
import img5 from "../../public/testimonials/review6.png";
import img6 from "../../public/testimonials/review7.png";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 15000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  const reviews = [
    {
      image: img1,
      name: "Sam Barman",
      title: "Donator",
      review:
        "I donated to this NGO and saw the impact of my contribution immediately. It's amazing to see how far a small donation can go.",
    },
    {
      image: img2,
      name: "Jenny Wilson",
      title: "Donator",
      review:
        "I support this NGO because I believe in their mission and the work they do. They are making a difference in the world.",
    },
    {
      image: img3,
      name: "Suman Barman",
      title: "Donator",
      review:
        "I donate to this NGO regularly because I trust them to use my contribution wisely and make a real impact in the communities they serve.",
    },
    {
      image: img4,
      name: "Jack Parow ",
      title: "Donator",
      review:
        "I donated to this NGO and was impressed by their level of transparency and accountability. They keep their donors informed every step of the way.",
    },
    {
      image: img5,
      name: "Johnny Deep",
      title: "Donator",
      review:
        "I support this NGO because I know that every dollar I donate goes directly to those in need. It's a great feeling to know that my contribution is making a real difference.",
    },
    {
      image: img6,
      name: "Will Wilson",
      title: "Donator",
      review:
        "I donate to this NGO because they work towards sustainable solutions that empower the communities they serve. I believe in their approach and the positive impact it has",
    },
  ];

  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="container mx-auto">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold leading-tight text-secondary">
              Our Donors Reviews
            </h2>
          </div>
          <div className="text-center lg:max-w-full mt-8 lg:mt-14">
            <Slider {...settings}>
              {reviews.map((review, idx) => (
                <TestimonialCard key={idx} review={review} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
