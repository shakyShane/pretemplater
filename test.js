var pretemplater = require("./index");
var assert       = require("assert");

describe("simple template", function () {
    it("if ", function () {
        var value     = "<% if subprops %>werg\n<% /if %>";

        var actual = pretemplater(value);
        var expected  = "<% if (subprops) { %>werg\n<% } %>";

        assert.equal(actual, expected);
    });
    it("if else ", function () {

        var value = "<% if subprops %>shane<% else %>kittie<% /if %>";

        var actual = pretemplater(value);

        var expected = "<% if (subprops) { %>shane<% } else { %>kittie<% } %>";
        assert.equal(actual, expected);

    });
});

describe("EACH template", function () {
    it("single foreach", function () {

        var value = "shane<% loop subprops as item %>shane<% /loop %>Kittie";
        var actual = pretemplater(value);
        var expected = "shane<% subprops.forEach(function(item){ %>shane<% }); %>Kittie";

        assert.equal(actual, expected);
    });
    it("each with nested if", function () {

        var value = "<% loop subprops as item %><% if name %>Kittie<% /if %><% /loop %>";
        var actual = pretemplater(value);
        var expected = "<% subprops.forEach(function(item){ %><% if (name) { %>Kittie<% } %><% }); %>";

        assert.equal(actual, expected);
    });
});
