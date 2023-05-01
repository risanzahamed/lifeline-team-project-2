import Image, { StaticImageData } from "next/image";

interface Props {
  news: {
    image: StaticImageData;
    category: string;
    heading: string;
    details: string;
    date: string;
    writer: string;
  };
}

const NewsCard = ({ news }: Props) => {
  const { image, category, heading, details, date, writer } = news;
  return (
    <div className="transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200 shadow-lg rounded-2xl">
      <a href="#" title="" className="block aspect-w-4 aspect-h-3">
        <Image
          className="object-cover w-full rounded-t-2xl"
          src={image}
          alt=""
        />
      </a>
      <div className="relative px-5 pb-5">
        <h3 className="absolute top-[-40px] left-10 px-6 py-3 font-semibold tracking-widest uppercase bg-primary text-white mt-5 rounded">
          {category}
        </h3>
        <p className="pt-10 text-sm font-bold tracking-widest text-gray-500 uppercase ">
          {writer} | <span> {date}</span>
        </p>
        <p className="mt-6 text-xl font-semibold">
          <a href="#" title="" className="text-black">
            {heading}
          </a>
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
