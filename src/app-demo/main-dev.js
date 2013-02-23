(function(global) {

    global.require.paths.query = '../lib/jquery/jquery';
    global.require.paths.lodash = '../lib/lodash/lodash';
    global.require.paths.backbone = '../lib/backbone/backbone';

    global.require.packages[0].main = './debug';

    global.debug = true;

})(this);
