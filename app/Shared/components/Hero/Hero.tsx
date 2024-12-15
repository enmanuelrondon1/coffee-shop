import { Button } from "@/components/ui/button";
import HeroPng from "../../../../public/website/coffee2.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <div className="min-h-[550px] sm:min-h-[600px] text-black flex justify-center items-center mt-20 dark:bg-brandDark dark:text-white bg-gray-100 ">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 ">
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                We serve the best coffee in town{" "}
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/90 font-cursive  "
                >
                  Coffee{" "}
                </span>
                in the city
              </h1>
              <div data-aos="fade-up" data-aos-delay="400">
                <Button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full ">
                  Coffee and Code
                </Button>
              </div>
            </div>

            <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
              <Image
                data-aos-once="true"
                src={HeroPng}
                alt="hero"
                className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto animate-rotate "
              />

              <div
                data-aos="fade-left"
                className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute top-10 left-10"
              >
                <h1 className="text-white">Hey Coder</h1>
              </div>
              <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute bottom-10 right-10 ">
                <h1 className="text-white">Best Coffee</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
