import { Footer, Header } from "@/components";
import "./globals.css";

export const metadata = {
  title: "CropGen",
  description: "cropgen website",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>CropGen</title>
        <meta name="description" content="Generated by create next app" />

        {/* Use PNG logo */}
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className="antialiased">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
