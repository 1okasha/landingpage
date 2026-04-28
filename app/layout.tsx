// import type { Metadata } from "next";
// import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
// import "./globals.css";

// const dmSans = DM_Sans({
//   variable: "--font-dm-sans",
//   subsets: ["latin"],
// });

// const plusJakartaSans = Plus_Jakarta_Sans({
//   variable: "--font-plus-jakarta-sans",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Opsode - Voice AI Infra",
//   description: "Landing page for Opsode Voice AI infrastructure.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="en"
//       className={`${dmSans.variable} ${plusJakartaSans.variable} h-full antialiased`}
//     >
//       <body className="min-h-full flex flex-col">{children}</body>
//     </html>
//   );
// }




// updated layout.tsx


import type { Metadata } from "next";
import {
  DM_Sans,
  Plus_Jakarta_Sans,
  Space_Grotesk,
  IBM_Plex_Mono,
  Inter,
} from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Opsode - Voice AI Infra",
  description: "Landing page for Opsode Voice AI infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={[
        dmSans.variable,
        plusJakartaSans.variable,
        spaceGrotesk.variable,
        ibmPlexMono.variable,
        inter.variable,
        "h-full antialiased",
      ].join(" ")}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}