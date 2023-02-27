import { useState, useEffect } from "react";
import styles from "./styles.module.css";

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const digitRegexp = /\d/;
const NumberDisplay = ({ numberString }) => {
  const [hue, setHue] = useState(262);
  const [isColorPicking, setIsColorPicking] = useState(false);
  useEffect(() => {
    document.documentElement.style.setProperty("--_hue", hue);
  }, [hue]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>GMT+8</div>
        <div className={styles.numberDisplay}>
          {numberString.split("").map((digitStr, index) => (
            <div className={styles.digitWrapper} key={index}>
              {/* 顯示數字 */}
              {digitRegexp.test(digitStr) ? (
                <span
                  className={styles.digitLists}
                  style={{
                    transform: `translate(-50%,${-Number(digitStr) * 32}px)`,
                  }}
                >
                  {digits.map(digit => (
                    <span key={digit} className={styles.digit}>
                      {digit}
                    </span>
                  ))}
                </span>
              ) : (
                // 特殊符號
                <span>{digitStr}</span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.colorRange}>
        {isColorPicking ? (
          <>
            <div className={styles.range}>
              <input
                type="range"
                className={styles.inputColorRange}
                min="0"
                max="360"
                value={hue}
                onChange={e => setHue(e.target.value)}
              />
              <button
                className={styles.btn}
                onClick={() => setIsColorPicking(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.cancel}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </>
        ) : (
          <button
            className={styles.btn}
            onClick={() => setIsColorPicking(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.setting}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        )}
      </div>
    </>
  );
};

export default NumberDisplay;
