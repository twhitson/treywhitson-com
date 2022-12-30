import React from "react";
import Image from "next/image";
import { Company } from "../lib/hygraph";
import PositionCard from "./PositionCard";

type CompanyCardProps = Company;

const CompanyCard: React.FC<CompanyCardProps> = ({
  companyName,
  logo,
  positions,
}) => {
  return (
    <>
      <div className="flex gap-2">
        <div>
          <Image
            src={logo.url}
            width={24}
            height={24}
            alt={`${companyName} logo`}
          />
        </div>
        <h3 className="font-medium">{companyName}</h3>
      </div>
      <div className="ml-3 border-l-2 border-zinc-300 pl-4 pb-3 dark:border-zinc-700">
        <ol>
          {positions.map((position) => (
            <li key={position.id}>
              <PositionCard {...position} />
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default CompanyCard;
