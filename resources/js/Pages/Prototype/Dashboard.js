import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import Authenticated from "@/Layouts/Authenticated/index";
import { Head } from "@inertiajs/inertia-react";
import React from "react";
import Flickity from "react-flickity-component";

const Dashboard = () => {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };

    return (
        <Authenticated>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {[1, 2, 3, 4].map((i) => (
                        <FeaturedMovie
                            key={i}
                            slug="the-batman-in-love"
                            name={`The Batman in Love ${i}`}
                            category="Comedy"
                            thumbnail="https://picsum.photos/id/1/300/300"
                            rating={i + 1}
                        />
                    ))}
                </Flickity>
            </div>
            <div className="mt-[50px]">
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <MovieCard
                            slug="the-batman-in-love"
                            name={`The Batman in Love ${i}`}
                            category="Comedy"
                            thumbnail="https://picsum.photos/id/1/300/300"
                        />
                    ))}
                </Flickity>
            </div>
        </Authenticated>
    );
};

export default Dashboard;
