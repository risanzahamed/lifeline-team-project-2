import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MoneyGoes = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2500,
        cssEase: "linear"
    };
    return (
        <div>
            <h2 className="text-[24px] lg:text-[36px] font-bold text-center lg:text-3xl lg:mt-24 mt-10 mb-10">Some of our latest <br /> <span className="text-primary">work visuals</span></h2>
            <Slider className="mt-4" {...settings}>
                <div>
                    <img src="/none.png" alt="" />
                </div>
                <div>
                    <img src="/ntwo.png" alt="" />
                </div>
                <div>
                    <img src="/nthree.png" alt="" />
                </div>
                <div>
                    <img src="/nfour.png" alt="" />
                </div>
                <div>
                    <img src="/nfive.png" alt="" />
                </div>
                <div>
                    <img src="/nsix.png" alt="" />
                </div>
                <div>
                    <img src="/nseven.png" alt="" />
                </div>
                <div>
                    <img src="/neight.png" alt="" />
                </div>
                <div>
                    <img src="/nnine.png" alt="" />
                </div>
                <div>
                    <img src="/nten.png" alt="" />
                </div>
                <div>
                    <img src="/neleven.png" alt="" />
                </div>
                <div>
                    <img src="/nlast.png" alt="" />
                </div>
            </Slider>
        </div>

        // <div>
        //     <h2>Auto Play</h2>
        //     <Slider {...settings}>
        //         <div>
        //             <h3>1</h3>
        //         </div>
        //         <div>
        //             <h3>2</h3>
        //         </div>
        //         <div>
        //             <h3>3</h3>
        //         </div>
        //         <div>
        //             <h3>4</h3>
        //         </div>
        //         <div>
        //             <h3>5</h3>
        //         </div>
        //         <div>
        //             <h3>6</h3>
        //         </div>
        //     </Slider>
        // </div>
    );
};

export default MoneyGoes;