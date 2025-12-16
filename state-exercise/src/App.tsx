import { useState } from "react";
import LightToggle from "./components/LightToggle";
import LottoNumbers from "./components/LottoNumbers";
import ClickCounter from "./components/ClickCounter";

const App = () => {
  // Light Toggle state
  const [isLightsOn, setIsLightsOn] = useState<boolean>(true);

  // Lotto state
  const [lottoNumbers, setLottoNumbers] = useState<number[]>([]);

  // Counter state
  const [count, setCount] = useState<number>(0);

  // Handlers
  const handleToggleLights = (): void => {
    setIsLightsOn((prev) => !prev);
  };

  const handleGenerateLotto = (): void => {
    const nums = new Set<number>();
    while (nums.size < 7) {
      nums.add(Math.floor(Math.random() * 50) + 1);
    }
    setLottoNumbers(Array.from(nums).sort((a, b) => a - b));
  };

  const handleIncrementCount = (): void => {
    setCount((prev) => prev + 1);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: isLightsOn ? "white" : "black",
        color: isLightsOn ? "black" : "white",
        padding: "20px",
        transition: "background-color 0.3s ease",
      }}
    >
      <h1>React State Exercise</h1>

      <h2>Light Toggle</h2>
      <LightToggle onToggle={handleToggleLights} />

      <hr />

      <h2>Lotto Numbers</h2>
      <LottoNumbers onGenerate={handleGenerateLotto} />
      <div className="output">
        {lottoNumbers.length === 0
          ? "No numbers yet."
          : lottoNumbers.join(", ")}
      </div>

      <hr />

      <h2>Click Counter</h2>
      <ClickCounter onClick={handleIncrementCount} />
      <div className="output">Count: {count}</div>
    </div>
  );
};

export default App;
