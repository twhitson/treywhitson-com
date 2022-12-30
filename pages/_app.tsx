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
      className={`${inter.variable} min-h-screen w-full overflow-x-hidden bg-zinc-100 font-sans text-zinc-900 transition-colors duration-300 ease-in-out dark:bg-zinc-900 dark:text-zinc-50`}
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
