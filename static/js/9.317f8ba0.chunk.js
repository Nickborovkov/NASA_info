(this.webpackJsonpEarth_Data=this.webpackJsonpEarth_Data||[]).push([[9],{251:function(t,e,a){t.exports={modalImage:"commonStyles_modalImage__2f9nz"}},252:function(t,e,a){"use strict";e.a=a.p+"static/media/imagePlaceholder.d121e487.jpg"},253:function(t,e,a){"use strict";a(1);var r=a(254),n=a.n(r),c=a(4),i=a.n(c),o=a(2);e.a=function(t){var e=t.active,a=t.setActive,r=t.children;return Object(o.jsx)("div",{className:i()(n.a.modalBody,e&&n.a.activeBody),onClick:function(){a(!1)},children:Object(o.jsx)("div",{className:i()(n.a.modalContent,e&&n.a.activeContent),onClick:function(t){t.stopPropagation()},children:r})})}},254:function(t,e,a){t.exports={modalBody:"modalWindow_modalBody__37t9c",activeBody:"modalWindow_activeBody__1vcwk",modalContent:"modalWindow_modalContent__1UFnh",activeContent:"modalWindow_activeContent__1TwDg"}},271:function(t,e,a){t.exports={title:"nasaLibrary_title__1Ll2J",nasaLibrary:"nasaLibrary_nasaLibrary__2qwjM",imagesArray:"nasaLibrary_imagesArray__2Gg7e",imageHolder:"nasaLibrary_imageHolder__3_7x7",image:"nasaLibrary_image__1VLmU",buttonsHolder:"nasaLibrary_buttonsHolder__19Mrx",pageButton:"nasaLibrary_pageButton__JFnSb",errorCase:"nasaLibrary_errorCase__1UOTE"}},272:function(t,e,a){t.exports={title:"nasaLibraryMedia_title__2Crz0"}},273:function(t,e,a){"use strict";a.r(e);var r=a(31),n=a(1),c=a(271),i=a.n(c),o=a(272),s=a.n(o),l=a(251),b=a.n(l),u=a(4),d=a.n(u),j=a(27),m=a(44),_=a(77),O=a(260),f=a(10),y=a(252),h=a(255),g=a.n(h),v=a(253),x=a(2);e.default=function(){var t=Object(j.b)(),e=Object(j.c)((function(t){return t.library.isFetching})),a=Object(j.c)((function(t){return t.library.result})),c=Object(j.c)((function(t){return t.library.currentSearch})),o=Object(j.c)((function(t){return t.library.mediaType})),l=Object(j.c)((function(t){return t.library.yearStart})),u=Object(j.c)((function(t){return t.library.yearEnd})),h=Object(j.c)((function(t){return t.library.page})),p=Object(j.c)((function(t){return t.library.totalPages})),C=Object(j.c)((function(t){return t.errors.error})),L=Object(j.c)((function(t){return t.library.searchStart})),N=Object(n.useState)(!1),w=Object(r.a)(N,2),B=w[0],k=w[1],E=Object(n.useState)(""),S=Object(r.a)(E,2),A=S[0],H=S[1];return Object(n.useEffect)((function(){t(Object(m.b)(c,o,l,u,h)),window.scrollTo(0,0)}),[t,c,o,l,u,h]),Object(n.useEffect)((function(){t(Object(f.b)(null))}),[t]),Object(n.useEffect)((function(){t(Object(m.f)(!1))}),[t,L]),Object(x.jsxs)("div",{className:i.a.nasaLibrary,children:[Object(x.jsx)("h2",{className:d()(i.a.title,s.a.title),children:"NASA photo and Video library"}),!a&&C&&Object(x.jsx)("div",{className:i.a.errorCase,children:"No results for this search"}),!a&&!C&&Object(x.jsx)(_.a,{}),a&&!C&&Object(x.jsxs)("div",{children:[e&&Object(x.jsx)(_.a,{}),!e&&Object(x.jsxs)("div",{className:i.a.imagesArray,children:[a.map((function(t){return Object(x.jsx)("div",{className:i.a.imageHolder,children:Object(x.jsx)(g.a,{height:300,children:Object(x.jsx)("img",{className:i.a.image,src:t.links[0].href,alt:"archivePhoto",onClick:function(t){k(!0),H(t.currentTarget.src)},onError:function(t){t.target.src=y.a}})})},a.indexOf(t))})),B&&Object(x.jsx)(v.a,{active:B,setActive:k,children:Object(x.jsx)("img",{className:d()(b.a.modalImage),src:A,alt:"modal"})})]}),Object(x.jsxs)("div",{className:i.a.buttonsHolder,children:[h>1&&Object(x.jsx)(O.a,{className:i.a.pageButton,onClick:function(){t(Object(m.d)())}}),h!==p&&Object(x.jsx)(O.b,{className:i.a.pageButton,onClick:function(){t(Object(m.c)())}})]})]})]})}}}]);
//# sourceMappingURL=9.317f8ba0.chunk.js.map