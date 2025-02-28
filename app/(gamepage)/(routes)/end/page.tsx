"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
      label: "Wake Up",
      href: "/start",
      color: "text-violet-500"
  }
];

const EndingPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-5xl font-bold text-center">
          This is You
        </h2>
        <p className="text-muted-foreground font-medium text-sm md:text-2xl text-center px-20">
        Deciding that enough has happened today, you make your way upstairs to go to sleep. You ponder how despite all of the stupid things you’ve done and said, nothing really happened. You’re no better than the person you were yesterday and you didn’t finish any of your assignments. Hopefully Tuesday will be better. Wait, isn’t today Tuesday? Or is it Friday? It didn’t seem to make a difference. It feels as though your time in high school has been just one never-ending day, each uninteresting moment continuously flowing into the next. Sometimes you are asleep, sometimes you are awake, but it becomes hard to differentiate between the two. How could you even tell the difference between them? Like when you chose to call your crush “huzz.” That was stupid. Did you do it just to get a reaction, just to give you the impression	that you existed and weren’t dreaming? Wait, but you didn’t choose to do that, or did you? But it didn’t matter. Despite your mild efforts, nothing ever really happened. Indeed, in the end the only thing that you could say for certain happened in this absurd life was that you entered high school and would soon graduate from high school. Just as in a day all you ever really do is awake and sleep. What happens in between is meaningless.
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

export default EndingPage;