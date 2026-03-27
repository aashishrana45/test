export const metadata = {
  title: "Next.js + Vercel",
  description: "Deployed with Claude Code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
