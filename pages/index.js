import { useEffect } from "react";
import Head from "next/head";
import FlipDown from "../clock/flipdown";

export default function Home() {
  useEffect(() => {
    new FlipDown(1654762800).start();
  });
  return (
    <div>
      <Head>
        <title>Bitcoin Bay</title>
        <meta name="description" content="Adopting Bitcoin in Tampa Bay." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ height: "100vh" }}>
        <div
          style={{
            background: "#fffbee",
            zIndex: 2,
            marginTop: "250px",
            fontFamily: "Ubuntu, sans-serif",
          }}
          className="position-fixed w-100 align-middle d-flex flex-column align-items-center"
        >
          <h1 className="title">Bitcoin Bay</h1>
          <div>
            <div id="flipdown" className="flipdown"></div>
          </div>
          <h5
            style={{
              marginTop: "20px",
              color: "#fe8e1f",
              textDecoration: "underline",
            }}
          >
            <a href="https://signal.group/#CjQKIGShlxr4ki9pd7ZJwibpqAnft3-JGTGRWoCQnZE7FjG8EhAHrTq966xojOOc0zlJrPuJ">
              Join us on Signal
            </a>
          </h5>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            margin: "auto",
            background: "#fffbee",
            display: "block",
            zIndex: 1,
            position: "relative",
            padding: 0,
          }}
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid"
          viewBox="0 0 100% 100%"
          className="position-fixed fixed-bottom"
        >
          <g transform="translate(960,540) scale(1,-1) translate(-960,-540)">
            <linearGradient
              id="lg-0.06348340961441834"
              x1="0"
              x2="1"
              y1="0"
              y2="0"
            >
              <stop stopColor="#fe8e1f" offset="0"></stop>
              <stop stopColor="#fe8e1f" offset="1"></stop>
            </linearGradient>
            <path d="" fill="#ff4500" opacity="0.4">
              <animate
                attributeName="d"
                dur="20s"
                repeatCount="indefinite"
                keyTimes="0;0.333;0.667;1"
                calcmod="spline"
                keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                begin="0s"
                values="M0 0L 0 548.7532949933943Q 240 454.2501878249795  480 424.39686480365594T 960 446.33270417330425T 1440 243.50574696478515T 1920 205.97565065278508L 1920 0 Z;M0 0L 0 480.9623773780196Q 240 473.95904782597034  480 457.67559255378296T 960 264.47680589751366T 1440 347.6427023159225T 1920 151.41435952243341L 1920 0 Z;M0 0L 0 572.1980713580429Q 240 384.0682834178049  480 348.253846534301T 960 385.59777891152066T 1440 220.00841793362412T 1920 200.4787264240369L 1920 0 Z;M0 0L 0 548.7532949933943Q 240 454.2501878249795  480 424.39686480365594T 960 446.33270417330425T 1440 243.50574696478515T 1920 205.97565065278508L 1920 0 Z"
              ></animate>
            </path>
            <path d="" fill="#ff4500" opacity="0.4">
              <animate
                attributeName="d"
                dur="20s"
                repeatCount="indefinite"
                keyTimes="0;0.333;0.667;1"
                calcmod="spline"
                keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                begin="-6.666666666666667s"
                values="M0 0L 0 509.70437590046953Q 240 512.410311288508  480 495.93593094159115T 960 304.418324331279T 1440 391.63785956699775T 1920 150.76782646614708L 1920 0 Z;M0 0L 0 477.1343370080562Q 240 374.6497682491068  480 346.0587560698756T 960 407.4300555680178T 1440 346.9086748999711T 1920 185.7000993461644L 1920 0 Z;M0 0L 0 462.3910754035829Q 240 491.79737150005934  480 464.5063098879041T 960 292.6258729993309T 1440 214.38924207868203T 1920 219.89275844687194L 1920 0 Z;M0 0L 0 509.70437590046953Q 240 512.410311288508  480 495.93593094159115T 960 304.418324331279T 1440 391.63785956699775T 1920 150.76782646614708L 1920 0 Z"
              ></animate>
            </path>
            <path d="" fill="#ff4500" opacity="0.4">
              <animate
                attributeName="d"
                dur="20s"
                repeatCount="indefinite"
                keyTimes="0;0.333;0.667;1"
                calcmod="spline"
                keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                begin="-13.333333333333334s"
                values="M0 0L 0 500.9740758151843Q 240 483.18561059011523  480 447.81963445131623T 960 445.9691533670981T 1440 269.0911181680403T 1920 181.8258743074964L 1920 0 Z;M0 0L 0 419.57012001040675Q 240 472.8318333946988  480 447.49669953613545T 960 287.908536499584T 1440 237.4372975598577T 1920 211.33771745319802L 1920 0 Z;M0 0L 0 485.77345624595097Q 240 411.3445053511165  480 378.99289672636075T 960 419.6293223869809T 1440 405.0478939695465T 1920 193.9714734771945L 1920 0 Z;M0 0L 0 500.9740758151843Q 240 483.18561059011523  480 447.81963445131623T 960 445.9691533670981T 1440 269.0911181680403T 1920 181.8258743074964L 1920 0 Z"
              ></animate>
            </path>
          </g>
        </svg>
      </main>
    </div>
  );
}
