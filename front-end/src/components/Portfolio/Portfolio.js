import React from "react";

import Safia from "../../assets/portfolio/Safia.png";
import tailwindProject from "../../assets/portfolio/tailwindProject.png";
import MovieCorn from "../../assets/portfolio/MovieCorn.png";


export const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: Safia,
            link: "https://github.com/Iskren201/LinkToMyProject/tree/main/safia-website",
        },
        {
            id: 2,
            src: tailwindProject,
            link: "https://github.com/Iskren201/LinkToMyProject/tree/main/Tailwind-Project",
        }, {
            id: 3,
            src: MovieCorn,
            link: "https://github.com/Iskren201/LinkToMyProject/tree/main/movie-search-app",
        },

    ];
    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black via-slate-800 to-gray-700 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8 ">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, link }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
                            {/* Da dobavq snimki na moite proekti + code  */}
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    <a target="_blank" href={link}>Code</a>
                                </button>
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    Demo
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
