/**
 * [preloader]{@link https://github.com/emn178/preloader}
 *
 * @version 0.1.1
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2016
 * @license MIT
 */
(function () {
  var Preloader = function (options) {
    this.files = options.files || [];
    this.onLoad = options.onLoad;
    this.onProgress = options.onProgress;
    this.onload = this.onload.bind(this);
  };

  Preloader.prototype.start = function () {
    this.loadCount = 0;
    if (this.files.length == 0) {
      this.progress();
      return;
    }
    for (var i = 0;i < this.files.length;++i) {
      this.load(this.files[i]);
    }
  };

  Preloader.prototype.load = function (image) {
    var img = new Image();
    img.onload = img.onerror = this.onload;
    img.src = image;
  };

  Preloader.prototype.onload = function (e) {
    ++this.loadCount;
    this.progress();
    var img = e.target;
    img.onload = img.onerror = null;
    img.removeAttribute('src');
  };

  Preloader.prototype.progress = function () {
    if (this.onProgress) {
      this.onProgress(this.loadCount, this.files.length);
    }
    if (this.loadCount == this.files.length) {
      if (this.onLoad) {
        this.onLoad();
      }
    }
  };

  window.preload = function (options) {
    var preloader = new Preloader(options);
    preloader.start();
    return preloader;
  };
})();
