import { SocialIcon } from "react-social-icons";
import { Check, Copy } from "lucide-react";
import { AnimatedConditionButton } from "../magicui/animated-condition-button";

export function Footer() {
  const email = "halo@halaumereka.id";
  return (
    <footer class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-12 mx-auto">
        <div id="contact-us" class="flex flex-col justify-center items-center gap-6 lg:flex-col px-5 py-12 sm:px-6 sm:py-12 lg:px-8 lg:py-24">
          <div class="">
            <h1 class="text-lg md:text-2xl font-semibold text-center tracking-tight text-gray-800 xl:text-4xl dark:text-white">
              Reach out via email for business inquiries.
            </h1>

            <div class="flex flex-row mx-auto mt-1 md:mt-6 justify-center items-center gap-1 md:gap-3">
              <h1 className="text-center text-md md:text-2xl font-base">{email}</h1>
              
              <AnimatedConditionButton
                textToCopy={email}
                className="relative block font-base"
                initialText={
                  <span className="group inline-flex items-center text-xs">
                    Copy Me{" "}
                    <Copy className="ml-1 md:ml-2 w-2 h-2 md:h-4 md:w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                }
                changeText={
                  <span className="group inline-flex items-center text-xs">
                    <Check className="ml-1 md:ml-2 w-2 h-2 md:h-4 md:w-4" />
                    Copied{" "}
                  </span>
                }
                buttonColor="#000000"
                buttonTextColor="#ffffff"
                status={false}
              />
            </div>
          </div>

            <div class="flex flex-row items-center justify-center space-y-1 font-medium text-base gap-4">
              <a
                href="https://www.instagram.com/halaumereka_/"
                class="flex flex-row justify-center items-center gap-1 transition-colors duration-300 dark:text-gray-300 dark:hover:text-yellow-400 hover:text-yellow-400"
              >
                <SocialIcon
                  style={{ width: 30, height: 30 }}
                  bgColor="rgb(234, 179, 8)"
                  network="instagram"
                />{" "}
                <p>Instagram</p>
              </a>
              <a
                href="https://www.tiktok.com/@halau.mereka"
                class="flex flex-row justify-center items-center gap-1 transition-colors duration-300 dark:text-gray-300 dark:hover:text-yellow-400 hover:text-yellow-400"
              >
                <SocialIcon
                  style={{ width: 30, height: 30 }}
                  bgColor="rgb(234, 179, 8)"
                  network="tiktok"
                />{" "}
                <p>Tiktok</p>
              </a>
            </div>
        </div>

        <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

        <div class="flex items-center justify-center">
          <div class="flex -mx-2 break-normal">
            <p className="text-xs sm:text-sm">
              Copyright © 2024 - Halau Mereka Media All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
