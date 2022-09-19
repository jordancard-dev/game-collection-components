import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { readFileSync } from 'fs';
export const config: Config = {
  namespace: 'game-collection-components',
  taskQueue: 'async',
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: 'loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    }
  ],
  devServer: {
    reloadStrategy: 'pageReload',
    port: 3333,
    https: {
      cert: readFileSync('localhost.crt', 'utf8'),
      key: readFileSync('localhost.key', 'utf8')
    }
  }
};
