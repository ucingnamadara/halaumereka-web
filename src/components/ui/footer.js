import { SocialIcon } from "react-social-icons";
import { Check, Copy } from "lucide-react";
import { AnimatedConditionButton } from "../magicui/animated-condition-button";

export function Footer() {
  const email = "halo@halaumereka.id";
  return (
    <footer class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-12 mx-auto">
        <div class="flex flex-col justify-between gap-6 lg:flex-row">
          <div class="sm:col-span-2">
            <h1 class="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
              Reach out via email for business inquiries.
            </h1>

            <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row md:items-center md:gap-3">
              <h1 className="text-lg font-base">{email}</h1>

              <AnimatedConditionButton
                textToCopy={email}
                className="relative block font-medium"
                initialText={
                  <span className="group inline-flex items-center">
                    Copy Me{" "}
                    <Copy className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                }
                changeText={
                  <span className="group inline-flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    Copied{" "}
                  </span>
                }
                buttonColor="#000000"
                buttonTextColor="#ffffff"
                status={false}
              />
            </div>
          </div>

          <div className="w-[250px]">
            <p class="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
              Our Social Media
            </p>

            <div class="flex flex-col gap-1 items-start mt-5 space-y-1 font-medium text-base">
              <a
                href="https://www.instagram.com/halaumereka_/"
                class="transition-colors duration-300 dark:text-gray-300 dark:hover:text-yellow-400 hover:text-yellow-500"
              >
                <SocialIcon
                  style={{ width: 30, height: 30 }}
                  bgColor="rgba(245, 158, 11)"
                  network="instagram"
                />{" "}
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@halau.mereka"
                class="transition-colors duration-300 dark:text-gray-300 dark:hover:text-yellow-400 hover:text-yellow-500"
              >
                <SocialIcon
                  style={{ width: 30, height: 30 }}
                  bgColor="rgba(245, 158, 11)"
                  network="tiktok"
                />{" "}
                Tiktok
              </a>
              <a
                href="https://halaumereka.medium.com/"
                class="transition-colors duration-300 dark:text-gray-300 dark:hover:text-yellow-400 hover:text-yellow-500"
              >
                <SocialIcon
                  style={{ width: 30, height: 30 }}
                  bgColor="rgba(245, 158, 11)"
                  network="medium"
                />{" "}
                Medium
              </a>
            </div>
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
