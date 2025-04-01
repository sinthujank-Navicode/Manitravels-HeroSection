"use client";
import { motion } from "framer-motion";
import Navbar from "./navbar";
import { useEffect } from "react";

export default function Section1() {
  useEffect(() => {
   
    document.body.style.overflow = "hidden";

    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-between p-6 relative md:mt-0 mt-5">
      {/* Background Zoom Animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-[-1] bg-cover bg-center"
        style={{ backgroundImage: "url('/background01.jpg')" }}
        animate={{ scale: [1, 1.20, 1] }} 
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
      
      {/* First Box - Text Section (Visible on all screen sizes) */}
      <div className="flex flex-col justify-center items-center z-[40] md:items-start text-center md:text-left mt-16 bg-white bg-opacity-20 p-12 w-full md:w-[50%] min-h-[600px] relative md:rounded-l-3xl">
        <p className="text-md text-gray-800">
          __ As an independent entity,<br /> we provide supportive and neutral<br /> governance to our coalition
        </p>
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-5xl md:text-7xl font-extrabold mt-10">
          TRAVEL<br /> AROUND <br />THE WORLD
        </h1>
      </div>

      {/* Overlay Image (Hidden on smaller screens) */}
      <div className="absolute top-[55%] left-[64%] transform -translate-x-1/2 -translate-y-1/2 z-[45] hidden md:block">
        <motion.img
          src="/flight.jpg"
          alt="Destination"
          className="max-w-[1100px] h-[390px] object-cover"
          animate={{
            y: [0, -60, 60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Second Box - Image Section (Hidden on smaller screens) */}
      <div className="relative p-12 w-full md:w-[50%] min-h-[600px] mt-16 flex justify-center border-16 border-white rounded-r-3xl hidden md:flex"></div>

      {/* Navbar */}
      <Navbar />
    </section>
  );
}
