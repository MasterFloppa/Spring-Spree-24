import { useState } from "react";
import Day from "./Day";
import Dropdown from "./dropdown.js";


var mxrow = 2;

function makeGrid(list = [], day = 'day1') {
    var grid = {};
    var occ = Array.from(Array(mxrow), () => new Array(24))
    list.forEach((ev, index) => {
        if(!ev.schedule[day]) return;
        let starttime = ev.schedule[day].starttime.toString().split(':')[0]; // 24 hour time
        let s = parseInt(starttime);

        let d = Math.ceil(parseFloat(ev.schedule[day].duration));
        let x = mxrow;

        for(let i=0;i<mxrow;i++) {
            let free = true;
            for(let j=0;j<d;j++) {
                if(occ[i][s+j]) free = false;
            }
            if(free) {
                x = i;
                break;
            }
        }
        if(x == mxrow) {
            occ.push(Array(26));
            mxrow ++;
        }
        let t = s + "AM";
        if(s > 12) t = s - 12 + "PM";
        if(!grid[t]) grid[t] = [];
        grid[t].push({'eventname' : ev.name, 'eventduration' : d, 'row' : x, 'index': index})
        for(let j=0;j<d;j++) {
            occ[x][s+j] = true;
        }
    });
    return grid;
}



const Schedule = (props) => {
    const list = props.data;
    const grid = makeGrid(list, props.day);
    var zoom = 1;
    if(window.innerWidth < ((mxrow+1)*100+200))
        zoom = window.innerWidth / ((mxrow + 1) * 100 + 300);
    
    document.body.style.zoom = zoom;

    return (
        <div style={{padding:"50px", backgroundColor:"black", position : 'absolute', top : '0px', zIndex : '100', minWidth : '100%'}}>
            <Dropdown day={props.day} days={props.days} changeDay={props.changeDay}/>
            <Day eventList={grid} mxrow={mxrow} viewDetails={props.viewDetails}/>
        </div>
    );
}

export default Schedule;