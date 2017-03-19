var baseUrl = window.location.host.indexOf('localhost') != -1 ? '' : '/SpamDocs';

var users = [{
    'username': 'MFava91',
    'link': 'https://github.com/MFava91',
    'icon': '/images/userIcons/a.svg'
  }, {
    'username': 'FMeneguzzo',
    'link': 'https://github.com/FMeneguzzo',
    'icon': '/images/userIcons/FMeneguzzo.png'
  }, {
    'username': 'Zsavajji',
    'link': 'https://github.com/Zsavajji',
    'icon': '/images/userIcons/zsavajji.jpg'
  }, 
  
];

var addUserIcons = function(userReference, user) {
  var img = document.createElement("img");
  img.class = 'img-responsive';
  img.src = baseUrl + user.icon;
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
