import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const date = new Date(2023,6,22,20);
var curtime = date.getHours();
let display;

const colorchange = {};

if (curtime >= 1 && curtime <= 11) {
        display = "Good Morning";
        colorchange.color = "green";
} else if (curtime >= 12 && curtime <= 19) {
        display = "Good Afternoon";
        colorchange.color = "orange";
} else {
        display = "Good Night";
        colorchange.color = "Black";
}

ReactDOM.render(
        <>
                <div className="container">
                        <div className="text">
                                Hello sir ,
                                <span style={colorchange}>{display}</span>
                        </div>
                </div>
        </>,
        document.getElementById("root")
);
