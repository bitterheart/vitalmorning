module.exports = function(config) {
	config.set({
		basePath: '../',
		frameworks: ['jasmine'],
		files: [
			'public/cdn/angular/1.2.9/angular.min.js',
			'public/cdn/angular/1.2.9/angular-mocks.js',
			'public/scripts/*.js',
			'test/unit/*.js'
		],
		preprocessors: {
			'src/scripts/*.js': 'coverage'
		},
		reporters: ['progress', 'html', 'coverage'],
		colors: true,
		logLevel: config.LOG_INFO,
		browsers: ['PhantomJS'],
		htmlReporter: {
			outputDir: '/tmp/unit-tests/correctness',
			templatePath: __dirname + '/../node_modules/karma-html-reporter/jasmine_template.html'
		},
		coverageReporter: {
			type: 'html',
			dir: '/tmp/unit-tests/coverage/'
		},
		plugins: [
			'karma-html-reporter',
			'karma-jasmine',
			'karma-requirejs',
			'karma-coverage',
			'karma-junit-reporter',
			'karma-phantomjs-launcher',
//			'karma-chrome-launcher',
//			'karma-firefox-launcher',
//			'karma-ie-launcher'

		]
	});
};
