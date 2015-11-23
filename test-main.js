var tests = [];

for (var file in window.__karma__.files) {
    if (/.spec\.js$/.test(file)) {
        tests.push(file);
    }
}

window.w20 = {
    configuration: {
        '/base/bower_components/w20/core/w20-core.w20.json': {
            modules: {
                application: {
                    id: 'w20-test',
                    home: '/test'
                }
            },
            vars: {
                'components-path': '/base/bower_components'
            }
        }
    },
    deps: tests,
    callback: window.__karma__.start
};

requirejs.config({
    paths: {
        '{angular-mocks}': '/base/bower_components/angular-mocks',
        '{w20Form}': '/base/w20Form'
    },
    shim: {
        '{angular-mocks}/angular-mocks': [ '{angular}/angular' ]
    }
});

requirejs([ '/base/bower_components/w20/core/modules/w20.js' ]);



