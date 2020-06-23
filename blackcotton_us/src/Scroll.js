window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      document.getElementById("Blackcotton_Girl_tex").style.fontSize = "30px";
    } else {
      document.getElementById("Blackcotton_Girl_tex").style.fontSize = "90px";
    }
  }