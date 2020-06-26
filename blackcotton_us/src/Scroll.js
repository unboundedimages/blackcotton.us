

const scrollit = window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      document.getElementById("Our_Culture_text").style.fontSize = "1.6em";
    } else {
      document.getElementById("Our_Culture_text").style.fontSize = "1.4em";
    }
  }


export default scrollit;