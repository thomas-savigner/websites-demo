import "./globals.css";

export const metadata = {
  title: "Atelier Démo — Mini-sites fictifs",
  description: "Collection interne de décors web pour démonstrations vidéo.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
