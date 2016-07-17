//For the js below to work, you must have Cookies.js downloaded, in the same folder and linked to your index.html page. Otherwise the below will not work. 



// STEP 1: You have to name global variables so that you can access them across all of the functions. 

// NOTE: I also coded the "get" here to practice DRY. Otherwiser you all just plainly identifying var c_name; then your are doing the cookies.get as Cookies.get('buyer_name').value, which it is easier to just combine them.

var c_name = Cookies.get('buyer_name');
var c_chocolate = Cookies.get('chocolate'); //buyer_name, chocolate, etc. are all pointing to the id name given in the input tag. This is the "key" in the key/value pair. The "value" is what is actually being entered into the input field, i.e. person's name or the number of cookies they want. 
var c_sugar = Cookies.get('sugar');
var c_lemon = Cookies.get('lemon');


//BONUS: When you clear the cookies, it will return "undefined" b/c there isn't a value assigned to the key b/c we've cleared it. If you don't want to see undefined, use the code below to display a blank, until the key has a value to display. THE PLACEMENT OF THESE LINES MATTERS!!! THEY HAVE TO BE PLACED BEFORE FUNCTIONS. IDK why; it didn't work anyother way. 

if (c_chocolate == null ) {
  document.getElementById('chip').innerHTML = " ";}
  else {
  document.getElementById('chip').innerHTML = c_chocolate;
}

if (c_sugar == null ) {
  document.getElementById('SUGAR').innerHTML = " ";}
  else {
  document.getElementById('SUGAR').innerHTML = c_sugar;
}

if (c_lemon == null ) {
  document.getElementById('LEMON').innerHTML = " ";}
  else {
  document.getElementById('LEMON').innerHTML = c_lemon;
}


// STEP 2: Set your cookies! To ensure that your input values are being captured, you have to "set" your cookies. To do this, You have to create a function. My function works when the submit button on the form is clicked.  
function cookies(){
  var name = document.getElementById('buyer_name').value //This is saying, the variable name is equal to whatever value was input into the field identified as 'buyer_name'.
    Cookies.set('buyer_name', name); //"Set" the "key" to whatever the value of 'name' is. Your are calling your variable as the value part of the key/value pair. So, if you type
  var chocolate = document.getElementById('chocolate').value
    Cookies.set('chocolate', chocolate);
  var sugar = document.getElementById('sugar').value
    Cookies.set('sugar', sugar);  
  var lemon = document.getElementById('lemon').value
    Cookies.set('lemon', lemon);
}

// STOP!!! TEST YOUR CODE!!! ==> In the console you want to test to see if your cookies are there. To do this you have to enter "Cookies.set('name', 'Tim')"  This should return whatever you put into the input box, i.e. your value, once you enter "Cookies.get('name')" In this example it will return "Tim".



// STEP 3: Clearing cookies. Here I baiscally followed the same principle for setting cookies, to remove them. Cookies.js uses the expire command to remove cookies. 

function deleteCookie(){
  var chocolate = Cookies.expire('chocolate').get('chocolate');  //This says expire the input value of the get named chocolate. If you have <p> tags then you should be able to see this clear away the number of cookies there. 
  var sugar = Cookies.expire('sugar').get('sugar');
  var lemon = Cookies.expire('lemon').get('lemon');
}


