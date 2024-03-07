import { Krona_One } from 'next/font/google'
import localFont from 'next/font/local'

export const kronaOne = Krona_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-krona-one",
});

export const messinaSans = localFont({
  src: 'MessinaSans-Regular.woff2',
  display: 'swap',
  variable: "--font-messina-sans",
})

export const messinaSansBold = localFont({
  src: 'MessinaSans-Bold.woff2',
  display: 'swap',
  variable: "--font-messina-sans-bold",
});

export const messinaSerifItalic = localFont({
  src: 'MessinaSerif-RegularItalic.woff2',
  display: 'swap',
  variable: "--font-messina-serif-italic",
});

export const messinaSerifItalicBold = localFont({
  src: 'MessinaSerif-BoldItalic.woff2',
  display: 'swap',
  variable: "--font-messina-serif-italic-bold",
});