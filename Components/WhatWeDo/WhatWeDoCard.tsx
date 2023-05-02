import Image, { StaticImageData } from "next/image";

interface Props {
  service: {
    image: StaticImageData;
    title: string;
    description: string;
  };
}

const WhatWeDoCard = ({ service }: Props) => {
  return (
    <div className="card card-compact border pb-3 transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200" data-aos="fade-down"
      data-aos-duration="3000">
      <div className="">
        <div className="">
          <Image src={service.image} alt="Service" className="rounded-t-2xl w-full h-60" />
        </div>
      </div>
      <div className="card-body">
        <h2 className="text-[20px] text-secondary mx-auto font-semibold">{service.title}</h2>
        <p className="text-center">{service.description}</p>
      </div>
    </div>
  );
};

export default WhatWeDoCard;
