import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingpPage = () => {
    return (
        <div className="px-4 md:px-20 lg:px-32 space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center">
                By Joseph Nguyen and Logan De la Rosa
            </h2>
            <div className="p-4 border-black/5 flex items-center justify-between hover:shadow-mdd transition cursor-pointer">
                <Link href="/start">
                    <Button className="items-top">
                        Start The Game
                    </Button>
                </Link>
            </div>
            <div className="flex justify-center items-center h-screen">
                <img className="object-fit object-center" src="Tree of Godot.png" width={800} />
            </div>
        </div>
    )
}

export default LandingpPage;