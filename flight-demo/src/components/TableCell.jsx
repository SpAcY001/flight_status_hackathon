// import TableLetter from './TableLetter'

// const TableCell = ({ word }) => {

//     return (
//         <td>
//             {Array.from(word).map((letter, index) => (
//                 <TableLetter key={index} letter={letter} index={index}/>
//             ))}
//         </td>
//     )
// }

// export default TableCell

import React from "react";
import TableLetter from "./TableLetter";

const TableCell = ({ content }) => {
    const renderLetters = (text) => {
        return text.split("").map((char, index) => (
            <TableLetter key={index} char={char} />
        ));
    };

    return (
        <td>
            <div className="cell-content">
                {typeof content === "string" ? renderLetters(content) : content}
            </div>
        </td>
    );
};

export default TableCell;
