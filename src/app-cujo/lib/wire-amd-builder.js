/**
 * @license Copyright (c) 2010-2011 Brian Cavalier
 * LICENSE: see the LICENSE.txt file. If file is missing, this file is subject
 * to the MIT License at: http://www.opensource.org/licenses/mit-license.php.
 */

/**
 * Builder plugin for r.js
 */
define([ '../../lib/wire/base' ], function() {

	var defaultModuleRegex, defaultSpecRegex, fs;
	// default dependency regex
	defaultModuleRegex = /\.(module|create)$/;
	defaultSpecRegex = /\.(wire|spec)$/;

	function isStrictlyObject( obj ) {
		return obj === Object(obj);
	}
	function isArray( obj ) {
		return Object.prototype.toString.call( obj ) == '[object Array]';
	}

	// Using special require.nodeRequire, something added by r.js.
	fs = require.nodeRequire('fs');
	function fetchText(path, callback) {
		callback(fs.readFileSync(path, 'utf8'));
	}

	function analyze(name, req, load, config) {

		// Track all modules seen in wire spec, so we only include them once
		var modules, seenModules, specs, spec, i, childSpecRegex, moduleRegex;

		moduleRegex = defaultModuleRegex;
		childSpecRegex = defaultSpecRegex;

		// Initalise
		seenModules = {};
		modules = [];

		// Get config values
		if(config) {
			if(config.moduleRegex) moduleRegex = new RegExp(config.moduleRegex);
			if(config.childSpecRegex) childSpecRegex = new RegExp(config.childSpecRegex);
		}

		function addAbsoluteDep(absoluteId) {
			// Only add the moduleId if we haven't already
			if (absoluteId in seenModules) return;

			seenModules[absoluteId] = 1;
			modules.push(absoluteId);
		}

		function addDependency(moduleId) {
			addAbsoluteDep(moduleId);
		}

		function addChildSpec(specId) {
			addAbsoluteDep('wire' + '!' + specId);
		}

		function scanObj(obj, path) {
			// Scan all keys.  This might be the spec itself, or any sub-object-literal
			// in the spec.
			for (var name in obj) {
				scanItem(obj[name], path ? ([path, name].join('.')) : name);
			}
		}

		function scanItem(it, path) {
			// Determine the kind of thing we're looking at
			// 1. If it's a string, and the key is module or create, then assume it
			//    is a moduleId, and add it as a dependency.
			// 2. If it's an object or an array, scan it recursively
			if (typeof it === 'string') {
				// If it's a regular module, add it as a dependency
				// If it's child spec, add it as a wire! dependency
				if (isDep(path)) {
					addDependency(it);
				} else if (isWireDep(path)) {
					addChildSpec(it);
				}
			}
			if (isDep(path) && typeof it === 'string') {
				// Get module def
				addDependency(it);

			} else if (isStrictlyObject(it)) {
				// Descend into subscope
				scanObj(it, path);

			} else if (isArray(it)) {
				// Descend into array
				var arrayPath = path + '[]';
				for (var i = 0, len = it.length; i < len; i++) {
					scanItem(it[i], arrayPath);
				}

			}
		}

		function isWireDep(path) {
			return childSpecRegex && childSpecRegex.test(path);
		}

		function isDep(path) {
			return moduleRegex.test(path);
		}

        var path = req.toUrl(name + '.js');

		// Read in our spec file
		fetchText( path, function( text ) {

            load.fromText(path, text);

            req([name], function(spec_obj) {

                // Scan for dependency
                scanObj( spec_obj );

                // Add itself as its last dependency
                addDependency( name );

                req(modules, function() {
                    // tell r.js that we are finished working
                    load( spec_obj );
                });

            });
		} );

	}

	return {
		load: analyze
	};

});