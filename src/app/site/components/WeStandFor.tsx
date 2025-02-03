"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface MenuItem {
    id: number
    title: string
    subtitle: string
    image: string
}

const menuItems: MenuItem[] = [
    {
        id: 1,
        title: "Creativity Without Limits",
        subtitle: "We push boundaries to create work that stands out.",
        image: "/what_we_stand_for.jpg",
    },
    {
        id: 2,
        title: "Strategic Excellence",
        subtitle: "Every idea is rooted in a deep understanding of your goals and audience.",
        image: "/what_we_stand_for.jpg",
    },
    {
        id: 3,
        title: "Client Collaboration",
        subtitle: "Your vision is at the heart of everything we do.",
        image: "/what_we_stand_for.jpg",
    },
]

export default function WeStandFor() {
    const [activeItem, setActiveItem] = useState<MenuItem>(menuItems[0])
    const [isAnimating, setIsAnimating] = useState(false)

    const handleItemClick = (item: MenuItem) => {
        if (item.id === activeItem.id || isAnimating) return
        setIsAnimating(true)
        setActiveItem(item)
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-12">

                <motion.h1
                    className="text-4xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-[18px] mb-2 text-[hsl(154.9,100%,19.2%)]
">As Agency Solution Provider</p>
                    WHAT WE STAND FOR
                </motion.h1>


                <div className="flex flex-col md:flex-row gap-8">
                    {/* Menu Items - Stacked on mobile, side by side on desktop */}
                    <nav className="flex flex-col lg:w-1/3 space-y-6">
                        {menuItems.map((item) => (
                            <motion.button
                                key={item.id}
                                onClick={() => handleItemClick(item)}
                                className={`text-left w-full p-4 rounded-lg transition-all relative overflow-hidden ${activeItem.id === item.id ? "bg-accent" : ""
                                    }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {activeItem.id === item.id && (
                                    <motion.div
                                        className="absolute inset-0 bg-primary/5"
                                        layoutId="activeBackground"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <div className="relative z-10">
                                    <motion.h3
                                        className={`text-lg font-semibold ${activeItem.id === item.id ? "text-primary" : "text-foreground"
                                            }`}
                                        layout
                                    >
                                        {item.title}
                                    </motion.h3>
                                    <motion.p
                                        className={`text-sm mt-1 ${activeItem.id === item.id ? "text-primary/80" : "text-muted-foreground"
                                            }`}
                                        layout
                                    >
                                        {item.subtitle}
                                    </motion.p>
                                </div>
                            </motion.button>
                        ))}
                    </nav>

                    {/* Image Section */}
                    <div className="w-full lg:w-2/3 h-[400px] lg:h-[400px] relative overflow-hidden rounded-2xl">
                        <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
                            <motion.div
                                key={activeItem.id}
                                className="absolute inset-0"
                                initial={{ opacity: 0, scale: 1.1, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30,
                                    mass: 1.5,
                                    duration: 0.5,
                                }}
                            >
                                <motion.img
                                    src={activeItem.image}
                                    alt={activeItem.title}
                                    className="w-full h-full object-cover"
                                    initial={{ scale: 1.2 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.4, 0, 0.2, 1],
                                    }}
                                />
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    )
}

