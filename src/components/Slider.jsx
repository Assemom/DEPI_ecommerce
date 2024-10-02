import { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import img from "../../public/2_f639d039-1b63-405c-ab7d-4561d7871d76.webp";
// import img2 from "../../public/slider2.webp";
import { AnimatePresence, motion } from "framer-motion";
import { MoveRight } from "lucide-react";

const Slider = ({ sliderData }) => {
   const [currentSlide, setCurrentSlide] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentSlide((prev) =>
            prev === sliderData.length - 1 ? 0 : prev + 1,
         );
      }, 7000);
      return () => clearInterval(interval);
   }, [currentSlide, sliderData.length]);

   const handleSlideChange = (slideNum) => {
      setCurrentSlide(slideNum);
   };

   // Animation variants for Framer Motion
   const slideVariants = {
      enter: {
         x: "100%",
      },
      center: {
         x: 0,
         transition: { duration: 1 },
      },
      exit: {
         x: "-100%",
         transition: { duration: 1 },
      },
   };

   const textVariant = {
      enter: { opacity: 0, y: -40 },
      center: {
         opacity: 1,
         y: 0,
         transition: { duration: 1.2, delay: 0.6 },
      },
      exit: { opacity: 0, y: -40, transition: { duration: 0.1 } },
   };

   return (
      <div className="relative mx-auto h-full w-full overflow-hidden">
         <AnimatePresence initial={false}>
            <motion.div
               key={currentSlide}
               className="absolute inset-0"
               initial="enter"
               animate="center"
               exit="exit"
               variants={slideVariants}
            >
               <motion.img
                  initial={{ scale: 0.9 }}
                  animate={{
                     scale: [1.2, 1],
                     transition: { duration: 0.9 },
                  }}
                  src={sliderData[currentSlide].image}
                  alt={sliderData[currentSlide].title}
                  className="h-[40svh] w-full rounded-md object-cover md:h-full"
               />

               <div className="absolute inset-0 -top-6 flex translate-y-1/4 flex-col justify-start gap-4 p-8 text-black md:max-w-[50%] md:text-white">
                  <motion.h2
                     variants={textVariant}
                     initial={"enter"}
                     animate="center"
                     exit="exit"
                     className="text-h4 font-bold"
                  >
                     {sliderData[currentSlide].title}
                  </motion.h2>
                  <motion.p
                     variants={textVariant}
                     initial={{ opacity: 0, y: -40 }}
                     animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                           duration: 1.2,
                           delay: 0.4,
                        },
                     }}
                     exit="exit"
                     className="font-normal text-[13ox] text-gray-300"
                  >
                     {sliderData[currentSlide].description}
                  </motion.p>
                  <motion.button className="flex max-w-fit items-center gap-2 rounded-lg bg-white px-4 py-2 text-[15px] text-black transition duration-300 hover:bg-black hover:text-white">
                     <span>Shop now</span> <MoveRight size={16} />
                  </motion.button>
               </div>
            </motion.div>
         </AnimatePresence>

         <div className="absolute bottom-4 left-1/2 hidden transform gap-3 p-2 md:flex">
            {sliderData.map((slide, index) => {
               return (
                  <i
                     key={index}
                     className={`relative size-2 cursor-pointer rounded-full ${index === currentSlide ? "bg-yellow-500" : "bg-white"} `}
                     onClick={() => handleSlideChange(index)}
                  />
               );
            })}
         </div>
      </div>
   );
};

Slider.propTypes = {
   sliderData: PropTypes.arrayOf(
      PropTypes.shape({
         image: PropTypes.string.isRequired,
         title: PropTypes.string.isRequired,
         description: PropTypes.string.isRequired,
      }),
   ).isRequired,
};

export default Slider;
