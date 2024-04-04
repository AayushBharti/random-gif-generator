import { useEffect, useState } from "react";
import axios from "axios";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;         //for react
// const API_KEY = import.meta.env.REACT_APP_GIPHY_API_KEY;     //for vite + react

const API_KEY = "2VWCi5STRqliV9TaZpAnZeSLKr61DkEN";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

// const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url); //similar to fetch but more secured
    //{data} is distructing the data
    // console.log(output);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }

  useEffect(() => {
    //only 1 time render
    fetchData();
  }, []);

  return { gif, loading, fetchData };
};

export default useGif;
