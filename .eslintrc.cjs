module.exports = {
  globals: {
		defineProps: 'readonly',
	},
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', "@vue/eslint-config-typescript", 'prettier'],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ['vue', '@typescript-eslint'],
};
