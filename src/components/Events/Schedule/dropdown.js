import "./dropdown.css"

let open = false;

const Dropdown = (props) => {
	// console.log(props);

	const toggle = () => {
		[...document.getElementsByClassName('dm-list')].map((e) => {
			e.classList.toggle('dm-open');
		});
		document.getElementsByClassName('fa-caret-down')[0].classList.toggle('rotate');
	}
	return (
		<div className="dm-menu" onClick={toggle}>
			<div className="dm-toggle">{props.day == "ALL" ? "ALL" : "Day " + props.day.substr(3)}<i className="fa fa-caret-down"></i></div>
			<ul id="dm-list" className="dm-list">
				{props.all ? <li key={10} className="dm-list-item" onClick={() => props.changeDay('ALL')}>ALL</li> : ""}
				{[...props.days].map((day, index) => <li key={index} className="dm-list-item" onClick={() => props.changeDay(day)}>{"Day " + day.substr(3)}</li>)}
			</ul>
		</div>
	);
}

export default Dropdown;







