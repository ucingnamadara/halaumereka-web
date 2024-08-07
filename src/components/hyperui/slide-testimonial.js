import { StarIcon } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { StarFilledIcon } from "@radix-ui/react-icons";

export function SlideTestimonial({ content }) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 2,
      spacing: 15,
    },
  });

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>

            <p className="mt-4 text-gray-700">
              Read on and see why our users are raving about their journey with
              us!
            </p>
          </div>

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
        </div>
      </div>
    </section>
  );
}
