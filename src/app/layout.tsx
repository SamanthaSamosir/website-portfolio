import Sidebar from "@/components/sidebar";
import "./globals.css";

export const metadata = {
  title: "Home",
  description: "YouTube-like Sidebar in Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon-16x16.png"></link>
        <link rel="manifest" href="public/site.webmanifest"></link>
        <title>Home</title>
      </head>
      <body className="flex bg-black-100 text-black">
        <Sidebar />
        <main className="flex-1 ml-0 lg:ml-70 p-6">{children}</main>
      </body>
    </html>
  );
}
