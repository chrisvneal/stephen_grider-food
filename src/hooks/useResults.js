import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // function to use axios to retrieve results and store in state via state variable's setter function

  const searchApi = async (searchTerm) => {
    try {
      // capture response frpm yelp api using parameters
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "hawaii",
        },
      });

      // once the response is received, store them in the results piece of state. The data is always in 'response.data' and we want the business object of that data

      setResults(response.data.businesses);
    } catch (err) {
      console.log(err);

      setErrorMessage("Something went wrong!");
    }
  };

  // Call searchAPI when component is first rendered... bAD CODE!

  // searchApi("pasta");

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};
