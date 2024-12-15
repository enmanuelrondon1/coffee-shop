import ImgApp from "@/public/website/app_store.png";
import ImgStore from "@/public/website/play_store.png";
import ImgPng from "@/public/website/coffee-beans-bg.png";
import Link from "next/link";
import Image from "next/image";

export const AppStore = () => {
 

  return (
    <>
      <div
        className="py-14 min-h-[400px] bg-section"
        style={{
          backgroundImage: `url(${ImgPng.src})`, // Nota el .src
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="container">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4 ">
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              className="space-y-6 max-w-xl mx-auto  "
            >
              <h1 className="text-center text-2xl sm:text-4xl font-semibold text-white/90 pl-3">
                Coffee Cafe is acailable for Android and IOS
              </h1>

              <div className="flex flex-wrap justify-center sm:justify-start items-center">
                <Link href="#">
                  <Image
                    src={ImgApp}
                    alt="app"
                    className="max-w-[150px] sm:max-h-[120px] md:max-w-[200px] "
                  />
                </Link>
                <Link href="#">
                  <Image
                    src={ImgStore}
                    alt="app"
                    className="max-w-[150px] sm:max-h-[120px] md:max-w-[200px] "
                  />
                </Link>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
