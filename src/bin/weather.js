#!/usr/bin/env node

import cli from '../cli';

(async () => {
  const result = await cli(process.argv[3], process.argv[4]);
  console.log(result);
})();
