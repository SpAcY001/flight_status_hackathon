// import { useState } from "react"

// const TableLetter = ({ letter, index}) => {
//     const [flip, setFlip] = useState(false)

//     setTimeout(() => {
//         setFlip(true)
//     }, 100 * index)

//     return (
//         <div className={flip ? 'flip' : null}>
//             {flip ? letter : null}
//         </div>
//     )
// }

// export default TableLetter

import React from "react";

const TableLetter = ({ char }) => {
    return <div className="flip">{char}</div>;
};

export default TableLetter;
