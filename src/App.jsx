import { useState } from "react";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [numWinners, setNumWinners] = useState(3);
  const [winners, setWinners] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleNumWinnersChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setNumWinners(value);
    }
  };

  const handleDraw = () => {
    const participants = inputValue
      .split("\n")
      .filter((name) => name.trim() !== "")
      .filter((v, i) => i % 2 == 0);
    const shuffled = participants.sort(() => Math.random() - 0.5);
    setWinners(shuffled.slice(0, numWinners));
  };

  return (
    <>
      <header className="header">고성 햄부기 추첨</header>
      <div className="container">
        <h2>추첨 인원</h2>
        <input
          className="input"
          type="number"
          value={numWinners}
          onChange={handleNumWinnersChange}
          min="1"
          placeholder="추첨 인원 수"
        />
        <br />
        <textarea
          className="textarea"
          rows="10"
          cols="30"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="추첨할 인원을 입력하세요 (줄바꿈으로 구분)"
        />
        <button className="button" onClick={handleDraw}>
          추첨하기
        </button>
        <h2>당첨자:</h2>
        <ul className="winner-list">
          {winners.map((winner, index) => (
            <li key={index} className="winner">
              {winner}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
