(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{146:function(t,e,n){"use strict";n.r(e),n.d(e,"query",function(){return u});var a=n(8),r=(n(0),n(150)),i=n(151),o=n(152),c={name:"nn640c",styles:"text-decoration:none;color:inherit;"},s={name:"qp4dny",styles:"color:#bbb;"};e.default=function(t){var e=t.data;return Object(a.b)(o.a,null,Object(a.b)("div",null,Object(a.b)("h3",null,"Blog"),Object(a.b)("h4",null,e.allMarkdownRemark.totalCount," Posts"),e.allMarkdownRemark.edges.map(function(t){var e=t.node;return Object(a.b)("div",{key:e.id},Object(a.b)(r.Link,{to:e.fields.slug,css:c},Object(a.b)("h3",{css:Object(a.a)("margin-bottom:",Object(i.a)(.25),";")},e.frontmatter.title," ",Object(a.b)("span",{css:s},"— ",e.frontmatter.date)),Object(a.b)("p",null,e.excerpt)))})))};var u="2068765159"},149:function(t,e,n){var a;t.exports=(a=n(154))&&a.default||a},150:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return g}),n.d(e,"StaticQueryContext",function(){return f}),n.d(e,"StaticQuery",function(){return p}),n.d(e,"useStaticQuery",function(){return h});var a=n(8),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(148),u=n.n(s);n.d(e,"Link",function(){return u.a}),n.d(e,"withPrefix",function(){return s.withPrefix}),n.d(e,"navigate",function(){return s.navigate}),n.d(e,"push",function(){return s.push}),n.d(e,"replace",function(){return s.replace}),n.d(e,"navigateTo",function(){return s.navigateTo});var l=n(149),d=n.n(l);n.d(e,"PageRenderer",function(){return d.a});var b=n(33);n.d(e,"parsePath",function(){return b.a});var f=i.a.createContext({}),p=function(t){return Object(a.b)(f.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(a.b)("div",null,"Loading (StaticQuery)")})},h=function(t){i.a.useContext;var e=i.a.useContext(f);if(e[t]&&e[t].data)return e[t].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},151:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var a=n(156),r=n.n(a),i=n(157),o=n.n(i);o.a.baseFontSize="18px";var c=new r.a(o.a),s=c.rhythm},152:function(t,e,n){"use strict";var a=n(8),r=n(153),i=(n(0),n(150)),o=n(155),c=n(151),s={name:"146q31f",styles:"float:right;"};e.a=function(t){var e=t.children,n=r.data;return Object(a.b)("div",{css:Object(a.a)("margin:0 auto;max-width:700px;padding:",Object(c.a)(2),";padding-top:",Object(c.a)(1.5),";")},Object(a.b)(o.Helmet,null,Object(a.b)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),Object(a.b)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),Object(a.b)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),Object(a.b)("link",{rel:"manifest",href:"/site.webmanifest"}),Object(a.b)("title",null,n.site.siteMetadata.title)),Object(a.b)(i.Link,{to:"/"},Object(a.b)("h3",{css:Object(a.a)("margin-bottom:",Object(c.a)(2),";display:inline-block;font-style:normal;")},n.site.siteMetadata.title)),Object(a.b)(i.Link,{to:"/about/",css:s},"About"),e)}},153:function(t){t.exports={data:{site:{siteMetadata:{title:"Andrew's Sandbox"}}}}},154:function(t,e,n){"use strict";n.r(e);n(52);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(53),s=n(2),u=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u}}]);
//# sourceMappingURL=component---src-pages-index-js-caa0a07e330bed875290.js.map