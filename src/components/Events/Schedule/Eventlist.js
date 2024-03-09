var usedRow=[[],[],[],[],[],[],[],[],[],[]];
var eventList = {};

function eventListInit(){
    var emptyrow=[];
    for(var i=0;i<10;i++){
        emptyrow.push({eventname:"",eventduration:""})
    }
    for (var i = 0; i < 12; i++) {
        eventList[i + "AM"] = [];
        eventList[i + "PM"] = [];
    }
    console.log(eventList);
}
function areOverlapping(A, B) {
    if(B[0] < A[0]) {
        return B[1] > A[0];
    }
    else {
        return B[0] < A[1];
    }
}
function addEvent(stime, name, duration){
    var r=0;
    for(var i=0;i<10;i++){
        var overlap=false;
        for (var j = 0; j < usedRow[i].length; j++){
            if(areOverlapping([stime, stime+duration], usedRow[i][j])){
                overlap=true
                break;
            }
        }
        if(!overlap){
            usedRow[i].push([stime, stime+duration])
            let t = "AM";
            if(stime > 12) t = "PM";
            // if(!eventList[stime + t]) eventList[stime + t] = [];
            eventList[stime + t].push({'eventname': name, 'eventduration': duration});
            return;
        }
    }
}

function getList() {
    return eventList;
}

eventListInit();
addEvent(8, "Name", 3);
addEvent(8, "Name", 3);
addEvent(8, "Name", 3);
addEvent(9, "Name", 4);
console.log("Asd", eventList);

export {addEvent, getList}