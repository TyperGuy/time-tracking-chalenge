import { useState, useEffect, useRef } from "react";
import getTimesFrames from "./services/getTimesFrames";
import { TimeFrames } from "./types/types";
import { Home } from "./pages/home/Home";

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
      <Home timeframes={data.timeframes} />
    </div>
  );
}

export default App;
