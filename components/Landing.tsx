'use client'
import React, { useEffect, useRef, useState } from 'react'
import OurProcess from './Process';
import AboutUs from './AboutUs';
import Three from './three';
import HeroSection from './Hero';
import Image from 'next/image';
import Footer from './Footer';

const Landing = () => {
     const [bgImage, setBgImage] = useState("/Images/Klassyy.jpg");

     // Create refs for each section you want to track
       const heroRef = useRef<HTMLDivElement>(null);
       const threeRef = useRef<HTMLDivElement>(null);
       const aboutRef = useRef<HTMLDivElement>(null);
       const processRef = useRef<HTMLDivElement>(null);


       useEffect(() => {
           const options = {
             threshold: 0.5, // Adjust as needed—the section should be 50% visible to trigger.
           };
       
           // Create an Intersection Observer
           const observer = new IntersectionObserver((entries) => {
             entries.forEach((entry) => {
               if (entry.isIntersecting) {
                 // Read the "data-bg" attribute from the element entering the view
                 const newBg = entry.target.getAttribute("data-bg");
                 if (newBg) {
                   setBgImage(newBg);
                 }
               }
             });
           }, options);
       
           // Observe our sections
           if (heroRef.current) observer.observe(heroRef.current);
           if (threeRef.current) observer.observe(threeRef.current);
           if (aboutRef.current) observer.observe(aboutRef.current);
           if (processRef.current) observer.observe(processRef.current);
       
           // Clean up on unmount
           return () => observer.disconnect();
         }, []);
       
     
  return (
    <div className="relative">
      
      <div className="fixed inset-0 -z-10 transition-all duration-1000 ease-in-out">
        <Image
          src={bgImage}
          alt="Background"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Scrollable Content with ample vertical spacing */}
      <div className="relative z-10 space-y-[12rem]">
        <div
          id="HeroSection"
          ref={heroRef}
          data-bg="/Images/Klassyy.jpg"
          className="mb-20"
        >
          <HeroSection />
        </div>
        <div id="Three" ref={threeRef} data-bg="/Images/Klassyy.jpg">
          <Three />
        </div>
        <div id="OurProcess" ref={processRef} data-bg="/Images/klassyyy.jpg">
          <OurProcess />
        </div>

          <div id="Footer" ref={processRef} data-bg="/Images/klassyyy.jpg">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Landing
