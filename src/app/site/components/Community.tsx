import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { X } from "lucide-react";

const reviews = [
    {
        logo: "Quivr",
        description: "AI-powered knowledge base grows exponentially with Supabase.",
        imgUrl: "/logos/quivr.svg",
    },
    {
        logo: "1Password",
        description: "Securing user data at scale with Supabase Authentication.",
        imgUrl: "/logos/1password.svg",
    },
    {
        logo: "maergo",
        description: "Maergo's Express Delivery: How Supabase Helped Achieve Scalability, Speed, and Cost Saving.",
        imgUrl: "/logos/maergo.svg",
    },
    {
        logo: "SHOTGUN",
        description: "Media production platform chooses Supabase for real-time collaboration.",
        imgUrl: "/logos/shotgun.svg",
    },
    {
        logo: "Chatbase",
        description: "Bootstrapped founder builds an AI app with Supabase and scales to $1M in 5 months.",
        imgUrl: "/logos/chatbase.svg",
    },
];

const ReviewCard = ({ logo, description, imgUrl }: { logo: string; description: string; imgUrl: string }) => {
    return (
        <div className="relative w-[350px] h-[200px] cursor-pointer overflow-hidden rounded-xl border border-gray-800 bg-gray-900 p-6 flex flex-col justify-between hover:bg-gray-800 transition-colors">
            <div className="flex items-center gap-4">
                <img src={imgUrl} alt={logo} className="w-12 h-12 rounded-full" />
                <h2 className="text-lg font-semibold text-white">{logo}</h2>
            </div>
            <p className="text-sm text-gray-400 mt-4">{description}</p>
        </div>
    );
};

export function Community() {
    return (
        <div className="relative flex flex-col items-center justify-center w-full overflow-hidden py-14">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-semibold text-white mt-2">Join the community</h1>
                <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
                    Discover what our community has to say about their Supabase experience.
                </p>
            </div>
            <Marquee pauseOnHover className="[--duration:20s] flex gap-8">
                {reviews.map((review) => (
                    <div key={review.description}>
                        <Card className="bg-black text-white p-4 w-full max-w-md rounded-xl shadow-lg relative">
                            {/* Close Button */}
                            <button className="absolute top-2 left-2 p-1 bg-gray-800 rounded-full">
                                <X size={16} />
                            </button>

                            <CardContent className="flex gap-4">
                                {/* Avatar Section */}
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@justinjunodev" />
                                    <AvatarFallback>JJ</AvatarFallback>
                                </Avatar>

                                {/* Content Section */}
                                <div>
                                    <p className="text-sm font-semibold">@justinjunodev</p>
                                    <p className="mt-1 text-gray-300 text-sm leading-relaxed">
                                        Yall <span className="text-blue-400">@supabase</span> + <span className="text-blue-400">@nextjs</span> is amazing! 🙌 Barely an hour into a proof-of-concept and already have most of the functionality in place.

                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
        </div>
    );
}
