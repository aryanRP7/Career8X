import { useState, useEffect, useRef, useCallback } from "react";

function makeQuestion(questionNum) {
  const intermediate = questionNum >= 12;
  let a, b, ans, display;

  if (!intermediate) {
    const op = Math.random() < 0.5 ? "+" : "−";
    a = Math.floor(Math.random() * 20) + 1;
    b = Math.floor(Math.random() * 20) + 1;
    if (op === "−" && b > a) { const t = a; a = b; b = t; }
    ans = op === "+" ? a + b : a - b;
    display = `${a} ${op} ${b}`;
  } else {
    const r = Math.random();
    if (r < 0.33) {
      a = Math.floor(Math.random() * 11) + 2;
      b = Math.floor(Math.random() * 11) + 2;
      ans = a * b; display = `${a} × ${b}`;
    } else if (r < 0.66) {
      b = Math.floor(Math.random() * 9) + 2;
      ans = Math.floor(Math.random() * 9) + 2;
      a = b * ans; display = `${a} ÷ ${b}`;
    } else {
      const neg = -(Math.floor(Math.random() * 15) + 1);
      b = Math.floor(Math.random() * 20) + 1;
      ans = neg + b;
      display = `${neg} + ${b}`;
    }
  }

  const wrongs = new Set();
  while (wrongs.size < 3) {
    const off = Math.floor(Math.random() * 8) - 4 || 1;
    const w = ans + off;
    if (w !== ans) wrongs.add(w);
  }
  const options = [ans, ...wrongs].sort(() => Math.random() - 0.5);
  return { display, ans, options, level: intermediate ? "Intermediate" : "Beginner" };
}

const TOTAL_HEARTS = 5;
const TIME_LIMIT   = 60;

