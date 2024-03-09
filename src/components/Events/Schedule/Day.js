import Hour from './Hour';

const hours =["8AM","9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM","9PM","10PM","11PM"];
function Day(props) {
    return (
        <div className='mt-12'>
        {hours.map(function(h,index){
           return (<Hour key={index} time={h} t={index} eventList={props.eventList} mxrow={props.mxrow} viewDetails={props.viewDetails} />)
         })}
        </div>
      );
  }
  
export default Day;