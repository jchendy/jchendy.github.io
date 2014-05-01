define(function(require, exports, module) {

  var PLUGIN_NAME = "Cats";

  var Html = {
    pluginName: PLUGIN_NAME,
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

  exports.getEvaluatorFactory = function() {
    return bkHelper.getEvaluatorFactory(bkHelper.newPromise(Html0));
  };
  exports.name = PLUGIN_NAME;
  
});
