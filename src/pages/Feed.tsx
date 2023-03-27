import { useContext } from "react";
import Player from "../components/Player";
import { Context } from "../context/AppContext";

export default function Feed() {
  const { searchResult } = useContext(Context);
  console.log(searchResult);
  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-2">
        {searchResult?.contents.map((x, i) => {
          return <Player item={x} key={i} />;
        })}
      </div>
    </div>
  );
}
