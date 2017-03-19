var baseUrl = window.location.host.indexOf('localhost') != -1 ? '' : '/SpamDocs';

var statuses = [{
    'value': 'tested',
    'icon': '/images/statusIcons/tested.svg'
  }, {
    'value': 'not-tested',
    'icon': '/images/statusIcons/not-tested.svg'
  }
];

var searchStatusAndAddIcons = function(status) {

  var statusElements = document.getElementsByClassName(status.value);

  for (var i = 0; i < statusElements.length; i++) {
      statusElements[i].src = baseUrl + status.icon;
      statusElements[i].title = status.value;
      statusElements[i].alt = status.value;
  }
}

for (var i = 0; i < statuses.length; i++) {
  searchStatusAndAddIcons(statuses[i]);
}
