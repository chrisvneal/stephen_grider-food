import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // function to use axios to retrieve results and store in state via state variable's setter function

  const searchApi = async (searchTerm) => {
    try {
      // capture response from yelp api using parameters
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "hawaii",
        },
      });

      // once the response is received, store them in the results piece of state. The data is always in 'response.data' and we want the 'business' object of that data

      setResults(response.data.businesses);
    } catch (err) {
      // if there's an error, it should be logged somehow
      console.log(err);

      // setting the error message will change state, update component and display any dynamic error messages
      setErrorMessage("Something went wrong!");
    }
  };

  // useEffect, when passed a function and empty array, will run one time. useState would keep updating and pulling results
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};
