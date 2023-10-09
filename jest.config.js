export default {


  reporters: ['default', './reporters/github-actions-reporter.js'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
}