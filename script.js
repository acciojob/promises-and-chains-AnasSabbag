//your JS code here. If required.
document.getElementById("form").addEventListener("submit",function(event){
	event.preventDefault();
	let name = document.forms["form"]["name"].value;
	let age = document.forms["form"]["age"].value;
	
	if(name==="" || age===undefined){
		alert("Please enter valid details")
		return;
	}

let myPromise = new Promise(function(myResolve, myReject) {
// The producing code (this may take some time)

  if (age >= 18) {
	  setTimeout(function(){
		myResolve("OK");  	
	  },4000)
    
  } else {
	  setTimeout(function(){
		myReject("Error"); 	
	  },4000)
    
  }
});

myPromise.then(
  function(value) {alert(`Welcome, ${name} . You can vote.`);},
  function(error) {alert(`Oh sorry ${name}. You aren't old enough.`);}
);	
});


	
	

