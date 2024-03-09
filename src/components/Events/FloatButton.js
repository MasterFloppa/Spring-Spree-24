import "./button.css"


// $(this).on('click', function(e) {
//     var container = $(".floatingButton");
    // if the target of the click isn't the container nor a descendant of the container
//     if (!container.is(e.target) && $('.floatingButtonWrap').has(e.target).length === 0) 
//     {
//         if(container.hasClass('open'))
//         {
//             container.removeClass('open');
//         }
//         if (container.children('.fa').hasClass('fa-close')) 
//         {
//             container.children('.fa').removeClass('fa-close');
//             container.children('.fa').addClass('fa-plus');
//         }
//         $('.floatingMenu').hide();
//     }
    
//     // if the target of the click isn't the container and a descendant of the menu
//     if(!container.is(e.target) && ($('.floatingMenu').has(e.target).length > 0)) 
//     {
//         $('.floatingButton').removeClass('open');
//         $('.floatingMenu').stop().slideToggle();
//     } 
// });

const FloatButton = (props) => {
  console.log(props)
  return (
    <div className="floatingButtonWrap"
        onClick={(e) => {
            // console.log("asd");
            e.preventDefault();
            document.getElementById('fb').classList.toggle('open');
            var t = document.getElementById('fb');
            let container = document.getElementById('fbmenu');
            if (!container.classList.contains('active')) {
                container.classList.add('active');
                container.style.height = 'auto';

                var height = container.clientHeight + 'px';
                container.style.height = '0px';

                setTimeout(function () {
                  container.style.height = height;
                }, 0);
                
            } else {
                container.style.height = '0px';
          
                container.addEventListener('transitionend', function () {
                    container.classList.remove('active');
                  }, {
                    once: true
                  });
            }
        }}>
        <div className="floatingButtonInner">
            <a href="#" id="fbwrap" className="floatingButton">
                {props.current == 'swipe' ? <div><i id="fb" className="fa-regular fa-square"></i></div> : 
                    props.current == 'grid' ? <div><i id="fb" className="fa-solid fa-table-cells-large"></i></div> : 
                        <div className="d90"><i id="fb" className="fa-solid fa-bars"></i></div>}
            </a>
            <ul id="fbmenu" className="floatingMenu">
                {props.current == 'grid' ? <></> : 
                <li>
                    <a onClick={() => props.onclick('grid')} href="#">Grid View</a>
                </li>}
                {props.current == 'swipe' ? <></> : 
                <li>
                    <a onClick={() => props.onclick('swipe')} href="#">Swipe View</a>
                </li>}
                {props.current == 'schedule' ? <></> : 
                <li>
                    <a onClick={() => props.onclick('schedule')} href="#">Schedule View</a>
                </li>}
            </ul>
        </div>
    </div>
  );
}


export default FloatButton;






