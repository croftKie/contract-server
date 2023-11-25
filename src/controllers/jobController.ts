import { Request, Response } from "express";
import axios from "axios";
import { ParsedQs } from "qs";

interface queryObj {
  query: string | ParsedQs | string[] | ParsedQs[] | undefined;
  page: string | ParsedQs | string[] | ParsedQs[] | undefined;
}

export const getJobs = async (req: Request, res: Response) => {
  const query: queryObj = {
    query: req.query.query,
    page: req.query.page,
  };
  const data = await fetchJobData(query);
  return res.json(data);
  // return res.send("complete");
};

async function fetchJobData(query: queryObj) {
  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    params: {
      query: `${query.query} in UK`,
      page: `${query.page}`,
      num_pages: "1",
      remote_jobs_only: "true",
      employment_types: "CONTRACTOR",
      country: "GB",
    },
    headers: {
      "X-RapidAPI-Key": process.env.SEARCH_KEY,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
