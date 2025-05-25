"use client";

import { useRouter } from "next/navigation";

export default function MiniFunFacts() {
  const router = useRouter();
  const miniFacts = [
    "ಶೀತವಿದ್ದರೂ ಐಸ್‌ಕ್ರೀಂಗೆ ಎಂದಿಗೂ 'ಬೇಡ' ಎನ್ನಲ್ಲ! 🍦",
    "ಫೋನ್ ತುಂಬೆಲ್ಲಾ ಫೋಟೋಗಳು! 📸 ಕ್ಯಾಮರಾ ಕಂಡರೆ ಸಾಕು.",
    "ಛತ್ರಿ ತಗೊಂಡು ಹೋದ್ರೆ ಮಳೆ ಬರಲ್ಲ, ಆದರೆ ತಗೊಂಡಿಲ್ಲ ಅಂದ್ರೆ ಗ್ಯಾರಂಟಿ! ☔😂",
  ];

  return (
    <section className="p-6 max-w-2xl mx-auto my-10 text-center">
      <h2 className="text-xl font-bold text-yellow-600 mb-4">
        ಚಿಕ್ಕಚಿಕ್ಕ ಜಾಣ್ಮೆಗಳು 💫
      </h2>
      <ul className="space-y-3 text-sm text-gray-700 mb-6">
        {miniFacts.map((fact, index) => (
          <li key={index}>✨ {fact}</li>
        ))}
      </ul>
      <button
        onClick={() => router.push("/fun-facts")}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-5 py-2 rounded-full text-sm transition-shadow shadow-md hover:shadow-lg"
      >
        ಇನ್ನೂ ಫನ್ ಫ್ಯಾಕ್ಟ್ಸ್ ಬೇಕಾ? 🤗
      </button>
    </section>
  );
}
