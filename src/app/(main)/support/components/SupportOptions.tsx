"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GithubIcon, MessageSquare, UserPlus } from "lucide-react";

export default function SupportOptions() {
    return (
        <div className="flex flex-col items-center justify-center bg-black text-white py-2 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
                {/* Issues */}
                <Card className="relative z-10 w-full h-full rounded-[7px] md:rounded-[11px] bg-gray-900 border border-gray-700 text-foreground-light flex flex-col p-5">
                    <CardContent className="flex flex-col flex-grow">
                        <h3 className="text-lg font-semibold">Issues</h3>
                        <p className="text-gray-400 text-sm flex-grow">
                            Found a bug? We’d love to hear about it in our GitHub issues.
                        </p>
                        <Button variant="outline" className="mt-4 flex items-center gap-2 text-white border-gray-600 bg-gray-800 hover:bg-gray-700">
                            Open GitHub Issue <GithubIcon className="w-4 h-4" />
                        </Button>
                    </CardContent>
                </Card>

                {/* Feature Requests */}
                <Card className="relative z-10 w-full h-full rounded-[7px] md:rounded-[11px] bg-gray-900 border border-gray-700 text-foreground-light flex flex-col p-5">
                    <CardContent className="flex flex-col flex-grow">
                        <h3 className="text-lg font-semibold">Feature Requests</h3>
                        <p className="text-gray-400 text-sm flex-grow">
                            Want to suggest a new feature? Share it with us and the community.
                        </p>
                        <Button className="mt-4 flex items-center gap-2 text-white border-gray-600 bg-gray-800 hover:bg-gray-700">
                            Request Feature <UserPlus className="w-4 h-4" />
                        </Button>
                    </CardContent>
                </Card>

                {/* Ask the Community */}
                <Card className="relative z-10 w-full h-full rounded-[7px] md:rounded-[11px] bg-gray-900 border border-gray-700 text-foreground-light flex flex-col p-5">
                    <CardContent className="flex flex-col flex-grow">
                        <h3 className="text-lg font-semibold">Ask the Community</h3>
                        <p className="text-gray-400 text-sm flex-grow">
                            Join our GitHub discussions or our Discord server to browse for help and best practices.
                        </p>
                        <div className="mt-4 flex gap-3">
                            <Button variant="outline" className="flex items-center gap-2 text-white border-gray-600 bg-gray-800 hover:bg-gray-700">
                                Ask a Question <MessageSquare className="w-4 h-4" />
                            </Button>
                            <Button className="flex items-center gap-2 bg-white text-black border border-gray-300 hover:bg-gray-200">
                                Join Discord 🖥️
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Can't find what you're looking for? */}
            <div className="mt-10 w-full max-w-6xl">
                <Card className="mx-auto bg-gray-900 border border-gray-700 rounded-xl p-6 lg:p-10">
                    <CardContent className="flex flex-col md:flex-row items-start md:items-center justify-between">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-lg font-semibold">
                                Cant find what youre looking for?
                            </h3>
                            <p className="text-gray-400 text-sm">
                                The support team is ready to help. Response time varies based on your plan and issue severity.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" className="flex items-center gap-2 text-white border-gray-600 bg-gray-800 hover:bg-gray-700">
                                Contact Enterprise Sales
                            </Button>
                            <Button variant="ghost" className="text-white">Open Ticket ↗</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
