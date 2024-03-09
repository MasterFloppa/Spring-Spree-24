import Cards from "./Cards";
import Dropdown from "../Schedule/dropdown";

const Grid = (props) => {
    return (
        <>
            <Dropdown day={props.day} days={props.days} changeDay={props.changeDay} all={true} />
            <Cards data={props.data} onclick={props.onclick} day={props.day} />
        </>
    );
}

export default Grid;