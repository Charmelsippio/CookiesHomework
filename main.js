
var c_name = Cookies.get('buyer_name');
var c_chocolate = Cookies.get('chocolate');
var c_sugar = Cookies.get('sugar');
var c_lemon = Cookies.get('lemon');


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

function cookies(){
  var name = document.getElementById('buyer_name').value
    Cookies.set('buyer_name', name);
  var chocolate = document.getElementById('chocolate').value
    Cookies.set('chocolate', chocolate);
  var sugar = document.getElementById('sugar').value
    Cookies.set('sugar', sugar);  
  var lemon = document.getElementById('lemon').value
    Cookies.set('lemon', lemon);
}

function deleteCookie(){
  var chocolate = Cookies.expire('chocolate').get('chocolate');
  var sugar = Cookies.expire('sugar').get('sugar');
  var lemon = Cookies.expire('lemon').get('lemon');
}


