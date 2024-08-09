import HalauMerekaLogo from "src/assets/logo/Logo With Text.png";

export function Navbar() {
  return (
    <nav class="border" id="homepage">
      <div class="container flex flex-wrap items-center justify-between py-4">
        <a href="#homepage" class="flex">
          <img
            src={HalauMerekaLogo}
            alt="Halau Mereka Logo"
            class="h-16 mr-5"
          />
        </a>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          class="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:text-yellow-500 rounded-lg inline-flex items-center justify-center"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            class="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden md:block w-full md:w-auto" id="mobile-menu">
          <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-base md:font-semibold">
            <li>
              <a
                href="#about"
                class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-yellow-500 md:p-0"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#service"
                class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-yellow-500 md:p-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#our-work"
                class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-yellow-500 md:p-0"
              >
                Our Work
              </a>
            </li>
            <li>
              <a
                href="#testimony"
                class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-yellow-500 md:p-0"
              >
                Testimony
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
