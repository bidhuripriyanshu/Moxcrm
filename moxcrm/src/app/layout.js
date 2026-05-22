import "./globals.css";

export const metadata = {
  title:"MoxCRM",
  description: "Welcome to MoxCRM",
};

export default function RootLayout({ children }) {
  return (
  <html>
      <body className="min-h-full flex flex-col">{children}</body>

  </html>
    
  );
}
