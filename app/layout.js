import { Rubik } from "next/font/google";
import "@/asset/styles/globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Customize weights as needed
});

export const metadata = {
  title: "My gallery",
  description: "Practice Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${rubik.variable} antialiased`}>{children}</body>
    </html>
  );
}
