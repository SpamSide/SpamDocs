var users = [{
    'username': 'MFava91',
    'link': 'https://github.com/MFava91',
    'icon': '/images/userIcons/a.svg'
  }
]

var addUserIcons = function(userReference, user) {
  var img = document.createElement("img");
  img.class = 'img-responsive';
  img.src = user.icon;
  userReference.appendChild(img);
}

var searchUsernameAndAddHref = function(user) {

  var userReferences = document.getElementsByClassName(user.username);

  for (var i = 0; i < userReferences.length; i++) {
      userReferences[i].href = user.link;
      addUserIcons(userReferences[i], user);
  }
}

for (var i = 0; i < users.length; i++) {
  searchUsernameAndAddHref(users[i]);
}
