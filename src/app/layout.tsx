import "@/style/globals.css";

import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { META_DATA } from "@/constants/META_DATA";
import { GOOGLE_ADSENSE, GOOGLE_ANALYITICS } from "@/constants/env";

export const metadata = META_DATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${GOOGLE_ADSENSE}`}
          crossOrigin="anonymous"
        ></Script>
      </head>
      <body>
        {/* <header></header> */}
        {/* <main className="">{children}</main> */}
        {children}
        <GoogleAnalytics gaId={GOOGLE_ANALYITICS} />
        {/* <footer className="text-center p-4"></footer> */}
      </body>
    </html>
  );
}
