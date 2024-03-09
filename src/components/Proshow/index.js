import React from "react";
import { data } from "./images";

import Day from "./Day";

const Proshow = () => {
    return (
        <div className="bg-black text-white min-h-screen overflow-x-hidden" >
            <div className="h-[64px]" />
            {data.map((day, index) => {
                return (
                    <div>
                        <h2 className="text-4xl text-center text-[#f7ca17] font-bold" > DAY {index + 1} </h2>
                        <Day data={data[index]} />
                    </div>
                );

            })}
        </div>
    )
}
export default Proshow;