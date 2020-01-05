const items = [];

window.onload = function() {
    document.getElementById("addButton").onclick = addItem;
};



  const addItem = function() {

  document.getElementById("input").value = "";

  var input = document.getElementById("input").value
  var li = document.createElement("li")
  var ul = document.getElementById("ul")
  var exclamation = document.createElement("button")
  exclamation.id = exclamation
  exclamation.value = "Priority"
  exclamation.setAttribute("style", "")
  var done = document.createElement("button")
  done.id = done
  done.value = "Complete"
  var close = document.createElement("button")
  close.id = close
  close.value = "Delete"

  li.prepend(exclamation)
  li.append(input);
  li.append(done);
  li.append(close);
  ul.append(li);


  var array = []

  if (input != null) {
    array.unshift(input)
  }

  input = "";
}
