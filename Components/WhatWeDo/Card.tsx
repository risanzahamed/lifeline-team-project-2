import { StaticImageData } from "next/image";

interface Props {
  service: {
    image: StaticImageData;
    title: string;
    description: string;
  };
}

const Card = ({ service }: Props) => {
  const { image, title, description } = service;

  return (
    <div
      className="hero h-[300px] transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200 rounded-2xl"
      style={{
        backgroundImage: `url(${JSON.stringify(image.src)})`,
      }}
    >
      <div className="hero-overlay bg-[#46454484] rounded-2xl"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <p className="mb-5 text-2xl font-bold text-white">{service.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
