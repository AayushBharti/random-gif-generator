import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";



// const API_KEY = "2VWCi5STRqliV9TaZpAnZeSLKr61DkEN";
const Tag = () => {
  const [tag, setTag] = useState("");
  //   const [gif, setGif] = useState("");
  //   const [loading, setLoading] = useState(false);

  //   async function fetchData() {
  //     setLoading(true);
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //     const { data } = await axios.get(url); //similar to fetch but more secured
  //     //{data} is distructing the data
  //     // console.log(output);
  //     const imageSource = data.data.images.downsized_large.url;
  //     setGif(imageSource);
  //     setLoading(false);
  //   }

  //   useEffect(() => {
  //     //only 1 time render
  //     fetchData();
  //   }, []);

  const { gif, loading, fetchData } = useGif(tag);

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div
      className="my-10 flex flex-col justify-between items-center w-[800px] min-h-[500px]
     bg-blue-400 rounded-3xl border-2 border-blue-600 "
    >
      <h1 className="mt-4 text-green-950 font-bold text-2xl underline">
        RANDOM {tag} GIF
      </h1>

      {loading ? (
        <Spinner />
      ) : (
        <img
          src={gif}
          className="border-2 shadow-2xl border-white rounded-2xl max-h-[450px] my-4"
          width="450"
        />
      )}

      <div className="flex flex-col w-1/2">
        <input
          onChange={changeHandler}
          value={tag}
          type="text"
          className="text-center bg-blue-200 w-full p-2.5 rounded-lg mb-4 font-bold text-xl "
        />

        <button
          className="bg-blue-200 w-full p-2.5 rounded-lg mb-4 font-bold text-xl 
        tracking-wide hover:scale-105 transition-all duration-200"
          onClick={() => fetchData()}
        >
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default Tag;
