(this["webpackJsonpmm-eventuthyring"]=this["webpackJsonpmm-eventuthyring"]||[]).push([[0],{40:function(n,t,e){},50:function(n,t,e){"use strict";e.r(t);var r=e(1),i=e.n(r),c=e(31),a=e.n(c),o=(e(40),e(6)),s=e(7),l=e(4),d=e(0),j=Object(r.createContext)({});function p(n){var t=n.children,e=Object(r.useState)([]),i=Object(l.a)(e,2),c=i[0],a=i[1];return Object(d.jsx)(j.Provider,{value:{categoryList:c,setCategoryList:a},children:t})}var u,b=e(2),h=e(3),x="#480367",f="#AD66D5",g="#FFB520",O=h.a.footer(u||(u=Object(b.a)(["\n  display: flex;\n  min-height: 50vh;\n  background: ",";\n  margin-top: 100px;\n\n  div {\n    padding: 40px;\n    padding-bottom: 100px;\n    \n    &:nth-child(1) {\n      display: flex;\n      flex-direction: row;\n      min-width: 50%;\n      background: ",";\n      color: ",";\n\n      ul {\n        list-style: none;\n      }\n    }\n\n    &:nth-child(2) {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      width: 100%;\n      text-align: right;\n      color: ",";\n    }\n  }\n\n  h1 {\n    color: ",";\n  }\n\n  a {\n    display: block;\n    font-size: 25px;\n    text-decoration: none;\n    color: ",";\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n\n  p {\n    font-size: 25px;\n    margin: 0;\n\n    &:nth-child(1) {\n      margin-top: 40px;\n    }\n  }\n"])),x,f,x,f,g,x);function m(){var n=Object(r.useContext)(j).categoryList;return Object(d.jsxs)(O,{children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("h3",{children:"V\xe5ra tj\xe4nster"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"/tjanster",children:"Leverans"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"/tjanster",children:"Montering"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"/tjanster",children:"St\xe4dning"})})]}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("h3",{children:"V\xe5ra produkter"})}),n&&n.map((function(n){return Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"/produkter/".concat(n.id),children:n.name})},n.id)}))]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"logoFooter",children:"M&M"}),Object(d.jsx)("a",{children:"evelina.v.bjorkman@gmail.com"}),Object(d.jsx)("a",{children:"073-687 70 82"}),Object(d.jsx)("p",{children:"Korpmossev. 58"}),Object(d.jsx)("p",{children:"126 38 H\xe4gersten"})]})]})}var v=e(13),y=function(){return"\n    -webkit-box-shadow: 3px 6px 10px 0px rgba(0,0,0,0.41);\n    -moz-box-shadow: 3px 6px 10px 0px rgba(0,0,0,0.41);\n    box-shadow: 3px 6px 10px 0px rgba(0,0,0,0.41);\n  "};var k,w,S,C,L,I,N,T=function(){return"\n    display: flex;\n    max-width: 1100px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 100px;\n  "},z=Object(h.a)(s.b)(k||(k=Object(b.a)(["\n  background: ",";\n  color: black;\n  text-decoration: none;\n  text-align: center;\n  border: none;\n  border-radius: 50px;\n  font-size: 20px;\n  padding: 15px 30px;\n  min-width: 200px;\n  max-width: fit-content;\n  ",";\n  transition: box-shadow .3s;\n\n  &:hover {\n    font-weight: bold;\n  }\n\n  &:active {\n    box-shadow: none;\n  }\n"])),g,y),E=Object(h.a)(z)(w||(w=Object(b.a)(["\n  padding: 10px 20px;\n  min-width: 100px;\n  font-size: 18px;\n"]))),D=h.a.div(S||(S=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  width: 30vw;\n  // height: 100vh;\n  position: fixed;\n  top: 88px;\n  left: auto;\n  right: 0;\n  bottom: 0;\n  z-index: 10;\n  background: white;\n  border: 3px solid ",";\n  padding-bottom: 50px;\n\n  \n\n  \n"])),x),J=h.a.div(C||(C=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  padding: 10px;\n  text-align: right;\n  ",";\n\n  div:first-child {\n    display: flex;\n    flex-direction: column;\n    // text-align: right;\n  }\n\n  img {\n    max-width: 30%;\n    object-fit: contain;\n  }\n"])),y),P=h.a.div(L||(L=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n\n  svg {\n    margin: 10px;\n  }\n\n"]))),F=e(8),B=e(9),A=Object(r.createContext)({});function M(n){var t=n.children,e=Object(r.useState)(JSON.parse(localStorage.getItem("CartList"))),i=Object(l.a)(e,2),c=i[0],a=i[1];return Object(d.jsx)(A.Provider,{value:{cartList:c,setCartList:a},children:t})}function U(){var n=Object(r.useState)(JSON.parse(localStorage.getItem("CartList"))),t=Object(l.a)(n,2),e=t[0],i=t[1];function c(n){var t=e.filter((function(t){return t.product.id!==n.id}));i(t),localStorage.setItem("CartList",JSON.stringify(t))}return window.addEventListener("storage",(function(){i(JSON.parse(localStorage.getItem("CartList")))})),Object(r.useEffect)((function(){i(localStorage.getItem("CartList")?JSON.parse(localStorage.getItem("CartList")):[]),window.addEventListener("storage",(function(){i(JSON.parse(localStorage.getItem("CartList")))}))}),[]),Object(d.jsxs)(D,{children:[Object(d.jsx)("div",{children:e&&e.map((function(n){return Object(d.jsxs)(J,{children:[Object(d.jsx)("img",{src:"../images/products/".concat(n.product.categoryName,"/").concat(n.product.imageUrl)}),Object(d.jsxs)("div",{children:[Object(d.jsx)(F.a,{icon:B.f,onClick:function(){return c(n.product)},className:"pointer"}),Object(d.jsx)("p",{children:n.product.name}),Object(d.jsxs)(P,{children:[Object(d.jsx)(F.a,{icon:B.d,onClick:function(){return function(n,t){var r=parseInt(t)-1;0===r?c(n):(e.find((function(t){return t.product.id==n.id})).chosenQty=r,i(Object(v.a)(e)),localStorage.setItem("CartList",JSON.stringify(e)))}(n.product,n.chosenQty)},className:"pointer"}),Object(d.jsxs)("p",{children:[n.chosenQty,"st"]}),Object(d.jsx)(F.a,{icon:B.e,onClick:function(){return function(n,t){var r=parseInt(t)+1,c=e.find((function(t){return t.product.id==n.id}));r<=n.stock?(c.chosenQty=r,i(Object(v.a)(e)),localStorage.setItem("CartList",JSON.stringify(e))):alert("Det finns inte flera av denna varan")}(n.product,n.chosenQty)},className:"pointer"})]})]})]},n.product.id)}))}),Object(d.jsx)(E,{onClick:void(localStorage.getItem("UserToken")?window.location("/mm-eventuthyrning/kassa"):alert("V\xe4nligen logga in f\xf6r att forts\xe4tta.")),children:"Till kassan"})]})}var Q,V,Y,q,H=h.a.header(I||(I=Object(b.a)(["\n  ",";\n  background: ","; \n  //width: 100%;\n  padding-left: 40px;\n  padding-right: 40px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 2;\n\n  h1 {\n    color: ","\n  }\n\n  a {\n    color: white;\n    text-decoration: none;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"])),(Q=0,V=0,Y="auto","\n    position: fixed;\n    top: ".concat(0,";\n    left: ").concat(Q,";\n    right: ").concat(V,";\n    bottom: ").concat(Y,";\n  ")),x,g),_=h.a.nav(N||(N=Object(b.a)(["\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 40vw;\n  display: flex;\n  flex-dirextion: row;\n  justify-content: space-between;\n\n  @media only screen and (min-width: 1290px) {\n    width: 30vw;\n  }\n"])));function K(){var n="";n=localStorage.getItem("UserToken")?"Logga ut":"Logga in";var t=Object(r.useState)(!1),e=Object(l.a)(t,2),i=e[0],c=e[1];return document.addEventListener("click",(function(n){n.target.classList.contains("sc-hKgILt lpolGI")||n.target.classList.contains("pointer")||c(!1)})),Object(d.jsxs)(H,{children:[Object(d.jsx)(s.b,{to:"/",children:Object(d.jsx)("h1",{className:"logoHeader",children:"M&M"})}),Object(d.jsxs)(_,{children:[Object(d.jsx)(s.b,{to:"/produkter",children:"Produkter"}),Object(d.jsx)(s.b,{to:"/tjanster",children:"Tj\xe4nster"}),Object(d.jsx)("a",{onClick:function(){c(!i)},className:"pointer",children:"Korg"}),i?Object(d.jsx)(U,{}):null,Object(d.jsx)(s.b,{to:"/profil",children:"Profil"}),Object(d.jsx)("a",{onClick:function(){localStorage.getItem("UserToken")?(localStorage.clear(),n="Logga in",window.location.href="/mm-eventuthyrning"):(window.location.href="/mm-eventuthyrning/login",n="Logga ut")},children:n})]})]})}var R,X,G,Z,W=Object(h.a)(s.b)(q||(q=Object(b.a)(["\n  color: black;\n  text-decoration: none;\n"]))),$=h.a.div(R||(R=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  width: 300px;\n  height: 400px;\n  text-align: center;\n  border-radius: 25px;\n  ","\n\n  // img {\n  //   border-radius: 25px;\n  //   ","\n  // }\n"])),y,y),nn=h.a.section(X||(X=Object(b.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: center;\n  grid-gap: 50px;\n  margin-top: 100px;\n  margin-bottom: 100px;\n  max-width: 1100px;\n  margin-left: auto;\n  margin-right: auto;\n"])));function tn(){var n=Object(r.useContext)(j),t=n.categoryList,e=n.setCategoryList;return Object(r.useEffect)((function(){fetch("https://event-rentals.herokuapp.com/api/category").then((function(n){return n.json()})).then((function(n){return e(n)}))}),[]),Object(d.jsx)(nn,{children:t&&t.map((function(n){return Object(d.jsx)(W,{to:"/produkter/".concat(n.id),children:Object(d.jsxs)($,{children:[Object(d.jsx)("img",{src:"images/categories/".concat(n.imageUrl),style:{width:"100%",maxHeight:"80%"}}),Object(d.jsx)("h2",{children:n.name})]})},n.id)}))})}var en,rn=h.a.h1(G||(G=Object(b.a)(["\n  text-align: center;\n  margin-top: 150px;\n  font-size: 45px;\n"]))),cn=h.a.h2(Z||(Z=Object(b.a)(["\n  text-align: center;\n  margin-top: 0;\n  font-size: 38px;\n"])));function an(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(rn,{children:"V\xe5ra Produkter"}),Object(d.jsx)(tn,{})]})}var on,sn,ln=h.a.div(en||(en=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  //max-height: 170px;\n  margin-bottom: 20px;\n  padding: 10px;\n  border-radius: 15px;\n  ",";\n\n  div {\n    text-align: right;\n  }\n\n  img {\n    max-width: 30%;\n    object-fit: contain;\n    max-height: 100%;\n  }\n"])),y);function dn(){var n=Object(r.useState)(JSON.parse(localStorage.getItem("CartList"))),t=Object(l.a)(n,2),e=t[0],i=t[1];function c(n){var t=e.filter((function(t){return t.product.id!==n.id}));i(t),localStorage.setItem("CartList",JSON.stringify(t))}return Object(d.jsx)("div",{children:e.map((function(n){return Object(d.jsxs)(ln,{children:[Object(d.jsx)("img",{src:"./images/products/".concat(n.product.categoryName,"/").concat(n.product.imageUrl)}),Object(d.jsxs)("div",{children:[Object(d.jsx)(F.a,{icon:B.f,onClick:function(){return c(n.product)},className:"pointer"}),Object(d.jsx)("p",{children:n.product.name}),Object(d.jsxs)("p",{children:[n.product.price,"kr/st"]}),Object(d.jsxs)(P,{children:[Object(d.jsx)(F.a,{icon:B.d,onClick:function(){return function(n,t){var r=parseInt(t)-1;0===r?c(n):(e.find((function(t){return t.product.id==n.id})).chosenQty=r,i(Object(v.a)(e)),localStorage.setItem("CartList",JSON.stringify(e)))}(n.product,n.chosenQty)},className:"pointer"}),Object(d.jsxs)("p",{children:[n.chosenQty,"st"]}),Object(d.jsx)(F.a,{icon:B.e,onClick:function(){return function(n,t){var r=parseInt(t)+1,c=e.find((function(t){return t.product.id==n.id}));r<=n.stock?(c.chosenQty=r,i(Object(v.a)(e)),localStorage.setItem("CartList",JSON.stringify(e))):alert("Det finns inte flera av denna varan")}(n.product,n.chosenQty)},className:"pointer"})]})]})]},n.product.id)}))})}var jn,pn,un,bn=h.a.div(on||(on=Object(b.a)(["\n  ",";\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"])),T),hn=h.a.div(sn||(sn=Object(b.a)(["\n  ",";\n  margin-top: 200px;\n  flex-direction: row;\n  // align-items: center;\n  justify-content: space-between;\n\n\n  div {\n    display: flex;\n    flex-direction: column;\n    // align-items: center;\n    // justify-content: center;\n    width: 45%;\n  }\n"])),T),xn=h.a.div(jn||(jn=Object(b.a)(["\n  width: 100%;\n  background: ",";\n  padding: 50px 0px;\n  margin-top: 100px;\n\n\n\n  .standardWidth {\n    max-width: 1100px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n"])),f),fn=h.a.div(pn||(pn=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 1100px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),gn=e(35),On=e(15),mn=e(20),vn=e.n(mn),yn=e(28);function kn(n){var t=localStorage.getItem("UserToken"),e=Object(r.useState)(!1),i=Object(l.a)(e,2),c=i[0],a=i[1],o=Object(r.useState)(null),s=Object(l.a)(o,2),j=s[0],p=s[1],u=Object(r.useState)(""),b=Object(l.a)(u,2),h=b[0],x=b[1],f=Object(r.useState)(!0),g=Object(l.a)(f,2),O=g[0],m=g[1],v=Object(r.useState)(""),y=Object(l.a)(v,2),k=y[0],w=y[1],S=Object(On.useStripe)(),C=Object(On.useElements)();Object(r.useEffect)((function(){w(n.rental.paymentResponse.clientSecret)}),[]);var L=function(){var n=Object(yn.a)(vn.a.mark((function n(t){return vn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:m(t.empty),p(t.error?t.error.message:"");case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),I=function(){var e=Object(yn.a)(vn.a.mark((function e(r){var i,c;return vn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),x(!0),e.next=4,S.confirmCardPayment(k,{payment_method:{card:C.getElement(On.CardElement)}});case 4:(i=e.sent).error?(p("Payment failed ".concat(i.error.message)),x(!1)):(p(null),x(!1),a(!0),c="https://event-rentals.herokuapp.com/api/rental/".concat(n.rental.id,"/payment-success"),fetch(c,{method:"POST",headers:{Authorization:"Bearer ".concat(t)}}).then((function(){localStorage.setItem("CartList",""),window.location="/mm-eventuthyrning/success/".concat(n.rental.id)})));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(d.jsxs)("form",{id:"payment-form",onSubmit:I,children:[Object(d.jsx)(On.CardElement,{id:"card-element",options:{style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},onChange:L}),Object(d.jsx)("button",{disabled:h||O||c,id:"submit",children:Object(d.jsx)("span",{id:"button-text",children:h?Object(d.jsx)("div",{className:"spinner",id:"spinner"}):"Pay now"})}),j&&Object(d.jsx)("div",{className:"card-error",role:"alert",children:j}),Object(d.jsxs)("p",{className:c?"result-message":"result-message hidden",children:["Payment succeeded, see the result in your",Object(d.jsxs)("a",{href:"https://dashboard.stripe.com/test/payments",children:[" ","Stripe dashboard."]})," Refresh the page to pay again."]})]})}var wn,Sn=h.a.div(un||(un=Object(b.a)(['\n\n  #root {\n    display: flex;\n    align-items: center;\n  }\n\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n    font-size: 16px;\n    -webkit-font-smoothing: antialiased;\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    height: 100vh;\n    width: 100vw;\n  }\n\n  form {\n    width: 30vw;\n    align-self: center;\n    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),\n      0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);\n    border-radius: 7px;\n    padding: 40px;\n  }\n\n  input {\n    border-radius: 6px;\n    margin-bottom: 6px;\n    padding: 12px;\n    border: 1px solid rgba(50, 50, 93, 0.1);\n    max-height: 44px;\n    font-size: 16px;\n    width: 100%;\n    background: white;\n    box-sizing: border-box;\n  }\n\n  .result-message {\n    line-height: 22px;\n    font-size: 16px;\n  }\n\n  .result-message a {\n    color: rgb(89, 111, 214);\n    font-weight: 600;\n    text-decoration: none;\n  }\n\n  .hidden {\n    display: none;\n  }\n\n  #card-error {\n    color: rgb(105, 115, 134);\n    font-size: 16px;\n    line-height: 20px;\n    margin-top: 12px;\n    text-align: center;\n  }\n\n  #card-element {\n    border-radius: 4px 4px 0 0;\n    padding: 12px;\n    border: 1px solid rgba(50, 50, 93, 0.1);\n    max-height: 44px;\n    width: 100%;\n    background: white;\n    box-sizing: border-box;\n  }\n\n  #payment-request-button {\n    margin-bottom: 32px;\n  }\n\n  /* Buttons and links */\n  button {\n    background: #5469d4;\n    font-family: Arial, sans-serif;\n    color: #ffffff;\n    border-radius: 0 0 4px 4px;\n    border: 0;\n    padding: 12px 16px;\n    font-size: 16px;\n    font-weight: 600;\n    cursor: pointer;\n    display: block;\n    transition: all 0.2s ease;\n    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);\n    width: 100%;\n  }\n\n  button:hover {\n    filter: contrast(115%);\n  }\n\n  button:disabled {\n    opacity: 0.5;\n    cursor: default;\n  }\n\n  /* spinner/processing state, errors */\n  .spinner,\n  .spinner:before,\n  .spinner:after {\n    border-radius: 50%;\n  }\n\n  .spinner {\n    color: #ffffff;\n    font-size: 22px;\n    text-indent: -99999px;\n    margin: 0px auto;\n    position: relative;\n    width: 20px;\n    height: 20px;\n    box-shadow: inset 0 0 0 2px;\n    -webkit-transform: translateZ(0);\n    -ms-transform: translateZ(0);\n    transform: translateZ(0);\n  }\n\n  .spinner:before,\n  .spinner:after {\n    position: absolute;\n    content: "";\n  }\n\n  .spinner:before {\n    width: 10.4px;\n    height: 20.4px;\n    background: #5469d4;\n    border-radius: 20.4px 0 0 20.4px;\n    top: -0.2px;\n    left: -0.2px;\n    -webkit-transform-origin: 10.4px 10.2px;\n    transform-origin: 10.4px 10.2px;\n    -webkit-animation: loading 2s infinite ease 1.5s;\n    animation: loading 2s infinite ease 1.5s;\n  }\n\n  .spinner:after {\n    width: 10.4px;\n    height: 10.2px;\n    background: #5469d4;\n    border-radius: 0 10.2px 10.2px 0;\n    top: -0.1px;\n    left: 10.2px;\n    -webkit-transform-origin: 0px 10.2px;\n    transform-origin: 0px 10.2px;\n    -webkit-animation: loading 2s infinite ease;\n    animation: loading 2s infinite ease;\n  }\n\n  @keyframes loading {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n  @media only screen and (max-width: 600px) {\n    form {\n      width: 80vw;\n    }\n  }\n\n']))),Cn=Object(gn.a)("pk_test_51IhBfXILV0iEsAeqDklFLFgKfL5tYXEzM464YQYJpe7gks9brwTgaMybVvgassFyvQ2C9iTzT05z7Xm5FCF5qyoR00bOfoXzJk");function Ln(){var n=Object(r.useState)(),t=Object(l.a)(n,2),e=t[0],i=t[1],c=JSON.parse(localStorage.getItem("CartList")),a=Object(r.useState)([]),o=Object(l.a)(a,2),s=o[0],j=o[1],p=localStorage.getItem("UserToken"),u=[],b=Object(r.useState)([]),h=Object(l.a)(b,2),x=h[0],f=h[1],g=Object(r.useState)(),O=Object(l.a)(g,2),m=O[0],y=O[1];function k(){!function(){var n=JSON.parse(localStorage.getItem("CartList"));u=n.map((function(n){return n.product.id}))}();fetch("https://event-rentals.herokuapp.com/api/rental/service",{method:"POST",headers:{Authorization:"Bearer ".concat(p),"Content-Type":"application/json"},body:JSON.stringify(u)}).then((function(n){return n.json()})).then((function(n){return f(n)}))}function w(n){var t=n.map((function(n){return{productId:n.id,quantity:1}})),e=c.map((function(n){return{productId:n.product.id,quantity:n.chosenQty}}));return[].concat(Object(v.a)(t),Object(v.a)(e))}function S(){return c[0].chosenDate}function C(){var n={rentDate:S(),products:w(s)};fetch("https://event-rentals.herokuapp.com/api/rental/price",{method:"POST",headers:{Authorization:"Bearer ".concat(p),"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).then((function(n){return i(n.price)}))}return Object(r.useEffect)((function(){C()}),[s]),Object(r.useEffect)((function(){k(),C()}),[]),Object(d.jsxs)("div",{children:[Object(d.jsxs)(bn,{children:[Object(d.jsx)(cn,{children:"Din korg"}),Object(d.jsx)(dn,{})]}),Object(d.jsx)(xn,{children:Object(d.jsxs)("div",{className:"standardWidth",children:[Object(d.jsx)("h2",{children:"Tj\xe4nster"}),Object(d.jsx)("p",{children:"V\xe4lj till \xf6vriga tj\xe4nster till din best\xe4llning!"}),Object(d.jsx)(fn,{children:x&&x.map((function(n){return Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{type:"checkbox",name:n.name,value:n.price,onChange:function(t){return function(n,t){n.target.checked?(s.push(t),j(Object(v.a)(s))):j(s.filter((function(n){return n.id!==t.id})))}(t,n)}}),Object(d.jsxs)("label",{htmlFor:n.name,children:[n.name," ",n.price,"kr"]})]},n.name)}))})]})}),Object(d.jsxs)(bn,{children:[Object(d.jsx)("h2",{children:"Totalt"}),Object(d.jsxs)("h2",{children:[e," kr"]})]}),Object(d.jsx)(bn,{children:!m&&Object(d.jsx)(z,{onClick:function(){var n=localStorage.getItem("UserToken"),t={rentDate:S(),products:w(s)};fetch("https://event-rentals.herokuapp.com/api/rental",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify(t)}).then((function(n){return n.json()})).then((function(n){return y(n)}))},children:"Boka"})}),m&&Object(d.jsx)(bn,{children:Object(d.jsx)(Sn,{children:Object(d.jsx)(On.Elements,{stripe:Cn,children:Object(d.jsx)(kn,{rental:m})})})})]})}var In,Nn,Tn,zn=h.a.form(wn||(wn=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n\n  input {\n    margin-bottom: 15px;\n    font-size: 18px;\n    padding: 6px;\n    border: none;\n    border-bottom: 2px solid black;\n\n    ::placeholder {\n      color: ",";\n    }\n  }\n\n"])),"#BFA5CE");function En(){var n=Object(r.useState)(""),t=Object(l.a)(n,2),e=t[0],i=t[1],c=Object(r.useState)(""),a=Object(l.a)(c,2),o=a[0],s=a[1],j=Object(r.useState)(""),p=Object(l.a)(j,2),u=p[0],b=p[1],h=Object(r.useState)(""),x=Object(l.a)(h,2),f=x[0],g=x[1],O=Object(r.useState)(""),m=Object(l.a)(O,2),v=m[0],y=m[1],k=Object(r.useState)(""),w=Object(l.a)(k,2),S=w[0],C=w[1],L=Object(r.useState)(localStorage.getItem("UserToken")||""),I=Object(l.a)(L,2),N=I[0],T=I[1];return Object(r.useEffect)((function(){!function(n){localStorage.setItem("UserToken",n)}(N)}),[N]),Object(d.jsxs)(hn,{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Logga in:"}),Object(d.jsxs)(zn,{children:[Object(d.jsx)("input",{type:"email",placeholder:"Email",onChange:function(n){return y(n.target.value)}}),Object(d.jsx)("input",{type:"text",placeholder:"L\xf6senord",onChange:function(n){return C(n.target.value)}}),Object(d.jsx)(E,{onClick:function(){var n={email:v,password:S};fetch("https://event-rentals.herokuapp.com/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).then((function(n){return T(n.jwt)})).then((function(){return window.location.href="/mm-eventuthyrning/profil"}))},children:"Logga In"})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"\xc4r du ny h\xe4r?"}),Object(d.jsx)("h4",{children:"Registrera dig f\xf6r att kunna boka v\xe5ra varor och se dina bokningar!"}),Object(d.jsxs)(zn,{children:[Object(d.jsx)("input",{type:"text",placeholder:"F\xf6rnamn & Efternamn",onChange:function(n){return i(n.target.value)}}),Object(d.jsx)("input",{type:"text",placeholder:"Telefonnr.",onChange:function(n){return s(n.target.value)}}),Object(d.jsx)("input",{type:"email",placeholder:"Email",onChange:function(n){return b(n.target.value)}}),Object(d.jsx)("input",{type:"text",placeholder:"L\xf6senord",onChange:function(n){return g(n.target.value)}}),Object(d.jsx)(E,{onClick:function(){var n={fullName:e,phone:o,email:u,password:f};fetch("https://event-rentals.herokuapp.com/api/user/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).then((function(){return window.location.href="/mm-eventuthyrning/profil"}))},children:"Skapa"})]})]})]})}var Dn=h.a.section(In||(In=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  max-width: 1100px;\n  min-height: 55vh;\n  margin-top: 200px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 100px;\n"]))),Jn=h.a.div(Nn||(Nn=Object(b.a)(["\n   width: 50%;\n   max-height: 300px;\n\n   img {\n     width: 100%;\n    max-height: 300px;\n    object-fit: contain;\n   }\n"]))),Pn=h.a.div(Tn||(Tn=Object(b.a)(["\n  width: 40%;\n"])));function Fn(n){var t=n.product;return Object(d.jsxs)(Dn,{children:[Object(d.jsx)(Jn,{children:Object(d.jsx)("img",{src:"../images/products/".concat(t.categoryName,"/").concat(t.imageUrl)})}),Object(d.jsxs)(Pn,{children:[Object(d.jsx)(cn,{children:t.name}),Object(d.jsx)("p",{dangerouslySetInnerHTML:{__html:t.description}}),Object(d.jsx)("p",{children:Object(d.jsxs)("b",{children:[t.price,":-"]})})]})]})}var Bn,An,Mn,Un,Qn=e(21),Vn=e.n(Qn),Yn=h.a.div(Bn||(Bn=Object(b.a)(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-gap: 10px;\n  max-width: 1100px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),qn=h.a.div(An||(An=Object(b.a)(["\n  display: flex;\n  background: ",";\n  border: ",";\n  border-radius: 10px;\n  min-height: 100px;\n  align-items: center;\n  justify-content: center;\n\n  &.chosen {\n    background: ",";\n    border: 1px solid ",";\n\n    p {\n      color: ",";\n    }\n  }\n\n  p {\n    margin: 0;\n    font-size: 50px;\n    color: ",";\n  }\n"])),(function(n){return n.bookable?"#480367":" #D3D3D3"}),(function(n){return n.bookable?"":"2px solid #AD66D5"}),g,x,x,(function(n){return n.bookable?"#FFB520":"#BFA5CE"})),Hn=h.a.div(Mn||(Mn=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n\n  h3 {\n    margin-left: 40px;\n    margin-right: 40px;\n  }\n"]))),_n=h.a.input(Un||(Un=Object(b.a)(["\n  margin-bottom: 30px;\n  // height: 20px;\n  width: 100px;\n  font-size: 25px;\n  text-align: center;\n"])));function Kn(n){var t=n.product,e=["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],i=Object(o.f)(),c="",a=Object(r.useState)(),s=Object(l.a)(a,2),j=s[0],p=s[1],u=Vn()().year(),b=Object(r.useState)(),h=Object(l.a)(b,2),x=h[0],f=h[1],g=Object(r.useState)(""),O=Object(l.a)(g,2),m=O[0],v=O[1];Object(r.useEffect)((function(){!function(){var n=Vn()().month();f(n)}()}),[]),Object(r.useEffect)((function(){v(e[x]);var n,t=Vn()([u,x]).format("YYYY-MM-DD"),r=Vn()(t).endOf("month").format("YYYY-MM-DD");n=i.pathname,c=n.split("/")[2],function(n,t){var e={fromDate:n,toDate:t},r="https://event-rentals.herokuapp.com/api/product/".concat(c,"/available");"Invalid date"!==n&&"Invalid date"!==t&&fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(n){return n.json()})).then((function(n){return p(n)}))}(t,r)}),[x]);var y=Object(r.useState)(""),k=Object(l.a)(y,2),w=k[0],S=k[1],C=Object(r.useState)(""),L=Object(l.a)(C,2),I=L[0],N=L[1],T=Object(r.useState)(1),E=Object(l.a)(T,2),D=E[0],J=E[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(cn,{children:"Boka Varan"}),Object(d.jsxs)(Hn,{children:[Object(d.jsx)(F.a,{icon:B.a,onClick:function(){f(x-1)},className:"pointer"}),Object(d.jsx)("h3",{children:m}),Object(d.jsx)(F.a,{icon:B.b,onClick:function(){f(x+1)},className:"pointer"})]}),Object(d.jsx)(Yn,{children:j&&Object.keys(j).map((function(n){return 0!==j[n].numberAvailable?Object(d.jsx)(qn,{id:n,className:"".concat(n==w?"chosen":""),bookable:!0,onClick:function(t){return function(n,t){n.target.classList.contains("chosen")?S(""):(S(n.target.id),N(t))}(t,j[n].numberAvailable)},children:Object(d.jsx)("p",{children:n.split("-")[2]})},n):Object(d.jsx)(qn,{children:Object(d.jsx)("p",{children:n.split("-")[2]})},n)}))}),Object(d.jsxs)(bn,{children:[Object(d.jsx)("label",{children:"V\xe4lj antal:"}),Object(d.jsx)(_n,{type:"number",min:"1",max:I,defaultValue:1,onChange:function(n){return J(n.target.value)}}),Object(d.jsx)(z,{onClick:function(){var n=[];localStorage.getItem("CartList")&&(n=JSON.parse(localStorage.getItem("CartList"))),n.length>0?n[0].chosenDate==w?(n.push({product:t,chosenQty:D,chosenDate:w}),localStorage.setItem("CartList",JSON.stringify(n))):alert("V\xe4nligen v\xe4lj samma datum f\xf6r best\xe4llningen. ".concat(n.chosenDate)):(n.push({product:t,chosenQty:D,chosenDate:w}),localStorage.setItem("CartList",JSON.stringify(n)))},children:"Boka"})]})]})}function Rn(){var n="",t=Object(o.f)(),e=Object(r.useState)({}),i=Object(l.a)(e,2),c=i[0],a=i[1];function s(t){n=t.split("/")[2]}function j(){s(t.pathname),0===Object.keys(c).length&&function(){var t="https://event-rentals.herokuapp.com/api/product/".concat(n);fetch(t).then((function(n){return n.json()})).then((function(n){return a(n)}))}()}return s(t.pathname),Object(r.useEffect)((function(){j()}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)(Fn,{product:c}),Object(d.jsx)(Kn,{product:c})]})}var Xn,Gn,Zn=Object(r.createContext)({});function Wn(n){var t=n.children,e=Object(r.useState)([]),i=Object(l.a)(e,2),c=i[0],a=i[1];return Object(d.jsx)(Zn.Provider,{value:{productList:c,setProductList:a},children:t})}function $n(n){var t=n.category,e=Object(o.f)(),i="",c=Object(r.useContext)(Zn),a=c.productList,s=c.setProductList;function l(){0==Object.keys(t).length&&function(){var n="https://event-rentals.herokuapp.com/api/category/".concat(i);fetch(n).then((function(n){return n.json()})).then((function(n){return s(n.products)}))}()}return Object(r.useEffect)((function(){var n;n=e.pathname,i=n.split("/")[2],l()}),[]),Object(d.jsx)(nn,{children:a&&a.map((function(n){return Object(d.jsx)(W,{to:"/produkt/".concat(n.id),children:Object(d.jsxs)($,{children:[Object(d.jsx)("img",{src:"../images/products/".concat(n.categoryName,"/").concat(n.imageUrl),style:{width:"100%",maxHeight:"80%"}}),Object(d.jsx)("h2",{children:n.name})]})},n.id)}))})}function nt(){var n="",t=Object(o.f)(),e=Object(r.useState)({}),i=Object(l.a)(e,2),c=i[0],a=i[1];return Object(r.useEffect)((function(){var e;e=t.pathname,n=e.split("/")[2],function(){var t="https://event-rentals.herokuapp.com/api/category/".concat(n);fetch(t).then((function(n){return n.json()})).then((function(n){return a(n)}))}()}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)(rn,{children:c.category&&c.category.name}),Object(d.jsx)($n,{category:c})]})}var tt,et,rt=h.a.div(Xn||(Xn=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  //max-height: 170px;\n  margin-bottom: 20px;\n  padding: 10px;\n  border-radius: 15px;\n  ",";\n\n  img {\n    max-width: 50%;\n    object-fit: contain;\n    max-height: 100%;\n  }\n"])),y),it=h.a.div(Gn||(Gn=Object(b.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  padding-bottom: 20px;\n\n  div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  img {\n    max-height: 150px;\n  }\n"])));function ct(){var n=localStorage.getItem("UserToken"),t=Object(r.useState)({}),e=Object(l.a)(t,2),i=e[0],c=e[1],a=Object(r.useState)(),o=Object(l.a)(a,2),s=o[0],j=o[1];return Object(r.useEffect)((function(){fetch("https://event-rentals.herokuapp.com/api/user/profile",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(n){return n.json()})).then((function(n){return c(n)})),fetch("https://event-rentals.herokuapp.com/api/rental",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(n){return n.json()})).then((function(n){return j(n)}))}),[]),localStorage.getItem("UserToken")?Object(d.jsxs)("div",{children:[Object(d.jsx)(rn,{children:"Profil"}),Object(d.jsx)(hn,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:i.fullName}),Object(d.jsx)("h3",{children:i.email}),Object(d.jsx)("h3",{children:i.phone})]})}),Object(d.jsx)(bn,{children:s&&s.map((function(n){return Object(d.jsxs)(rt,{children:[Object(d.jsxs)("p",{children:[n.rentalDate[0],"-",n.rentalDate[1],"-",n.rentalDate[2]," | ",Object(d.jsx)("b",{children:n.totalPrice}),":-"]}),Object(d.jsx)(it,{children:n.products.map((function(n){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h3",{children:[n.product.name," | ",n.quantity,"st"]}),Object(d.jsx)("img",{src:"./images/products/".concat(n.product.categoryName,"/").concat(n.product.imageUrl),alt:""})]},n.id)}))})]},n.id)}))})]}):Object(d.jsxs)(bn,{children:[Object(d.jsx)(rn,{children:"V\xe4nligen logga in f\xf6r att se dina best\xe4llningar"}),Object(d.jsx)(z,{to:"/login",children:"Login"})]})}var at,ot,st=h.a.section(tt||(tt=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 1100px;\n  margin-left: auto;\n  margin-right: auto;\n \n"]))),lt=h.a.div(et||(et=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 100px;\n  align-items: center;\n\n  &:nth-child(even) {\n    flex-direction: row-reverse;\n  }\n\n  p {\n    margin: 0;\n    max-width: 35vw;\n  }\n"])));function dt(){return Object(d.jsxs)(st,{children:[Object(d.jsxs)(lt,{children:[Object(d.jsx)(F.a,{icon:B.h,size:"9x",color:x}),Object(d.jsxs)("div",{children:[Object(d.jsx)(cn,{children:"Leverans"}),Object(d.jsx)("p",{children:"Oavs\xe4tt om du har en liten discokula i din best\xe4llning eller t\xe4lt, bort och stolar f\xf6r 200 personer s\xe5 kan vi hj\xe4lpa din med att leverera och h\xe4mta upp din best\xe4llning."}),Object(d.jsx)("p",{children:"Pris f\xf6r frakt tillkommer."})]})]}),Object(d.jsxs)(lt,{children:[Object(d.jsx)(F.a,{icon:B.g,size:"9x",color:f}),Object(d.jsxs)("div",{children:[Object(d.jsx)(cn,{children:"Montering"}),Object(d.jsx)("p",{children:"Att s\xe4tt upp t\xe4lt kan vara sv\xe5rt, vi hj\xe4lper dig! B\xe5de att bygga upp och att ta ner."}),Object(d.jsx)("p",{children:"Pris f\xf6r montering tillkommer."})]})]}),Object(d.jsxs)(lt,{children:[Object(d.jsx)(F.a,{icon:B.c,size:"9x",color:g}),Object(d.jsxs)("div",{children:[Object(d.jsx)(cn,{children:"St\xe4dning"}),Object(d.jsx)("p",{children:"Efter en fest s\xe5 blir det alltid lite skitigt. Om du v\xe4lje till st\xe4dning till ditt evenemang s\xe5 fixar vi allt det d\xe4r tr\xe5giga dagen efter."}),Object(d.jsx)("p",{children:"Pris f\xf6r st\xe4dning tillkommer."})]})]})]})}function jt(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(rn,{children:"V\xe5ra tj\xe4nster"}),Object(d.jsx)(dt,{})]})}var pt=h.a.div(at||(at=Object(b.a)(['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 90vh;\n  width: 100%;\n  // background: pink;\n  background-image: url("images/konfetti.jpg");\n  background-repeat: no-repeat;\n  background-size: cover;\n  z-index: -1;\n\n  &:after {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 90vh;\n    width: 100%;\n    background: ',";\n    opacity: 0.7;\n  }\n\n  a {\n    z-index: 1;\n  }\n"])),x),ut=h.a.p(ot||(ot=Object(b.a)(["\n  max-width: 40vw;\n  font-size: 40px;\n  text-align: center;\n  color: white;\n  z-index: 1;\n"])));function bt(){return Object(d.jsxs)(pt,{children:[Object(d.jsxs)(ut,{children:["Hyr dina m\xe5sten till festen!",Object(d.jsx)("br",{}),"Med bara n\xe5gra knapptryck"]}),Object(d.jsx)(z,{to:"/tjanster",children:"Se v\xe5ra tj\xe4nster"})]})}function ht(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(bt,{}),Object(d.jsx)(rn,{children:"V\xe5ra produkter"}),Object(d.jsx)(tn,{}),Object(d.jsx)(rn,{children:"V\xe5ra tj\xe4nster"}),Object(d.jsx)(dt,{})]})}function xt(){return Object(d.jsx)("div",{children:Object(d.jsxs)(bn,{children:[Object(d.jsx)(rn,{children:"Tack f\xf6r din best\xe4llning!"}),Object(d.jsx)(z,{to:"/profil",children:"Till mina bokningar"})]})})}var ft=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(K,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/success/:rentalId",children:Object(d.jsx)(xt,{})}),Object(d.jsx)(o.a,{path:"/produkter/:categoryId",children:Object(d.jsx)(nt,{})}),Object(d.jsx)(o.a,{path:"/produkt/:productId",children:Object(d.jsx)(Rn,{})}),Object(d.jsx)(o.a,{path:"/produkter",children:Object(d.jsx)(an,{})}),Object(d.jsx)(o.a,{path:"/kassa",children:Object(d.jsx)(Ln,{})}),Object(d.jsx)(o.a,{path:"/tjanster",children:Object(d.jsx)(jt,{})}),Object(d.jsx)(o.a,{path:"/profil",children:Object(d.jsx)(ct,{})}),Object(d.jsx)(o.a,{path:"/login",children:Object(d.jsx)(En,{})}),Object(d.jsx)(o.a,{path:"/",children:Object(d.jsx)(ht,{})})]}),Object(d.jsx)(m,{})]})},gt=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,51)).then((function(t){var e=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;e(n),r(n),i(n),c(n),a(n)}))};a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(p,{children:Object(d.jsx)(Wn,{children:Object(d.jsx)(M,{children:Object(d.jsx)(s.a,{basename:"/mm-eventuthyrning",children:Object(d.jsx)(ft,{})})})})})}),document.getElementById("root")),gt()}},[[50,1,2]]]);
//# sourceMappingURL=main.80f7da34.chunk.js.map