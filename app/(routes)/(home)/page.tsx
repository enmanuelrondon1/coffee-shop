"use client";

import { useEffect } from "react";
import { Nabvar } from "@/app/Shared/components/Nabvar";
import { Hero } from "@/app/Shared/components/Hero";
import { Services } from "@/app/Shared/components/Services";
import { Banner } from "@/app/Shared/components/Banner";
import { AppStore } from "@/app/Shared/components/AppStore";
import { Testimonials } from "@/app/Shared/components/Testimonials";
import { Footer } from "@/app/Shared/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function Page() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  });

  return (
    <div className="bg-white dark:bg-brandDark dark:text-white duration-200 overflow-x-hidden">
      <Nabvar />
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Page;
