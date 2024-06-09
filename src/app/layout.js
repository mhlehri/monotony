import { Inter, Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata = {
  title: "Mahmud Hassan Lehri",
  description: "Developer Lehri's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} select-none`}>
        {/* <Image
          src="/me.png"
          className="fixed bottom-0 -left-24 z-50"
          width="500"
          height="300"
          alt=""
        /> */}
        {children}
      </body>
    </html>
  );
}
