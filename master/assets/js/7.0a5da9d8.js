(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{577:function(e,t,r){},612:function(e,t,r){"use strict";r(577)},644:function(e,t,r){"use strict";r.r(t);r(33),r(37),r(50),r(20),r(159),r(51);var n=r(31),a=(r(52),r(12)),i={props:["selected","asideBanners","asideBannersUrl","prereq"],data:function(){return{headerCurrent:null}},mounted:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.addEventListener("scroll",e.headerActive),window.addEventListener("hashchange",e.headerActive);case 2:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){window.removeEventListener("scroll",this.headerActive),window.removeEventListener("hashchange",this.headerActive)},computed:{headersFiltered:function(){return this.$page.headers.filter((function(e){var t=!e.title.match(/{hide}/),r=!e.title.match(/pre-requisite/i);return t&&r}))}},methods:{headerActive:function(e){var t=this,r=window.scrollY+50;if(this.$page.headers){var a=this.$page.headers.map((function(e){return Object(n.a)(Object(n.a)({},e),{},{y:document.getElementById(e.slug).getBoundingClientRect().top})})).filter((function(e){return!e.title.match(/\{hide\}/)})).map((function(e){return Object(n.a)(Object(n.a)({},e),{},{y:e.y+window.scrollY})}));a.forEach((function(e,i){var s=a[i],c=a[i+1];if(s&&c){if(r>=s.y&&r<c.y)return t.headerCurrent=Object(n.a)({},s)}else if(r>=s.y)return t.headerCurrent=Object(n.a)({},s)}))}}}},s=(r(612),r(1)),c=Object(s.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"container"},[r("div",{staticClass:"search__container"},[e.$themeConfig.algolia?r("div",{staticClass:"search",on:{click:function(t){return e.$emit("search",!0)}}},[r("div",{staticClass:"search__icon"},[r("icon-search")],1),r("div",{staticClass:"search__text"},[e._v("Search")])]):e._e()]),e.asideBanners&&!e.$themeConfig.custom?r("div",{staticClass:"banners"},e._l(e.asideBanners,(function(t){return r("div",{staticClass:"banners__item"},[r("a",{attrs:{href:t.href,target:"_blank",rel:"noreferrer noopener"}},[r("img",{staticClass:"aside__image",attrs:{src:e.asideBannersUrl+"/"+t.src,alt:t.alt},on:{error:function(t){return e.$emit("bannerError",!0)}}})])])})),0):e._e(),e.prereq&&e.prereq.length>0?r("div",[r("div",{staticClass:"aside__title"},[e._v("Pre-requisite reading")]),e._l(e.prereq,(function(t){return r("a",{staticClass:"prereq__item",attrs:{href:t.href}},[e._v(e._s(t.text))])}))],2):e._e(),e.$page.headers&&e.$page.headers.length>0?r("div",[r("div",{staticClass:"aside__title"},[e._v("On this page")]),e._l(e.headersFiltered,(function(t){return r("div",{ref:t.slug,refInFor:!0,staticClass:"aside__link",class:["aside__link__active__"+(e.headerCurrent&&e.headerCurrent.slug===t.slug)]},[r("a",{staticClass:"aside__link__href header-anchor",class:{selected:t.slug==e.selected},attrs:{href:"#"+t.slug}},[e._v(e._s(t.title))])])}))],2):e._e()])])}),[],!1,null,"6ffc1dd0",null);t.default=c.exports}}]);