# themplate
basic "themplating" engine. Of sorts.

###Usage :
add this in your script after including the render.js file in it.
```
  var content = document.getElementById("tempOne").innerHTML;  //fetch template
  var justAnObject = {"big_text" : "Hello World !"};  //pass an object
  var data = render(content, justAnObject);  //generate desired content
  document.getElementById("tempOne").innerHTML = data; //write generated data to the page
```
Voila! Your sentences are completed w/o any logic :p
