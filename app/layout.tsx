import type { Metadata } from "next";
import { Noto_Sans_Kannada } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const notoSansKannada = Noto_Sans_Kannada({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["kannada", "latin"],
  variable: "--font-noto-sans-kannada",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ಸಹನಾ❤️",
  description: "A special portfolio for Sahana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kn">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${notoSansKannada.variable} font-sans antialiased transition-colors duration-300`}
        style={{ fontFamily: "var(--font-noto-sans-kannada)" }}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
