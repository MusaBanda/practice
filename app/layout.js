import { Outfit, Ovo, Roboto, } from "next/font/google";
import "./globals.css";


export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <title>Portfolio</title>
        <meta name="description" content="" />
      </head>
      <body className={`${outfit.className} antialiased leading-8 overflow-x-hidden 
      dark:bg-darkTheme dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
