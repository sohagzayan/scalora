import React from "react";

const plans = [
    {
        name: "Free",
        price: "$0",
        description: "Perfect for passion projects & simple websites.",
        features: [
            "Unlimited API requests",
            "50,000 monthly active users",
            "500MB database size",
            "5GB bandwidth",
            "1GB file storage",
            "Community support",
        ],
    },
    {
        name: "Pro",
        price: "$25",
        description: "For production applications with the power to scale.",
        features: [
            "100,000 monthly active users",
            "8GB disk size per project",
            "250GB bandwidth",
            "100GB file storage",
            "Email support",
            "Daily backups stored for 7 days",
        ],
        tag: "Most Popular",
    },
    {
        name: "Team",
        price: "$599",
        description: "Add features such as SSO, control over backups, and industry certifications.",
        features: [
            "SOC2",
            "HIPAA available as paid add-on",
            "SSO for Supabase Dashboard",
            "Priority email support & SLAs",
            "Daily backups stored for 14 days",
        ],
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "For large-scale applications running Internet scale workloads.",
        features: [
            "Designated Support manager",
            "Uptime SLAs",
            "On-premise support",
            "24×7×365 premium enterprise support",
            "Private Slack channel",
            "Custom Security Questionnaires",
        ],
    },
];

export default function Pricing() {
    return (
        <div className="relative z-10 mx-auto w-full px-8 sm:px-10 lg:px-16">
            <div className="relative z-10  pb-4 xl:pt-32 xl:pb-10 py-28 text-center">
                <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl space-y-4 lg:max-w-none">
                        <h1 className="text-4xl font-bold text-foreground leading-tight">Predictable Pricing,<br className="block lg:hidden" /> Designed to Scale</h1>
                        <p className="text-lg text-foreground-light leading-6">Start building for free, collaborate with your team, then scale to millions of users.</p>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 xl:grid-cols-4 ">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`flex flex-col border bg-surface-75 rounded-xl p-4 md:p-5 lg:p-6 ${plan.tag ? 'border-foreground-muted border-2' : ''}`}
                    >
                        <div className="px-4 pt-3">
                            <h3 className="text-foreground text-xl font-semibold uppercase font-mono">
                                {plan.name}
                            </h3>
                            {plan.tag && (
                                <span className="bg-foreground-light text-background rounded-md py-0.5 px-2 text-xs leading-4 inline-flex gap-1 items-center">
                                    {plan.tag}
                                </span>
                            )}
                            <p className="text-foreground-light text-sm mt-2">{plan.description}</p>
                            <p className="text-4xl font-mono mt-4">{plan.price} <span className="text-sm">/ month</span></p>
                        </div>
                        <ul className="text-sm text-foreground-lighter mt-4 px-4">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 py-1">
                                    ✅ {feature}
                                </li>
                            ))}
                        </ul>
                        <div className="px-4 pb-3 mt-auto">
                            <button className="relative cursor-pointer text-center rounded-md border bg-brand-400 hover:bg-brand-500 text-foreground w-full px-4 py-2 text-sm">
                                {plan.name === "Enterprise" ? "Contact Us" : "Upgrade Now"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}