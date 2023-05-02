
import { StaticImageData } from "next/image";
import { FaFacebook, FaPhone, FaWhatsapp } from "react-icons/fa";

interface Props {
    vulenter: {
        img: string;
        name: string;
        position: string;
    };
}

const VulenteerDetails = ({ vulenter }: Props) => {
    const { img, name, position } = vulenter;

    return (
        <div>
            <div >
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="w-full h-[450px]">
                        <img className="h-full w-full object-cover transition-transform duration-500  group-hover:scale-125" src={img} alt="" />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[46%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 lg:">
                        <h1 className="font-dmserif text-2xl font-bold text-white">{name}</h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{position}</p>
                        <div className="flex justify-center">
                            <FaFacebook className="w-6 h-6 text-white mx-2" />
                            <FaWhatsapp className="w-6 h-6 text-white mx-2" />
                            <FaPhone className="w-6 h-6 text-white mx-2" />
                        </div>


                    </div>
                </div>


            </div>


        </div>


    );
};

export default VulenteerDetails;
{/* classNameName="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-75 rounded-full" */ }