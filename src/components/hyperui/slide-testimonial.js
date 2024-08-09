import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { StarFilledIcon } from "@radix-ui/react-icons";

export function SlideTestimonial({ content }) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: document.documentElement.clientWidth < 576 ? 1 : 2,
      spacing: 15,
    },
  });

  return (
  <div className="-mx-6 lg:col-span-2 lg:mx-0">
    <div ref={sliderRef} className="keen-slider">
      {content.map((data) => (
        <div className="keen-slider__slide">
          <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
            <div>
              <div className="flex gap-0.5 text-black-500">
                {[...Array(data.star)].map(() => (
                  <StarFilledIcon />
                ))}
              </div>

              <div className="mt-4">
                <p className="text-2xl font-bold text-black-600 sm:text-3xl">
                  {data.title}
                </p>

                <p className="mt-4 leading-relaxed text-gray-700">
                  {data.review}
                </p>
              </div>
            </div>

            <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
              &mdash; {data.name}
            </footer>
          </blockquote>
        </div>
      ))}
    </div>
  </div>
  );
}
