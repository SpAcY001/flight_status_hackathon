import React, { useState } from "react";
import TableRow from './TableRow';
import axios from "axios";

const FlightStatus = () => {
    const [flightNumber, setFlightNumber] = useState("");
    const [arrivalDate, setArrivalDate] = useState("");
    const [flightData, setFlightData] = useState(null);
    const [error, setError] = useState(null);

    const fetchFlightStatus = async () => {
        try {
            setError(null);
            // setFlightData(null);
            // const response = await axios.get(
            //     `https://flightera-flight-data.p.rapidapi.com/flight/info`,
            //     {
            //         params: { flnr: flightNumber, date: arrivalDate },
            //         headers: {
            //             "x-rapidapi-host": "flightera-flight-data.p.rapidapi.com",
            //             "x-rapidapi-key": "f75c010a5dmshce36fc0fabf591dp18f1bajsn6f53f4cc2b7d",
            //         },
            //     }
            // );
            // setFlightData(response.data[0]);
            const hardcodedData = {
                scheduled_arrival_local: "2024-11-29T06:25:00+07:00",
                arrival_name: "Bangkok Suvarnabhumi Airport",
                flnr: "TG338",
                arrival_gate: "C2",
                status: "landed",
            };

            // Simulate API response delay
            await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
            setFlightData(hardcodedData);
        } catch (err) {
            console.error(err);
            setError("Flight not found. Please check the details and try again.");
        }
    };

    return (
        <div className="m">
            <header>Flight Information Tool</header>
            <div className="input-section">
                <input
                    type="text"
                    placeholder="Flight Number"
                    value={flightNumber}
                    onChange={(e) => setFlightNumber(e.target.value)}
                />
                <input
                    type="date"
                    value={arrivalDate}
                    onChange={(e) => setArrivalDate(e.target.value)}
                />
                <button onClick={fetchFlightStatus}>Get Status</button>
            </div>
            {error && <p className="error">{error}</p>}
            {flightData && (
                <table>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Destination</th>
                            <th>Flight</th>
                            <th>Gate</th>
                            <th>Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow
                            time={flightData.scheduled_arrival_local}
                            destination={flightData.arrival_name}
                            flight={flightData.flnr}
                            gate={flightData.arrival_gate}
                            remarks={flightData.status}
                        />
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default FlightStatus;
