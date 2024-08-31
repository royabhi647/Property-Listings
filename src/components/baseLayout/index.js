import React from "react";
import Hero from "../hero";

function BaseLayout({ children, miniHero = false }) {
  return (
    <>
      <main>
        <Hero miniHero={miniHero} />
        {children}
      </main>
      <footer
        style={{ textAlign: "center", margin: "30px 0", color: "#3b4351" }}
      >
        Developed By{" "}
        <a
          href="https://github.com/royabhi647/Property-Listings"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abhishek Kumar
        </a>
        , 2024
      </footer>
    </>
  );
}

export default BaseLayout;
