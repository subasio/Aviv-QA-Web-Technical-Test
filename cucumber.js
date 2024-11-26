const common = [
    'src/test/features/',
    '--require-module ts-node/register',
    '--require src/test/steps/*.ts',
    '--require src/support/hooks.ts',
    '--format html:cucumber-report.html',
]

module.exports = {
    default: common.join(' '),
    parallel: 1, // Number of parallel workers
}