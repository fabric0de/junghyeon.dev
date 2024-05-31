import "@/style/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>{/* 여기에 meta 태그, title 등 추가 가능 */}</head>
      <body>
        <div className="flex flex-col min-h-screen mx-auto max-w-screen-lg ">
          <Header />
          <main className="flex-grow px-32">
            <div className="w-full">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
