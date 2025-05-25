"use client";

export default function Hero() {
  return (
    <div className={`relative inline-block`}>
      <svg
        width={350}
        height={260}
        viewBox="0 0 400 300"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Cloud shape mask */}
          <clipPath id="cloudClip">
            <path d="M80 150 C80 120, 100 100, 130 100 C140 80, 170 80, 180 100 C200 90, 230 90, 250 100 C280 90, 310 110, 320 140 C340 140, 360 160, 360 180 C360 200, 340 215, 320 205 C300 218, 280 212, 260 205 C240 212, 220 218, 200 205 C180 212, 160 218, 140 205 C120 212, 100 218, 100 205 C80 212, 60 200, 60 180 C60 170, 70 160, 80 150 Z" />
          </clipPath>
        </defs>

        {/* Image clipped to cloud shape */}
        <image
          href={"/use-profile.png"}
          x="60"
          y="80"
          width="300"
          height="220"
          clipPath="url(#cloudClip)"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>
    </div>
  );
}
