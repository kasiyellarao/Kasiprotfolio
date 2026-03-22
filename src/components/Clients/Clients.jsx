import { useState, useRef, useEffect } from "react";
import "./Clients.css";

import c1 from "../../assets/client1.jpg";
import c2 from "../../assets/client2.jpg";
import c3 from "../../assets/client3.jpg";

export default function Clients() {

  const data = [
    {
      image: c1,
      text: "It is a long established fact that areadable content of a page when looking at its layout.",
      name: "M.G.C",
      company: "FROM XYZ TECHNOLOGIES",
      rating: 5,
    },
    {
      image: c2,
      text:
        "The point of using Lorem Ipsum ed fact distracted by the readable content of a page when looking at its layout.",
      name: "LENI BABU",
      company: "FROM M.G.C TECH LIMITED",
      rating: 4,
    },
    {
      image: c3,
      text:
        "Lorem Ipsum has been the ins ill be distracted by the readable content of a page when looking at its layout.",
      name: "RAJESH",
      company: "FROM PRO DEV SOLUTIONS",
      rating: 5,
    },
  ];

  /* Infinite illusion */
  const slides = [...data, ...data, ...data];
  const middleIndex = data.length;
  const [index, setIndex] = useState(middleIndex);

  /* Auto scroll */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(p => p + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  /* Infinite loop jump */
  useEffect(() => {
    if (index >= slides.length - data.length)
      setTimeout(() => setIndex(middleIndex), 400);

    if (index < data.length)
      setTimeout(() => setIndex(middleIndex), 400);

  }, [index]);

  /* Touch swipe only */
  const startX = useRef(0);

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;

    if (startX.current - endX > 50) setIndex(p => p + 1);
    else if (endX - startX.current > 50) setIndex(p => p - 1);
  };

  const getClass = (i) => {
    const r = i - index;
    if (r === 0) return "card active";
    if (Math.abs(r) === 1) return "card side";
    return "card hidden";
  };

  const dotIndex =
    ((index - middleIndex) % data.length + data.length) % data.length;

  return (
    <section className="clients-section">

      <h2 className="clients-title">What Our Clients Say</h2>

      <div
        className="carousel"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {slides.map((item, i) => (
          <div className={getClass(i)} key={i}>

            {/* <div className="quote left">“</div> */}
            <div className="quote right">”</div>

            <img src={item.image} className="profile" alt={item.name} />

            <p>{item.text}</p>

            <h4>{item.name}</h4>
            <span>{item.company}</span>

            <div className="rating">
              {"★".repeat(item.rating)}
            </div>

          </div>
        ))}
      </div>

      <div className="dots">
        {data.map((_, i) => (
          <span
            key={i}
            className={`dot ${dotIndex === i ? "active" : ""}`}
            onClick={() => setIndex(middleIndex + i)}
          />
        ))}
      </div>

    </section>
  );
}
