import React from "react";
import { data } from "./data";
import Day from "./Day";

const Proshow = () => {


    return (
        <div className="flexi bg-bgBlue text-white min-h-screen overflow-x-hidden">
            {data.map((day, index) => {
                return (
                    <div key={index} className="flex-auto flex justify-center items-center flex-col">
                        <h2 className="text-4xl text-center text-[#f4d4d8] font-bold">DAY {index + 1}</h2>
                        <Day data={day} />
                    </div>
                );
            })}
        </div>
    )
}
export default Proshow;