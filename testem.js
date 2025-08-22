'use strict';

module.exports = {
  test_page: 'tests/index.html?hidepassed&dockcontainer',
  disable_watching: true,
  launch_in_ci: ['Chrome'],
  launch_in_dev: ['Chrome'],
  browser_start_timeout: 30,
  // tap_failed_tests_only: true,
  timeout: 600, // global timeout for the test suite is 10 minutes
  browser_args: {
    Chrome: {
      ci: [
        // --no-sandbox is needed when running Chrome inside a container
        process.env.CI ? '--no-sandbox' : null,
        '--headless=new',
        '--disable-dev-shm-usage',
        '--disable-software-rasterizer',
        '--mute-audio',
        '--remote-debugging-port=0',
        '--window-size=1440,900',
      ].filter(Boolean),
    },
  },
  // we always want the number of parallel processes to be the same as the number of times the suite has been paralleled by ember-exam
  parallel: 6,
};
