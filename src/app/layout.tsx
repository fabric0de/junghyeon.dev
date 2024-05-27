// src/app/layout.tsx
import "@/style/globals.css";
import Header from "@/components/layout/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto px-32">
          <Header />
          <main className="py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
