import Random from "./components/Random";
import Spinner from "./components/Spinner";
import Tag from "./components/Tag";

function App() {
  return (
    <div className="background h-full w-full">
      <div className="relative w-full h-full max-w-[1280px] flex flex-col mx-auto">
        <h1 className="bg-white rounded-lg text-center text-3xl my-9 mx-20 font-bold p-2
        shadow-sm ">
          RANDOM GIFS
        </h1>
        <div className="flex flex-col justify-center items-center">
          <Random />
          {/* <Spinner/> */}
          <Tag />
        </div>
      </div>
    </div>
  );
}

export default App;
