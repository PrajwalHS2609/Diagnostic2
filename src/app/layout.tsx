import "./globals.css";
import TopBar from "@/components/TopBar/Topbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

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
      </head>
      <body>
        <TopBar />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
