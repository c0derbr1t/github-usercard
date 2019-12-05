/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// axios.get('https://api.github.com/users/c0derbr1t')
//   .then(response => {
//     console.log(response);
//   })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

const entryPoint = document.querySelector('.cards');

// axios.get('https://api.github.com/users/c0derbr1t')
  .then(response => {
    const myCard = newCard(response);
    entryPoint.appendChild(myCard);
  })
  .catch(error => {
    console.log('Something went wrong! ' + error);
  })


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

function newCard(myObj) {
  const userCard = document.createElement('div'),
        userImage = document.createElement('img'),
        userInfo = document.createElement('div'),
        userName = document.createElement('h3'),
        userUsername = document.createElement('p'),
        userLocation = document.createElement('p'),
        userProfile = document.createElement('p'),
        userGitHub = document.createElement('a'),
        userFollowers = document.createElement('p'),
        userFollowing = document.createElement('p'),
        userBio = document.createElement('p');

  userCard.classList.add('card');
  userInfo.classList.add('card-info');
  userName.classList.add('name');
  userUsername.classList.add('username');

  userImage.src = myObj.data.avatar_url;
  if (myObj.data.name !== null) {
    userName.textContent = myObj.data.name;
  } else {
    userName.textContent = `••• Name not provided •••`
  };
  userUsername.textContent = myObj.data.login;
  if (myObj.data.location !== null) {
    userLocation.textContent = `Location: ${myObj.data.location}`;
  } else {
    userLocation.textContent = `••• Location not provided •••`;
  };
  userProfile.textContent = 'Profile: ';
  userGitHub.textContent = myObj.data.html_url;
  userGitHub.setAttribute('href', myObj.data.html_url);
  userFollowers.textContent = `Followers: ${myObj.data.followers}`;
  userFollowing.textContent = `Following: ${myObj.data.following}`;
  if (myObj.data.bio !== null) {
    userBio.textContent = `Bio: ${myObj.data.bio}`;
  } else {
    userBio.textContent =`••• Bio not provided •••`;
  }

  userCard.appendChild(userImage);
  userCard.appendChild(userInfo);
  userInfo.appendChild(userName);
  userInfo.appendChild(userUsername);
  userInfo.appendChild(userLocation);
  userInfo.appendChild(userProfile);
  userInfo.appendChild(userFollowers);
  userInfo.appendChild(userFollowing);
  userInfo.appendChild(userBio);
  userProfile.appendChild(userGitHub);

  return userCard;
}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
