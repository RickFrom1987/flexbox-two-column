// Generic helper to create random objects
const createMockObject = () => {
  return { 
    id: Math.floor(Math.random() * 100),
    name: 'Project Name',
    desc: 'Lorem ipsum dolor sitegestas amet vitae'
  }
};

// Generic helper to fake asyn calls
const async = () => {
  return new Promise((resolve, reject) => {
    // Fake network requests
    setTimeout(() => {
      resolve('success');
    }, 750);
  });
}

// Let's create some mock projects
const MOCK_PROJECTS = Array(10).fill(createMockObject());

const DEMO = {};

DEMO.init = () => {
  // Apply bindings from model.js
  const LM = new ListModel();
  ko.applyBindings(LM);

  // Start populating projects with promise reducer
  return MOCK_PROJECTS.reduce((promise, item) => {
    return promise.then((result) => {
      return async().then((result) => {
        LM.addItem(createMockObject);
      });
    });
  }, Promise.resolve());
}

// Init
document.addEventListener('DOMContentLoaded', DEMO.init);