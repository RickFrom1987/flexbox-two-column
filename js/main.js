var MOCK_PROJECTS = [
  { name: 'Project 1', desc: 'Lorem ipsum dolor sitegestas amet vitae' },
  { name: 'Project 2', desc: 'Lorem ipsum dolor sitegestas amet vitae' },
  { name: 'Project 3', desc: 'Lorem ipsum dolor sitegestas amet vitae' },
  { name: 'Project 4', desc: 'Lorem ipsum dolor sitegestas amet vitae' },
  { name: 'Project 5', desc: 'Lorem ipsum dolor sitegestas amet vitae' },
  { name: 'Project 6', desc: 'Lorem ipsum dolor sitegestas amet vitae' }
];

var Demo = {};

Demo.init = function init() {
  ko.applyBindings({
    projects: MOCK_PROJECTS
  });
}

Demo.init();