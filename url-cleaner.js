// ==UserScript==
// @name         清洗url
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  移除url中冗余的查询参数
// @author       微笑
// @run-at       document-idle
// @match        https://mp.weixin.qq.com/*
// @match        https://www.zhihu.com/*
// @match        https://www.bilibili.com/*
// @match        https://space.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=qq.com
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
  'use strict';

  const domainConfig = {
    'mp.weixin.qq.com': {
      removeKeys: ['chksm', 'source'],
      removeHash: true,
    },
    'www.zhihu.com': {
      removeKeys: ['utm_medium', 'utm_oi', 'utm_source'],
      removeHash: false,
    },
    'space.bilibili.com': {
      removeKeys: ['spm_id_from'],
      removeHash: false,
    },
    'www.bilibili.com': {
      removeKeys: [
        'buvid',
        'is_story_h5',
        'mid',
        'p',
        'plat_id',
        'share_from',
        'share_medium',
        'share_plat',
        'share_session_id',
        'share_source',
        'share_tag',
        'timestamp',
        'unique_k',
        'up_id',
        'vd_source',
      ],
    },
  };

  const { href, host } = location;
  const newUrl = new URL(href);

  const removeParams = (keys) => {
    keys.forEach((key) => {
      newUrl.searchParams.delete(key);
    });
  };

  const configForCurrentDomain = domainConfig[host];

  if (configForCurrentDomain) {
    removeParams(configForCurrentDomain.removeKeys);

    if (configForCurrentDomain.removeHash) {
      newUrl.hash = '';
    }
  }

  const newHref = newUrl.toString();
  if (newHref !== href) {
    setTimeout(() => {
      history.replaceState(null, '', newHref);
    }, 4000);
  }
})();
