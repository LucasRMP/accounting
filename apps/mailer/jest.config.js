/** @type {import('jest').Config} */
module.exports = {
  ...require('jest-config/nextjs'),
  rootDir: '.',
  moduleNameMapper: {
    '\\.module\\.css$': 'itentity-obj-proxy',
  },
}
