import newman from 'newman'; // require Newman in your project
import * as path from 'path';
// call newman.run to pass `options` object and wait for callback
export const run_test = newman.run(
    {
        collection: require('./test_case_postman.json'),
        environment: require('./test_case_postman_envs.json'),
        reporters: ['cli', 'htmlextra'],
        reporter: {
            htmlextra: {
                export: path.join(__dirname, './report.html'),
                logs: true,
                browserTitle: 'Testing report',
                title: 'Testing Challenge',
                showEnvironmentData: true,
            }
        }
    },
    function (err) {
        if (err) {
            console.log('Error in collection run: ', err);
            throw err;
        }
        console.log('collection run complete!');
    }
);
