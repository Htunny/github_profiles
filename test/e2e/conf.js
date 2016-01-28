exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['githubProfileFeature.js'],
  capabilities: {
    browserName: 'chrome'
  }
};

// onPrepare: function(){
//     require('protractor-http-mock').config = {
//         rootDirectory: __dirname,
//         protractorConfig: '/test/e2e/conf.js'
//     };
// }
//
// mocks: {
//   default: ['Htunny'],
//   dir: '/test/my-mocks'
// }
