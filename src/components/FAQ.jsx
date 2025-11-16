// import React, { useState } from 'react'

// const FAQ = ({curData}) => {
//       const [activeId,setActiveId]=useState(false)
//     const {id,question,answer}=curData
//     const handleToChangeButton=()=>{
//         setActiveId(!activeId)
//     }
//   return (
//      <section>
//         <li  >
//               <div className="flex justify-between items-center bg-gray-50 px-5 py-4 rounded-lg shadow-sm border hover:bg-gray-100 transition">
//                 <p className="text-lg font-medium text-gray-700">
//                   {question}
//                 </p>
//                 <button onClick={handleToChangeButton} className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition">
//                   {activeId? "Close" : "Show"}
//                 </button>
//               </div>
//               <p>{activeId && answer}</p>
//             </li>
//      </section>
//   )
// }

// export default FAQ





// modern ui if i open other it get close another question
import React, { useState } from "react";

const FAQ = ({ curData, isActive, onToggle }) => {
  const { question, answer } = curData;

  return (
    <section>
      <li>
        <div className="flex justify-between items-center bg-gray-50 px-5 py-4 rounded-lg shadow-sm border hover:bg-gray-100 transition">
          <p className="text-lg font-medium text-gray-700">{question}</p>
          <button
            onClick={onToggle}
            className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition"
          >
            {isActive ? "Close" : "Show"}
          </button>
        </div>
        <p>{isActive && answer}</p>
      </li>
    </section>
  );
};

export default FAQ;
