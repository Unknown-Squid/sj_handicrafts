import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import backgroundImage from '../public/bakcground-image.png';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} 
        flex flex-col antialiased relative overflow-hidden h-screen`}
      >

        {children}

        <div className="h-screen w-full absolute top-0 left-0 z-0">
          <Image 
            src={backgroundImage} 
            alt="background"
            fill
            className="w-full h-full"
          />
        </div>

      </body>
    </html>
  );
}
