import type { Metadata } from "next";

import "./globals.css";
import {
  rootLayoutChildrenSection,
  rootLayoutSection,
} from "@/styles/styles.css";

import NavigationBar from "@/components/navigation-bar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Accord",
  description: "We didn’t steal Apple’s design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rootLayoutSection}`}>
        <NavigationBar />
        <section className={`${rootLayoutChildrenSection}`}>{children}</section>
        <Footer />
      </body>
    </html>
  );
}
