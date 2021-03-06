import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState("Enter Search Query");
  const [errorMsg, setErrorMsg] = useState("");

  const searchApi = async (searchTerm, location) => {
    setStatus("Searching");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          // location: "New York",
          location: location,
        },
      });
      setResults(response.data.businesses);
      setErrorMsg("");
      setStatus("");
    } catch (err) {
      setErrorMsg("Something went wrong. Please try later.");
      console.log(err);
      setStatus("");
    }
  };

  useEffect(() => {
    // Default search
    searchApi("pasta");
  }, []);

  return [searchApi, results, status, errorMsg];
};
