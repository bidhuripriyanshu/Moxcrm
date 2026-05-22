import "./globals.css";

export const metadata = {
  title: "MoxCRM — Silent CRM",
  description: "The CRM that fills itself. Deals auto-created from Moxsend replies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
