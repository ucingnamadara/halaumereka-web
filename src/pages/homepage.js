import { AnimatedButton } from "src/components/magicui/animated-button";
import WordRotate from "../components/magicui/word-rotate";
import { ChevronRightIcon } from "lucide-react";

export function Homepage() {
  return (
    <div className="container:none flex flex-col items-right justify-center gap-2 pt-20">
      <h1 className="text-6xl font-bold ">
        {" "}
        Protecting Your{" "}
        <WordRotate
          words={[
            "Digital Word",
            "Business",
            "Strategy",
            "Milestone",
            "Service",
            "Future",
          ]}
        />
      </h1>
      <p className="text-xl font-medium">Comprehensive Cybersecurity Solutions for Businesses of All Sizes</p>
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
  );
}
