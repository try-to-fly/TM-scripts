// ==UserScript==
// @name         跳转Github Dev编辑器
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  在GitHub页面上添加了一个名为"Go Dev"的按钮，点击该按钮会将当前URL中的"github.com"修改为"github.dev"并在当前标签页打开新URL。
// @author       微笑
// @match        https://github.com/*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
  'use strict';
  // 获取页面上的目标DOM节点
  var pageheadActions = document.querySelector('.pagehead-actions');

  // 创建一个li节点
  var liNode = document.createElement('li');

  // 设置li节点的innerHTML
  liNode.innerHTML =
    '<button class="js-toggler-target rounded-left-2 btn-sm btn BtnGroup-item">Go Dev</button>';

  // 将li节点插入到第一个位置
  pageheadActions.insertBefore(liNode, pageheadActions.firstChild);

  // 添加点击事件处理程序
  liNode.addEventListener('click', function () {
    // 修改当前URL中的github.com为github.dev
    var currentUrl = window.location.href;
    var newUrl = currentUrl.replace('github.com', 'github.dev');
    // 在当前标签页打开新URL
    window.open(newUrl, '_self');
  });
})();
