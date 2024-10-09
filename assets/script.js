function GetYear() {
  let year = new Date();
  document.getElementById("yearly").innerHTML = year.getFullYear()
}
  
GetYear()