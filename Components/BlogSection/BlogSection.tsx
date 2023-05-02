import React from 'react';
import img1 from "../../public/blog/blog1.jpg";
import img2 from "../../public/blog/blog2.jpeg";
import img3 from "../../public/blog/blog3.jpg";
import NewsCard from '../News/NewsCard';



const BlogSection = () => {
    const news = [
        {
            image: img1,
            category: "Health",
            heading: "Healthy food and nutrition among all the children",
            details:
                "Quis purus elementum quis quis penatibus ultrice dictumst nam tellus intog them ostati ouset Fermentum donec egestas vel auctor non. Pellentesque vivera antanio dignissim et sed orciopations maecenas Lorem ipsum dolor sit amet togethe cons ctetur optimsi adipiscing elit In purus sem felis.",
            date: "May 12, 2023",
            writer: "Max Roy",
        },
        {
            image: img2,
            category: "Education",
            heading: "New era for children learning and remove discrimination",
            details:
                "Quis purus elementum quis quis penatibus ultrice dictumst nam tellus intog them ostati ouset Fermentum donec egestas vel auctor non. Pellentesque vivera antanio dignissim et sed orciopations maecenas Lorem ipsum dolor sit amet togethe cons ctetur optimsi adipiscing elit In purus sem felis.",
            date: "May 12, 2023",
            writer: "Jack Roland",
        },
        {
            image: img3,
            category: "Food",
            heading: "How To Donate On Twitch? Understand How",
            details:
                "Quis purus elementum quis quis penatibus ultrice dictumst nam tellus intog them ostati ouset Fermentum donec egestas vel auctor non. Pellentesque vivera antanio dignissim et sed orciopations maecenas Lorem ipsum dolor sit amet togethe cons ctetur optimsi adipiscing elit In purus sem felis.",
            date: "May 12, 2023",
            writer: "Sam Barman",
        },
    ];

    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-2xl md:text-4xl font-bold leading-tight text-secondary">
                        News & Articles
                    </h2>
                </div>

                <div className="grid grid-cols-1 mx-auto mt-12 lg:mt-16 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {news.map((n, id) => (
                        <NewsCard key={id} news={n} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;