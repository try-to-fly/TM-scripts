// ==UserScript==
// @name         ruanyifeng hack
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  移除掉阮一峰的广告监测
// @author       微笑
// @match        https://www.ruanyifeng.com/blog/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ruanyifeng.com
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
  'use strict';
  document.querySelector = null;
  // Your code here...
})();
