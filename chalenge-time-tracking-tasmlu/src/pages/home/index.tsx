import { FC } from "react";
import { TimeFrames } from "../../types/types";
import Styles from "./Home.module.scss";
import ProfileCard from "../../components/profile";
import FrameCard from "../../components/frame";

export const Home: FC<{ timeframes: TimeFrames[] }> = ({ timeframes }) => {
  return (
    <div className={Styles.container}>
      <ProfileCard />
      <div className={Styles.gridContainer}>
        <FrameCard />
        <FrameCard />
        <FrameCard />
        <FrameCard />
        <FrameCard />
        <FrameCard />
      </div>
    </div>
  );
};
