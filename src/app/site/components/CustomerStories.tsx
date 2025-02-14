import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

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
    {
        logo: "mozilla",
        description: "Mozilla leverages Supabase for a fast and scalable database solution.",
        imgUrl: "/logos/mozilla.svg",
    },
    {
        logo: "Tinloof",
        description: "Development agency builds scalable solutions with Supabase.",
        imgUrl: "/logos/tinloof.svg",
    },
    {
        logo: "Next Door Lending",
        description: "Mortgage lending company scales operations seamlessly with Supabase.",
        imgUrl: "/logos/nextdoor.svg",
    },
    {
        logo: "Mobbin",
        description: "Design library platform chooses Supabase to power their application.",
        imgUrl: "/logos/mobbin.svg",
    },
    {
        logo: "HappyTeams",
        description: "Team management platform leverages Supabase for real-time collaboration.",
        imgUrl: "/logos/happyteams.svg",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ logo, description, imgUrl }: { logo: string; description: string; imgUrl: string }) => {
    return (
        <div className="relative w-[300px] h-[180px] cursor-pointer overflow-hidden rounded-xl border border-gray-800 bg-gray-900 p-6 flex flex-col justify-between hover:bg-gray-800 transition-colors">
            <img src={imgUrl} alt={logo} className="w-24 h-auto opacity-80" />
            <p className="text-sm text-gray-400 mt-4">{description}</p>
        </div>
    );
};

export function MarqueeDemo() {
    return (
        <div className="relative flex flex-col items-center justify-center w-full overflow-hidden py-14">
            <div className="text-center mb-12">
                <span className="text-sm font-medium text-gray-400">CUSTOMER STORIES</span>
                <h1 className="text-4xl font-semibold text-white mt-2">
                    Infrastructure to <span className="text-gray-400">innovate and scale with ease.</span>
                </h1>
                <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
                    See how Supabase empowers companies of all sizes to accelerate their growth and streamline their work.
                </p>
                <div className="mt-6 flex gap-4 justify-center">
                    <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md">View all stories</button>
                    <button className="px-6 py-2 border border-gray-700 bg-transparent text-white hover:bg-gray-800 rounded-md">View Events</button>
                </div>
            </div>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.logo} {...review} />
                ))}
            </Marquee>
            <Marquee pauseOnHover className="[--duration:25s] mt-4">
                {secondRow.map((review) => (
                    <ReviewCard key={review.logo} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
        </div>
    );
}