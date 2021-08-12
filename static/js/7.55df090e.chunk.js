(this.webpackJsonpEarth_Data=this.webpackJsonpEarth_Data||[]).push([[7],{100:function(t,e,r){t.exports={form:"formsStylesMedia_form__1C2i4"}},101:function(t,e,r){"use strict";r.d(e,"b",(function(){return l})),r.d(e,"a",(function(){return o}));r(1);var a=r(99),n=r.n(a),s=r(105),i=r(2),l=function(t,e,r,a,l,o,u,c,d,m,_,b){return Object(i.jsxs)("div",{className:n.a.inputHolder,children:[Object(i.jsx)("p",{className:t,children:e}),Object(i.jsx)("input",{className:l,type:o,name:u,min:c,max:d,onChange:m,onBlur:_,value:b}),r&&a&&Object(i.jsxs)("div",{className:n.a.errors,children:[Object(i.jsx)(s.a,{}),"   ",a]})]})},o=function(t,e,r,a,n){return Object(i.jsx)("button",{className:t,disabled:!e&&!r,onClick:a,type:"submit",children:n})}},255:function(t,e,r){t.exports={earth:"earth_earth__2IORm",title:"earth_title__1sjnz",imageHolder:"earth_imageHolder__1YNbq",image:"earth_image__4gZKd",earthParams:"earth_earthParams__IGou-",result:"earth_result__9tE27"}},256:function(t,e,r){t.exports={result:"earthMedia_result__Omp4Q",title:"earthMedia_title__1DSpf"}},268:function(t,e,r){"use strict";r.r(e);var a=r(1),n=r(255),s=r.n(n),i=r(256),l=r.n(i),o=r(4),u=r.n(o),c=r(25),d=r(53),m=r(46),_=r(99),b=r.n(_),f=r(100),h=r.n(f),j=r(47),p=r(106),O=r(101),x=r(2),S=function(){var t=Object(c.b)(),e=p.b().shape({longitude:p.a().required("Longitude required").typeError("Only numbers").min(-180,"Enter longitude from -180 to 180").max(180,"Enter longitude from -180 to 180"),latitude:p.a().required("Latitude required").typeError("Only numbers").min(-90,"Enter latitude from -90 to 90").max(90,"Enter latitude from -90 to 90")});return Object(x.jsx)("div",{children:Object(x.jsx)(j.b,{initialValues:{longitude:"",latitude:""},validateOnBlur:!0,onSubmit:function(e,r){var a=r.resetForm;t(Object(d.c)(e.longitude,e.latitude,e.date,e.dimensions)),a({values:""})},validationSchema:e,children:function(t){var e=t.values,r=t.errors,a=t.touched,n=t.handleSubmit,s=t.handleChange,i=t.handleBlur,l=t.isValid,o=t.dirty;return Object(x.jsxs)("form",{className:u()(b.a.form,h.a.form),children:[Object(x.jsx)("h3",{className:b.a.title,children:"Set new parameters"}),Object(x.jsxs)("div",{className:b.a.inputsHolder,children:[Object(O.b)(b.a.formSubtitle,"Longitude",a.longitude,r.longitude,b.a.input,"text","longitude",null,null,s,i,e.longitude),Object(O.b)(b.a.formSubtitle,"Latitude",a.latitude,r.latitude,b.a.input,"text","latitude",null,null,s,i,e.latitude)]}),Object(O.a)(b.a.formButton,l,o,n,"Show")]})}})})},g=r(6);e.default=function(){var t=Object(c.b)(),e=Object(c.c)((function(t){return t.earth.earthObservation})),r=Object(c.c)((function(t){return t.earth.longitude})),n=Object(c.c)((function(t){return t.earth.latitude})),i=Object(c.c)((function(t){return t.library.searchStart}));return Object(a.useEffect)((function(){t(Object(d.b)(r,n))}),[t,r,n]),e?i?Object(x.jsx)(g.a,{to:"/nasaLibrary"}):Object(x.jsxs)("div",{className:s.a.earth,children:[Object(x.jsx)("h2",{className:u()(s.a.title,l.a.title),children:"See a photo of Earth surface from Earth Polychromatic Imaging Camera"}),Object(x.jsx)(S,{}),Object(x.jsxs)("div",{className:u()(s.a.result,l.a.result),children:[Object(x.jsxs)("p",{className:s.a.earthParams,children:["ID: ",e.id]}),Object(x.jsxs)("p",{className:s.a.earthParams,children:["Date: ",e.date]}),Object(x.jsx)("div",{className:s.a.imageHolder,children:Object(x.jsx)("img",{className:s.a.image,src:e.url,alt:"earthObs"})})]})]}):Object(x.jsx)(m.a,{})}},99:function(t,e,r){t.exports={form:"formsStyles_form__a3D6p",title:"formsStyles_title__1npgT",inputsHolder:"formsStyles_inputsHolder__2tk_V",formSubtitle:"formsStyles_formSubtitle__pN0DK",inputHolder:"formsStyles_inputHolder__ysFJ4",input:"formsStyles_input__mVJsO",inputSelect:"formsStyles_inputSelect__22e0K",option:"formsStyles_option__2DYS0",formButton:"formsStyles_formButton__3VKpT",errors:"formsStyles_errors__1TgNf",errorResponse:"formsStyles_errorResponse__1x0zL",intervalHint:"formsStyles_intervalHint__2IuF5"}}}]);
//# sourceMappingURL=7.55df090e.chunk.js.map