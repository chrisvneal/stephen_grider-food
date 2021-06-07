import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer g6dg79Dvtrz1B5pnyGAzAlcxU4AY1cLcdhW7wg4RksKImR8nZJir5lQK7okYIdK2decKZ5r9UmAxO8kMRPw3btgZA0qC-ssPzltVfFykayqLmG7jxI7CQ7_Nsci1YHYx",
  },
});
