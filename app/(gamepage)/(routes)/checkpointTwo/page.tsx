"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
      label: "Choice 1: Lock in and work on your English Project",
      href: "/checkpointTwo/choiceOne",
      color: "text-violet-500"
  },
  {
      label: "Choice 2: Watch Chainsaw Man",
      href: "/checkpointTwo/choiceTwo",
      color: "text-pink-700"
  },
  {
      label: "Choice 3: Take a nap",
      href: "/checkpointTwo/choiceThree",
      color: "text-orange-700"
  },
  {
      label: "Choice 4: Do nothing",
      href: "/checkpointTwo/choiceFour",
      color: "text-emerald-500"
  },
];

const CheckpointTwo = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-5xl font-bold text-center">
          This is You
        </h2>
        <p className="text-muted-foreground font-medium text-sm md:text-2xl text-center px-20">
        It’s period 3, your study hall for the day. You consider working on your English Project that is due Friday night, but that’d be so boring. After all, it’s only Tuesday, you should have time to work on it later. Wait, isn’t it Thursday? Or is it Wednesday? Eh, what does it matter? You could do something more enjoyable like watch the next episode of Chainsaw Man, although your classmates might see you as a weirdo for doing so (for good reason). Of course, you could always catch up on your lost sleep and nap through the period, but then you’d end up doing nothing productive. But would you really be productive anyway?
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

export default CheckpointTwo;