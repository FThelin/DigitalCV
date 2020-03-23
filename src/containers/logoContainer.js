import React, { useRef, useState, useEffect, useCallback } from "react";
import { useTransition, animated } from "react-spring";
import "./logoContainer.css";

function LogoContainer() {
  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = useTransition(items, null, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#2B7A78"
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: "perspective(600px) rotateX(180deg)", color: "#FEFFFF" },
      { transform: "perspective(600px) rotateX(0deg)" }
    ],
    leave: [
      { color: "#2B7A78" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 }
    ],
    update: { color: "#17252A" }
  });

  const reset = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(
      setTimeout(
        () => set(["Fredrik", "Thelin", "Front-End", "Developer"]),
        2000
      )
    );
    ref.current.push(setTimeout(() => set(["Fredrik", "Thelin"]), 5000));
    ref.current.push(
      setTimeout(
        () => set(["Fredrik", "Thelin", "Front-End", "Developer"]),
        8000
      )
    );
  }, []);

  useEffect(() => void reset(), []);

  return (
    <div className="logoContainer">
      <div className="textContainer">
        {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
          <animated.div
            className="transitions-item"
            key={key}
            style={rest}
            onClick={reset}
          >
            <animated.div style={{ overflow: "hidden", height: innerHeight }}>
              {item}
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default LogoContainer;
