const color=["#004372","#016792","#07729f","#12a1c0","#74d4cc","#efeebc","#fee154","#fdc352","#ffac6f","#fda65a","#fd9e58","#f18448","#f06b7e","#ca5a92","#5b2c83","#371a79","#28166b","#192861","#040b3c"]
// "#001322","#001322","#001322","#012459","#003972",
function getGradient(time,duration){
    var g="linear-gradient(90deg,";
    for(var i=0;i<=duration;i++){
        g+=color[time+i]+","
    }
    g=g.replace(/,$/,")")
    console.log(g);
    return g;
}
function min(a,b){
    if(a<b)return a;
    else return b;
}
function Event(props) {
    console.log(props);
    return (
        <div onClick={props.onclick} style={{cursor: "pointer", minHeight:"50px", maxHeight:"100px" ,width:props.height*100-10, backgroundImage:getGradient(props.t,props.height), height:props.width, margin:"5px", position: "absolute", zIndex:"2", left: (props.row+1)*(min(props.width,100)+5), borderRadius:"10px", 
        transformOrigin: "50px 50px",
        transform: "rotate(90deg)" }}>
            <div style={{color:"white", margin:"auto", alignItems:"center", position:"absolute", height:"100%", width:"100%", top:"0", right:"0", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <h3 style={{transform: "rotate(0deg)"}}>{props.eventname}</h3>
            </div>
        </div>)
    }  
export default Event;