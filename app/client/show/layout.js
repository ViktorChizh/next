import "./style.css"
import { Poppins } from "next/font/google";


const poppins = Poppins({
  weight: ['400', '700'],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export default function ShowLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <h1>TOP INFO</h1>
        {children}
      </body>
    </html>
  );
}
