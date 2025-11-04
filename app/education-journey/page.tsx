"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { GraduationCap, MapPin, Star, Trophy, Sparkles } from "lucide-react";

interface JourneyStep {
  year: number;
  place: string;
  level: string;
  description: string;
  icon: string;
  color: string;
  stars: number;
}

const journeySteps: JourneyStep[] = [
  {
    year: 2010,
    place: "ಹಿನ್ನೂರು",
    level: "ಪ್ರಾಥಮಿಕ ಶಾಲೆ",
    description: "ಜ್ಞಾನದ ಮೊದಲ ಹೆಜ್ಜೆ ಇಲ್ಲಿಂದ ಆರಂಭ!",
    icon: "🌱",
    color: "from-green-400 to-emerald-500",
    stars: 3,
  },
  {
    year: 2015,
    place: "ಅನಿಲಗೋಡು",
    level: "ಉಚ್ಚ ಪ್ರಾಥಮಿಕ ಶಾಲೆ",
    description: "ಬೆಳವಣಿಗೆಯ ಹೊಸ ದಿಗಂತ!",
    icon: "🌿",
    color: "from-blue-400 to-cyan-500",
    stars: 4,
  },
  {
    year: 2017,
    place: "ಅನಿಲಗೋಡು",
    level: "ಹೈಸ್ಕೂಲ್",
    description: "ಕನಸುಗಳು ರೂಪುಗೊಳ್ಳುತ್ತಿವೆ!",
    icon: "🌳",
    color: "from-purple-400 to-pink-500",
    stars: 5,
  },
  {
    year: 2020,
    place: "ಇದುಜುಂಜಿ",
    level: "ಪಿ.ಯು. ಕಾಲೇಜು",
    description: "ಹೊಸ ಸವಾಲುಗಳನ್ನು ಎದುರಿಸುವ ಸಿದ್ಧತೆ!",
    icon: "🎓",
    color: "from-orange-400 to-red-500",
    stars: 5,
  },
  {
    year: 2022,
    place: "ಹೊನ್ನಾವರ",
    level: "ಬಿ.ಎ (ಕನ್ನಡ)",
    description: "ಕನ್ನಡ ಪ್ರೀತಿಯ ಪ್ರಯಾಣ!",
    icon: "📚",
    color: "from-yellow-400 to-amber-500",
    stars: 5,
  },
  {
    year: 2025,
    place: "ಕುಮಟಾ",
    level: "ಎಮ್.ಎ (ಕನ್ನಡ)",
    description: "ಮುಂಬರುವ ಸಾಧನೆಗಳ ಮುಂಗಡ!",
    icon: "🏆",
    color: "from-pink-400 to-rose-500",
    stars: 5,
  },
];

