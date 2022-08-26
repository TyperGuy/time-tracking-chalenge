import { FC, useState } from "react";
import { TimeFrames, Views } from "../../types/types";
import Styles from "./Home.module.scss";
import ProfileCard from "../../components/profile";
import FrameCard from "../../components/frame";

export const Home: FC<{ timeframes: TimeFrames[] }> = ({ timeframes }) => {
  const [preferedView, setPreferedView] = useState<keyof Views>("daily");
  return (
    <div className={Styles.container}>
      <ProfileCard setPreferedView={setPreferedView} />
      <div className={Styles.gridContainer}>
        {timeframes.map((frames) => {
          return (
            <FrameCard
              preferedView={preferedView}
              timeframe={frames}
              key={frames.title}
            />
          );
        })}
      </div>
    </div>
  );
};
