import img1 from "../../public/what we do/wwd1.jpg";
import img2 from "../../public/what we do/wwd2.jpg";
import img3 from "../../public/what we do/wwd3.jpg";
import img4 from "../../public/what we do/4.jpg";
import WhatWeDoCard from "./WhatWeDoCard";

const WhatWeDo = () => {
  const services = [
    {
      image: img1,
      title: "Pure Water & Foods",
      description:
        "The nearest district hospital from Rupen village is close to 105 km. The nearest maternal health clinic.",
    },
    {
      image: img2,
      title: "Build Home & Shelter",
      description:
        "The nearest district hospital from Rupen village is close to 105 km. The nearest maternal health clinic.",
    },
    {
      image: img3,
      title: "Make Donation & Education",
      description:
        "The nearest district hospital from Rupen village is close to 105 km. The nearest maternal health clinic.",
    },
    {
      image: img4,
      title: "Medical & Treatment",
      description:
        "The nearest district hospital from Rupen village is close to 105 km. The nearest maternal health clinic.",
    },
  ];
  return (
    <section className="py-10 sm:py-16 lg:py-24 text-secondary">
      <div className="container mx-auto">
        <h2 className="md:w-[70%] mx-auto text-center lg:text-[36px] text-[20px] font-bold ">
          We’ve Funded <span className="text-primary">120,00</span> Charity Projects For <span className="text-primary">20m+</span> People Around The World.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 mt-8 lg:mt-14">
          {services.map((service, id) => (
            <WhatWeDoCard key={id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
