// Add your code here
function submitData(userName, email){
  return fetch("http://localhost:3000/users", {
    method :'POST',
    headers:{
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name:userName,
      email:email
  })
  
})
.then(response => response.json()) 
.then(response => {

})
.catch(error => {
  
})
}
