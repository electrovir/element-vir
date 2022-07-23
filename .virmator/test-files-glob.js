const isTestingOtherFiles = process.argv.some((arg) => arg.match(/\.tsx?$/));

const allTestFiles = 'src/**/!(*.type).test.ts?(x)';

module.exports = isTestingOtherFiles ? {} : {spec: allTestFiles};
