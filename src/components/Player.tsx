import React from "react";
import ReactPlayer from "react-player/youtube";
import { DataType } from "../interfaces/dataInterface";

type Props = {
  item: DataType;
};

const Player: React.FC<Props> = ({ item }) => {
  const { video } = item;
  console.log(video);
  return (
    <div className="my-2">
      <ReactPlayer
        height="1000%"
        width="100%"
        url={`https://www.youtube.com/watch?v=${video.videoId}`}
      />
    </div>
  );
};
export default Player;
