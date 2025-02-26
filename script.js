//your JS code here. If required.
function handleSubmit() {
	const name= document.getElementById("name").value;
	const age= document.getElementById("age").value;
	if(name==="" || age===undefined){
		alert("Please enter valid details.")
		return;
	}

	let myPromise = new Promise(function(myResolve, myReject) {
  

// The producing code (this may take some time)

  if (age >= 18) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {alert("Welcome, . You can vote.");},
  function(error) {alert("Oh sorry . You aren't old enough.");}
);
	
}
