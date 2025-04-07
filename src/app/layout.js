import { Inter } from "next/font/google";
import "./globals.css";
import "./font.css";
import Provider from "@/app/provider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Moniclan',
  description: 'Moniclan - Making payments easy',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>

      </head>
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
