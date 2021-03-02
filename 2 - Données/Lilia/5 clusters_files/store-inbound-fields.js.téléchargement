/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * DO NOT RENAME OR MOVE THIS FILE.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * This file is also requested from showcase pages.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

// Query string parameters
var params = {};
(function (query, re, match) {
	while (match = re.exec(query)) {
		params[decodeURIComponent(match[1])] = decodeURIComponent(match[2]);
	}
})(window.location.search.substring(1).replace(/\+/g, "%20"), /([^&=]+)=?([^&]*)/g);

// { a: 1, b: 2 } => [["a", 1], ["b", 2]]
function toPairs(object) {
	var result = [];
	for (var key in object) {
		if (object.hasOwnProperty(key)) {
			result.push([key, object[key]]);
		}
	}
	return result;
}

// NOTE a cookie name can be defined twice, under different domains, but this
// will return only the first cookie.
function getCookie(name) {
	var cookies = document.cookie.split(/;\s?/g)
		.filter(function(value) { return value.indexOf(name) === 0; });
	if (cookies.length > 0) {
		var cookie = cookies[0];
		var value = cookie.substring(cookie.indexOf("=") + 1);
		return decodeURIComponent(value);
	}
}

function setCookie(name, value, attributes) {
	var suffix = toPairs(attributes)
		.map(function(pair) { return ";" + pair.join("=") })
		.join("");
	document.cookie = name + "=" + encodeURIComponent(value) + suffix;
}

var cookie_domain = window.location.hostname.split(".").slice(-2).join(".");
var cookie_name = "inbound_fields";

// If a marketing cookie is not set, set it
if (!getCookie(cookie_name)) {
	var cookie = JSON.stringify({
		source: params.utm_source || params.source,
		campaign: params.utm_campaign || params.campaign,
		referrer: document.referrer,
		landing: window.location.href
	});
	var attributes = {
		// set the cookie on the top-level domain, either flourish.studio, or flourish.rocks
		"domain": cookie_domain,
		"path": "/",
		"max-age": 60*60*24*30 // in seconds
	};
	setCookie(cookie_name, cookie, attributes);
}
