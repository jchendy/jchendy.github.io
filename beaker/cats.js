(function() {
  var url = "http://jchendy.com/beaker/cats.js";
  var Html = {
    pluginName: "Cats",
    cmMode: "htmlmixed",
    evaluate: function(code, modelOutput) {
      return Q.fcall(function() {
        modelOutput.result = {
          type: "BeakerDisplay",
          innertype: "Html",
          object: code + "<br /><img src='http://4.bp.blogspot.com/-sZb0qXbNrtE/ToH3uMSIqrI/AAAAAAAACYA/7WrSzaTBKy0/s400/animals_cats_small1.jpg'>"};
        bkHelper.refreshRootScope();
      });
    },
    spec: {
    }
  };
  var Html0 = function(settings, cb) {
    this.settings = settings;
    window.setTimeout(cb, 0);
  };
  Html0.prototype = Html;

  bkHelper.getLoadingPlugin(url).onReady(Html0);
})();
