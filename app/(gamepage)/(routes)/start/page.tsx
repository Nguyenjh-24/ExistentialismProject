"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
      label: "Choice 1: Bite the bullet and get out of bed now",
      href: "/start/choiceOne",
      color: "text-violet-500"
  },
  {
      label: "Choice 2: Stay in bed another 15 minutes",
      href: "/start/choiceTwo",
      color: "text-pink-700"
  }
];

const StartPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-5xl font-bold text-center">
          This is You
        </h2>
        <p className="text-muted-foreground font-medium text-sm md:text-2xl text-center px-20">
        You wake up to the incessant blaring of your alarmclock. The agony of Thursdays. Or is it Wednesday? Either way, you’re extremely disappointed to have woken up. It felt as though your head had hit your pillow just a moment ago and now you’re awake again, forced to join the rest of humanity. Rays of sunshine filter through your curtains, forcing you to squint in the early morning light. You turn your head towards your alarmclock, seeing that it's 5:45 AM. You have to be downstairs by 6:30 if you want to catch the bus. You know that you should probably just get out of bed now, but the warmth of your sheets beckons you to stay in bed a little longer.
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

export default StartPage;