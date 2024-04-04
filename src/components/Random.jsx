import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const API_KEY = import.meta.env.REACT_APP_GIPHY_API_KEY;

const API_KEY = "2VWCi5STRqliV9TaZpAnZeSLKr61DkEN";
const Random = () => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url); //similar to fetch but more secured
    // console.log(output); //{data} is distructing the data
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }

  useEffect(() => {
    //only i time render
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }

  return (
    <div
      className="flex flex-col justify-between items-center w-[800px] min-h-[500px]
     bg-green-400 rounded-3xl border-2 border-green-700 "
    >
      <h1 className="mt-4 text-green-950 font-bold text-2xl underline">
        A RANDOM GIF
      </h1>

      {loading ? (
        <Spinner />
      ) : (
        <img
          className="rounded-2xl max-h-[450px] my-4 border-2 shadow-2xl border-white focus:hover:shadow-2xl"
          src={gif}
          alt=""
          width="450"
        />
      )}

      <button
        className="bg-green-200 w-1/2 p-2.5 rounded-lg mb-4 font-bold text-xl 
        tracking-wide hover:scale-105 hover:shadow-2xl transition-all duration-200"
        onClick={clickHandler}
      >
        GENERATE
      </button>
    </div>
  );
};

export default Random;
