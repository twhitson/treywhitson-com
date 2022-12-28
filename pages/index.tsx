import Head from "next/head";
import { NextPage } from "next";
import Card from "../components/Card";
import useTheme from "../hooks/useTheme";

const IndexPage: NextPage = () => {
  const { setTheme } = useTheme();

  return (
    <main>
      <h1 className="text-3xl font-bold underline">Resume</h1>

      <Card header="Card">Test</Card>

      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </main>
  );
};

export default IndexPage;
