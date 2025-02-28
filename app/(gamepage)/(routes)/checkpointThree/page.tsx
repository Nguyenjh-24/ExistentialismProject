"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
      label: "Choice 1: Push your way through into one of the stalls",
      href: "/checkpointThree/choiceOne",
      color: "text-violet-500"
  },
  {
      label: "Choice 2: Leave and find another bathroom",
      href: "/checkpointThree/choiceTwo",
      color: "text-pink-700"
  },
  {
      label: "Choice 3: Do nothing",
      href: "/checkpointThree/choiceThree",
      color: "text-orange-700"
  }
];

const CheckpointThree = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-5xl font-bold text-center">
          This is You
        </h2>
        <p className="text-muted-foreground font-medium text-sm md:text-2xl text-center px-20">
        The day carries, and each period seems to flow directly into the next. Eventually, the bell rings for lunch and you make your way to the Commons. On your way, you make a stop by the restroom. As you open the door the putrid scent of vapor nicotine assaults your nostrils. It’s as though a fog machine was running in one of the stalls, and the entire room is packed with sophomores vaping. To use one of the stalls, you’d need to push your way to one of the stalls, potentially putting yourself at risk for their sophomore ire. Alternatively you could make your way to another restroom, but that would take a long time and eat away at your lunchtime.
        <br />
        <br />
        What do you do?
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
           onClick={() => router.push(tool.href)}
           key={tool.href}
           className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer" 
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md")}>
                {/* Maybe image */}
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="w-5 h-5"/>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default CheckpointThree;