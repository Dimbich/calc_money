(this["webpackJsonpcacl-money"]=this["webpackJsonpcacl-money"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(2),r=a.n(c),s=a(5),i=a(3),l=a(4),m=a(7),u=a(6),d=function(e){var t=function(e){var t=0,a=0,n=0;return e.length&&(n=(t=e.reduce((function(e,t){return e+(t.isIncome?+t.amount:0)}),0))-(a=e.reduce((function(e,t){return e+(t.isIncome?0:+t.amount)}),0))),{income:t,expense:a,total:n}}(e.transactions),a=t.income,n=t.expense,c=t.total;return o.a.createElement("section",{className:"total"},o.a.createElement("header",{className:"total__header"},o.a.createElement("h3",null,"\u0411\u0430\u043b\u0430\u043d\u0441"),o.a.createElement("p",{className:"total__balance"}," ".concat(c," \u20bd"))),o.a.createElement("div",{className:"total__main"},o.a.createElement("div",{className:"total__main-item total__income"},o.a.createElement("h4",null,"\u0414\u043e\u0445\u043e\u0434\u044b"),o.a.createElement("p",{className:"total__money total__money-income"},"+ ".concat(a," \u20bd"))),o.a.createElement("div",{className:"total__main-item total__expenses"},o.a.createElement("h4",null,"\u0420\u0430\u0441\u0445\u043e\u0434\u044b"),o.a.createElement("p",{className:"total__money total__money-expenses"},"- ".concat(n," \u20bd")))))},p=function(e){var t=e?"history__item-plus":"history__item-minus";return"".concat("history__item"," ").concat(t)},_=function(e){var t=e.id,a=e.description,n=e.amount,c=e.isIncome,r=e.deleteTransaction;return o.a.createElement("li",{className:p(c)},a,o.a.createElement("span",{className:"history__money"},n+" \u20bd"),o.a.createElement("button",{onClick:function(){r(t)},className:"history__delete"},"x"))},E=function(e){var t=e.transactions,a=e.deleteTransaction;return o.a.createElement("section",{className:"history"},o.a.createElement("h3",null,"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432"),o.a.createElement("ul",{className:"history__list"},t.map((function(e){return o.a.createElement(_,Object.assign({key:e.id,deleteTransaction:a},e))}))))},h=function(e){var t=e.addTransaction,a=e.addDescription,n=e.addAmount,c=e.description,r=e.amount;return o.a.createElement("section",{className:"operation"},o.a.createElement("h3",null,"\u041d\u043e\u0432\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f"),o.a.createElement("form",{id:"form"},o.a.createElement("label",null,o.a.createElement("input",{type:"text",className:"operation__fields operation__name",placeholder:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438",onChange:a,value:c})),o.a.createElement("label",null,o.a.createElement("input",{type:"number",className:"operation__fields operation__amount",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443",onChange:n,value:r})),o.a.createElement("div",{className:"operation__btns"},o.a.createElement("button",{onClick:function(){return t(!1)},type:"button",className:"operation__btn operation__btn-subtract"},"\u0420\u0410\u0421\u0425\u041e\u0414"),o.a.createElement("button",{onClick:function(){return t(!0)},type:"button",className:"operation__btn operation__btn-add"},"\u0414\u041e\u0425\u041e\u0414"))))},f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={transactions:JSON.parse(localStorage.getItem("transactions"))||[],description:"",amount:""},e.addTransaction=function(t){var a=Object(s.a)(e.state.transactions),n=e.state,o=n.description,c=n.amount;a.push({id:"cmr".concat((+new Date).toString(16)),description:o,amount:c,isIncome:t}),e.setState({transactions:a,description:"",amount:""},e.saveToLocalStorage)},e.addAmount=function(t){e.setState({amount:t.target.value},(function(){return e.state}))},e.addDescription=function(t){e.setState({description:t.target.value})},e.saveToLocalStorage=function(){localStorage.setItem("transactions",JSON.stringify(e.state.transactions))},e.deleteTransaction=function(t){e.setState({transactions:e.state.transactions.filter((function(e){return e.id!=t}))},e.saveToLocalStorage)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.addTransaction,t=this.addAmount,a=this.addDescription,n=this.deleteTransaction,c=this.state,r=c.transactions,s=c.description,i=c.amount;return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",null,o.a.createElement("h1",null,"\u041a\u043e\u0448\u0435\u043b\u0435\u043a"),o.a.createElement("h2",null,"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432")),o.a.createElement("main",null,o.a.createElement("div",{className:"container"},o.a.createElement(d,{transactions:r}),o.a.createElement(E,{transactions:r,deleteTransaction:n}),o.a.createElement(h,{addTransaction:e,addAmount:t,addDescription:a,description:s,amount:i}))))}}]),a}(n.Component);a(13),a(14);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.cb10e65a.chunk.js.map