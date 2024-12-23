// import TableCell from './TableCell'

// const TableRow = ({ flight }) => {

//     const words = Object.values(flight)

//     console.log(words)

//     return (
//         <tr>
//             <td>✈</td>
//             {words?.map((word, _index) => (
//                 <TableCell key={_index} word={word} />
//                 ))}
//         </tr>
//     )
// }

// export default TableRow

import React from "react";
import TableCell from "./TableCell";

const TableRow = ({ time, destination, flight, gate, remarks }) => {
    return (
        <tr>
            <TableCell content={time} />
            <TableCell content={destination} />
            <TableCell content={flight} />
            <TableCell content={gate} />
            <TableCell content={remarks} />
        </tr>
    );
};

export default TableRow;

