import Event from './Event';



function Hour(props) {
    const width = window.innerWidth / props.mxrow;
    return (
        <div id={props.time} style={{minWidth:"100%", width:(props.mxrow+1)*100+100, backgroundColor:"black", height:"100px",borderTop: "0.5px solid gray", position: "relative" }}>
            <p style={{margin:"0", top:"-0.7em", left:"0", position:"absolute",backgroundColor:"black", color:"white"}}>{props.time}</p>
            <p style={{margin:"0", top:"-0.7em", right:"0", position:"absolute",backgroundColor:"black", color:"white"}}>{props.time}</p>
            {props.eventList[props.time]?.map((event, index)=>{
                return(<Event onclick={() => props.viewDetails(event.index)} key={index} width={width} height={event.eventduration} t={props.t} eventname={event.eventname} row={event.row}/>);
            })}
        </div>)

}
  
export default Hour;