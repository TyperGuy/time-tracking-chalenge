import { useState } from "react";
import Styles from "./Profile.module.scss";

const options = ["Daily", "Weekly", "Monthly"];

const ProfileCard = () => {
  const [selected, setSelected] = useState("Daily");
  return (
    <div className={Styles.card}>
      <header className={Styles.header}>
        <div className={Styles.insideContainer}>
          <img
            className={Styles.profileImage}
            src="./profile.png"
            alt="profile image"
          />
          <div className={Styles.sideContainer}>
            <span className={Styles.tag}>Reporter for</span>
            <span className={Styles.profileName}>Jeremy Robson</span>
          </div>
        </div>
      </header>
      <div className={Styles.optionsContainer}>
        {options.map((option) => {
          return (
            <span
              style={{
                color: selected === option ? "#fff" : "hsl(235, 45%, 61%)",
              }}
              onClick={() => setSelected(option)}
            >
              {option}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileCard;
