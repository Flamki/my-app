"use client";

import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlob";
import Lottie from 'lottie-react';
import animationData from '@/data/confetti.json';
import MagicButton from "../MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('9833Ayush@gmail.com');
    setCopied(true);
    if (id === 6) {
      setPlayAnimation(true); // Start animation when button is clicked
    }
  };

  const handleAnimationComplete = () => {
    setPlayAnimation(false); // Stop animation after it completes
  };

  let itemHeight: string;
  let itemWidth: string;

  switch (id) {
    case 1:
      itemHeight = "56vh";
      itemWidth = "100%";
      break;
    case 2:
    case 3:
      itemHeight = "17rem";
      itemWidth = "100%";
      break;
    case 4:
      itemHeight = "13.5rem";
      itemWidth = "100%";
      break;
    case 5:
      itemHeight = "28rem";
      itemWidth = "100%";
      break;
    case 6:
      itemHeight = "13.5rem";
      itemWidth = "100%";
      break;
    default:
      itemHeight = "16rem";
      itemWidth = "10%";
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border flex flex-col space-y-4 border-white/[0.1]",
        className
      )}
      style={{
        background: id === 6 
          ? "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"
          : "rgb(4,7,29)",
        height: itemHeight,
        width: itemWidth,
      }}
      
    >
      <div className="relative w-full h-full flex flex-col">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover', 'object-center')}
            />
          )}
        </div>

        {/* Spare Image */}
        <div className={cn("absolute top-0 left-0 w-full h-full", { 'opacity-80': id === 5 })}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={'object-cover object-center w-full h-full'}
            />
          )}
        </div>

        
        {/* Gradient Animation */}
        {id === 6 && (
          <BackgroundGradientAnimation className="absolute top-0 left-0 w-full h-full z-40">
            {/* Gradient content */}
            {playAnimation && (
              <div className="absolute inset-0 flex items-center justify-center z-50">
                <Lottie 
                  loop={false}
                  autoplay={true}
                  animationData={animationData}
                  style={{ width: '100%', height: '100%' }}
                  onComplete={handleAnimationComplete}
                />
              </div>
            )}
          </BackgroundGradientAnimation>
        )}

        {/* Content */}
        <div className={cn(
          titleClassName, 
          'relative flex-grow flex flex-col justify-center px-5 p-5 lg:p-10',
          { 'z-10': id !== 6 }
        )}>
          {/* Content for non-id 6 */}
          {id !== 6 && (
            <>
              <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">  
                {description}
              </div>
              <div className={cn("font-sans font-bold text-lg lg:text-3xl max-w-96 z-10", titleClassName)}>
                {title}
              </div>
            </>
          )}

          {/* Content for id 6 */}
          {id === 6 && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center z-50 w-full px-10">
              <div className="font-sans font-bold text-lg lg:text-3xl text-white max-w-4xl">
                {title}
              </div>
            </div>
          )}

          {/* Additional Components */}
          {id === 2 && <GlobeDemo />}
          
          {id === 3 && (
  <div className="flex flex-wrap gap-3 lg:gap-4 w-fit absolute -right-10 lg:-right-16 lg:ml-[-20px]">
    {/* Tags */}
    <div className="flex flex-col gap-5 lg:gap-6">
      {['react.js', 'next.js', 'TypeScript'].map(item => (
        <span key={item} className="py-4 px-5 lg:py-4 lg:px-6 text-base lg:text-base opacity-80 lg:opacity-90 rounded-lg text-center bg-[#10132E] shadow-md lg:shadow-lg transition-transform transform hover:scale-105">
          {item}
        </span>
      ))}
      <span className="py-5 px-5 rounded-lg text-center bg-[#10132e] shadow-md lg:shadow-lg"/>
    </div>
    <div className="flex flex-col gap-5 lg:gap-6">
      <span className="py-5 px-5 rounded-lg text-center bg-[#10132e] shadow-md lg:shadow-lg"/>
      {['Tailwind', 'mongodb', 'Aws'].map(item => (
        <span key={item} className="py-4 px-5 lg:py-4 lg:px-6 text-base lg:text-base opacity-80 lg:opacity-90 rounded-lg text-center bg-[#10132E] shadow-md lg:shadow-lg transition-transform transform hover:scale-105">
          {item}
        </span>
      ))}
    </div>
  </div>
)}










        </div>

        {/* Magic Button */}
        {id === 6 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full flex justify-center z-50">
            <MagicButton
              title={copied ? 'Email Copied' : 'Copy my Email'}
              icon={<IoCopyOutline />}
              position="left"
              otherClasses="!bg-[#161a31] w-full"
              handleClick={handleCopy}
            />
          </div>
        )}
      </div>
    </div>
  );
};

// Usage of BentoGrid and BentoGridItem
export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <section className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
          <p className="text-lg mt-4">Scroll down to see my work</p>
        </div>
      </section>
      <section>
        <BentoGrid>
          <BentoGridItem
            id={1}
            title="Project 1"
            description="Description of Project 1"
            img="/path/to/image1.jpg"
          />
          <BentoGridItem
            id={2}
            title="Project 2"
            description="Description of Project 2"
            img="/path/to/image2.jpg"
          />
          {/* Add more BentoGridItem components as needed */}
        </BentoGrid>
      </section>
    </div>
  );
}
