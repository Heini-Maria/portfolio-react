import React, { useEffect } from "react";

function Home() {
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
