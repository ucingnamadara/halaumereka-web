import { AnimatedButton } from "src/components/magicui/animated-button";
import WordRotate from "../components/magicui/word-rotate";
import { ChevronRightIcon } from "lucide-react";
import GridPattern from "src/components/magicui/animated-grid-pattern";
import { cn } from "src/libs/utils";

export function Homepage() {
  return (
    <div className="relative flex h-[620px] w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20">
      <GridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={2}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
      <div className="flex flex-col items-right justify-center gap-5">
        <div className="flex flex-col text-6xl font-bold gap-3">
          <h1>Protecting Your{" "}</h1>
          <WordRotate
            words={[
              "Digital World",
              "Business",
              "Strategy",
              "Milestone",
              "Service",
              "Future",
              "Journey",
              "Hope",
            ]}
            className="text-yellow-500"
          />
        </div>
        <p className="text-xl font-medium">
          Comprehensive Cybersecurity Solutions for Businesses of All Sizes
        </p>
        <div className="flex flex-row gap-2">
          <AnimatedButton
            href="#services"
            initialText={
              <span className="group inline-flex items-center">
                Our Service{" "}
                <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            }
            buttonColor="#000000"
            buttonTextColor="#ffffff"
          />
        </div>
      </div>
    </div>
  );
}
