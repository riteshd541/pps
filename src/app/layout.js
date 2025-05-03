import "./globals.css";
import ScrollWrapper from "./components/ScrollWrapper";
import Cursor from "./components/Cursor";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        <ScrollWrapper>{children}</ScrollWrapper>
      </body>
    </html>
  );
}
