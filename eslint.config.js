import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    typescript: true,
    stylistic: true,
  },
})
  .append({
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      'vue/multi-word-component-names': 'off',
    },
  })
  .append({
    ignores: [
      'node_modules',
      '.nuxt',
      '.output',
      'dist',
      '.env',
      '.env.*',
      '!.env.example',
    ],
  })
