export default function FunFacts() {
  const facts = [
    "ಕುಟುಂಬ ಅಂದರೆ ಇವಳಿಗೆ ಪ್ರಾಣ! 👨‍👩‍👧‍👦 ಮನೆಯವರ ಜೊತೆ ಪ್ರೀತಿ, ನಲಿವು ಹಂಚಿಕೊಳ್ಳಲು ಇವಳು ಸದಾ ಸಿದ್ಧ. ❤️",
    "ಡೈರಿ ಮಿಲ್ಕ್ ಫ್ರೂಟ್ಸ್ ಅಂಡ್ ನಟ್ಸ್ ಚಾಕೊಲೇಟ್ 🍫 ಅಂದರೆ ಇವಳಿಗೆ ಪಂಚಪ್ರಾಣ! ಶೀತವಿದ್ದರೂ ಐಸ್‌ಕ್ರೀಂಗೆ ಎಂದಿಗೂ 'ಬೇಡ' ಎನ್ನಲ್ಲ. 🍦",
    "ಫೋಟೋ ಕ್ಲಿಕ್ ಮಾಡುವುದರಲ್ಲಿ ಇವಳು ಎತ್ತಿದ ಕೈ! 📸 ಇವಳ ಫೋನ್ ಸ್ಟೋರೇಜ್ ಯಾವಾಗಲೂ ಫುಲ್! 😅",
    "ದೇವರಲ್ಲಿ ಅಪಾರ ನಂಬಿಕೆ. 🙏 ಯಾವಾಗಲೂ ದೇವರು ತನ್ನ ಜೊತೆಗಿದ್ದಾನೆ ಎಂದು ದೃಢವಾಗಿ ನಂಬುತ್ತಾಳೆ. ✨",
    "ಮಳೆಗೆ ಛತ್ರಿ ತಗೊಂಡು ಕಾಲೇಜಿಗೆ ಹೋದ್ರೆ ಮಳೆ ಬರಲ್ಲ! ☔️ ಆದರೆ ತಗೊಂಡಿಲ್ಲ ಅಂದ್ರೆ ಮಾತ್ರ ಮಳೆ ಗ್ಯಾರಂಟಿ! 😂",
  ];

  return (
    <section className="bg-white h-screen py-10 px-4">
      <section className="bg-gray-100 py-10 px-6 rounded-xl shadow-md max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-center text-yellow-600 mb-6">
          ಮಜೆಯ ಫ್ಯಾಕ್ಟ್ಸ್ 😄
        </h2>
        <ul className="space-y-4 text-sm text-gray-800 list-disc text-center list-inside">
          {facts.map((fact, index) => (
            <p key={index}>{fact}</p>
          ))}
        </ul>
      </section>
    </section>
  );
}
