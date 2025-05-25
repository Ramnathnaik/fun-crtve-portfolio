"use client";

import Link from "next/link";
import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about-me"
      className="bg-gray-100 py-12 shadow-md w-full rounded-xl px-6 md:px-16"
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-xl font-bold text-yellow-600">
          ಸದಾ ನಗುಮೊಗದ ಸಹನಾಳ ಪ್ರಪಂಚಕ್ಕೆ ಸುಸ್ವಾಗತ! 😄
        </h2>
        <p className="text-sm md:text-xl text-gray-800">
          ಪ್ರಕೃತಿ ಸೌಂದರ್ಯದ ನಡುವೆ ಬೆಳೆದ ಸಹನಾ. 🌳 ನಗುವುದು ಮತ್ತು ನಗಿಸುವುದು ಅಂದರೆ
          ಅಚ್ಚುಮೆಚ್ಚು. 😂
        </p>
        <p className="text-sm md:text-xl text-gray-800">
          ಭಾರತೀಯ ಸಂಸ್ಕೃತಿ, ಸೀರೆ-ಕುರ್ತಾ ಪ್ರೀತಿಸುವ ಇವಳು. 👗 ದೇವರಿಗೆ ಶರಣು ಎನ್ನುವ
          ಭಕ್ತೆ. 🙏
        </p>
        <p className="text-sm md:text-xl text-gray-800">
          🍦 ಕ್ಯಾಮರಾ ಕಂಡರೆ ಸಾಕು ಪೋಸ್ ಕೊಡಲು ರೆಡಿ! 📸
        </p>
        <p className="text-sm md:text-xl text-gray-800">
          ಸ್ನೇಹಿತರು ಮತ್ತು ಕುಟುಂಬವೇ ಇವಳ ಬಲ. 👨‍👩‍👧‍👦 ಕನಸುಗಳನ್ನು ಬೆನ್ನತ್ತಿ ಸಾಗುವ ದೃಢತೆ
          ಇವಳಿಗಿದೆ. ✨
        </p>
        <Link href="/about">
          <button className="mt-4 text-sm bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full shadow-md">
            ಇನ್ನಷ್ಟು ಮಾಹಿತಿ ಬೇಕಾ?
          </button>
        </Link>
      </div>
    </section>
  );
}
