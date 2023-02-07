import React, { useEffect } from "react";

function Home() {
  const timeContainer = document.getElementById("time-container");
  const startDate = "10-03-2022";
  const startDayDate = new Date(startDate);
  const intlNumberFormatter = new Intl.NumberFormat("en-US");

  setInterval(() => {
    const now = new Date();
    const difference = Math.floor((now.getTime() - startDayDate.getTime()) / 1000 / 60 / 60);

    timeContainer.innerText = intlNumberFormatter.format(difference);
  }, 1000);
  useEffect(() => {
    setInterval(1000);
  }, []);

  return (
    <main className="home main" id="home">
      <div className="title">
        <h1>
          Hi, I'm Heini-Maria.<br />I am a frontend developer.</h1>
        <h2> ..with a marketing background.</h2>
      </div>
      <p>
        Nerdy fact! It's been
        <span id="time-container"> 0 </span>
        hours since I started coding!
      </p>
    </main>
  );
}

export default Home;
