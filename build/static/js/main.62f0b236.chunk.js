(window.webpackJsonpmyreads=window.webpackJsonpmyreads||[]).push([[0],{184:function(e,t,a){},187:function(e,t,a){},188:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(88),s=a.n(r),c=a(11),i=a(12),l=a(14),u=a(13),h=a(15),d=a(191),p=a(192),f=(a(184),a(190)),b=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleBookUpdate",value:function(e){var t=e.target.value;this.props.handler(this.props,t)}},{key:"render",value:function(){var e=this.props.shelf?this.props.shelf:"none";return o.a.createElement("li",null,o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:'url("'.concat(this.props.imageLinks?this.props.imageLinks.thumbnail:"",'")')}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{value:e,onChange:this.handleBookUpdate.bind(this)},o.a.createElement("option",{disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},this.props.title),o.a.createElement("div",{className:"book-authors"},this.props.authors?this.props.authors.join(", "):"None")))}}]),t}(n.Component),m=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.books.map((function(t){return o.a.createElement(b,Object.assign({key:t.id},t,{handler:e.props.handler}))}));return o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},this.props.caption),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},t)))}}]),t}(n.Component),k=a(89);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach((function(t){Object(k.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O="https://reactnd-books-api.udacity.com",E=localStorage.token;E||(E=localStorage.token=Math.random().toString(36).substr(-8));var j={Accept:"application/json",Authorization:E},g=function(){return fetch("".concat(O,"/books"),{headers:j}).then((function(e){return e.json()})).then((function(e){return e.books}))},S=function(e,t){return fetch("".concat(O,"/books/").concat(e.id),{method:"PUT",headers:y({},j,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then((function(e){return e.json()}))},B=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={books:[]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchBooks()}},{key:"fetchBooks",value:function(){var e=this;g().then((function(t){e.setState({books:t})}))}},{key:"filterBooksByShelf",value:function(e){return this.state.books.filter((function(t){return t.shelf===e}))}},{key:"updateHandler",value:function(e,t){this.updateBook(e,t),S(e,t).then((function(){return console.log("Book update done")}))}},{key:"updateBook",value:function(e,t){var a=this.state.books;a.forEach((function(n,o){n.id===e.id&&(a[o].shelf=t)})),this.setState({books:a})}},{key:"render",value:function(){return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,o.a.createElement(m,{caption:"Currently Reading",books:this.filterBooksByShelf("currentlyReading"),handler:this.updateHandler.bind(this)}),o.a.createElement(m,{caption:"Want to Read",books:this.filterBooksByShelf("wantToRead"),handler:this.updateHandler.bind(this)}),o.a.createElement(m,{caption:"Read",books:this.filterBooksByShelf("read"),handler:this.updateHandler.bind(this)}))),o.a.createElement("div",{className:"open-search"},o.a.createElement(f.a,{to:"/search"},"Add a book")))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={books:[],reqCount:0,maxReq:0,allBooks:[]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchBooks()}},{key:"fetchBooks",value:function(){var e=this;g().then((function(t){console.log("all books loaded"),e.setState({allBooks:t})}))}},{key:"setSearchState",value:function(e,t){t<this.state.maxReq?console.log("a response was invalidated"):this.setState({books:e,maxReq:t})}},{key:"doSearch",value:function(e){var t,a=this,n=this.state.reqCount+1;(this.setState({reqCount:n}),e)?(t=e,fetch("".concat(O,"/search"),{method:"POST",headers:y({},j,{"Content-Type":"application/json"}),body:JSON.stringify({query:t})}).then((function(e){return e.json()})).then((function(e){return e.books}))).then((function(e){console.log("search done"),a.setSearchState(e,n)})).catch((function(){console.log("search failed"),a.setSearchState([],n)})):this.setSearchState([],n)}},{key:"inputChange",value:function(e){var t=e.target.value.trim();this.doSearch(t)}},{key:"updateHandler",value:function(e,t){this.updateBook(e,t),S(e,t).then((function(){return console.log("Book update done")}))}},{key:"updateBook",value:function(e,t){var a=this.state.allBooks,n=!1;a.forEach((function(o,r){o.id===e.id&&(a[r].shelf=t,n=!0)})),n||(a[e.id]=JSON.parse(JSON.stringify(e)),a[e.id].shelf=t),this.setState({allBooks:a})}},{key:"getBook",value:function(e){var t=this.state.allBooks;for(var a in t)if(t[a].id===e.id)return console.log("match in search books and own books"),t[a];return e}},{key:"render",value:function(){var e=this,t=this.state.books.map((function(t){return o.a.createElement(b,Object.assign({key:t.id},e.getBook(t),{handler:e.updateHandler.bind(e)}))}));return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(f.a,{className:"close-search",to:"/"},"Close"),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{onChange:this.inputChange.bind(this),type:"text",placeholder:"Search by title or author"}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},t)))}}]),t}(n.Component),w=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,{basename:window.location.pathname||""},o.a.createElement("div",{className:"app"},o.a.createElement(p.a,{exact:!0,path:"/",component:B}),o.a.createElement(p.a,{exact:!0,path:"/search",component:N})))}}]),t}(o.a.Component);a(187);s.a.render(o.a.createElement(w,null),document.getElementById("root"))},91:function(e,t,a){e.exports=a(188)}},[[91,1,2]]]);
//# sourceMappingURL=main.62f0b236.chunk.js.map