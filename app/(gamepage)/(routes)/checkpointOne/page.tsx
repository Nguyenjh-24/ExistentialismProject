"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
      label: "Choice 1: Eat the plain Cheerios with almond milk",
      href: "/checkpointOne/choiceOne",
      color: "text-violet-500"
  },
  {
      label: "Choice 2: Eat the yogurt",
      href: "/checkpointOne/choiceTwo",
      color: "text-pink-700"
  },
  {
      label: "Choice 3: Eat the radish",
      href: "/checkpointOne/choiceThree",
      color: "text-orange-700"
  },
  {
      label: "Choice 4: Eat nothing",
      href: "/checkpointOne/choiceFour",
      color: "text-emerald-500"
  },
];

const CheckpointOne = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-5xl font-bold text-center">
          This is You
        </h2>
        <p className="text-muted-foreground font-medium text-sm md:text-2xl text-center px-20">
        You make your way to the kitchen, when you remember that your parents haven’t visited the grocery store yet this week. There’s next to no food in the house, and you desperately search the place for any small morsel you can find. Eventually you find the following: A half eaten box of plain Cheerios, a cup of possibly expired yogurt, and a radish. You might be fine with the Cheerios normally, but there’s no milk left, only almond milk (disgusting). On the other hand, eating the Yogurt is a gamble, and there’s a chance it’ll turn your intestines into a ticking time bomb.
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

export default CheckpointOne;