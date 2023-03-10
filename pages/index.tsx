import React from "react";

const IndexPage: React.FC = () => {
  return (
    <main className="prose prose-zinc mx-auto dark:prose-invert">
      <h1>Trey Whitson</h1>
      <p>
        Over the last 6 years, I have gained tremendous knowledge in many
        aspects of software engineering. I have extensive experience defining
        technical architecture and building products, even with minimal
        requirements.
      </p>
      <p>
        With a true passion for creating amazing products and architecting
        software solutions, I&apos;ve managed to start as a solo engineer and
        build that into a team of 15. My skillset is wide and I learn quickly.
        I&apos;m always willing to take on a new challenge!
      </p>

      <div>
        <a
          href="https://github.com/twhitson/treywhitson-com"
          target="_blank"
          rel="noreferrer"
          className="print:hidden"
        >
          View the source for this site
        </a>
      </div>
    </main>
  );
};

export default IndexPage;
