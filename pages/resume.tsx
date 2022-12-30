import { gql } from "graphql-request";
import { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import CompanyCard from "../components/CompanyCard";
import HygraphAPI, { Company } from "../lib/hygraph";

type ResumePageProps = {
  data: {
    companies: Company[];
  };
};

const ResumePage: NextPage<ResumePageProps> = ({ data }) => {
  return (
    <>
      <NextSeo title="Resume" />

      <main>
        <h1 className="mb-8 text-3xl font-bold">Resume</h1>

        {data.companies.map((company) => (
          <CompanyCard key={company.id} {...company} />
        ))}
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<
  ResumePageProps
> = async () => {
  const data = await HygraphAPI(gql`
    {
      companies {
        id
        companyName
        logo {
          url
        }
        positions {
          id
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
