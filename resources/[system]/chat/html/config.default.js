// DO NOT EDIT THIS FILE
// Copy it to `config.js` and edit it
window.CONFIG = {
  defaultTemplateId: 'default', //This template will be used for normal chat messages
  templates: { //You can add static templates here
    'default': '<b>{0}</b>: {1}',
    'example:important': '<h1>^2{0}</h1>'
  },
  fadeTimeout: 7000,
  suggestionLimit: 5,
};