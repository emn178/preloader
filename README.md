# preloader
Provides preloading function for images, audio and else.

## Demo
[Demo](https://emn178.github.io/preloader/samples/demo/)

## Download
[Compress](https://raw.github.com/emn178/preloader/master/build/preloader.min.js)  
[Uncompress](https://raw.github.com/emn178/preloader/master/src/preloader.js)

## Installation
You can also install preloader by using Bower.
```
bower install preloader
```

## Usage
```JavaScript
preload({
  files: ['your_files.png'],
  onProgress: function (loaded, total) {
    // to show progress
  },
  onLoad: function () {
    // done
  }
})
```

## License
The project is released under the [MIT license](http://www.opensource.org/licenses/MIT).

## Contact
The project's website is located at https://github.com/emn178/preloader  
Author: Chen, Yi-Cyuan (emn178@gmail.com)
