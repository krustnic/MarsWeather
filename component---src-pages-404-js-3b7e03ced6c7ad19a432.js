(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(150),s=a(148);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(s.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},145:function(e,t,a){var n;e.exports=(n=a(147))&&n.default||n},146:function(e){e.exports={data:{site:{siteMetadata:{title:"Latest Weather at Elysium Planitia"}}}}},147:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(58),c=a(2),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=u},148:function(e,t,a){"use strict";var n=a(149),r=a(0),i=a.n(r),s=a(4),o=a.n(s),c=a(152),u=a.n(c);function l(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,o=e.title,c=n.data.site,l=t||c.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},l.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=l},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Latest Weather at Elysium Planitia",description:"InSight is taking daily weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Planitia, a flat, smooth plain near Mars equator.",author:"github.com/krustnic"}}}}},150:function(e,t,a){"use strict";var n=a(146),r=a(0),i=a.n(r),s=a(4),o=a.n(s),c=(a(33),a(145),i.a.createContext({})),u=function(e){return i.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func};var l=a(151),d=a.n(l),p=function(e){var t=e.children;return i.a.createElement(u,{query:"755544856",render:function(e){return i.a.createElement("div",{className:d.a.container},i.a.createElement("main",{className:d.a.content},t),i.a.createElement("footer",null,"© ",(new Date).getFullYear()," Information about weather powered by"," ",i.a.createElement("a",{href:"https://mars.nasa.gov/insight/"},"NASA InSight Mission"),", source at ",i.a.createElement("a",{href:"https://github.com/krustnic/MarsWeather"},"github"),i.a.createElement("br",null),i.a.createElement("div",null,"Icons made by"," ",i.a.createElement("a",{href:"https://www.flaticon.com/authors/those-icons",title:"Those Icons"},"Those Icons"))))},data:n})};p.propTypes={children:o.a.node.isRequired};t.a=p}}]);
//# sourceMappingURL=component---src-pages-404-js-3b7e03ced6c7ad19a432.js.map