import React from "react";
import { data } from "./data";
import Day from "./Day";
import "./Card_1.css";
const Proshow = () => {

    return (
        <div className="pro_show_page_container min-h-screen overflow-x-hidden">
            {data.map((day, index) => {
                return (
                    <div key={index} className=" pro_show_page_card_container flex-auto flex justify-center items-center flex-col">
                        <h2 className="Day-text text-center text-[#f4d4d8] font-bold mb-2">Pro Show {index + 1}</h2>
                        <Day data={day} />
                    </div>
                );
            })}
            </div>
    )
}
export default Proshow;