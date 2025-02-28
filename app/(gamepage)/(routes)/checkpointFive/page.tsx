"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
      label: "Choice 1: Strike up friendly conservation with them",
      href: "/checkpointFive/choiceOne",
      color: "text-violet-500"
  },
  {
      label: "Choice 2: Aggressively flirt with them",
      href: "/checkpointFive/choiceTwo",
      color: "text-pink-700"
  },
  {
      label: "Choice 3: Perform a traditional mating dance",
      href: "/checkpointFive/choiceThree",
      color: "text-orange-700"
  },
  {
      label: "Choice 4: Do nothing",
      href: "/checkpointFive/choiceFour",
      color: "text-emerald-500"
  },
];

const CheckpointFive = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-5xl font-bold text-center">
          This is You
        </h2>
        <p className="text-muted-foreground font-medium text-sm md:text-2xl text-center px-20">
        After lunch, the day continues to creep along at its petty pace. As you make your way to your final period, you notice that the door to the classroom is locked. It seems that the teacher hasn’t arrived yet, and you now find yourself awkwardly waiting outside of the room with the rest of your peers. As you stand around, you realize that your crush is also waiting in the hallway. You haven't had the chance to interact with them all year, this could be your chance! But you could always mess it up, any wrong move would be catastrophic.
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

export default CheckpointFive;