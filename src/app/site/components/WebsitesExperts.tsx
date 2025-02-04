"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function WebsiteExperts() {
    const [activeAccordion, setActiveAccordion] = useState<string | null>(null)
    const [count, setCount] = useState({
        projects: 0,
        clients: 0,
        coffee: 0,
    })

    // Animate count on component mount
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => ({
                projects: prev.projects >= 180 ? 180 : prev.projects + 2,
                clients: prev.clients >= 90 ? 90 : prev.clients + 1,
                coffee: prev.coffee >= 30 ? 30 : prev.coffee + 1,
            }))
        }, 50)

        return () => clearInterval(interval)
    }, [])

    const accordionItems = [
        {
            id: "custom-web",
            title: "CUSTOM WEB DESIGN",
            content:
                "We create unique, custom-designed websites that reflect your brand identity and meet your specific business needs.",
        },
        {
            id: "responsive",
            title: "RESPONSIVE DEVELOPMENT",
            content: "Our websites are built to provide an optimal viewing experience across all devices and screen sizes.",
        },
        {
            id: "ecommerce",
            title: "E-COMMERCE SOLUTIONS",
            content:
                "We develop secure and scalable e-commerce platforms that help you sell products and services online effectively.",
        },
        {
            id: "uiux",
            title: "UI/UX DESIGN",
            content: "Our design process focuses on creating intuitive and engaging user experiences that drive conversions.",
        },
        {
            id: "maintenance",
            title: "ONGOING WEBSITE MAINTENANCE",
            content:
                "We provide continuous support and maintenance to ensure your website remains secure, up-to-date, and performing optimally.",
        },
    ]

    return (
        <div className=" text-white py-16 px-4 sm:px-6 lg:px-8 font-[Inter]">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
                <div className="space-y-12">
                    <div className="space-y-6">
                        <h1 className="text-5xl sm:text-6xl font-medium tracking-tight">
                            Websites{" "}
                            <span className="relative inline-block before:absolute before:-bottom-2 before:left-0 before:w-full before:h-2 before:bg-[url('/assets/icons/text_border.svg')] before:bg-contain before:bg-no-repeat">
                                Experts
                            </span>
                        </h1>

                        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                            A great website is essential for capturing attention and converting visitors into customers. Our web
                            design services focus on creating responsive, visually appealing, and user-friendly websites that are
                            optimized for performance across all devices.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                        <div className="space-y-2">
                            <div className="text-5xl font-bold">{count.projects}+</div>
                            <div className="text-sm text-gray-400 font-medium">Projects Done</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-5xl font-bold">{count.clients}+</div>
                            <div className="text-sm text-gray-400 font-medium">Happy Clients</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-5xl font-bold">{count.coffee}k</div>
                            <div className="text-sm text-gray-400 font-medium">Coffee Cups</div>
                        </div>
                    </div>
                </div>

                <div>
                    {accordionItems.map((item) => (
                        <div key={item.id} className="border-t border-gray-800">
                            <button
                                onClick={() => setActiveAccordion(activeAccordion === item.id ? null : item.id)}
                                className="w-full py-6 flex justify-between items-center text-left"
                            >
                                <span className="text-lg font-medium tracking-wide">{item.title}</span>
                                <motion.div
                                    animate={{ rotate: activeAccordion === item.id ? 180 : 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <ChevronDown className="w-5 h-5" />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {activeAccordion === item.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-6 text-gray-400">{item.content}</div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
