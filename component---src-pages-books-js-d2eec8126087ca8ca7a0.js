(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{146:function(t,e,n){"use strict";n.r(e);var a=n(8),i=n(0),r=n(153),c=n(154);n(169);e.default=function(){return Object(i.useLayoutEffect)(function(){var t=document.createElement("script");return t.type="text/javascript",t.src="https://www.goodreads.com/review/grid_widget/9868029?cover_size=medium&hide_link=true&hide_title=true&num_books=18&order=d&shelf=read&sort=date_read&widget_id=read",document.body.appendChild(t),function(){document.body.removeChild(t)}}),Object(a.b)(c.a,null,Object(a.b)(r.Helmet,null,Object(a.b)("title",null,"Books")),Object(a.b)("div",{className:"books"},Object(a.b)("h2",null,"Recently Read"),Object(a.b)("div",{id:"gr_grid_widget_read"})))}},150:function(t,e,n){var a;t.exports=(a=n(156))&&a.default||a},151:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return g}),n.d(e,"StaticQueryContext",function(){return f}),n.d(e,"StaticQuery",function(){return p}),n.d(e,"useStaticQuery",function(){return h});var a=n(8),i=n(0),r=n.n(i),c=n(4),o=n.n(c),s=n(149),u=n.n(s);n.d(e,"Link",function(){return u.a}),n.d(e,"withPrefix",function(){return s.withPrefix}),n.d(e,"navigate",function(){return s.navigate}),n.d(e,"push",function(){return s.push}),n.d(e,"replace",function(){return s.replace}),n.d(e,"navigateTo",function(){return s.navigateTo});var l=n(150),d=n.n(l);n.d(e,"PageRenderer",function(){return d.a});var b=n(33);n.d(e,"parsePath",function(){return b.a});var f=r.a.createContext({}),p=function(t){return Object(a.b)(f.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(a.b)("div",null,"Loading (StaticQuery)")})},h=function(t){r.a.useContext;var e=r.a.useContext(f);if(e[t]&&e[t].data)return e[t].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var a=n(157),i=n.n(a),r=n(158),c=n.n(r);c.a.baseFontSize="18px";var o=new i.a(c.a),s=o.rhythm},154:function(t,e,n){"use strict";var a=n(8),i=n(155),r=(n(0),n(151)),c=n(153),o=n(159),s=n(152),u={name:"146q31f",styles:"float:right;"};e.a=function(t){var e=t.children,n=i.data;return Object(a.b)("div",{css:Object(a.a)("margin:0 auto;max-width:700px;padding:",Object(s.a)(2),";padding-top:",Object(s.a)(1.5),";")},Object(a.b)(c.Helmet,null,Object(a.b)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),Object(a.b)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),Object(a.b)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),Object(a.b)("link",{rel:"manifest",href:"/site.webmanifest"}),Object(a.b)("title",null,n.site.siteMetadata.title)),Object(a.b)(r.Link,{to:"/"},Object(a.b)("h3",{css:Object(a.a)("margin-bottom:",Object(s.a)(2),";display:inline-block;font-style:normal;")},n.site.siteMetadata.title)),Object(a.b)(r.Link,{to:"/about/",css:u},"About"),e,Object(a.b)("div",{className:"social-links"},Object(a.b)("a",{href:"https://github.com/aks427",target:"_blank",title:"GitHub"},Object(a.b)(o.a,null)),Object(a.b)("a",{href:"https://twitter.com/aks427",target:"_blank",title:"Twitter"},Object(a.b)(o.d,null)),Object(a.b)("a",{href:"https://stackoverflow.com/users/505108/andrew-stevens",target:"_blank",title:"Stack Overflow"},Object(a.b)(o.c,null)),Object(a.b)("a",{href:"https://www.linkedin.com/in/aks427/",target:"_blank",title:"LinkedIn"},Object(a.b)(o.b,null))))}},155:function(t){t.exports={data:{site:{siteMetadata:{title:"Andrew's Dev Site"}}}}},156:function(t,e,n){"use strict";n.r(e);n(52);var a=n(0),i=n.n(a),r=n(4),c=n.n(r),o=n(53),s=n(2),u=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return i.a.createElement(o.a,Object.assign({location:e,pageResources:n},n.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},e.default=u},169:function(t,e,n){}}]);
//# sourceMappingURL=component---src-pages-books-js-d2eec8126087ca8ca7a0.js.map