export default function GameSection() {
  const [screen,       setScreen]       = useState("home");
  const [mode,         setMode]         = useState("endless");
  const [question,     setQuestion]     = useState(null);
  const [questionNum,  setQuestionNum]  = useState(0);
  const [score,        setScore]        = useState(0);
  const [hearts,       setHearts]       = useState(TOTAL_HEARTS);
  const [combo,        setCombo]        = useState(0);
  const [bestCombo,    setBestCombo]    = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [timeLeft,     setTimeLeft]     = useState(TIME_LIMIT);
  const [selected,     setSelected]     = useState(null);
  const [locked,       setLocked]       = useState(false);
  const [shake,        setShake]        = useState(false);
  const [questionTimer, setQuestionTimer] = useState(6);

  const timerRef  = useRef(null);
  const nextRef   = useRef(null);
  const heartsRef = useRef(TOTAL_HEARTS);
  const qNumRef   = useRef(0);
  const comboRef  = useRef(0);
  const qTimerRef = useRef(null);

  const spawnQuestion = useCallback(() => {
    qNumRef.current += 1;
    setQuestionNum(qNumRef.current);
    setQuestion(makeQuestion(qNumRef.current));
    setSelected(null);
    setLocked(false);
  }, []);

  const startGame = (m) => {
    clearInterval(timerRef.current);
    clearInterval(qTimerRef.current);
    clearTimeout(nextRef.current);
    setMode(m);
    setScore(0);
    setHearts(TOTAL_HEARTS);
    heartsRef.current = TOTAL_HEARTS;
    setCombo(0);
    comboRef.current = 0;
    setBestCombo(0);
    setCorrectCount(0);
    setTimeLeft(TIME_LIMIT);
    qNumRef.current = 0;
    setScreen("play");
    spawnQuestion();
  };

  useEffect(() => {
    if (screen !== "play" || mode !== "timed") return;
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          setScreen("end");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [screen, mode]);
  useEffect(() => {
  if (screen !== "play") return;
  setQuestionTimer(6);
  clearInterval(qTimerRef.current);
  qTimerRef.current = setInterval(() => {
    setQuestionTimer(t => {
      if (t <= 1) {
        clearInterval(qTimerRef.current);
        if (!locked) {
          setLocked(true);
          setSelected({ val: null, correct: false });
          comboRef.current = 0;
          setCombo(0);
          setShake(true);
          setTimeout(() => setShake(false), 500);
          const newHearts = heartsRef.current - 1;
          heartsRef.current = newHearts;
          setHearts(newHearts);
          if (mode === "endless" && newHearts <= 0) {
            setTimeout(() => setScreen("end"), 800);
            return 0;
          }
          setTimeout(spawnQuestion, 900);
        }
        return 0;
      }
      return t - 1;
    });
  }, 1000);
  return () => clearInterval(qTimerRef.current);
}, [question, screen]);

  const handleAnswer = (val) => {
    if (locked || screen !== "play") return;
    setLocked(true);
    const correct = val === question.ans;
    setSelected({ val, correct });

    if (correct) {
      const newCombo = comboRef.current + 1;
      comboRef.current = newCombo;
      setCombo(newCombo);
      setBestCombo(b => Math.max(b, newCombo));
      setCorrectCount(c => c + 1);
      const pts = 10 * Math.max(1, newCombo);
      setScore(s => s + pts);
    } else {
      comboRef.current = 0;
      setCombo(0);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      const newHearts = heartsRef.current - 1;
      heartsRef.current = newHearts;
      setHearts(newHearts);
      if (mode === "endless" && newHearts <= 0) {
        setTimeout(() => setScreen("end"), 800);
        return;
      }
    }
    nextRef.current = setTimeout(spawnQuestion, correct ? 650 : 900);
  };

  const goHome = () => {
    clearInterval(timerRef.current);
    clearTimeout(nextRef.current);
    clearInterval(qTimerRef.current);
    setScreen("home");
  };

  const optClass = (val) => {
    if (!selected) return "game-opt";
    if (val === question.ans) return "game-opt correct";
    if (val === selected.val && !selected.correct) return "game-opt wrong";
    return "game-opt dim";
  };

  const timerPct = (timeLeft / TIME_LIMIT) * 100;

  return (
    <section className="section">
      <div className="section-header">
        <div>
          <h2 className="section-title">Math Runner</h2>
          <p className="section-subtitle">Fast math · Fast decisions</p>
        </div>
      </div>

      <div className="game-shell">

        {screen === "home" && (
          <div className="game-home">
            <div className="game-logo">
              <span className="game-logo-icon">⚡</span>
              <span className="game-logo-text">Math Runner</span>
            </div>
            <p className="game-tagline">Answer fast. Grow your combo. Don't lose your hearts.</p>
            <div className="game-modes">
              <button className="game-mode-card" onClick={() => startGame("endless")}>
                <div className="game-mode-icon">∞</div>
                <div className="game-mode-title">Endless</div>
                <div className="game-mode-desc">5 hearts · survive as long as you can</div>
              </button>
              <button className="game-mode-card" onClick={() => startGame("timed")}>
                <div className="game-mode-icon">⏱</div>
                <div className="game-mode-title">Time Attack</div>
                <div className="game-mode-desc">60 seconds · max score</div>
              </button>
            </div>
            <div className="game-rules">
              <span>Beginner (Q1–12): + −</span>
              <span>·</span>
              <span>Intermediate (Q13+): × ÷ negatives</span>
            </div>
          </div>
        )}

        {screen === "play" && question && (
          <div className={`game-play ${shake ? "game-shake" : ""}`}>

            <div className="game-hud">
              <div className="game-hearts">
                {Array.from({ length: TOTAL_HEARTS }).map((_, i) => (
                  <span key={i} className={`game-heart ${i >= hearts ? "lost" : ""}`}>♥</span>
                ))}
              </div>
              <div className="game-score-wrap">
                {combo >= 2 && <div className="game-combo">🔥 ×{combo} combo</div>}
                <div className="game-score">{score}</div>
              </div>
            </div>

            {mode === "timed" && (
              <div className="game-timer-wrap">
                <div className="game-timer-bar" style={{
                  width: `${timerPct}%`,
                  background: timerPct < 25 ? "#ff5e5e" : timerPct < 50 ? "#f5a623" : "#7c6aff"
                }} />
                <span className="game-timer-label">{timeLeft}s</span>
              </div>
            )}

            <div className="game-question-card">
              <div className="game-level-tag">{question.level} · Q{questionNum}</div>
              <div className="game-circle-timer">
  <svg viewBox="0 0 40 40" width="40" height="40">
    <circle cx="20" cy="20" r="17" fill="none" stroke="var(--bg-4)" strokeWidth="3" />
    <circle
      cx="20" cy="20" r="17"
      fill="none"
      stroke={questionTimer <= 2 ? "var(--red)" : questionTimer <= 4 ? "var(--orange)" : "var(--accent)"}
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray={`${(questionTimer / 6) * 107} 107`}
      transform="rotate(-90 20 20)"
      style={{ transition: "stroke-dasharray 0.9s linear, stroke 0.3s" }}
    />
    <text x="20" y="25" textAnchor="middle" fontSize="13" fontWeight="700"
      fill={questionTimer <= 2 ? "var(--red)" : "var(--text-2)"}>
      {questionTimer}
    </text>
  </svg>
</div>
              <div className="game-question">{question.display}</div>
              {selected && (
                <div className={`game-feedback ${selected.correct ? "correct" : "wrong"}`}>
                  {selected.correct
                    ? `+${10 * Math.max(1, combo)} pts${combo >= 2 ? ` · ×${combo} combo!` : ""}`
                    : `Wrong! Answer: ${question.ans}`}
                </div>
              )}
            </div>

            <div className="game-options">
              {question.options.map((o, i) => (
                <button key={i} className={optClass(o)} onClick={() => handleAnswer(o)} disabled={locked}>
                  {o}
                </button>
              ))}
            </div>

          </div>
        )}

        {screen === "end" && (
          <div className="game-end">
            <div className="game-end-title">
              {mode === "timed" ? "⏱ Time's up!" : hearts <= 0 ? "💔 Game Over" : "Done!"}
            </div>
            <div className="game-end-stats">
              <div className="game-stat">
                <div className="game-stat-label">Score</div>
                <div className="game-stat-val">{score}</div>
              </div>
              <div className="game-stat">
                <div className="game-stat-label">Correct</div>
                <div className="game-stat-val">{correctCount}</div>
              </div>
              <div className="game-stat">
                <div className="game-stat-label">Best combo</div>
                <div className="game-stat-val">{bestCombo}×</div>
              </div>
              <div className="game-stat">
                <div className="game-stat-label">Questions</div>
                <div className="game-stat-val">{questionNum}</div>
              </div>
            </div>
            <div className="game-end-btns">
              <button className="game-primary-btn" onClick={() => startGame(mode)}>Play again</button>
              <button className="game-secondary-btn" onClick={goHome}>Home</button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}