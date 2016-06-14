/* 
* @Author: caoke
* @Date:   2015-09-18 17:13:44
* @Last Modified by:   caoke
* @Last Modified time: 2016-05-15 18:42:44
*/

var lang = require('./' + locale);
var i18nHelper = require('i18n-helper')(lang);

if (__LOCAL__) {
    i18nHelper.keyNotFound = function(key) {
        return '【`' + key + '` is not found!】';
    };
}

module.exports = i18nHelper;
