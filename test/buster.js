var config = module.exports;

config["My tests"] = {
	rootPath: "../",
	environment: "browser", // or "node"
	libs: [
		"lib/requirejs/require.js",
		"src/require.config.js"
	],
	sources: [
		"lib/jquery/**/*.js",
		"lib/lodash/**/*.js",
		"lib/backbone/**/*.js",
		"src/**/*.js"
	],
	tests: [
		"test/buster/specs/*.spec.js"
	],
	extensions: [require("buster-amd")]
};

// Add more configuration groups as needed
