function render(content, values) {
  /*var order = /^%olist/;  //search begning for the "olist" marker
  var unorder = /^%ulist/;  //search begning for the "ulist" marker

  if(order) { //if ordered list
    var key = content.match("")
    for (var i = 0; i < values.length; i++) { //cycle through collection
      if (values.hasOwnProperty(i)) {
          content = content.replace("%olist "+i+"%", values[i]);
      }
    }
  }

  else if(unorder) {  //if unordered list
    for (var j = 0; j < values.length; j++) { //cycle through collection
      if (values.hasOwnProperty(j)) {
          content = content.replace("%ulist "+j+"%", values[j]);
      }
    }
  }*/

  //otherwise
  for(var key in values) {//cycle over keys in object
    content = content.replace("%"+key+"%", values[key]);  //replace the %KEY%s with the values in the object
  }
  return content; //return merged data
}
