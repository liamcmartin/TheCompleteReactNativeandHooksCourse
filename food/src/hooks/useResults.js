import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]); // from yelp
  const [errorMsg, setErrorMsg] = useState("");

  // this is async so we need to handle the promise
  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get("/search", {
        params: {
          term: searchTerm, //term, // term: term,
          limit: 50,
          location: "san jose"
        }
      }); // access /search route
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMsg("Something went wrong");
    }
  };

  //To call search APi once as soon as app opens
  useEffect(() => {
    searchApi("pasta");
  }, []); //adding [] as a second arguement means this code will only be run once

  return [searchApi, results, errorMsg];
};
