import { Metadata } from "next";
import { GOOGLE_ADSENSE, GOOGLE_SEARCH, NAVER_SEARCH } from "./env";

export const META_DATA: Metadata = {
  title: {
    default: `플로우션 | Flowtion`,
    template: `플로우션 | %s`,
  },
  description: "동영상 자동 재생 노션 위젯",
  // openGraph: {
  //   title: "title",
  //   description: "description",
  //   images: ["/meta/og.png"],
  // },
  icons: {
    icon: "/meta/favicon.ico",
    apple: "/meta/favicon.ico",
  },
  verification: {
    google: GOOGLE_SEARCH,
  },
  other: {
    "naver-site-verification": NAVER_SEARCH,
    "google-adsense-account": GOOGLE_ADSENSE,
  },
};
