var baseUrl = '/SpamDocs'
var statuses = [{
    'value': 'tested',
    'icon': '/images/statusIcons/tested.svg'
  }, {
    'value': 'not-tested',
    'icon': '/images/statusIcons/not-tested.svg'
  }
]

var addStatusIcons = function(statusElement, status) {
  var img = document.createElement("img");
  img.class = 'img-responsive';
  img.src = baseUrl + status.icon;
  statusElement.appendChild(img);
}

var searchStatusAndAddIcons = function(status) {

  var statusElements = document.getElementsByClassName(status.value);

  for (var i = 0; i < statusElements.length; i++) {
      addStatusIcons(statusElements[i], status);
  }
}

for (var i = 0; i < statuses.length; i++) {
  searchStatusAndAddIcons(statuses[i]);
}
