function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("read_more");
    var btnText = document.getElementById("myBtn");
    var card=document.getElementsByClassName('card')[0];
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more >>";
      moreText.style.display = "none";
      card.style.height="50vw";
      card.style.transition="0.2s";
    
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less <<";
      moreText.style.display = "inline";
      card.style.height="50vw";
      card.style.transition="0.2s";
     
    }
  }

  function myFunction2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("read_more2");
    var btnText = document.getElementById("myBtn2");
    var card=document.getElementsByClassName('card')[1];
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more >>";
      moreText.style.display = "none";
      card.style.height="50vw";
      card.style.transition="0.2s";
    
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less <<";
      moreText.style.display = "inline";
      card.style.height="50vw";
      card.style.transition="0.2s";
     
    }
  }












