//Single selection
//Multiple selection

import { useState } from "react";
import data from "./data";
import "./styles.css";

// import { useState } from "react";
// import data from "./data";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(copyMultiple);
  }

  console.log(selected);
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        MultiSelection Mode
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                   ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>

                {enableMultiSelection ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                ) : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                )}

              {/* {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </div>
  );
}

// export default function Accordian() {
//   const [selected, setSelected] = useState(null);
//   const [enableMultiSelection,setEnableMultiSelection] = useState(false);
//   const [multiple,setMultiple] = useState([]);
//   function singleSelection(selectDataId) {
//     setSelected(selectDataId === selected ? null : selectDataId);
//   }
//   function MultiSelection(selectDataId){
//     let copyMultiple = [...multiple];
//     const findCurrentIndexId = copyMultiple.indexOf(selectDataId);
//     if(findCurrentIndexId === -1) copyMultiple.push(selectDataId)

//     else copyMultiple.splice(findCurrentIndexId, 1);

//     setMultiple(copyMultiple);
//   }

//   return (
//     <div className="wrapper">
//       <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>Enable multi selection</button>
//       <div className="accordian">
//         {data && data.length > 0
//   //        ? (data.map((dataItem) => (
//               <div className="item">
//                 <div
//                   onClick={enableMultiSelection ?
//                     () =>MultiSelection(dataItem.id) :
//                     ()=>singleSelection(dataItem.id)}
//                   className="title"
//                 >

//                   <h3>{dataItem.question}</h3>
//                   <span>+</span>
//                 </div>
//                 {enableMultiSelection ? multiple.indexOf(dataItem.id) !== -1 &&(
//                   <div className="content">{dataItem.answer}</div>
//                 )
//                 :selected === dataItem.id && (
//                   <div className="content">{dataItem.answer}</div>
//                 )}
//               </div>
//             ))
//            ) : (
//            <div>data not found</div>

//            )}

//       </div>
//     </div>
//   );
// }

// export default function Accordian() {
//   const [selected, setSelected] = useState(null);
//   const [enableMultiSelection, setEnableMultiSelection] = useState(false);
//   const [multiple, setMultiple] = useState([]);
//   function singleSelection(selectDataId) {
//     setSelected(selectDataId === selected ? null : selectDataId);
//   }
//   function MultiSelection(selectDataId) {
//     let copyMultiple = [...multiple];
//     const findCurrentIndexId = copyMultiple.indexOf(selectDataId);
//     if (findCurrentIndexId === -1) copyMultiple.push(selectDataId);
//     else copyMultiple.splice(findCurrentIndexId, 1);
//     setMultiple(copyMultiple);
//   }
//   return (
//     <div className="wrapper">
//       <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
//         Enable multi selection mode
//       </button>
//       <div className="accordian">
//         {data && data.length > 0 ? (
//           data.map((dataItem) => (
//             <div className="item">
//               <div
//                 className="title"
//                 onClick={
//                   enableMultiSelection
//  //                   ? () => MultiSelection(dataItem.id)
//                     : () => singleSelection(dataItem.id)
//                 }
//               >
//                 <h3>{dataItem.question}</h3>
//                 <span>+</span>
//               </div>
//               {enableMultiSelection
//      //           ? multiple.indexOf(dataItem.id) !== -1 &&
//                   (<div className="content">{dataItem.answer}</div>)
//                 : selected === dataItem.id && (
//                     <div className="content">{dataItem.answer}</div>
//                   )}
//             </div>
//           ))
//         ) : (
//           <div>data not found</div>
//         )}
//       </div>
//     </div>
//   );
// }
