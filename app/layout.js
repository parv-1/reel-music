import "./styles/globals.scss";

export const metadata = {
  title: "ReelMusic — Real artists. Real pay.",
  description: "A strictly NO-AI music platform with an artist-first model."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
