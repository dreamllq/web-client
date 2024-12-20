import { defineConfig, defaultPlugins } from '@hey-api/openapi-ts';

export default defineConfig({
  client: '@hey-api/client-axios',
  input: 'http://127.0.0.1:3000/swagger-json',
  output: 'src/services/api',
  plugins: [
    ...defaultPlugins,
    {
      asClass: true, 
      name: '@hey-api/sdk',
      operationId: false,
      methodNameBuilder: (options) => options.id!
    },
    {
      enums: 'typescript', 
      name: '@hey-api/typescript',
      tree: true
    },
    {
      name: '@hey-api/schemas',
      type: 'json' 
    }
  ]
});