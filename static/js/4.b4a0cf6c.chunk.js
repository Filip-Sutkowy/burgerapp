(window["webpackJsonpburger-app"]=window["webpackJsonpburger-app"]||[]).push([[4],{100:function(e,t,n){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",InputElement:"Input_InputElement__2m88K",Invalid:"Input_Invalid__16Mis"}},104:function(e,t,n){e.exports={Auth:"Auth_Auth__12r8M"}},107:function(e,t,n){"use strict";n.r(t);var a=n(19),i=n(4),r=n(5),l=n(7),u=n(6),o=n(8),s=n(0),c=n.n(s),p=n(16),d=n(21),h=n(41),g=n(33),m=n(99),v=(n(28),n(29),n(104)),f=n.n(v),b=n(17),E=n(3),j=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"E-mail Adress"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},n.inputChangedHandler=function(e,t){var i=Object(E.b)(n.state.controls,Object(a.a)({},t,Object(E.b)(n.state.controls[t],{value:e.target.value,valid:Object(E.a)(e.target.value,n.state.controls[t].validation),touched:!0})));n.setState({controls:i})},n.submitHandler=function(e){e.preventDefault(),n.props.onAuth(n.state.controls.email.value,n.state.controls.password.value,n.state.isSignup)},n.switchAuthModeHandler=function(){n.setState(function(e){return{isSignup:!e.isSignup}})},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var a=t.map(function(t){return c.a.createElement(m.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})});this.props.loading&&(a=c.a.createElement(h.a,null));var i=null;this.props.error&&(i=c.a.createElement("p",{style:{color:"red"}},this.props.error.message));var r=null;return this.props.isAuth&&(r=c.a.createElement(d.a,{to:this.props.authRedirectPath})),c.a.createElement("div",{className:f.a.Auth},r,c.a.createElement("h1",null,this.state.isSignup?"Signing up":"Signing in"),i,c.a.createElement("form",{onSubmit:this.submitHandler},a,c.a.createElement(g.a,{btnType:"Success"},"SUBMIT")),c.a.createElement(g.a,{clicked:this.switchAuthModeHandler,btnType:"Danger"},"SWITCH TO ",this.state.isSignup?"SIGNIN":"SIGNUP"))}}]),t}(s.Component);t.default=Object(p.b)(function(e){return{loading:e.auth.loading,error:e.auth.error,isAuth:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}},function(e){return{onAuth:function(t,n,a){return e(b.b(t,n,a))},onSetAuthRedirectPath:function(){return e(b.j("/"))}}})(j)},99:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(0),i=n.n(a),r=n(100),l=n.n(r),u=function(e){var t=null,n=[l.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(l.a.Invalid),e.elementType){case"input":t=i.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=i.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=i.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return i.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=i.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return i.a.createElement("div",{className:l.a.Input},i.a.createElement("label",{className:l.a.Label},e.label),t)};t.b=u}}]);
//# sourceMappingURL=4.b4a0cf6c.chunk.js.map