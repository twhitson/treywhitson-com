import "../styles/globals.css";
import { IBM_Plex_Sans } from "@next/font/google";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Layout from "../components/Layout";

const font = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${font.variable} min-h-screen w-full overflow-x-hidden bg-zinc-100 font-sans text-zinc-900 transition-colors duration-300 ease-in-out dark:bg-zinc-900 dark:text-zinc-50`}
    >
      <DefaultSeo
        defaultTitle="❤️ Trey Whitson"
        titleTemplate="%s ❤️ Trey Whitson"
        description="Enterprise Architect"
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
