import Image from "next/image";
import { ServicesData } from "./Services.data";

export const Services = () => {
  return (
    <>

      <span id="services">
        <div className="py-10 bg-white dark:bg-gray-400">
          <div className="container">
            <div className="text-center mb-20">
              <h1 className="text-4xl  font-bold font-cursive text-gray-800">
                Best Coffee For You
              </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center ">
              {ServicesData.map((service) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={service.aosDelay}
                  key={service.id}
                  className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]  "
                >
                  <div className="h-[122px] ">
                    <Image
                      src={service.img}
                      alt="coffee"
                      className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300 "
                    />
                  </div>
                  <div className="p-4 text-center">
                    <div className="w-full"></div>
                    <h1 className="text-xl text-black font-bold">{service.name}</h1>
                    <p className="text-gray-500 group-hover:text-white duration-high textsm line-clamp-2 ">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </span>
    </>
  );
};
