exports.config = {
    specs: [
        'test/**/*.scenario.js'
    ],

    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    multiCapabilities:[
        {
           'browserName': 'chrome'
        }
    ],
    // maxSessions: 1,

    //Run it on 9001 port
    baseUrl: 'http://localhost:9001'
};
