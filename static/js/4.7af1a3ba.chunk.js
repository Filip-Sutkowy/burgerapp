(window["webpackJsonpburger-app"]=window["webpackJsonpburger-app"]||[]).push([[4],{105:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(0),l=a.n(n),u=a(106),i=a.n(u),r=function(e){var t=null,a=[i.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&a.push(i.a.Invalid),e.elementType){case"input":t=l.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=l.a.createElement("textarea",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=l.a.createElement("select",{className:a.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return l.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=l.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return l.a.createElement("div",{className:i.a.Input},l.a.createElement("label",{className:i.a.Label},e.label),t)};t.b=r},106:function(e,t,a){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",InputElement:"Input_InputElement__2m88K",Invalid:"Input_Invalid__16Mis"}},110:function(e,t,a){e.exports={Auth:"Auth_Auth__12r8M"}},113:function(e,t,a){"use strict";a.r(t);var n=a(19),l=a(22),u=a(0),i=a.n(u),r=a(10),c=a(23),o=a(45),d=a(37),s=a(105),m=(a(31),a(32),a(110)),p=a.n(m),h=a(4),g=a(9);t.default=Object(r.b)(function(e){return{loading:e.auth.loading,error:e.auth.error,isAuth:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}},function(e){return{onAuth:function(t,a,n){return e(h.b(t,a,n))},onSetAuthRedirectPath:function(){return e(h.v("/"))}}})(function(e){var t=Object(u.useState)({email:{elementType:"input",elementConfig:{type:"email",placeholder:"E-mail Adress"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}}),a=Object(l.a)(t,2),r=a[0],m=a[1],h=Object(u.useState)(!0),v=Object(l.a)(h,2),f=v[0],b=v[1],E=e.buildingBurger,I=e.authRedirectPath,j=e.onSetAuthRedirectPath;Object(u.useEffect)(function(){E||"/"===I||j()},[E,I,j]);var _=[];for(var y in r)_.push({id:y,config:r[y]});var O=_.map(function(e){return i.a.createElement(s.a,{key:e.id,elementType:e.config.elementType,elementConfig:e.config.elementConfig,value:e.config.value,invalid:!e.config.valid,shouldValidate:e.config.validation,touched:e.config.touched,changed:function(t){return function(e,t){var a=Object(g.b)(r,Object(n.a)({},t,Object(g.b)(r[t],{value:e.target.value,valid:Object(g.a)(e.target.value,r[t].validation),touched:!0})));m(a)}(t,e.id)}})});e.loading&&(O=i.a.createElement(o.a,null));var C=null;e.error&&(C=i.a.createElement("p",{style:{color:"red"}},e.error.message));var S=null;return e.isAuth&&(S=i.a.createElement(c.a,{to:e.authRedirectPath})),i.a.createElement("div",{className:p.a.Auth},S,i.a.createElement("h1",null,f?"Signing up":"Signing in"),C,i.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.onAuth(r.email.value,r.password.value,f)}},O,i.a.createElement(d.a,{btnType:"Success"},"SUBMIT")),i.a.createElement(d.a,{clicked:function(){b(!f)},btnType:"Danger"},"SWITCH TO ",f?"SIGNIN":"SIGNUP"))})}}]);
//# sourceMappingURL=4.7af1a3ba.chunk.js.map