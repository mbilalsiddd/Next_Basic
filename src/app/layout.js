import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./redux/providers";
import SessionWrapper  from "./components/sessionWrapper";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
    
        <SessionWrapper>
          <Providers>
          {children}
          </Providers>
        </SessionWrapper>
  
      </body>
    </html>

  );
}










