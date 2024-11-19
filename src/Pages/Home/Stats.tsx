import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Stats = () => {
  const descriptions = [
    "Hackathon Attendees",
    "Workshops Hosted",
    "Articles Written",
    "Projects Completed",
  ];

  const maxNumbers = [500, 78, 35, 28];

  const [statsData, setStatsData] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatsData((prev) =>
        prev.map((num, index) => Math.min(num + maxNumbers[index] / 75, maxNumbers[index]))
      );
    }, 25); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="flex flex-col items-center gap-10 h-screen justify-start text-white py-24">
      
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="title font-bold mb-10 text-5xl"
      >
        Get Involved
      </motion.h1>


      <div className="flex flex-col gap-10">
        {statsData.map((stat, index) => (
          <div key={index} className="stat-item flex items-center">

            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: -40, opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.125, ease: "easeOut" }}
              className="number text-7xl font-bold w-20 text-right text-white hero-text-shadow"
            >
              {Math.round(stat) + (Math.round(stat) == maxNumbers[index] ? '+' : '')}
            </motion.span>


            <motion.span
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 40, opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.125, ease: "easeOut" }}
              className="text-white text-2xl ml-24"
            >
              {descriptions[index]}
            </motion.span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
