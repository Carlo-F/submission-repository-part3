(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,n,t){"use strict";t.r(n);var r=t(17),c=t.n(r),a=t(8),o=t(3),u=t(1),i=t(4),d=t.n(i),s="/api/persons",l=function(){return d.a.get(s).then((function(e){return e.data}))},b=function(e){return d.a.post(s,e).then((function(e){return e.data}))},j=function(e){return d.a.delete("".concat(s,"/").concat(e)).then((function(e){return e.data}))},f=function(e,n){return d.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},h=t(0),m=function(e){var n=e.person,t=e.handleDelete;return Object(h.jsxs)("li",{children:[n.name," ",n.number," ",Object(h.jsx)("button",{onClick:function(){return t(n.id)},children:"delete"})]})},O=function(e){var n=e.filteredPersons,t=e.handleDelete;return Object(h.jsx)("ul",{children:n.map((function(e){return Object(h.jsx)(m,{person:e,handleDelete:t},e.name)}))})},p=function(e){var n=e.handleChange;return Object(h.jsxs)("div",{children:["filter shown with ",Object(h.jsx)("input",{onChange:n})]})},x=function(e){var n=e.handleSubmit,t=e.handleNameChange,r=e.handleNumberChange,c=e.newName,a=e.newNumber;return Object(h.jsxs)("form",{onSubmit:n,children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)("input",{onChange:t,value:c})]}),Object(h.jsxs)("div",{children:["number: ",Object(h.jsx)("input",{onChange:r,value:a})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"add"})})]})},g=function(e){var n=e.status,t=e.message;return null===t?null:Object(h.jsx)("div",{style:"success"===n?{color:"green",borderStyle:"solid",borderColor:"green",fontSize:20,padding:10,marginBottom:10}:{color:"red",borderStyle:"solid",borderColor:"red",fontSize:20,padding:10,marginBottom:10},children:t})},v=function(){var e=Object(u.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],c=Object(u.useState)(""),i=Object(o.a)(c,2),d=i[0],s=i[1],m=Object(u.useState)(""),v=Object(o.a)(m,2),w=v[0],C=v[1],S=Object(u.useState)([]),N=Object(o.a)(S,2),k=N[0],y=N[1],D=Object(u.useState)(null),P=Object(o.a)(D,2),B=P[0],T=P[1],z=Object(u.useState)(null),E=Object(o.a)(z,2),J=E[0],L=E[1];Object(u.useEffect)((function(){l().then((function(e){r(e),y(e)}))}),[]);return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(g,{status:"success",message:B}),Object(h.jsx)(g,{status:"error",message:J}),Object(h.jsx)(p,{handleChange:function(e){y(t.filter((function(n){return-1!==n.name.toLowerCase().indexOf(e.target.value.toLowerCase())})))}}),Object(h.jsx)("h2",{children:"add a new"}),Object(h.jsx)(x,{handleSubmit:function(e){if(e.preventDefault(),t.find((function(e){return e.name===d}))){if(window.confirm("".concat(d," is already added to phonebook, replace the old number with a new one?"))){var n=t.find((function(e){return e.name===d})),c=Object(a.a)(Object(a.a)({},n),{},{number:w});f(c.id,c).then((function(e){r(t.map((function(e){return e.id===c.id?c:e}))),y(k.map((function(e){return e.id===c.id?c:e}))),s(""),C(""),T("phone number replaced"),setTimeout((function(){T(null)}),5e3)})).catch((function(e){L("an error as occured"),setTimeout((function(){L(null)}),5e3)}))}}else b({name:d,number:w}).then((function(e){r(t.concat(e)),y(k.concat(e)),s(""),C(""),T("added ".concat(d)),setTimeout((function(){T(null)}),5e3)}))},handleNameChange:function(e){s(e.target.value)},handleNumberChange:function(e){C(e.target.value)},newName:d,newNumber:w}),Object(h.jsx)("h2",{children:"Numbers"}),Object(h.jsx)(O,{filteredPersons:k,handleDelete:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name," ?"))&&j(e).then((function(n){r(t.filter((function(n){return n.id!==e}))),y(k.filter((function(n){return n.id!==e})))})).catch((function(e){alert("Person already deleted from server")}))}})]})};c.a.render(Object(h.jsx)(v,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.d5bd4455.chunk.js.map