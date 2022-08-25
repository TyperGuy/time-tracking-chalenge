import { useState, useEffect, useRef } from "react";
import getTimesFrames from "./services/getTimesFrames";
import { TimeFrames } from "./types/types";

function App() {
  const renderOnce = useRef(true);
  const [data, setData] = useState<{
    timeframes: TimeFrames[];
    isFatching: boolean;
  }>({ timeframes: [], isFatching: true });

  useEffect(() => {
    if (renderOnce.current) {
      (async () => {
        const response: TimeFrames[] = await getTimesFrames();
        setData({ timeframes: response, isFatching: false });
      })();
      renderOnce.current = false;
    }
  }, []);

  return (
    <div>
      {data.timeframes.map((frames) => {
        return <p key={frames.title}>{frames.title}</p>;
      })}
    </div>
  );
}

export default App;
