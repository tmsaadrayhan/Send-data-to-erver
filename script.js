document.getElementById("submit").addEventListener("click", function(){
  const title= document.getElementById("title").value;
  const info= document.getElementById("Info").value;
  nowPostToServer({title:title, info:info});
})

function nowPostToServer(postInfo){
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(postInfo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
  .then((response) => response.json())
  .then((data) => console.log(data));
}
function displayUsers(users){
  console.log("users", users);
  const userNames= users.map(user =>user.username);
  const ul =document.getElementById("users-container");
  for (let index = 0; index < userNames.length; index++) {
    const user = userNames[index];
    const li= document.createElement("li");
    li.innerText= user;
    ul.appendChild(li);
  }
  console.log(userNames);
}

