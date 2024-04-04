import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "2VWCi5STRqliV9TaZpAnZeSLKr61DkEN";

const useGif = () => {
    const [tag, setTag] = useState("");
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);
  
    async function fetchData() {
      setLoading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
      const { data } = await axios.get(url); //similar to fetch but more secured
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
  };

export default useGif