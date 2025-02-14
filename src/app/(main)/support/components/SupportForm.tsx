import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import React from 'react'
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";



const SupportForm = () => {

    const words = [
        { text: "Hello,", className: "text-white" },
        { text: "how", className: "text-white" },
        { text: "can", className: "text-white" },
        { text: "we", className: "text-white" },
        { text: "help?", className: "text-green-400" },
    ];


    return (
        <div className="flex flex-col items-center justify-center py-36 bg-black text-white px-4">
            <p className="text-green-400 uppercase tracking-widest text-md">Support</p>
            <TypewriterEffectSmooth words={words} className="text-xl md:text-4xl font-bold text-center " />

            <div className="relative w-full max-w-xl">
                <Input
                    type="text"
                    placeholder="How do I restart my database?"
                    className={cn(
                        "w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                    )}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <kbd className="px-2 py-1 text-xs font-semibold text-gray-300 bg-gray-700 rounded">
                        ⌘ K
                    </kbd>
                </div>
            </div>
        </div>
    )
}

export default SupportForm