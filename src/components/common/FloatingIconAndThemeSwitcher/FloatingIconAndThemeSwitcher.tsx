"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { SunMoon, Moon, Sun, Monitor } from "lucide-react"

type Theme = "light" | "dark" | "system"

export default function FloatingIconAndThemeSwitcher() {
    const [isOpen, setIsOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    const toggleMenu = () => setIsOpen(!isOpen)

    const themes: { type: Theme; icon: JSX.Element; label: string }[] = [
        { type: "light", icon: <Sun size={20} />, label: "Light" },
        { type: "dark", icon: <Moon size={20} />, label: "Dark" },
        { type: "system", icon: <Monitor size={20} />, label: "System" },
    ]

    if (!mounted) {
        return null
    }

    return (
        <div className="fixed bottom-4 right-4 flex items-end z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="flex flex-col mb-2 space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                    >
                        {themes.map(({ type, icon, label }) => (
                            <motion.button
                                key={type}
                                className={`flex items-center px-4 py-2 bg-background border border-border rounded-lg shadow-md ${theme === type ? "ring-2 ring-primary" : ""
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    setTheme(type)
                                    setIsOpen(false)
                                }}
                            >
                                <span className="mr-2">{icon}</span>
                                <span className="text-sm font-medium">{label}</span>
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                className="p-3 bg-[hsl(154.9,100%,19.2%)]
 text-primary-foreground rounded-full shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                    y: [0, -10, 0],
                    rotate: isOpen ? 180 : 0,
                }}
                transition={{
                    y: {
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 2,
                        ease: "easeInOut",
                    },
                    rotate: { duration: 0.3 },
                }}
                onClick={toggleMenu}
            >
                <SunMoon size={24} />
            </motion.button>
        </div>
    )
}

