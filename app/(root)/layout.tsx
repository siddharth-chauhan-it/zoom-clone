import { ReactNode } from "react";
import { Metadata } from "next";
import StreamVideoProvider from "@/providers/StreamClientProvider";

export const metadata: Metadata = {
  title: "YOOM",
  description: "Video Calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
  openGraph: {
    title: "YOOM",
    description: "Video Calling App",
    url: "https://yoom-video.vercel.app",
    siteName: "https://yoom-video.vercel.app",
    images: [
      {
        url: "https://yoom-video.vercel.app/images/og.png", // Must be an absolute URL
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YOOM",
    description: "Video Calling App",
    images: ["https://yoom-video.vercel.app/images/og.png"], // Must be an absolute URL
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
