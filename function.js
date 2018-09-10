//get data from data.js
var array = new Array;
	for (var i=0; i<vue.lem.length; i++){
		array.push(vue.lem[i].formula)};


var input;
//nav get user input
var search_bt = document.getElementById("search_btn");
function getinput() {
  input = document.getElementById("inpu").value;
  input=input.toLowerCase().split(" ");
}

//home get user input
var searchbt = document.getElementById("searchbtn");
function getinput2() {
  input = document.getElementById("inp").value;
  input=input.toLowerCase().split(" ");
}

//search input, return array of indexes
//set default
var arr_index = new Array(10);
for (var i=0; i<10; i++){
		arr_index[i]=0};

//counter
var c = 0;

function searchinput() {
	for (var i=0; i<array.length; i++){
		var check = true;
		for(var j=0; j<input.length; j++){
			if (array[i].toLowerCase().indexOf(input[j])<0){
				check = false;
			}
		}
	  if (check){
		    arr_index[c]=i;
		    c = c + 1;
	  }
	  if(c>=10){
	  	break;
	  }
  }
}

//send data
//search icon
function to(){ 
  var url = encodeURI("search.html?" + arr_index.join("%"));
  window.location.href=url; 
} 

//send data
//search.html to detail.html (find button)
var index;
function get(i){
	index = i;
	index = index - 1;
	var idx = ai[index];
  var url = encodeURI("detail.html?" + idx);
  window.location.href=url; 
};




