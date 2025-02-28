"use client";

import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const montserrat = Montserrat ({
    weight: "600",
    subsets: ["latin"]
});

const routes = [
    {
        label: "Start Page",
        href: "/start",
        color: "text-sky-500"
    },
    {
        label: "Checkpoint 1",
        href: "/checkpointOne",
        color: "text-violet-500"
    },
    {
        label: "Checkpoint 2",
        href: "/checkpointTwo",
        color: "text-pink-700"
    },
    {
        label: "Checkpoint 3",
        href: "/checkpointThree",
        color: "text-orange-700"
    },
    {
        label: "Checkpoint 4",
        href: "/checkpointFour",
        color: "text-emerald-500"
    },
    {
        label: "Checkpoint 5",
        href: "/checkpointFive",
        color: "text-green-700"
    },
    {
        label: "Checkpoint 6",
        href: "/checkpointSix",
        color: "text-green-500"
    },
    {
        label: "Ending",
        href: "/end",
    },
];

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href={"/"} className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        {/* if I want image */}
                    </div>
                    <h1 className={cn ("text-2xl font-bold", montserrat.className)}>
                        Home Page
                    </h1>
                </Link>
                <h1 className={cn ("text-lg font-bold", montserrat.className)}>
                        Storyboard
                    </h1>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link 
                            href={(route.href)}
                            key={route.href}
                            className={cn ("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition", pathname === route.href ? "text-white bg-white/10" : "text-zinc-400")}
                        >
                            <div className="flex items-center flex-1">
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;