# Weather cli utility

## Usage
### As cli
```sh
$ weather --service OpenWeather london

> { temp: 11.515, minTemp: 5.656666666666666, maxTemp: 11.5 }
```

### As lib
```javascript
import Weather from 'weather';

const weather = new Weather();
await weather.getCityWeather('london');
/// Response: { temp: 11.515, minTemp: 5.656666666666666, maxTemp: 11.5 }
```

## Setup

```sh
$ make install
```

## Run tests

```sh
$ make test
```

## Build
```sh
$ make build
```

##
[![Hexlet Ltd. logo](https://raw.githubusercontent.com/Hexlet/hexletguides.github.io/master/images/hexlet_logo128.png)](https://ru.hexlet.io/pages/about?utm_source=github&utm_medium=link&utm_campaign=nodejs-package)

This repository is created and maintained by the team and the community of Hexlet, an educational project. [Read more about Hexlet (in Russian)](https://ru.hexlet.io/pages/about?utm_source=github&utm_medium=link&utm_campaign=nodejs-package).
