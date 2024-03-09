window.addEventListener("deviceorientation", function(event) {
  if (updateNow()) {
    let position = Math.round(event.gamma);
    if (Math.abs(position) > limit) {
      if (position > limit) {
        position = limit;
      } else {
        position = -limit;
      }
    }position = position / -100;
    let style = "rotateY(" + position + "deg)";
    tiltable.style.transform = style;
    console.log("Asdf");
  }
});
    