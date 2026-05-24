import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";
import { PowerGlitch } from 'powerglitch';
import { div } from "motion/react-client";
console.log(PowerGlitch); // If this logs an object or undefined, calling PowerGlitch() will fail.
PowerGlitch.glitch('.glitch');



const parallaxBackground = () => {
  const {scrollYProgress} = useScroll();
  const x = useSpring(scrollYProgress, {damping: 50 });
  const mountain3Y = useTransform(x, [0,0.5], ["0%", "70%"]);
    const planetsX= useTransform(x, [0,0.5], ["0%", "-20%"]);
      const mountain2Y = useTransform(x, [0,0.5], ["0%", "30%"]);
        const mountain1Y = useTransform(x, [0,0.5], ["0%", "0%"]);

         useEffect(() => {
    // Select elements and apply the effect after the component mounts
    PowerGlitch.glitch('.glitch-action', {
      /* optional options */
    });
  }, []); 

        return (
          
          <section className=" inset-0  bg-black/40" style={{position: "absolute", width: "100vw", height: "100vh"}}>
            <div className="relative h-screen overflow-y-hidden">
              {/* Background Sky */}
              <div
              className="absolute inset-0 w-full h-screen -z-50"
              style={{backgroundImage: "url(public/assets/turkNASA.gif)", 
                backgroundPosition: "bottom",
                backgroundSize: "cover"
              }} 
              
              />
              {/* Mountain Layer 3 */}
               <motion.div 
               className="absolute inset-0 -z-40"
               style={{backgroundImage: "url(/assets/mountain-3.png)", 
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                y: mountain3Y, 
               }}
               />
               {/* Planets */}
                <motion.div
                 className="absolute inset-0 -z-30"
               style={{backgroundImage: "url(/assets/planets.png)", 
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                x: planetsX, 
               }} 
                />

                <div className= 'absolute inset-0 -z-40 glitch-action'>
                {/* Planets 2 */}
                <motion.div 
                 className="absolute inset-0 -z-35"
               style={{backgroundImage: "url(/assets/MacTonight.png)", 
                backgroundSize: '25vh', 
                backgroundRepeat: "no-repeat", 
                backgroundPosition: "fit-content",
                x: planetsX, 
               }} 
               
                />

                {/* Planets 3 */}
                <motion.div
                 className="absolute inset-0 -z-45"
               style={{backgroundImage: "url(/assets/moonface.png)", 
                backgroundSize: '20%',         
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                x: planetsX, 
               }} 
               
                /> </div>

                  {/* Mountian Layer 2  */}
                 <motion.div 
                  className="absolute inset-0 -z-20"
               style={{backgroundImage: "url(/assets/mountain-2.png)", 
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                y: mountain2Y, 
               }}
                 />
                 {/* Mountain Layer 1 */}
                  <motion.div 
                   className="absolute inset-0 -z-10"
               style={{backgroundImage: "url(/assets/mountain-1.png)", 
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                y: mountain1Y, 
               }}
                  />
            </div>
             </section>
         
        );    
       
};
export default parallaxBackground;