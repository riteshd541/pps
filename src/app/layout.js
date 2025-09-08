// import "./globals.css";
// import ScrollWrapper from "./components/ScrollWrapper";
// import Cursor from "./components/Cursor";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <Cursor />
//         <ScrollWrapper>{children}</ScrollWrapper>
//       </body>
//     </html>
//   );
// }

import "./globals.css";
import { Exo, Outfit, PT_Serif } from "next/font/google";

const exo = Exo({
  subsets: ["latin"],
  variable: "--font-exo",
  display: "swap", // good practice
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"], // ✅ fix here
  variable: "--font-ptserif",
  display: "swap",
});

export const metadata = {
  title: "Picture Perfect Studio",
  description: "Picture Perfect Studio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${exo.variable} ${outfit.variable} ${ptSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
