const common = [
    'src/test/features/',
    '--require-module ts-node/register',
    '--require src/test/steps/*.ts',
    '--require src/support/hooks.ts',
    '--format allure-cucumberjs/reporter',
    '--format-options \'{"resultsDir": "allure-results"}\''
]

module.exports = {
    default: common.join(' '),
    parallel: 1, // Number of parallel workers
}