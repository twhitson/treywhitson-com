import { gql } from "graphql-request";
import { GetServerSideProps, NextPage } from "next";
import Card from "../components/Card";
import HygraphAPI from "../lib/hygraph";

type ResumePageProps = {
  data: any;
};

const ResumePage: NextPage<ResumePageProps> = ({ data }) => {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Resume</h1>

      <Card header="Card">Test</Card>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps<
  ResumePageProps
> = async () => {
  const data = await HygraphAPI(gql`
    {
      companies {
        companyName
        positions {
          name
          startDate
          endDate
          description
        }
      }
    }
  `);

  return {
    props: {
      data,
    },
  };
};

export default ResumePage;
