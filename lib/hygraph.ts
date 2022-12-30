import request, { RequestDocument } from "graphql-request";

const HygraphAPI = (query: RequestDocument) =>
  request(process.env.HYGRAPH_API_URL ?? "", query);

export interface Company {
  id: string;
  companyName: string;
  logo: Asset;
  positions: Position[];
}

export interface Position {
  id: string;
  name: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export interface Asset {
  id: string;
  url: string;
  height: number;
  width: number;
}

export default HygraphAPI;
