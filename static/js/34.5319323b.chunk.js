"use strict";(self.webpackChunkgrammes_client=self.webpackChunkgrammes_client||[]).push([[34],{4034:function(e,t,n){n.r(t);var r=n(1413),c=n(4165),s=n(5861),a=n(9439),o=n(2791),u=n(7689),l=n(8687),i=n(6325),d=n(4849),f=n(2592),p=n(4270),h=n(8825),m=n(2171),x=(n(7632),n(1468),n(6926)),g=n(5661),v=n(6568),y=n(6103),j=n(184);t.default=function(){var e=(0,h.t5)(null,null,"signup"),t=(0,l.v9)((function(e){return e.step.email})),n=(0,l.v9)((function(e){return e.step.firstName})),b=(0,o.useState)(!1),Z=(0,a.Z)(b,2),w=Z[0],k=Z[1],C=(0,o.useState)(!0),A=(0,a.Z)(C,2),S=A[0],_=A[1],L=(0,u.s0)(),R=(0,l.I0)(),T=(0,o.useState)({code1:"",code2:"",code3:"",code4:""}),q=(0,a.Z)(T,2),D=q[0],F=q[1],P=(0,o.useState)(null),E=(0,a.Z)(P,2),O=E[0],I=E[1],W=(0,o.useRef)(null),N=(0,o.useRef)(null),V=(0,o.useRef)(null),H=(0,o.useRef)(null),Q=(0,o.useState)(""),z=(0,a.Z)(Q,2),B=z[0],G=z[1],J=(0,x.n_)(),K=(0,a.Z)(J,1)[0],M=(0,g.Lo)(),U=(0,a.Z)(M,1)[0],X=(0,x.WQ)(),Y=(0,a.Z)(X,2),$=Y[0];Y[1].isLoading;(0,o.useEffect)((function(){W.current.focus()}),[]),(0,o.useEffect)((function(){""!=D.code1&&""!=D.code2&&""!=D.code3&&""!=D.code4?_(!1):_(!0)}),[D]);var ee=function(){var n=(0,s.Z)((0,c.Z)().mark((function n(r){var s,a,o;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,s=W.current.value+N.current.value+V.current.value+H.current.value,n.next=5,$({code:s,email:t,type:"TWO_FACTOR"}).unwrap();case 5:a=n.sent,R({type:v.Zr,payload:a}),U().unwrap().then((function(e){e&&e.category&&""!=e.category&&e.sub_category&&""!=e.sub_category&&R({type:v.HI,payload:e})})).catch((function(e){console.log(e)})),L("/membre",{replace:!0}),n.next=16;break;case 11:n.prev=11,n.t0=n.catch(1),console.log(n.t0),o=n.t0.data,null!==n.t0&&void 0!==n.t0&&n.t0.status?(n.t0.status,G(e(o.message))):G(e(o.message));case 16:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e){return n.apply(this,arguments)}}(),te=function(){var r=(0,s.Z)((0,c.Z)().mark((function r(){return(0,c.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,k(!0),r.next=4,K({email:t,type:"TWO_FACTOR",first_name:n}).unwrap();case 4:r.sent,I(e("Successfully Sent! Please check your inbox")),G(""),k(!1),r.next=15;break;case 10:r.prev=10,r.t0=r.catch(0),k(!1),console.log(r.t0),G(e(r.t0.data.message));case 15:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(){return r.apply(this,arguments)}}(),ne=function(e){var t=e.clipboardData.getData("Text");4===t.length&&F({code1:t.charAt(0),code2:t.charAt(1),code3:t.charAt(2),code4:t.charAt(3)})},re=function(e,t){var n=e.target.value.replace(/\D/g,"");1==t?(F((0,r.Z)((0,r.Z)({},D),{},{code1:n})),n.length>0&&N.current.focus()):2==t?(F((0,r.Z)((0,r.Z)({},D),{},{code2:n})),n.length>0&&V.current.focus()):3==t?(F((0,r.Z)((0,r.Z)({},D),{},{code3:n})),n.length>0&&H.current.focus()):4==t&&F((0,r.Z)((0,r.Z)({},D),{},{code4:n}))};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(p.q,{title:e("Two-Factor Verification")}),(0,j.jsx)("div",{class:"card card1",children:(0,j.jsxs)("form",{id:"customerLoginForm",className:"form-inner customer-login-form",onSubmit:ee,children:[(0,j.jsx)("div",{class:"row justify-content-center my-auto",children:(0,j.jsxs)("div",{class:"col-md-8 col-10 my-5",children:[(0,j.jsxs)("div",{class:"row justify-content-center px-3 py-4 mb-3",children:[" ",(0,j.jsx)(f.Z,{id:"logo",src:m})," "]}),(0,j.jsx)("h5",{class:"m-0 my-2 my-2",children:e("Email verification")}),(0,j.jsxs)("p",{class:"mobile-text",children:[e("Enter the code we just send on your email")," ",(0,j.jsx)("b",{class:"text-danger",children:t})]}),(0,j.jsxs)("div",{class:"d-flex flex-row mt-5",children:[(0,j.jsx)("input",{type:"tel",class:"form-control phone-input mx-3",maxLength:1,value:D.code1,required:!0,ref:W,onChange:function(e){return re(e,1)},onPaste:function(e){return ne(e)}}),(0,j.jsx)("input",{type:"tel",class:"form-control phone-input mx-3",maxLength:1,value:D.code2,required:!0,ref:N,onChange:function(e){return re(e,2)},onPaste:function(e){return ne(e)}}),(0,j.jsx)("input",{type:"tel",class:"form-control phone-input mx-3",maxLength:1,value:D.code3,required:!0,ref:V,onChange:function(e){return re(e,3)},onPaste:function(e){return ne(e)}}),(0,j.jsx)("input",{type:"tel",class:"form-control phone-input mx-3",maxLength:1,value:D.code4,required:!0,ref:H,onChange:function(e){return re(e,4)},onPaste:function(e){return ne(e)}})]}),(0,j.jsxs)("div",{class:"text-center mt-5",children:[(0,j.jsx)("p",{class:"d-block mobile-text",children:e("Don't receive the code?")}),(0,j.jsx)("p",{class:"font-weight-bold text-danger cursor",onClick:function(){return te()},children:e("Resend")})]}),(0,j.jsx)("div",{class:"row justify-content-center my-3 px-3",children:w?(0,j.jsx)("button",{class:"btn-block btn-color",disabled:!0,children:(0,j.jsx)(d.Z,{animation:"border",variant:"danger"})}):(0,j.jsx)("button",{class:"btn-block btn-color",disabled:S,children:e("Verify")})})]})}),B?(0,j.jsx)(i.Z,{variant:"danger",style:{textAlign:"center"},children:B},"danger"):"",O?(0,j.jsx)(i.Z,{variant:"success",style:{textAlign:"center"},children:O},"success"):""]})}),(0,j.jsx)("div",{class:"card card2",style:{backgroundImage:"url(".concat(y,")")}})]})}},1468:function(){},6103:function(e,t,n){e.exports=n.p+"static/media/2fa.540c9b6024381c6aaa6a.png"}}]);
//# sourceMappingURL=34.5319323b.chunk.js.map