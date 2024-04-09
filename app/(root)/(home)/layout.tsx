import { ReactNode } from "react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

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

type HomeLayoutProps = {
  children: ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
