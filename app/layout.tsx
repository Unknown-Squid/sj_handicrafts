import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
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
  title: "SJ Handicrafts",
  description: "SJ Handicrafts - Premium handmade baskets, placemats, and custom handicrafts. Supporting local artisans and Persons Deprived of Liberty through inclusive craftsmanship. Quality handcrafted products from the Philippines.",
  keywords: [
    "handicrafts",
    "handmade baskets",
    "placemats",
    "custom handicrafts",
    "Philippines handicrafts",
    "artisan products",
    "handwoven baskets",
    "handicraft store",
    "SJ Handicrafts",
    "inclusive craft",
    "PDL handicrafts",
    "local artisans",
    "handmade products",
    "traditional crafts",
    "basket weaving",
    "handicraft gifts",
    "Philippines crafts",
    "artisan made",
    "handcrafted items",
    "custom baskets"
  ],
  authors: [{ name: "SJ Handicrafts" }],
  creator: "SJ Handicrafts",
  publisher: "SJ Handicrafts",
  openGraph: {
    title: "SJ Handicrafts",
    description: "Premium handmade baskets, placemats, and custom handicrafts. Supporting local artisans and Persons Deprived of Liberty through inclusive craftsmanship.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SJ Handicrafts",
    description: "Premium handmade baskets, placemats, and custom handicrafts from the Philippines.",
  },
  icons: {
    icon: [
      {
        url: "/logos/company logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/logos/company logo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/logos/company logo.png",
  },
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

        <div 
          className="fixed inset-0 w-full h-full z-0"
          style={{
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 20%',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
          aria-label="background"
        />

      </body>
    </html>
  );
}
