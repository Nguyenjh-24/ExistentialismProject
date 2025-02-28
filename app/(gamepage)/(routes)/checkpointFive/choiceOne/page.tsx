"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
      label: "Continue",
      href: "/checkpointSix",
      color: "text-violet-500"
  }
];

const CheckpointFiveChoiceOne = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-5xl font-bold text-center">
          Outcome
        </h2>
        <p className="text-muted-foreground font-medium text-sm md:text-2xl text-center px-20">
        “Hey, have you seen the new episode of Chainsaw Man?” You ask. You immediately realize that you’ve made a fatal blunder. <br />
        “No,” They reply. <br />
        “Oh.” <br />
        The conversation ends. The teacher soon arrives and opens the class door. <br />
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

export default CheckpointFiveChoiceOne;