import "../styles/globals.css";
import Providers from "./providers";

export const metadata = {
  title: "battle4",
  description: "Demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
