"use client";
import "./globals.css";
import TopBar from "@/components/TopBar/Topbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import BookPopUp from "@/components/BookPopUp/BookPopUp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QBFT7KMNVD"
        ></script>
        <script>
          {`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-QBFT7KMNVD');`}
        </script>
        <meta
          name="google-site-verification"
          content="vHkIWmlfT3TV57tK_HQnazui3gfTTDRLLKBrkUTUaUE"
        />
      </head>
      <body>
        <TopBar />
        <Navbar />
        {children}
        <BookPopUp />
        <Footer />
      </body>
    </html>
  );
}
