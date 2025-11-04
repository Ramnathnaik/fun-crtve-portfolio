"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import Image from "next/image";

interface Photo {
  key: string;
  url: string;
  lastModified: string;
  size: number;
}

export default function GalleryPage() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPhotos = async () => {
      const token = localStorage.getItem("authToken");
      const expiry = localStorage.getItem("authTokenExpiry");

      // Check if token exists and is valid
      if (!token || !expiry) {
        router.push("/auth");
        return;
      }

      const expiryDate = parseInt(expiry);
      const now = new Date().getTime();

      // Check if token expired
      if (expiryDate <= now) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("authTokenExpiry");
        router.push("/auth");
        return;
      }

      // Token is valid, fetch photos
      try {
        const response = await fetch("/api/gallery/photos", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch photos");
        }

        const data = await response.json();
        setPhotos(data.photos);
      } catch {
        setError("ಫೋಟೋಗಳನ್ನು ತರಲು ವಿಫಲವಾಗಿದೆ 😢");
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authTokenExpiry");
    router.push("/");
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center transition-colors duration-300">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-pink-500 dark:border-pink-400 mx-auto mb-4"></div>
          <p className="text-xl text-pink-600 dark:text-pink-400 font-semibold">
            ಲೋಡ್ ಆಗುತ್ತಿದೆ... 💕
          </p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 transition-colors duration-300">
        <div className="text-center bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 max-w-md transition-colors duration-300">
          <p className="text-xl text-red-600 dark:text-red-400 mb-4">{error}</p>
          <button
            onClick={() => router.push("/")}
            className="bg-pink-500 dark:bg-pink-600 hover:bg-pink-600 dark:hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-full transition-colors"
          >
            ಹೋಮ್ಗೆ ಹೋಗಿ
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-pink-600 dark:text-pink-400">
            ನಮ್ಮ ನೆನಪುಗಳು 💝
          </h1>
          <div className="flex gap-3">
            <button
              onClick={() => router.push("/")}
              className="text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 font-medium px-4 py-2"
            >
              ಹೋಮ್
            </button>
            <button
              onClick={handleLogout}
              className="bg-pink-500 dark:bg-pink-600 hover:bg-pink-600 dark:hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-full transition-all"
            >
              ಲಾಗ್ಔಟ್
            </button>
          </div>
        </div>
      </header>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {photos.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              ಯಾವುದೇ ಫೋಟೋಗಳು ಇಲ್ಲ 😢
            </p>
          </div>
        ) : (
          <>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-6 text-lg">
              ಒಟ್ಟು {photos.length} ಫೋಟೋಗಳು 📸
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.map((photo) => (
                <div
                  key={photo.key}
                  className="relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer group bg-gray-200 dark:bg-gray-700"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <Image
                    src={photo.url}
                    alt={photo.key}
                    className="w-full h-full object-contain"
                    width={240}
                    height={240}
                    onError={(e) => {
                      console.error(
                        "Image failed to load:",
                        photo.key,
                        photo.url
                      );
                      e.currentTarget.style.display = "none";
                    }}
                    onLoad={() => console.log("Image loaded:", photo.key)}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Modal for full-size image */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-pink-300 transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <X size={36} />
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={selectedPhoto.url}
              alt={selectedPhoto.key}
              width={320}
              height={320}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
