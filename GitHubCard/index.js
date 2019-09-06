/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

// const axios = require("axios");

// Make a request for a user with a given ID

// console.log(axios.get("https://api.github.com/users/zzzddd"));
const cotainer = document.querySelector(".container");
axios
  .get("https://api.github.com/users/zzzddd")
  .then(response => {
    console.log(response.data);
    cotainer.appendChild(createCard(response.data));
  })
  .catch(err => {
    console.log("Network fall!!!!!");
    console.log(err);
  });
function createCard(data) {
  const card = document.createElement("div"),
    img = document.createElement("img"),
    name = document.createElement("h3"),
    cardInfo = document.createElement("div"),
    userName = document.createElement("p"),
    location = document.createElement("p"),
    profile = document.createElement("p"),
    address = document.createElement("a"),
    followers = document.createElement("p"),
    following = document.createElement("p"),
    bio = document.createElement("p");

  //Setup structure of elements
  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(address);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);

  cardInfo.appendChild(bio);

  // set class names
  card.classList.add("card");
  name.classList.add("name");
  userName.classList.add("username");

  img.src = `${data.avatar_url}`;
  name.textContent = `${data.name}`;
  userName.textContent = `${data.login}`;
  location.textContent = `${data.location}`;
  profile.textContent = `${data.html_url}`;
  address.href = `${data.html_url}`;
  address.textContent = `${data.html_url}`;
  followers.textContent = `Followers:${data.followers}`;
  following.textContent = `Following: ${data.following}`;
  bio.textContent = `Bio:${data.bio}`;

  return card;
}


axios
  .get("https://api.github.com/users/tetondan")
  .then(response => {
    console.log(response.data);
    cotainer.appendChild(createCard(response.data));
  })
  .catch(err => {
    console.log("Network fall!!!!!");
    console.log(err);
  });
  axios
    .get("https://api.github.com/users/bigknell")
    .then(response => {
      console.log(response.data);
      cotainer.appendChild(createCard(response.data));
    })
    .catch(err => {
      console.log("Network fall!!!!!");
      console.log(err);
    });

axios
  .get("https://api.github.com/users/zzzddd/followers")
  .then(response => {
    console.log(response.data);
   
    for(let i=0;i<6;i++){
     followersArray.push(response.data[i].login);
    }
    
     console.log(response.data[0].login);
        console.log(followersArray);

  })
  .catch(err => {
    console.log("Network fall!!!!!");
    console.log(err);
  });
    