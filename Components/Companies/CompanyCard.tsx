import Image, { StaticImageData } from "next/image";

interface Props {
  image: StaticImageData;
}

const CompanyCard = ({ image }: Props) => {
  return (
    <div>
      <Image src={image} alt="company_name" className="mx-auto" />
    </div>
  );
};

export default CompanyCard;
