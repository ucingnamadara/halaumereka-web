import { cn } from "src/libs/utils";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { SocialIcon } from "react-social-icons";
import HalauMerekaLogo from "src/assets/logo/Logo With Text.png";

export function Footer(){
    return(

        <footer class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-12 mx-auto">
        <div class="flex flex-col justify-between gap-6 lg:flex-row">
            <div class="sm:col-span-2">
                <h1 class="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">Subscribe our newsletter to get update.</h1>

                <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                    <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address"/>
            
                    <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                        Subscribe
                    </button>
                </div>
            </div>

            <div className="w-[250px]">
                <p class="font-semibold text-2xl xl:text-xl text-gray-800 dark:text-white">Our Social Media</p>

                <div class="flex flex-col items-start mt-5 space-y-1 font-semibold text-base">
                    <a href="https://www.instagram.com/halaumereka_/" class="transition-colors duration-300 dark:text-gray-300 dark:hover:text-yellow-400 hover:text-yellow-500"><SocialIcon bgColor="rgba(245, 158, 11)" network="instagram" /> Instagram</a>
                    <a href="https://www.tiktok.com/@halau.mereka" class="transition-colors duration-300 dark:text-gray-300 dark:hover:text-yellow-400 hover:text-yellow-500"><SocialIcon bgColor="rgba(245, 158, 11)" network="tiktok" /> Tiktok</a>
                    <a href="https://halaumereka.medium.com/" class="transition-colors duration-300 dark:text-gray-300 dark:hover:text-yellow-400 hover:text-yellow-500"><SocialIcon bgColor="rgba(245, 158, 11)" network="medium" /> Medium</a>
                </div>
            </div>
        </div>
        
        <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700"/>
        
        <div class="flex items-center justify-center">
            <div class="flex -mx-2 break-normal">
               <p className="text-xs sm:text-sm">Copyright © 2024 - Halau Mereka Media All Rights Reserved.</p>
            </div>
        </div>
    </div>
</footer>
        
    )
}