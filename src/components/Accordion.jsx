import React, { useEffect, useState } from "react";
import faq from "../api/faq.json";
import FAQ from "./FAQ";

const Accordion = () => {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(false);

  useEffect(() => {
    setData(faq);
  }, []);
  console.log(data);
  const handleButton = (id) => {
    setActiveId((prevId) => (prevId === id ? false : id));
  };

  return (
    <section className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          The Accordion
        </h1>

        <ul className="space-y-4">
          {data.map((curElm) => {
            return (
              <FAQ
                key={curElm.id}
                curData={curElm}
                isActive={activeId === curElm.id}
                onToggle={() => handleButton(curElm.id)}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Accordion;
