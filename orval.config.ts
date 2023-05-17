import { defineConfig } from 'orval'

export default defineConfig({
  catalyst: {
    input: './openapi/test.yaml',
    output: {
      mode: 'split',
      target: './src/client/client.ts'
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write'
    }
  }
})
