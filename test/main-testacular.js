(function(require, testacular) {
  require.baseUrl = '/base/src/app-demo';
  require.deps = [
    '../../test/specs/model/modelA.spec'
  ];
  require.callback = testacular.start;

  // // uncomment to dynamically load all unit tests
  // require.deps = [];
  // Object.keys(testacular.files).forEach(function(file) {
  //   if (file.indexOf('/base/test/specs/') !== -1) {
  //     require.deps.push(file.replace(/^\/base/, '../..').replace(/\.js$/, ''));
  //   }
  // });

})(window.require, window.__testacular__);
