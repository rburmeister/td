import Header from '/components/Header';
import Notification from '/components/Notification';
import SmoothScrolling from "/components/SmoothScrolling";
import { kronaOne, messinaSans, messinaSansBold, messinaSerifItalic, messinaSerifItalicBold } from './fonts'
import "./globals.css";

export const metadata = {
  title: "Magnacore | Thorium Digital Coding Test",
  description: "Magnacore concept test developed by Ross Burmeister",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kronaOne.variable} ${messinaSans.variable} ${messinaSansBold.variable} ${messinaSerifItalic.variable} ${messinaSerifItalicBold.variable}`} >
        <Notification />
        <Header />
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
