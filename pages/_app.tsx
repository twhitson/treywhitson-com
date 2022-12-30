import "../styles/globals.css";
import { Inter } from "@next/font/google";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Layout from "../components/Layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${inter.variable} font-sans min-h-screen w-full bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 overflow-x-hidden`}
    >
      <DefaultSeo
        defaultTitle="❤️ Trey Whitson"
        titleTemplate="%s ❤️ Trey Whitson"
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
