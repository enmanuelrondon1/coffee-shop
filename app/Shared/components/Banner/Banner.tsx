import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import Image1 from "@/public/website/coffee-white.png";
import Image2 from "@/public/website/coffee-texture.jpg";
import Image from "next/image";

const bgImage = {
  backgroundImage: `url(${Image2})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundColor: "#270c03",
  height: "100%",
  width: "100%",
};

export const Banner = () => {
  return (
    <>
      <span id="about"></span>
      {/* <div style={bgImage} >
      <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
        <div className="container">
          <div className="flex flex-col items-center justify-center">
            <div className="text-center mb-20">
              <h1 className="text-4xl  font-bold font-cursive text-gray-800">
                Best Coffee For You
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center ">
              <div className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]  ">
                <div className="h-[122px] ">
                  <Image
                    src={Image1}
                    alt="coffee"
                    className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300 "
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full"></div>
                  <h1 className="text-xl text-black font-bold">
                    Coffee
                  </h1>
                  <p className="text-gray-500 group-hover:text-white duration-high textsm line-clamp-2 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]  ">
                <div className="h-[122px] ">
                  <Image
                    src={Image1}
                    alt="coffee"
                    className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300 "
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full"></div>
                  <h1 className="text-xl text-black font-bold">
                    Coffee
                  </h1>
                  <p className="text-gray-500 group-hover:text-white duration-high textsm line-clamp-2 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]  ">
                <div className="h-[122px] ">
                  <Image
                    src={Image1}
                    alt="coffee"
                    className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300 "
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full"></div>
                  <h1 className="text-xl text-black font-bold">
                    Coffee
                  </h1>
                  <p className="text-gray-500 group-hover:text-white duration-high textsm line-clamp-2 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}

      <div style={bgImage}>
        <div className="flex justify-center items-center py-12 sm:py-0 min-h-[550px] bg-gray-100 dark:bg-brandDark">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
              <div data-aos="zoom-in">
                <Image
                  src={Image1}
                  alt="coffee"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] animate-rotate  "
                />
              </div>

              <div className="flex flex-col justify-center gap-6 sm:pt-0 ">
                <h1 className="text-3xl sm:text-4xl font-bold font-cursive ">
                  Premiun Blend Coffe
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-gray-500 tracking-wide leading-5 "
                >
                  Our blend coffee is made with the finest beans from around the
                  world. It is the perfect blend of flavors and aromas.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <div data-aos="fade-up" className="flex items-center gap-3">
                      <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-200 " />
                      <span>Premiun Coffee</span>
                    </div>

                    <div data-aos="fade-up" className="flex items-center gap-3">
                      <IoFastFood
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-200 "
                      />
                      <span>Hot Coffee</span>
                    </div>

                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3"
                    >
                      <GiFoodTruck className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-purple-200 " />
                      <span>Cold Coffee</span>
                    </div>
                  </div>

                  <div
                    data-aos="slide-left"
                    className="border-l-4 border-primary/50 pl-6 space-y-2  "
                  >
                    <h1 className="text-2xl font-semibold font-cursive ">
                      Tea Lover
                    </h1>
                    <p className="text-sm text-gray-500 text-justify">
                      Much like writing code, coffee is a form of writing. It is
                      a way to express thoughts and ideas in a more concise and
                      efficient manner. Coffee is a powerful tool that can help
                      you focus, boost your creativity, and improve your overall
                      productivity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