export default function EducationJourney() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Handle client-side mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleStepClick = (index: number) => {
    if (activeStep === index) {
      setActiveStep(null);
      return;
    }

    setActiveStep(index);

    if (!completedSteps.includes(index)) {
      setCompletedSteps([...completedSteps, index]);

      if (completedSteps.length + 1 === journeySteps.length) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      }
    }
  };

  const progress = (completedSteps.length / journeySteps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900 py-12 px-4 relative overflow-hidden">
      {/* Floating Background Elements */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => {
            const randomX = Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000);
            const randomEndX = Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000);
            const randomDuration = Math.random() * 10 + 10;
            const randomIcon = ["📖", "✏️", "🎒", "⭐", "🌟"][Math.floor(Math.random() * 5)];
            
            return (
              <motion.div
                key={i}
                className="absolute text-4xl opacity-20"
                initial={{ y: -100, x: randomX }}
                animate={{
                  y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 100,
                  x: randomEndX,
                }}
                transition={{
                  duration: randomDuration,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {randomIcon}
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Confetti Effect */}
      {showConfetti && isMounted && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => {
            const randomX = Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000);
            const randomDuration = Math.random() * 2 + 2;
            
            return (
              <motion.div
                key={i}
                className="absolute text-2xl"
                initial={{
                  x: randomX,
                  y: -50,
                  rotate: 0,
                }}
                animate={{
                  y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 50,
                  rotate: 360,
                }}
                transition={{
                  duration: randomDuration,
                  ease: "linear",
                }}
              >
                🎉
              </motion.div>
            );
          })}
        </div>
      )}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 mb-4 py-2">
            ಸಹನಾ ಶಿಕ್ಷಣ ಪ್ರಯಾಣ 🎓
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
            ಜ್ಞಾನದ ರೋಮಾಂಚಕ ಸಾಹಸ!
          </p>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                ಪ್ರಗತಿ
              </span>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {completedSteps.length}/{journeySteps.length}
              </span>
            </div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-green-400 to-blue-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            {progress === 100 && (
              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="mt-2 text-lg font-bold text-green-600 dark:text-green-400"
              >
                ಎಲ್ಲಾ ಹಂತಗಳನ್ನು ಪರಿಶೀಲಿಸಿದ್ದೀರಿ! 🎊
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* Journey Path */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 to-pink-400 hidden md:block" />

          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`mb-16 flex items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col`}
            >
              {/* Content Card */}
              <motion.div
                className="w-full md:w-5/12 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleStepClick(index)}
              >
                <div
                  className={`bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 border-4 transition-all ${
                    completedSteps.includes(index)
                      ? "border-green-400 dark:border-green-600"
                      : "border-gray-200 dark:border-gray-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className={`text-5xl`}
                        animate={
                          activeStep === index
                            ? { rotate: [0, 360], scale: [1, 1.2, 1] }
                            : {}
                        }
                        transition={{ duration: 0.5 }}
                      >
                        {step.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                          {step.year}
                        </h3>
                        <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                          <MapPin size={16} />
                          <span className="text-sm">{step.place}</span>
                        </div>
                      </div>
                    </div>
                    {completedSteps.includes(index) && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="text-green-500"
                      >
                        <Trophy size={32} />
                      </motion.div>
                    )}
                  </div>

                  <div
                    className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${step.color} text-white font-semibold mb-3`}
                  >
                    {step.level}
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    {step.description}
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(step.stars)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={
                          activeStep === index ? { scale: 1 } : { scale: 1 }
                        }
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star
                          className={`${
                            completedSteps.includes(index)
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-gray-300 text-gray-300"
                          }`}
                          size={20}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Expanded Content */}
                  {activeStep === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                    >
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                        ಈ ಹಂತವು ಸಹಾನಾಳ ಶೈಕ್ಷಣಿಕ ಪ್ರಯಾಣದ ಮಹತ್ವದ ಮೈಲುಗಲ್ಲು!
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-purple-600 dark:text-purple-400">
                        <Sparkles size={16} />
                        <span className="text-sm font-semibold">
                          ವಿಶೇಷ ಸ್ಥಾನಮಾನ ಅನ್ಲಾಕ್ ಮಾಡಲಾಗಿದೆ!
                        </span>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* Center Circle (Timeline Node) */}
              <div className="w-full md:w-2/12 flex justify-center my-4 md:my-0">
                <motion.div
                  className={`w-16 h-16 rounded-full border-4 flex items-center justify-center shadow-lg ${
                    completedSteps.includes(index)
                      ? "bg-gradient-to-br from-green-400 to-emerald-500 border-green-600"
                      : "bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                  }`}
                  animate={
                    activeStep === index
                      ? { scale: [1, 1.3, 1], rotate: [0, 180, 360] }
                      : {}
                  }
                  transition={{ duration: 0.6 }}
                >
                  <GraduationCap
                    size={28}
                    className={
                      completedSteps.includes(index)
                        ? "text-white"
                        : "text-gray-400 dark:text-gray-500"
                    }
                  />
                </motion.div>
              </div>

              {/* Spacer for alignment */}
              <div className="w-full md:w-5/12 hidden md:block" />
            </motion.div>
          ))}
        </div>

        {/* Achievement Badge */}
        {progress === 100 && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="text-center mt-12"
          >
            <div className="inline-block bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white rounded-2xl p-8 shadow-2xl">
              <Trophy size={64} className="mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">ಅಭಿನಂದನೆಗಳು! 🎉</h2>
              <p className="text-lg">
                ನೀವು ಸಹಾನಾಳ ಸಂಪೂರ್ಣ ಶಿಕ್ಷಣ ಪ್ರಯಾಣವನ್ನು ಅನ್ವೇಷಿಸಿದ್ದೀರಿ!
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
