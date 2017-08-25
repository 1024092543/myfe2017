/**
 * Created by SAMSUNG on 2017/2/13.
 */
require(['a'],function(arrSort){
    var arr = [1,2,5,9,6];
    console.log(arrSort(arr));
});

define(function(require){
    var arr = [2,3,9,5,1];
    var arrSort = require('a');
    console.log(arrSort(arr));
});