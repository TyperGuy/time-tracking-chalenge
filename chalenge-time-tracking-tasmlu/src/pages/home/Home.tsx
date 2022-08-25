import { FC } from "react";
import { TimeFrames } from "../../types/types";

export const Home: FC<{ timeframes: TimeFrames[] }> = ({ timeframes }) => {
  return (
    <div>
      {timeframes.map((data) => {
        return <h1>{data.title}</h1>;
      })}
    </div>
  );
};
