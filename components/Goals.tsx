// components/Goals.tsx
"use client";

import Link from "next/link";

export default function Goals() {
  return (
    <section
      id="goals"
      className="py-12 px-6 shadow-inner bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          ಕನಸುಗಳೆಡೆಗೆ ಹೆಜ್ಜೆ! 🚀
        </h2>
        <ul className="space-y-6 text-sm text-gray-700 dark:text-gray-300">
          <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
            ಬಿ.ಎ. ಪದವಿ ಪೂರ್ಣಗೊಂಡಿದೆ! 🎉
          </li>
          <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
            ಜ್ಞಾನದ ಮುಂದಿನ ಪಯಣಕ್ಕೆ ಸಿದ್ಧತೆ. 📚
          </li>
          <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
            ಮುಂದಿನ ಗುರಿ: ಕುಮಟಾದಲ್ಲಿ ಬಿ.ಎಡ್. (B.Ed.) ಪದವಿ ಅಧ್ಯಯನ. 🎓
          </li>
          <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
            ಕನ್ನಡ ಭಾಷೆಗೆ ಸೇವೆ ಸಲ್ಲಿಸುವ, ಅಕ್ಷರಗಳ ಲೇಕದಲ್ಲಿ ವಿಹರಿಸುವ ಹೆಬ್ಬಯಕೆ. ✨
          </li>
        </ul>
        <div className="text-center mt-8">
          <Link href="/education-journey">
            <button className="bg-yellow-500 dark:bg-yellow-600 hover:bg-yellow-600 dark:hover:bg-yellow-700 text-white font-semibold px-5 py-2 rounded-full text-sm transition-all shadow-md hover:shadow-lg">
              ಶಿಕ್ಷಣ ಪ್ರಯಾಣವನ್ನು ನೋಡಿ 🎓
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
