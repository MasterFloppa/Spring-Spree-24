import Card from "./Card";
import './Card.css';


function Cards(props){
    console.log(props);
    return (
        <div className="cards" style={{backgroundColor:"black"}}>
            {props.data.map(function(e, index){
                return (((e.schedule && e.schedule[props.day]?.duration ) || props.day === 'ALL') ? <Card key={index} content={e} onclick={() => props.onclick(index)} /> : "")
            })}
        </div>
    );
}
export default Cards;