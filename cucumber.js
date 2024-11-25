module.exports = {
    default: {
        require: [
            'src/test/steps/*.ts',
            'src/support/hooks.ts'
        ],
        requireModule: ['ts-node/register'],
        paths: ['src/test/features/'],
        format: ['html:cucumber-report.html']
    },
}
