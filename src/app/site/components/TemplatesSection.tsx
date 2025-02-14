'use client'
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { HoverEffect } from "../../../components/ui/card-hover-effect";

const templates = [
    {
        title: "Stripe",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
    },
    {
        title: "Netflix",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
    },
    {
        title: "Google",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
    },
    {
        title: "Meta",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://meta.com",
    },
    {
        title: "Amazon",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "https://amazon.com",
    },
    {
        title: "Microsoft",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://microsoft.com",
    },
];

const TemplatesSection = () => {
    return (
        <section className="bg-black text-white py-16 px-6 md:px-16">
            <div className="flex flex-col items-center justify-center text-center bg-black text-white py-16 px-4">
                <h1 className="text-3xl md:text-4xl font-semibold">Start building in seconds</h1>
                <p className="text-gray-400 mt-3 max-w-lg">
                    Kickstart your next project with templates built by us and our community.
                </p>
            </div>
            <div className="">
                <HoverEffect items={templates} />
            </div>
        </section>
    );
};

export default TemplatesSection;
