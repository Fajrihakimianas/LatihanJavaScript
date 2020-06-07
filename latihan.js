setInterval (function() {
      var text = ["Hello", "Today We will practice about", "Javascript Fundamental", "Have fun !"];
      var i = 0;
      
      if ( i >= text.length) {
            i = 0;
      }
      console.log(text[i]);
      i++;
}, 1000)