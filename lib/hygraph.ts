import request, { RequestDocument } from "graphql-request";

const HygraphAPI = (query: RequestDocument) =>
  request(process.env.HYGRAPH_API_URL ?? "", query);

export default HygraphAPI;
