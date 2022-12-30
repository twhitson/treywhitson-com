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
      <div className="my-2 flex gap-2">
        <div>
          {logo != null ? (
            <Image
              src={logo.url}
              width={24}
              height={24}
              alt={`${companyName} logo`}
            />
          ) : (
            <div className="h-24 w-24" />
          )}
        </div>
        <h3 className="font-medium">{companyName}</h3>
      </div>
      <div className="ml-3 border-l-2 border-zinc-300 pl-4 dark:border-zinc-700">
        <ol>
          {positions.map((position) => (
            <li key={position.id} className="pt-4 last:pb-4">
              <PositionCard {...position} />
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default CompanyCard;
