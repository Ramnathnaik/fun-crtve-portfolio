"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Check if valid token exists and redirect to gallery
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const expiry = localStorage.getItem("authTokenExpiry");

    if (token && expiry) {
      const expiryDate = parseInt(expiry);
      const now = new Date().getTime();

      // If token hasn't expired, redirect to gallery
      if (expiryDate > now) {
        router.push("/gallery");
      } else {
        // Token expired, clear it
        localStorage.removeItem("authToken");
        localStorage.removeItem("authTokenExpiry");
      }
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store token with expiration (30 days from now)
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 30);
        
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("authTokenExpiry", expiryDate.getTime().toString());
        router.push("/gallery");
      } else {
        setError(data.error || "ಲಾಗಿನ್ ವಿಫಲವಾಗಿದೆ 😢");
      }
    } catch {
      setError("ಬನೋ ತಪ್ಪಾಗಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ 🙏");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 w-full max-w-md transition-colors duration-300">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">
            ಸ್ವಾಗತ! 💝
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            ನಮ್ಮ ವಿಶೇಷ ನೆನಪುಗಳನ್ನು ನೋಡಲು ಲಾಗಿನ್ ಆಗಿ 🌸
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              ಹೆಸರು 👤
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-3 border-2 border-pink-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:border-pink-400 dark:focus:border-pink-500 transition-colors"
              placeholder="Sahana"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              ಪಾಸ್ವರ್ಡ್ 🔐
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border-2 border-pink-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:border-pink-400 dark:focus:border-pink-500 transition-colors"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-200 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-500 dark:bg-pink-600 hover:bg-pink-600 dark:hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "ಲೋಡ್ ಆಗುತ್ತಿದೆ... ⏳" : "ಲಾಗಿನ್ ಆಗಿ 💕"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => router.push("/")}
            className="text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 text-sm font-medium"
          >
            ← ಹಿಂದಕ್ಕೆ ಹೋಗಿ
          </button>
        </div>
      </div>
    </main>
  );
}
