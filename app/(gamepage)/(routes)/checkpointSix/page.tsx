"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
      label: "Choice 1: Lock in and work on your english project",
      href: "/checkpointSix/choiceOne",
      color: "text-violet-500"
  },
  {
      label: "Choice 2: Doomscroll Instagram",
      href: "/checkpointSix/choiceTwo",
      color: "text-pink-700"
  },
  {
      label: "Choice 3: Do nothing",
      href: "/checkpointSix/choiceThree",
      color: "text-orange-700"
  }
];

const CheckpointSix = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-5xl font-bold text-center">
          This is You
        </h2>
        <p className="text-muted-foreground font-medium text-sm md:text-2xl text-center px-20">
        The school day ends and you return home. You have several hours before you need to go to sleep, giving you ample time to work on your English Project. Of course, you could always doomscroll Instagram or just go to sleep now.
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

export default CheckpointSix;