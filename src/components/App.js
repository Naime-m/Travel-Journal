import React from "react"
import Navbar from "./Navbar";
import data from "../data"
import Travel from "./Travel";

export default function App() {

const travelElements = data.map(item => {
  return <Travel
          key = {item.id}
          item = {item} />
})

  return (
    <div>
    <Navbar />
    <section className="travel-section">
    {travelElements}
    </section>
    </div>
  );
}

