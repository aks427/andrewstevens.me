(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(t,e,n){"use strict";n.r(e),n.d(e,"query",function(){return c});var a=n(8),r=(n(0),n(154)),i=n(155);n(170);e.default=function(t){var e=t.data.markdownRemark;return Object(a.b)(i.a,null,Object(a.b)(r.Helmet,null,Object(a.b)("title",null,e.frontmatter.title," | Andrew Stevens")),Object(a.b)("div",{className:"post"},Object(a.b)("h2",null,e.frontmatter.title),Object(a.b)("div",{className:"posted-date"},e.frontmatter.date),Object(a.b)("div",{className:"time-to-read"},e.timeToRead," minute read"),Object(a.b)("div",{dangerouslySetInnerHTML:{__html:e.html}})))};var c="1112061193"},151:function(t,e,n){var a;t.exports=(a=n(157))&&a.default||a},152:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return m}),n.d(e,"StaticQueryContext",function(){return f}),n.d(e,"StaticQuery",function(){return p}),n.d(e,"useStaticQuery",function(){return h});var a=n(8),r=n(0),i=n.n(r),c=n(4),s=n.n(c),o=n(150),u=n.n(o);n.d(e,"Link",function(){return u.a}),n.d(e,"withPrefix",function(){return o.withPrefix}),n.d(e,"navigate",function(){return o.navigate}),n.d(e,"push",function(){return o.push}),n.d(e,"replace",function(){return o.replace}),n.d(e,"navigateTo",function(){return o.navigateTo});var l=n(151),b=n.n(l);n.d(e,"PageRenderer",function(){return b.a});var d=n(33);n.d(e,"parsePath",function(){return d.a});var f=i.a.createContext({}),p=function(t){return Object(a.b)(f.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(a.b)("div",null,"Loading (StaticQuery)")})},h=function(t){i.a.useContext;var e=i.a.useContext(f);if(e[t]&&e[t].data)return e[t].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},153:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var a=n(158),r=n.n(a),i=n(159),c=n.n(i);c.a.baseFontSize="18px";var s=new r.a(c.a),o=s.rhythm},155:function(t,e,n){"use strict";var a=n(8),r=n(156),i=(n(0),n(152)),c=n(154),s=n(160),o=n(153),u={name:"146q31f",styles:"float:right;"};e.a=function(t){var e=t.children,n=r.data;return Object(a.b)("div",{css:Object(a.a)("margin:0 auto;max-width:700px;padding:",Object(o.a)(2),";padding-top:",Object(o.a)(1.5),";")},Object(a.b)(c.Helmet,null,Object(a.b)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),Object(a.b)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),Object(a.b)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),Object(a.b)("link",{rel:"manifest",href:"/site.webmanifest"}),Object(a.b)("title",null,n.site.siteMetadata.title)),Object(a.b)(i.Link,{to:"/"},Object(a.b)("h3",{css:Object(a.a)("margin-bottom:",Object(o.a)(2),";display:inline-block;font-style:normal;")},"Andrew's Dev Site")),Object(a.b)(i.Link,{to:"/about/",css:u},"About"),e,Object(a.b)("div",{className:"social-links"},Object(a.b)("a",{href:"https://github.com/aks427",target:"_blank",title:"GitHub"},Object(a.b)(s.a,null)),Object(a.b)("a",{href:"https://twitter.com/aks427",target:"_blank",title:"Twitter"},Object(a.b)(s.d,null)),Object(a.b)("a",{href:"https://stackoverflow.com/users/505108/andrew-stevens",target:"_blank",title:"Stack Overflow"},Object(a.b)(s.c,null)),Object(a.b)("a",{href:"https://www.linkedin.com/in/aks427/",target:"_blank",title:"LinkedIn"},Object(a.b)(s.b,null))))}},156:function(t){t.exports={data:{site:{siteMetadata:{title:"Andrew Stevens | Dev Site"}}}}},157:function(t,e,n){"use strict";n.r(e);n(52);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),s=n(53),o=n(2),u=function(t){var e=t.location,n=o.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(s.a,Object.assign({location:e,pageResources:n},n.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},e.default=u},170:function(t,e,n){}}]);
//# sourceMappingURL=component---src-templates-post-js-b44c00adf31e7d881988.js.map