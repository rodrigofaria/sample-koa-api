module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    'no-unused-vars': ['error', { vars: 'all', args: 'all' }],
    'no-trailing-spaces': 2
  }
}
