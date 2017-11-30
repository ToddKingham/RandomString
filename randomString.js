randomString = function(a){
    var charCodes = "0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ".split("");
    var matrix = { x: [60,0], n: [10,0], h:[16,0], l: [25,10], u: [25,35] };
    var fn = function(i){return charCodes[(crypto.getRandomValues(new Uint32Array(1))[0]%matrix[i][0])+matrix[i][1]]; };
    return ((isNaN(a)) ? a : Array(a+1).join('x')).replace(/[xnhlu]/g,fn);
};
