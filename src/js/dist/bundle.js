<<<<<<< HEAD
!function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(i,r,function(n){return e[n]}.bind(null,r));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=91)}({17:function(e,n){e.exports=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},91:function(e,n,t){"use strict";t.r(n);var i=t(17),r=t.n(i);!function(){function e(e,n,t,i,o,a){var l;if("undefined"==typeof wordliftAnalyticsConfigData)return!1;e("send","event","WordLift","Mentions",i,1,(l={},r()(l,n,o),r()(l,t,a),r()(l,"nonInteraction",!0),l))}function n(e,n,t,i,o,a){var l;if("undefined"==typeof wordliftAnalyticsConfigData)return!1;e("event","Mentions",(l={event_category:"WordLift",event_label:i,value:1},r()(l,n,o),r()(l,t,a),r()(l,"non_interaction",!0),l))}function t(e,n,t,i,r,o){if("undefined"==typeof wordliftAnalyticsConfigData)return!1;e.push({event:"Mentions",wl_event_action:"Mentions",wl_event_category:"WordLift",wl_event_label:i,wl_event_value:1,wl_event_uri:r,wl_index_uri:n.replace(/^\D+/g,""),wl_event_type:o,wl_index_type:t.replace(/^\D+/g,""),non_interaction:!0})}document.addEventListener("DOMContentLoaded",(function(i){if("undefined"!=typeof wordliftAnalyticsEntityData){var r=new Promise((function(e,n){return e(function(){var e=!1;window.gtag?(e=window.gtag).__wl_type="gtag":window.dataLayer?(e=window.dataLayer).__wl_type="gtm":window.ga?(e=window.ga).__wl_type="ga":window.__gaTracker&&((e=window.__gaTracker).__wl_type="ga");return e}())}));r.then((function(i){return function(i){return new Promise((function(r,o){if(void 0===i||"undefined"==typeof wordliftAnalyticsConfigData)return o();var a="dimension"+wordliftAnalyticsConfigData.entity_uri_dimension,l="dimension"+wordliftAnalyticsConfigData.entity_type_dimension,f=[];for(var d in wordliftAnalyticsEntityData)wordliftAnalyticsEntityData.hasOwnProperty(d)&&f.push(wordliftAnalyticsEntityData[d]);var u=f.length;if("ga"===i.__wl_type)for(var c=0;c<u;c++)e(i,a,l,f[c].label,f[c].uri,f[c].type);else if("gtag"===i.__wl_type)for(c=0;c<u;c++)n(i,a,l,f[c].label,f[c].uri,f[c].type);else if("gtm"===i.__wl_type)for(c=0;c<u;c++)t(i,a,l,f[c].label,f[c].uri,f[c].type);return r(!0)}))}(i)}))}}))}();var o=window.wlSettings;!function(){if("undefined"!=typeof fetch&&!(void 0!==o.jsonld_enabled&&"1"!==o.jsonld_enabled||void 0===o.postId&&void 0===o.isHome)){var e,n,t=(n=0<=(e=o).apiUrl.indexOf("?")?"&":"?",e.apiUrl+n+"action=wl_jsonld"+(void 0!==e.postId?"&id="+e.postId:"")+(void 0!==e.isHome?"&homepage=true":""));fetch(t).then((function(e){return e.text()})).then((function(e){var n=document.createElement("script");n.type="application/ld+json",n.innerText=e,document.head.appendChild(n)}))}}()}});
=======
!function(n){var i={};function I(B){if(i[B])return i[B].exports;var t=i[B]={i:B,l:!1,exports:{}};return n[B].call(t.exports,t,t.exports,I),t.l=!0,t.exports}I.m=n,I.c=i,I.d=function(n,i,B){I.o(n,i)||Object.defineProperty(n,i,{enumerable:!0,get:B})},I.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},I.t=function(n,i){if(1&i&&(n=I(n)),8&i)return n;if(4&i&&"object"==typeof n&&n&&n.__esModule)return n;var B=Object.create(null);if(I.r(B),Object.defineProperty(B,"default",{enumerable:!0,value:n}),2&i&&"string"!=typeof n)for(var t in n)I.d(B,t,function(i){return n[i]}.bind(null,t));return B},I.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return I.d(i,"a",i),i},I.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},I.p="",I(I.s=140)}({140:function(module,exports,__webpack_require__){"use strict";eval('\n\n__webpack_require__(141);\n\n// Set a reference to the WordLift settings.\nvar settings = window.wlSettings;\n\n/**\n * Build the request URL, inclusive of the query string parameters.\n *\n * @since 3.19.1\n *\n * @param params {{apiUrl, postId, isHome}} The query parameters.\n * @returns {string} The request URl.\n */\n/**\n * Internal dependencies.\n */\nvar buildUrl = function buildUrl(params) {\n  // Join with `?` or `&`.\n  var joinChar = 0 <= params.apiUrl.indexOf("?") ? "&" : "?";\n\n  // Build the URL\n  var url = params.apiUrl + joinChar + "action=wl_jsonld" + (\n  // Append the post id parameter.\n  "undefined" !== typeof params.postId ? "&id=" + params.postId : "") + (\n  // Append the homepage parameter.\n  "undefined" !== typeof params.isHome ? "&homepage=true" : "");\n\n  return url;\n};\n\n/**\n * Load the JSON-LD.\n *\n * @since 3.0.0\n */\nvar loadJsonLd = function loadJsonLd() {\n  // Bail out it the container doesn\'t now about fetch.\n  if ("undefined" === typeof fetch) return;\n\n  // Check if the JSON-LD is disabled, i.e. if there\'s a `jsonld_enabled`\n  // setting explicitly defined with a value different from \'1\'.\n  if ("undefined" !== typeof settings["jsonld_enabled"] && "1" !== settings["jsonld_enabled"]) {\n    return;\n  }\n\n  // Check that we have a post id or it\'s homepage, otherwise exit.\n  if ("undefined" === typeof settings.postId && "undefined" === typeof settings.isHome) {\n    return;\n  }\n\n  // Get the request URL.\n  var url = buildUrl(settings);\n\n  // Finally fetch the URL.\n  //\n  // DO NOT use here `new URL(...)` / `URL.searchParams`: Google SDTT doesn\'t understand them.\n  fetch(url).then(function (response) {\n    return response.text();\n  }).then(function (body) {\n    // Use `document.createElement`. See https://github.com/insideout10/wordlift-plugin/issues/810.\n    var script = document.createElement("script");\n    script.type = "application/ld+json";\n    script.innerText = body;\n    document.head.appendChild(script);\n  });\n};\n\nloadJsonLd();\n\n//\n// window.addEventListener("load", loadJsonLd);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUHVibGljL2luZGV4LmpzPzgxYmEiXSwibmFtZXMiOlsic2V0dGluZ3MiLCJ3aW5kb3ciLCJ3bFNldHRpbmdzIiwiYnVpbGRVcmwiLCJwYXJhbXMiLCJqb2luQ2hhciIsImFwaVVybCIsImluZGV4T2YiLCJ1cmwiLCJwb3N0SWQiLCJpc0hvbWUiLCJsb2FkSnNvbkxkIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJ0ZXh0IiwiYm9keSIsInNjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJpbm5lclRleHQiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiI7O0FBR0E7O0FBRUE7QUFDQSxJQUFNQSxXQUFXQyxPQUFPQyxVQUF4Qjs7QUFFQTs7Ozs7Ozs7QUFSQTs7O0FBZ0JBLElBQU1DLFdBQVcsU0FBWEEsUUFBVyxDQUFTQyxNQUFULEVBQWlCO0FBQ2hDO0FBQ0EsTUFBTUMsV0FBVyxLQUFLRCxPQUFPRSxNQUFQLENBQWNDLE9BQWQsQ0FBc0IsR0FBdEIsQ0FBTCxHQUFrQyxHQUFsQyxHQUF3QyxHQUF6RDs7QUFFQTtBQUNBLE1BQU1DLE1BQ0pKLE9BQU9FLE1BQVAsR0FDQUQsUUFEQSxHQUVBLGtCQUZBO0FBR0E7QUFDQyxrQkFBZ0IsT0FBT0QsT0FBT0ssTUFBOUIsR0FBdUMsU0FBU0wsT0FBT0ssTUFBdkQsR0FBZ0UsRUFKakU7QUFLQTtBQUNDLGtCQUFnQixPQUFPTCxPQUFPTSxNQUE5QixHQUF1QyxnQkFBdkMsR0FBMEQsRUFOM0QsQ0FERjs7QUFTQSxTQUFPRixHQUFQO0FBQ0QsQ0FmRDs7QUFpQkE7Ozs7O0FBS0EsSUFBTUcsYUFBYSxTQUFiQSxVQUFhLEdBQVc7QUFDNUI7QUFDQSxNQUFJLGdCQUFnQixPQUFPQyxLQUEzQixFQUFrQzs7QUFFbEM7QUFDQTtBQUNBLE1BQ0UsZ0JBQWdCLE9BQU9aLFNBQVMsZ0JBQVQsQ0FBdkIsSUFDQSxRQUFRQSxTQUFTLGdCQUFULENBRlYsRUFHRTtBQUNBO0FBQ0Q7O0FBRUQ7QUFDQSxNQUNFLGdCQUFnQixPQUFPQSxTQUFTUyxNQUFoQyxJQUNBLGdCQUFnQixPQUFPVCxTQUFTVSxNQUZsQyxFQUdFO0FBQ0E7QUFDRDs7QUFFRDtBQUNBLE1BQU1GLE1BQU1MLFNBQVNILFFBQVQsQ0FBWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQVksUUFBTUosR0FBTixFQUNHSyxJQURILENBQ1EsVUFBU0MsUUFBVCxFQUFtQjtBQUN2QixXQUFPQSxTQUFTQyxJQUFULEVBQVA7QUFDRCxHQUhILEVBSUdGLElBSkgsQ0FJUSxVQUFTRyxJQUFULEVBQWU7QUFDbkI7QUFDQSxRQUFNQyxTQUFTQyxTQUFTQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQUYsV0FBT0csSUFBUCxHQUFjLHFCQUFkO0FBQ0FILFdBQU9JLFNBQVAsR0FBbUJMLElBQW5CO0FBQ0FFLGFBQVNJLElBQVQsQ0FBY0MsV0FBZCxDQUEwQk4sTUFBMUI7QUFDRCxHQVZIO0FBV0QsQ0F0Q0Q7O0FBd0NBTjs7QUFFQTtBQUNBIiwiZmlsZSI6IjE0MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzLlxuICovXG5pbXBvcnQgXCIuL2FuYWx5dGljc1wiO1xuXG4vLyBTZXQgYSByZWZlcmVuY2UgdG8gdGhlIFdvcmRMaWZ0IHNldHRpbmdzLlxuY29uc3Qgc2V0dGluZ3MgPSB3aW5kb3cud2xTZXR0aW5ncztcblxuLyoqXG4gKiBCdWlsZCB0aGUgcmVxdWVzdCBVUkwsIGluY2x1c2l2ZSBvZiB0aGUgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnMuXG4gKlxuICogQHNpbmNlIDMuMTkuMVxuICpcbiAqIEBwYXJhbSBwYXJhbXMge3thcGlVcmwsIHBvc3RJZCwgaXNIb21lfX0gVGhlIHF1ZXJ5IHBhcmFtZXRlcnMuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcmVxdWVzdCBVUmwuXG4gKi9cbmNvbnN0IGJ1aWxkVXJsID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIC8vIEpvaW4gd2l0aCBgP2Agb3IgYCZgLlxuICBjb25zdCBqb2luQ2hhciA9IDAgPD0gcGFyYW1zLmFwaVVybC5pbmRleE9mKFwiP1wiKSA/IFwiJlwiIDogXCI/XCI7XG5cbiAgLy8gQnVpbGQgdGhlIFVSTFxuICBjb25zdCB1cmwgPVxuICAgIHBhcmFtcy5hcGlVcmwgK1xuICAgIGpvaW5DaGFyICtcbiAgICBcImFjdGlvbj13bF9qc29ubGRcIiArXG4gICAgLy8gQXBwZW5kIHRoZSBwb3N0IGlkIHBhcmFtZXRlci5cbiAgICAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIHBhcmFtcy5wb3N0SWQgPyBcIiZpZD1cIiArIHBhcmFtcy5wb3N0SWQgOiBcIlwiKSArXG4gICAgLy8gQXBwZW5kIHRoZSBob21lcGFnZSBwYXJhbWV0ZXIuXG4gICAgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBwYXJhbXMuaXNIb21lID8gXCImaG9tZXBhZ2U9dHJ1ZVwiIDogXCJcIik7XG5cbiAgcmV0dXJuIHVybDtcbn07XG5cbi8qKlxuICogTG9hZCB0aGUgSlNPTi1MRC5cbiAqXG4gKiBAc2luY2UgMy4wLjBcbiAqL1xuY29uc3QgbG9hZEpzb25MZCA9IGZ1bmN0aW9uKCkge1xuICAvLyBCYWlsIG91dCBpdCB0aGUgY29udGFpbmVyIGRvZXNuJ3Qgbm93IGFib3V0IGZldGNoLlxuICBpZiAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIGZldGNoKSByZXR1cm47XG5cbiAgLy8gQ2hlY2sgaWYgdGhlIEpTT04tTEQgaXMgZGlzYWJsZWQsIGkuZS4gaWYgdGhlcmUncyBhIGBqc29ubGRfZW5hYmxlZGBcbiAgLy8gc2V0dGluZyBleHBsaWNpdGx5IGRlZmluZWQgd2l0aCBhIHZhbHVlIGRpZmZlcmVudCBmcm9tICcxJy5cbiAgaWYgKFxuICAgIFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBzZXR0aW5nc1tcImpzb25sZF9lbmFibGVkXCJdICYmXG4gICAgXCIxXCIgIT09IHNldHRpbmdzW1wianNvbmxkX2VuYWJsZWRcIl1cbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gQ2hlY2sgdGhhdCB3ZSBoYXZlIGEgcG9zdCBpZCBvciBpdCdzIGhvbWVwYWdlLCBvdGhlcndpc2UgZXhpdC5cbiAgaWYgKFxuICAgIFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiBzZXR0aW5ncy5wb3N0SWQgJiZcbiAgICBcInVuZGVmaW5lZFwiID09PSB0eXBlb2Ygc2V0dGluZ3MuaXNIb21lXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEdldCB0aGUgcmVxdWVzdCBVUkwuXG4gIGNvbnN0IHVybCA9IGJ1aWxkVXJsKHNldHRpbmdzKTtcblxuICAvLyBGaW5hbGx5IGZldGNoIHRoZSBVUkwuXG4gIC8vXG4gIC8vIERPIE5PVCB1c2UgaGVyZSBgbmV3IFVSTCguLi4pYCAvIGBVUkwuc2VhcmNoUGFyYW1zYDogR29vZ2xlIFNEVFQgZG9lc24ndCB1bmRlcnN0YW5kIHRoZW0uXG4gIGZldGNoKHVybClcbiAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAgIC8vIFVzZSBgZG9jdW1lbnQuY3JlYXRlRWxlbWVudGAuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vaW5zaWRlb3V0MTAvd29yZGxpZnQtcGx1Z2luL2lzc3Vlcy84MTAuXG4gICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgc2NyaXB0LnR5cGUgPSBcImFwcGxpY2F0aW9uL2xkK2pzb25cIjtcbiAgICAgIHNjcmlwdC5pbm5lclRleHQgPSBib2R5O1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufTtcblxubG9hZEpzb25MZCgpO1xuXG4vL1xuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGxvYWRKc29uTGQpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///140\n')},141:function(module,exports,__webpack_require__){"use strict";eval('\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\n * A collection of functions and logic to handle sending of entity data to an\n * external analytics tracker.\n *\n * Objects: `ga`, `__gaTracker` are supported as is `gtag`.\n *\n * NOTE: the `__gaTracker` object is a common remap name in WordPress.\n */\n\n(function () {\n  // Only run after page has loaded.\n  document.addEventListener("DOMContentLoaded", function (event) {\n    // We should have an entity object by here but if not short circuit.\n    if (typeof wordliftAnalyticsEntityData === "undefined") {\n      return;\n    }\n\n    /**\n     * Promise to handle detection and return of an analytics object.\n     *\n     * @type {Promise}\n     */\n    var detectAnalyticsObject = new Promise(function (resolve, reject) {\n      var analyticsObj = getAnalyticsObject();\n      return resolve(analyticsObj);\n    });\n\n    /**\n     * A function returning the promise that deals with creating items\n     * to send and passing them to the correct send function.\n     *\n     * @method\n     * @param  {object} analyticsObj an analytics tracking object that is the resolve of the detect function.\n     * @return {Promise}\n     */\n    var sendAnalyticsData = function sendAnalyticsData(analyticsObj) {\n      return new Promise(function (resolve, reject) {\n        // if we dont have an object to push into and an object\n        // with config then this is a failure - reject.\n        if ("undefined" === typeof analyticsObj || "undefined" === typeof wordliftAnalyticsConfigData) {\n          return reject();\n        }\n\n        // setup the custom dimention names.\n        var dimX = "dimension" + wordliftAnalyticsConfigData.entity_uri_dimension;\n        var dimY = "dimension" + wordliftAnalyticsConfigData.entity_type_dimension;\n\n        // Create an array of all the individual entities.\n        var entities = [];\n        for (var key in wordliftAnalyticsEntityData) {\n          if (wordliftAnalyticsEntityData.hasOwnProperty(key)) {\n            entities.push(wordliftAnalyticsEntityData[key]);\n          }\n        }\n\n        // Count the total entities we have to send.\n        var entitiesTotal = entities.length;\n\n        // console.log( `Going to send analytics events using ${analyticsObj.__wl_type} object type.` );\n\n        /**\n         * Depending on the tracking object type send the data\n         * to the correspending service.\n         */\n        if ("ga" === analyticsObj.__wl_type) {\n          // This is `ga` style object.\n          for (var i = 0; i < entitiesTotal; i++) {\n            sendGaEvent(analyticsObj, dimX, dimY, entities[i].label, entities[i].uri, entities[i].type);\n          }\n        } else if ("gtag" === analyticsObj.__wl_type) {\n          // This is `gtag` style object.\n          for (var i = 0; i < entitiesTotal; i++) {\n            sendGtagEvent(analyticsObj, dimX, dimY, entities[i].label, entities[i].uri, entities[i].type);\n          }\n        } else if ("gtm" === analyticsObj.__wl_type) {\n          // This is `gtag` style object.\n          for (var i = 0; i < entitiesTotal; i++) {\n            sendGtmEvent(analyticsObj, dimX, dimY, entities[i].label, entities[i].uri, entities[i].type);\n          }\n        }\n        // @TODO handle failure.\n        // resolve to finish.\n        return resolve(true);\n      });\n    };\n\n    // Fire off the promise chain to detect and send analytics data.\n    detectAnalyticsObject.then(function (analyticsObj) {\n      return sendAnalyticsData(analyticsObj);\n    });\n  });\n\n  /**\n   * Detects and returns a supported analytics object if one exists.\n   *\n   * @method getAnalyticsObject\n   * @return {object|bool}\n   */\n  function getAnalyticsObject() {\n    var obj = false;\n    // detect GTAG, GTM, GA in that order.\n    if (window.gtag) {\n      obj = window.gtag;\n      obj.__wl_type = "gtag";\n    } else if (window.dataLayer) {\n      obj = window.dataLayer;\n      obj.__wl_type = "gtm";\n    } else if (window.ga) {\n      obj = window.ga;\n      obj.__wl_type = "ga";\n    } else if (window.__gaTracker) {\n      obj = window.__gaTracker;\n      obj.__wl_type = "ga";\n    }\n\n    // console.log( `Found a ${obj.__wl_type} analytics object.` );\n\n    return obj;\n  }\n\n  /**\n   * Wrapper function for pushing entity analytics data to ga style tracker.\n   *\n   * @method sendGaEvent\n   * @param  {ga} analyticsObject The anlytics object we push into.\n   * @param  {string} dimX the name of the first custom dimension.\n   * @param  {string} dimY the name of the second custom dimension.\n   * @param  {string} label a string to use as the label.\n   * @param  {string} uri the uri of this entity.\n   * @param  {string} type the entity type.\n   */\n  function sendGaEvent(analyticsObj, dimX, dimY, label, uri, type) {\n    var _analyticsObj;\n\n    // Double check we have the config object before continuing.\n    if ("undefined" === typeof wordliftAnalyticsConfigData) {\n      return false;\n    }\n    analyticsObj("send", "event", "WordLift", "Mentions", label, 1, (_analyticsObj = {}, _defineProperty(_analyticsObj, dimX, uri), _defineProperty(_analyticsObj, dimY, type), _defineProperty(_analyticsObj, "nonInteraction", true), _analyticsObj));\n  }\n\n  /**\n   * Wrapper function for pushing entity analytics data to gtag.\n   *\n   * @method sendGtagEvent\n   * @param  {gtag} analyticsObject The anlytics object we push into.\n   * @param  {string} dimX the name of the first custom dimension.\n   * @param  {string} dimY the name of the second custom dimension.\n   * @param  {string} label a string to use as the label.\n   * @param  {string} uri the uri of this entity.\n   * @param  {string} type the entity type.\n   */\n  function sendGtagEvent(analyticsObj, dimX, dimY, label, uri, type) {\n    var _analyticsObj2;\n\n    // Double check we have the config object before continuing.\n    if ("undefined" === typeof wordliftAnalyticsConfigData) {\n      return false;\n    }\n\n    // console.log("Sending gtag event ...");\n\n    analyticsObj("event", "Mentions", (_analyticsObj2 = {\n      event_category: "WordLift",\n      event_label: label,\n      value: 1\n    }, _defineProperty(_analyticsObj2, dimX, uri), _defineProperty(_analyticsObj2, dimY, type), _defineProperty(_analyticsObj2, "non_interaction", true), _analyticsObj2));\n  }\n\n  /**\n   * Wrapper function for pushing entity analytics data to gtag.\n   *\n   * @method sendGtagEvent\n   * @param  {gtag} analyticsObject The anlytics object we push into.\n   * @param  {string} dimX the name of the first custom dimension.\n   * @param  {string} dimY the name of the second custom dimension.\n   * @param  {string} label a string to use as the label.\n   * @param  {string} uri the uri of this entity.\n   * @param  {string} type the entity type.\n   */\n  function sendGtmEvent(analyticsObj, dimX, dimY, label, uri, type) {\n    // Double check we have the config object before continuing.\n    if ("undefined" === typeof wordliftAnalyticsConfigData) {\n      return false;\n    }\n\n    // console.log("Sending gtm event...");\n\n    analyticsObj.push({\n      "event": "Mentions",\n      "wl_event_action": "Mentions",\n      "wl_event_category": "WordLift",\n      "wl_event_label": label,\n      "wl_event_value": 1,\n      "wl_event_uri": uri,\n      "wl_index_uri": dimX.replace(/^\\D+/g, \'\'),\n      "wl_event_type": type,\n      "wl_index_type": dimY.replace(/^\\D+/g, \'\'),\n      "non_interaction": true\n    });\n  }\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUHVibGljL2FuYWx5dGljcy5qcz85NWZiIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwid29yZGxpZnRBbmFseXRpY3NFbnRpdHlEYXRhIiwiZGV0ZWN0QW5hbHl0aWNzT2JqZWN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhbmFseXRpY3NPYmoiLCJnZXRBbmFseXRpY3NPYmplY3QiLCJzZW5kQW5hbHl0aWNzRGF0YSIsIndvcmRsaWZ0QW5hbHl0aWNzQ29uZmlnRGF0YSIsImRpbVgiLCJlbnRpdHlfdXJpX2RpbWVuc2lvbiIsImRpbVkiLCJlbnRpdHlfdHlwZV9kaW1lbnNpb24iLCJlbnRpdGllcyIsImtleSIsImhhc093blByb3BlcnR5IiwicHVzaCIsImVudGl0aWVzVG90YWwiLCJsZW5ndGgiLCJfX3dsX3R5cGUiLCJpIiwic2VuZEdhRXZlbnQiLCJsYWJlbCIsInVyaSIsInR5cGUiLCJzZW5kR3RhZ0V2ZW50Iiwic2VuZEd0bUV2ZW50IiwidGhlbiIsIm9iaiIsIndpbmRvdyIsImd0YWciLCJkYXRhTGF5ZXIiLCJnYSIsIl9fZ2FUcmFja2VyIiwiZXZlbnRfY2F0ZWdvcnkiLCJldmVudF9sYWJlbCIsInZhbHVlIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7Ozs7QUFTQSxDQUFDLFlBQVc7QUFDVjtBQUNBQSxXQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsVUFBU0MsS0FBVCxFQUFnQjtBQUM1RDtBQUNBLFFBQUksT0FBT0MsMkJBQVAsS0FBdUMsV0FBM0MsRUFBd0Q7QUFDdEQ7QUFDRDs7QUFFRDs7Ozs7QUFLQSxRQUFJQyx3QkFBd0IsSUFBSUMsT0FBSixDQUFZLFVBQVNDLE9BQVQsRUFBa0JDLE1BQWxCLEVBQTBCO0FBQ2hFLFVBQUlDLGVBQWVDLG9CQUFuQjtBQUNBLGFBQU9ILFFBQVFFLFlBQVIsQ0FBUDtBQUNELEtBSDJC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QixPQUFPaEIsMkJBQTNCLEVBQXdEO0FBQ3RELGFBQU8sS0FBUDtBQUNEOztBQUVEOztBQUVBSCxpQkFBYVcsSUFBYixDQUFrQjtBQUNoQixlQUFxQixVQURMO0FBRWhCLHlCQUFxQixVQUZMO0FBR2hCLDJCQUFxQixVQUhMO0FBSWhCLHdCQUFxQk0sS0FKTDtBQUtoQix3QkFBcUIsQ0FMTDtBQU1oQixzQkFBcUJDLEdBTkw7QUFPbkIsc0JBQXFCZCxLQUFLNEIsT0FBTCxDQUFjLE9BQWQsRUFBdUIsRUFBdkIsQ0FQRjtBQVFoQix1QkFBcUJiLElBUkw7QUFTbkIsdUJBQXFCYixLQUFLMEIsT0FBTCxDQUFjLE9BQWQsRUFBdUIsRUFBdkIsQ0FURjtBQVVuQix5QkFBcUI7QUFWRixLQUFsQjtBQVlEO0FBQ0YsQ0FqTUQiLCJmaWxlIjoiMTQxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2YgZnVuY3Rpb25zIGFuZCBsb2dpYyB0byBoYW5kbGUgc2VuZGluZyBvZiBlbnRpdHkgZGF0YSB0byBhblxuICogZXh0ZXJuYWwgYW5hbHl0aWNzIHRyYWNrZXIuXG4gKlxuICogT2JqZWN0czogYGdhYCwgYF9fZ2FUcmFja2VyYCBhcmUgc3VwcG9ydGVkIGFzIGlzIGBndGFnYC5cbiAqXG4gKiBOT1RFOiB0aGUgYF9fZ2FUcmFja2VyYCBvYmplY3QgaXMgYSBjb21tb24gcmVtYXAgbmFtZSBpbiBXb3JkUHJlc3MuXG4gKi9cblxuKGZ1bmN0aW9uKCkge1xuICAvLyBPbmx5IHJ1biBhZnRlciBwYWdlIGhhcyBsb2FkZWQuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gV2Ugc2hvdWxkIGhhdmUgYW4gZW50aXR5IG9iamVjdCBieSBoZXJlIGJ1dCBpZiBub3Qgc2hvcnQgY2lyY3VpdC5cbiAgICBpZiAodHlwZW9mIHdvcmRsaWZ0QW5hbHl0aWNzRW50aXR5RGF0YSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb21pc2UgdG8gaGFuZGxlIGRldGVjdGlvbiBhbmQgcmV0dXJuIG9mIGFuIGFuYWx5dGljcyBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICB2YXIgZGV0ZWN0QW5hbHl0aWNzT2JqZWN0ID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgYW5hbHl0aWNzT2JqID0gZ2V0QW5hbHl0aWNzT2JqZWN0KCk7XG4gICAgICByZXR1cm4gcmVzb2x2ZShhbmFseXRpY3NPYmopO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQSBmdW5jdGlvbiByZXR1cm5pbmcgdGhlIHByb21pc2UgdGhhdCBkZWFscyB3aXRoIGNyZWF0aW5nIGl0ZW1zXG4gICAgICogdG8gc2VuZCBhbmQgcGFzc2luZyB0aGVtIHRvIHRoZSBjb3JyZWN0IHNlbmQgZnVuY3Rpb24uXG4gICAgICpcbiAgICAgKiBAbWV0aG9kXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBhbmFseXRpY3NPYmogYW4gYW5hbHl0aWNzIHRyYWNraW5nIG9iamVjdCB0aGF0IGlzIHRoZSByZXNvbHZlIG9mIHRoZSBkZXRlY3QgZnVuY3Rpb24uXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICB2YXIgc2VuZEFuYWx5dGljc0RhdGEgPSBmdW5jdGlvbihhbmFseXRpY3NPYmopIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gaWYgd2UgZG9udCBoYXZlIGFuIG9iamVjdCB0byBwdXNoIGludG8gYW5kIGFuIG9iamVjdFxuICAgICAgICAvLyB3aXRoIGNvbmZpZyB0aGVuIHRoaXMgaXMgYSBmYWlsdXJlIC0gcmVqZWN0LlxuICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIGFuYWx5dGljc09iaiB8fCBcInVuZGVmaW5lZFwiID09PSB0eXBlb2Ygd29yZGxpZnRBbmFseXRpY3NDb25maWdEYXRhKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0dXAgdGhlIGN1c3RvbSBkaW1lbnRpb24gbmFtZXMuXG4gICAgICAgIHZhciBkaW1YID0gXCJkaW1lbnNpb25cIiArIHdvcmRsaWZ0QW5hbHl0aWNzQ29uZmlnRGF0YS5lbnRpdHlfdXJpX2RpbWVuc2lvbjtcbiAgICAgICAgdmFyIGRpbVkgPSBcImRpbWVuc2lvblwiICsgd29yZGxpZnRBbmFseXRpY3NDb25maWdEYXRhLmVudGl0eV90eXBlX2RpbWVuc2lvbjtcblxuICAgICAgICAvLyBDcmVhdGUgYW4gYXJyYXkgb2YgYWxsIHRoZSBpbmRpdmlkdWFsIGVudGl0aWVzLlxuICAgICAgICB2YXIgZW50aXRpZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHdvcmRsaWZ0QW5hbHl0aWNzRW50aXR5RGF0YSkge1xuICAgICAgICAgIGlmICh3b3JkbGlmdEFuYWx5dGljc0VudGl0eURhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgZW50aXRpZXMucHVzaCh3b3JkbGlmdEFuYWx5dGljc0VudGl0eURhdGFba2V5XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ291bnQgdGhlIHRvdGFsIGVudGl0aWVzIHdlIGhhdmUgdG8gc2VuZC5cbiAgICAgICAgdmFyIGVudGl0aWVzVG90YWwgPSBlbnRpdGllcy5sZW5ndGg7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coIGBHb2luZyB0byBzZW5kIGFuYWx5dGljcyBldmVudHMgdXNpbmcgJHthbmFseXRpY3NPYmouX193bF90eXBlfSBvYmplY3QgdHlwZS5gICk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlcGVuZGluZyBvbiB0aGUgdHJhY2tpbmcgb2JqZWN0IHR5cGUgc2VuZCB0aGUgZGF0YVxuICAgICAgICAgKiB0byB0aGUgY29ycmVzcGVuZGluZyBzZXJ2aWNlLlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKFwiZ2FcIiA9PT0gYW5hbHl0aWNzT2JqLl9fd2xfdHlwZSkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgYGdhYCBzdHlsZSBvYmplY3QuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbnRpdGllc1RvdGFsOyBpKyspIHtcbiAgICAgICAgICAgIHNlbmRHYUV2ZW50KGFuYWx5dGljc09iaiwgZGltWCwgZGltWSwgZW50aXRpZXNbaV0ubGFiZWwsIGVudGl0aWVzW2ldLnVyaSwgZW50aXRpZXNbaV0udHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKFwiZ3RhZ1wiID09PSBhbmFseXRpY3NPYmouX193bF90eXBlKSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBgZ3RhZ2Agc3R5bGUgb2JqZWN0LlxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZW50aXRpZXNUb3RhbDsgaSsrKSB7XG4gICAgICAgICAgICBzZW5kR3RhZ0V2ZW50KGFuYWx5dGljc09iaiwgZGltWCwgZGltWSwgZW50aXRpZXNbaV0ubGFiZWwsIGVudGl0aWVzW2ldLnVyaSwgZW50aXRpZXNbaV0udHlwZSk7XG4gICAgICAgICAgfVxuXHQgICAgfSBlbHNlIGlmIChcImd0bVwiID09PSBhbmFseXRpY3NPYmouX193bF90eXBlKSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBgZ3RhZ2Agc3R5bGUgb2JqZWN0LlxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZW50aXRpZXNUb3RhbDsgaSsrKSB7XG4gICAgICAgICAgICBzZW5kR3RtRXZlbnQoYW5hbHl0aWNzT2JqLCBkaW1YLCBkaW1ZLCBlbnRpdGllc1tpXS5sYWJlbCwgZW50aXRpZXNbaV0udXJpLCBlbnRpdGllc1tpXS50eXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQFRPRE8gaGFuZGxlIGZhaWx1cmUuXG4gICAgICAgIC8vIHJlc29sdmUgdG8gZmluaXNoLlxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBGaXJlIG9mZiB0aGUgcHJvbWlzZSBjaGFpbiB0byBkZXRlY3QgYW5kIHNlbmQgYW5hbHl0aWNzIGRhdGEuXG4gICAgZGV0ZWN0QW5hbHl0aWNzT2JqZWN0LnRoZW4oYW5hbHl0aWNzT2JqID0+IHNlbmRBbmFseXRpY3NEYXRhKGFuYWx5dGljc09iaikpO1xuICB9KTtcblxuICAvKipcbiAgICogRGV0ZWN0cyBhbmQgcmV0dXJucyBhIHN1cHBvcnRlZCBhbmFseXRpY3Mgb2JqZWN0IGlmIG9uZSBleGlzdHMuXG4gICAqXG4gICAqIEBtZXRob2QgZ2V0QW5hbHl0aWNzT2JqZWN0XG4gICAqIEByZXR1cm4ge29iamVjdHxib29sfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0QW5hbHl0aWNzT2JqZWN0KCkge1xuICAgIHZhciBvYmogPSBmYWxzZTtcbiAgICAvLyBkZXRlY3QgR1RBRywgR1RNLCBHQSBpbiB0aGF0IG9yZGVyLlxuXHRpZiAod2luZG93Lmd0YWcpIHtcbiAgICAgIG9iaiA9IHdpbmRvdy5ndGFnO1xuICAgICAgb2JqLl9fd2xfdHlwZSA9IFwiZ3RhZ1wiO1xuICAgIH0gZWxzZSBpZiAod2luZG93LmRhdGFMYXllcikge1xuICAgICAgb2JqID0gd2luZG93LmRhdGFMYXllcjtcbiAgICAgIG9iai5fX3dsX3R5cGUgPSBcImd0bVwiO1xuICAgIH0gZWxzZSBpZiAod2luZG93LmdhKSB7XG4gICAgICBvYmogPSB3aW5kb3cuZ2E7XG4gICAgICBvYmouX193bF90eXBlID0gXCJnYVwiO1xuICAgIH0gZWxzZSBpZiAod2luZG93Ll9fZ2FUcmFja2VyKSB7XG4gICAgICBvYmogPSB3aW5kb3cuX19nYVRyYWNrZXI7XG4gICAgICBvYmouX193bF90eXBlID0gXCJnYVwiO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKCBgRm91bmQgYSAke29iai5fX3dsX3R5cGV9IGFuYWx5dGljcyBvYmplY3QuYCApO1xuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZ1bmN0aW9uIGZvciBwdXNoaW5nIGVudGl0eSBhbmFseXRpY3MgZGF0YSB0byBnYSBzdHlsZSB0cmFja2VyLlxuICAgKlxuICAgKiBAbWV0aG9kIHNlbmRHYUV2ZW50XG4gICAqIEBwYXJhbSAge2dhfSBhbmFseXRpY3NPYmplY3QgVGhlIGFubHl0aWNzIG9iamVjdCB3ZSBwdXNoIGludG8uXG4gICAqIEBwYXJhbSAge3N0cmluZ30gZGltWCB0aGUgbmFtZSBvZiB0aGUgZmlyc3QgY3VzdG9tIGRpbWVuc2lvbi5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBkaW1ZIHRoZSBuYW1lIG9mIHRoZSBzZWNvbmQgY3VzdG9tIGRpbWVuc2lvbi5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBsYWJlbCBhIHN0cmluZyB0byB1c2UgYXMgdGhlIGxhYmVsLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHVyaSB0aGUgdXJpIG9mIHRoaXMgZW50aXR5LlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHR5cGUgdGhlIGVudGl0eSB0eXBlLlxuICAgKi9cbiAgZnVuY3Rpb24gc2VuZEdhRXZlbnQoYW5hbHl0aWNzT2JqLCBkaW1YLCBkaW1ZLCBsYWJlbCwgdXJpLCB0eXBlKSB7XG4gICAgLy8gRG91YmxlIGNoZWNrIHdlIGhhdmUgdGhlIGNvbmZpZyBvYmplY3QgYmVmb3JlIGNvbnRpbnVpbmcuXG4gICAgaWYgKFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiB3b3JkbGlmdEFuYWx5dGljc0NvbmZpZ0RhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgYW5hbHl0aWNzT2JqKFwic2VuZFwiLCBcImV2ZW50XCIsIFwiV29yZExpZnRcIiwgXCJNZW50aW9uc1wiLCBsYWJlbCwgMSwge1xuICAgICAgW2RpbVhdOiB1cmksXG4gICAgICBbZGltWV06IHR5cGUsXG4gICAgICBub25JbnRlcmFjdGlvbjogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZnVuY3Rpb24gZm9yIHB1c2hpbmcgZW50aXR5IGFuYWx5dGljcyBkYXRhIHRvIGd0YWcuXG4gICAqXG4gICAqIEBtZXRob2Qgc2VuZEd0YWdFdmVudFxuICAgKiBAcGFyYW0gIHtndGFnfSBhbmFseXRpY3NPYmplY3QgVGhlIGFubHl0aWNzIG9iamVjdCB3ZSBwdXNoIGludG8uXG4gICAqIEBwYXJhbSAge3N0cmluZ30gZGltWCB0aGUgbmFtZSBvZiB0aGUgZmlyc3QgY3VzdG9tIGRpbWVuc2lvbi5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBkaW1ZIHRoZSBuYW1lIG9mIHRoZSBzZWNvbmQgY3VzdG9tIGRpbWVuc2lvbi5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBsYWJlbCBhIHN0cmluZyB0byB1c2UgYXMgdGhlIGxhYmVsLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHVyaSB0aGUgdXJpIG9mIHRoaXMgZW50aXR5LlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHR5cGUgdGhlIGVudGl0eSB0eXBlLlxuICAgKi9cbiAgZnVuY3Rpb24gc2VuZEd0YWdFdmVudChhbmFseXRpY3NPYmosIGRpbVgsIGRpbVksIGxhYmVsLCB1cmksIHR5cGUpIHtcbiAgICAvLyBEb3VibGUgY2hlY2sgd2UgaGF2ZSB0aGUgY29uZmlnIG9iamVjdCBiZWZvcmUgY29udGludWluZy5cbiAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIHdvcmRsaWZ0QW5hbHl0aWNzQ29uZmlnRGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKFwiU2VuZGluZyBndGFnIGV2ZW50IC4uLlwiKTtcblxuICAgIGFuYWx5dGljc09iaihcImV2ZW50XCIsIFwiTWVudGlvbnNcIiwge1xuICAgICAgZXZlbnRfY2F0ZWdvcnk6IFwiV29yZExpZnRcIixcbiAgICAgIGV2ZW50X2xhYmVsOiBsYWJlbCxcbiAgICAgIHZhbHVlOiAxLFxuICAgICAgW2RpbVhdOiB1cmksXG4gICAgICBbZGltWV06IHR5cGUsXG4gICAgICBub25faW50ZXJhY3Rpb246IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZ1bmN0aW9uIGZvciBwdXNoaW5nIGVudGl0eSBhbmFseXRpY3MgZGF0YSB0byBndGFnLlxuICAgKlxuICAgKiBAbWV0aG9kIHNlbmRHdGFnRXZlbnRcbiAgICogQHBhcmFtICB7Z3RhZ30gYW5hbHl0aWNzT2JqZWN0IFRoZSBhbmx5dGljcyBvYmplY3Qgd2UgcHVzaCBpbnRvLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGRpbVggdGhlIG5hbWUgb2YgdGhlIGZpcnN0IGN1c3RvbSBkaW1lbnNpb24uXG4gICAqIEBwYXJhbSAge3N0cmluZ30gZGltWSB0aGUgbmFtZSBvZiB0aGUgc2Vjb25kIGN1c3RvbSBkaW1lbnNpb24uXG4gICAqIEBwYXJhbSAge3N0cmluZ30gbGFiZWwgYSBzdHJpbmcgdG8gdXNlIGFzIHRoZSBsYWJlbC5cbiAgICogQHBhcmFtICB7c3RyaW5nfSB1cmkgdGhlIHVyaSBvZiB0aGlzIGVudGl0eS5cbiAgICogQHBhcmFtICB7c3RyaW5nfSB0eXBlIHRoZSBlbnRpdHkgdHlwZS5cbiAgICovXG4gIGZ1bmN0aW9uIHNlbmRHdG1FdmVudChhbmFseXRpY3NPYmosIGRpbVgsIGRpbVksIGxhYmVsLCB1cmksIHR5cGUpIHtcbiAgICAvLyBEb3VibGUgY2hlY2sgd2UgaGF2ZSB0aGUgY29uZmlnIG9iamVjdCBiZWZvcmUgY29udGludWluZy5cbiAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIHdvcmRsaWZ0QW5hbHl0aWNzQ29uZmlnRGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKFwiU2VuZGluZyBndG0gZXZlbnQuLi5cIik7XG5cbiAgICBhbmFseXRpY3NPYmoucHVzaCh7XG4gICAgICBcImV2ZW50XCI6ICAgICAgICAgICAgIFwiTWVudGlvbnNcIixcbiAgICAgIFwid2xfZXZlbnRfYWN0aW9uXCI6ICAgXCJNZW50aW9uc1wiLFxuICAgICAgXCJ3bF9ldmVudF9jYXRlZ29yeVwiOiBcIldvcmRMaWZ0XCIsXG4gICAgICBcIndsX2V2ZW50X2xhYmVsXCI6ICAgIGxhYmVsLFxuICAgICAgXCJ3bF9ldmVudF92YWx1ZVwiOiAgICAxLFxuICAgICAgXCJ3bF9ldmVudF91cmlcIjogICAgICB1cmksXG5cdCAgXCJ3bF9pbmRleF91cmlcIjogICAgICBkaW1YLnJlcGxhY2UoIC9eXFxEKy9nLCAnJyApLFxuICAgICAgXCJ3bF9ldmVudF90eXBlXCI6ICAgICB0eXBlLFxuXHQgIFwid2xfaW5kZXhfdHlwZVwiOiAgICAgZGltWS5yZXBsYWNlKCAvXlxcRCsvZywgJycgKSxcblx0ICBcIm5vbl9pbnRlcmFjdGlvblwiOiAgIHRydWVcbiAgICB9KTtcbiAgfVxufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///141\n')}});
>>>>>>> master
