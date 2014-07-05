/**
 * @param {String} string
 * @param {Object} [regexes]
 * @returns {Object}
 */
module.exports = function pretemplater(string, regexes) {

    var regexes = regexes || [
        {
            regex: /<% if ([a-z].+?) %>/g,
            replace: "<% if ($1) { %>"
        },
        {
            regex: /<% \/if %>/g,
            replace: "<% } %>"
        },
        {
            regex: /<% else %>/g,
            replace: "<% } else { %>"
        },
        {
            regex: /<% loop ([a-zA-Z].+?) as ([a-z].+?) %>/g,
            replace: "<% $1.forEach(function($2){ %>"
        },
        {
            regex: /<% \/loop %>/g,
            replace: "<% }); %>"
        }
    ];

    return regexes.reduce(function (tempString, item) {
        return tempString.replace(item.regex, function () {
            return item.replace
                .replace("$1", arguments[1])
                .replace("$2", arguments[2])
                .replace("$3", arguments[3])
        });
    }, string);
};