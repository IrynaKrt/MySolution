String.prototype.toJadenCase = function (str) {
    return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
};
