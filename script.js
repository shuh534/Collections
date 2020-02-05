// to check if I have scrolled to the bottom, or scroll at the way to the bottom of the total height of the document, I will need to compare            
// what I am scrolling to the offset height, or the total height of the document.
// what I am scrolling is = to the viewable height of the window + how much I have scrolled vertically. 

<!--****-->
window.onscroll = function() {
  var d = document.documentElement;
  var offset = d.scrollTop + window.innerHeight;
  var height = d.offsetHeight;
  <!--if you have scrolled dowh to the bottom, it will change color -->
  if (offset === height) {
      console.log("you are at the bottom");
          AddText();
  }
};

function ChangeColor(){
      var el = document.getElementById('newContent');
      el.style.backgroundColor = "red";
}

function AddText(){
      var newContent = document.getElementById('newContent');
      newContent.innerHTML = "hello, you have already looked over this page";
}