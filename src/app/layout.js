import { Montserrat } from "next/font/google";

import { Footer } from "../components/shared/Footer";
import { Header } from "../components/shared/Header";

import styles from "app/sass/globals.sass";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  styles: ["italic", "normal"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
