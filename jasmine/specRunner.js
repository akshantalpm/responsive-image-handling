require.config({
    baseUrl: "../",
    urlArgs: 'cb=' + Math.random(),
    paths: {
        jquery: '../jquery',
        jasmine: 'lib/jasmine-1.3.1/jasmine',
        'jasmine-html': 'lib/jasmine-1.3.1/jasmine-html',
        spec: 'spec/javascripts'
    },
    shim: {
        jasmine: {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        }
    }
});