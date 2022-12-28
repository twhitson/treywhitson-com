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
      className={`${inter.variable} font-sans h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-50`}
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
