#!/usr/bin/env node

import cli from '../cli';

(async () => {
  const result = await cli(process.argv[2], process.argv[3]);
  console.log(result);
})();
