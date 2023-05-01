import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import company1 from "../../public/companies/conpany1.png";
import company2 from "../../public/companies/conpany2.png";
import company3 from "../../public/companies/conpany3.png";
import company4 from "../../public/companies/conpany4.png";
import company5 from "../../public/companies/conpany5.png";
import company6 from "../../public/companies/conpany6.png";
import CompanyCard from "./CompanyCard";

const Companies = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const images = [
    company1,
    company2,
    company3,
    company4,
    company5,
    company6,
    company3,
  ];
  return (
    <section className="container mx-auto py-10 lg:py-20">
      <Slider {...settings}>
        {images.map((image, idx) => (
          <CompanyCard key={idx} image={image} />
        ))}
      </Slider>
    </section>
  );
};

export default Companies;
