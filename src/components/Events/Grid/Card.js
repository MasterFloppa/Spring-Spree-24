import './Card.css';

const hours = 
    ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"];
function endTime(startTime,duration){
    return hours[hours.indexOf(startTime)+duration]
}
function Card(props) {
    return (
        <button className="cards_item" onClick={props.onclick}>
        <div className="card" style={{width:"100%"}}>
            <div className="rect-img-container">
                <img className="rect-img" src={ props.content?.poster ? props.content.poster : '../../../images/sample.jpg'} alt="poster"/>
            </div>
        </div>
        </button>
    );
}
  
export default Card;