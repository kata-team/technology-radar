(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(71)},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(27),c=a(2),s=a(3),o=a(5),l=a(4),u=a(6),m=a(10),d=a(1),h=a.n(d),f=a(7),p=a.n(f),v=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"toClassName",value:function(e){return h()(e).reduce(function(e,t,a){return!0===t&&e.push(a),e},[]).join(" ")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:this.overlayClassName,onClick:this.props.onClick}),r.a.createElement("div",{className:this.barClassName},this.props.children))}},{key:"overlayClassName",get:function(){return this.toClassName({"uk-offcanvas":!0,"uk-offcanvas-flip":!0,"uk-offcanvas-overlay":!0,"uk-open":Boolean(this.props.open)})}},{key:"barClassName",get:function(){return this.toClassName({"uk-offcanvas-bar":!0,"uk-offcanvas-bar-animation":!0,"uk-offcanvas-push":!0,"uk-offcanvas-flip":!0,"uk-open":Boolean(this.props.open)})}}],[{key:"propTypes",get:function(){return{onClick:p.a.func,open:p.a.bool,children:p.a.node}}}]),t}(n.Component),k=new(a(28).Dispatcher),g="START_SEARCHING",b="CHANGE_ITEMS",y="CHANGE_QUERY",E="CHANGE_CATEGORY",O="CHANGE_STATUS",j="CHANGE_TAG",C=a(29),w=a.n(C),N=a(30),S=a.n(N),T=w.a.wrap(S.a),x=function(){function e(){Object(c.a)(this,e),this.items=[]}return Object(s.a)(e,[{key:"load",value:function(e,t,a,n){if(h.a.isEmpty(this.items))switch(!0){case 0===e.indexOf("https://spreadsheets.google.com/feeds/list/"):this.googleSpreadsheets(e,t,a,n);break;default:this.json(e,t,a,n)}else a(this.items)}},{key:"json",value:function(e,t,a,n){var r=this,i=n||function(e){return e};T(e).then(function(e){h.a.map(e.entity,function(e){var a=i(e);r.items.push(new t(a))}),a(r.items)})}},{key:"googleSpreadsheets",value:function(e,t,a,n){var r=this,i=n||function(e){return e},c=function(){return Math.round(100*Math.random())},s=document.createElement("script");s.id="spreadsheets_".concat(c(),"_").concat(c(),"_").concat(c()),s.src=e.replace("{1}",s.id),null===document.getElementById(s.id)&&(window[s.id]=function(e){delete window[s.id];h.a.map(e.feed.entry,function(e){var a=function(e){var a={},n=/^gsx\$(.*)$/;return h.a.map(e,function(e,t){n.test(t)&&(a[n.exec(t)[1]]=e.$t)}),a=i(a),new t(a)}(e);r.items.push(a)}),a(r.items)},document.head.appendChild(s))}}]),e}(),R=function e(t){var a=t.name,n=void 0===a?"":a,r=t.description,i=void 0===r?"":r,s=t.category,o=void 0===s?"":s,l=t.status,u=void 0===l?"":l,m=t.url,d=void 0===m?"":m,f=t.tags,p=void 0===f?"":f;Object(c.a)(this,e),this.name=n,this.description=i,this.category=o,this.status=u,this.tags=""!==p.trim()?h.a.map(p.split(","),function(e){return e.trim()}):[],this.url=d},H=function e(t){var a=t.name,n=void 0===a?"":a,r=t.color,i=void 0===r?"":r;Object(c.a)(this,e),this.name=n,this.color=i},I=new(function(){function e(){Object(c.a)(this,e),this.spreadsheetId="112MlfyXSlIQ8nae85Te_xWDBP136GRaYeHlDdKgYyPo",this.urls={items:"https://spreadsheets.google.com/feeds/list/".concat(this.spreadsheetId,"/1/public/values?alt=json-in-script&callback={1}"),categories:"https://spreadsheets.google.com/feeds/list/".concat(this.spreadsheetId,"/2/public/values?alt=json-in-script&callback={1}")}}return Object(s.a)(e,[{key:"load",value:function(){var e=this;M.startSearching(),void 0!==this.spreadsheetId?(new x).load(this.urls.categories,H,function(t){(new x).load(e.urls.items,R,function(e){M.changeItems(e)},function(e){var a,n=e;return n.category=(a=e.category,h.a.find(t,function(e){return e.name===a})),n})}):M.changeItems([])}}]),e}()),M={load:function(){I.load()},startSearching:function(){k.dispatch({type:g,value:void 0})},changeItems:function(e){k.dispatch({type:b,value:e})},changeQuery:function(e){k.dispatch({type:y,value:e})},changeCategory:function(e){k.dispatch({type:E,value:e})},changeStatus:function(e){k.dispatch({type:O,value:e})},changeTag:function(e){k.dispatch({type:j,value:e})}},_=a(9),A={query:"",items:[],categories:[],statuses:[],tags:[]},G=function(){var e=h.a.groupBy(A.items,function(e){return e.category.name});return h.a.keys(e)},B=function(){var e=h.a.groupBy(A.items,function(e){return e.status});return h.a.keys(e)},D=function(){var e=[];return h.a.each(A.items,function(t){h.a.isEmpty(t.tags)||(e=h.a.union(e,t.tags))}),e},L=function(){var e=new RegExp(A.query,"i");return function(e){var t=h.a.groupBy(e,function(e){return e.category.name});return h.a.map(t,function(e){return{items:e,category:e[0].category}})}(h.a.filter(A.items,function(t){var a=e.test(t.name)||e.test(t.description);return a=(a=(a=a&&(0===A.categories.length||A.categories.indexOf(t.category.name)>=0))&&(0===A.statuses.length||A.statuses.indexOf(t.status)>=0))&&(0===A.tags.length||h.a.filter(A.tags,function(e){return t.tags.indexOf(e)>=0}).length>0)}))},q=function(e,t,a){return void 0===a?-1===h.a.indexOf(e,t)?h.a.union(e,[t]):h.a.without(e,t):a?h.a.union(e,[t]):h.a.without(e,t)},P=new(function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(l.a)(t).call(this,k))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"getInitialState",value:function(){return{isSearching:!1,categories:[],statuses:[],tags:[],items:[]}}},{key:"areEqual",value:function(e,t){h.a.isEqual(e,t)}},{key:"reduce",value:function(e,t){switch(t.type){case g:e.isSearching=!0;break;case b:return a=t.value,A.items=a,{isSearching:!1,categories:G(),statuses:B(),tags:D(),items:L()};case y:A.query=t.value;break;case E:A.categories=q(A.categories,t.value.value,t.value.checked);break;case O:A.statuses=q(A.statuses,t.value.value,t.value.checked);break;case j:A.tags=q(A.tags,t.value.value,t.value.checked);break;default:return e}var a;return Object.assign({},function(e){var t=e;return t.items=L(),t}(e))}}]),t}(_.ReduceStore)),F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={itemsStore:P.getState(),offcanvas:!1},a.onClickOffcanvasHandler=a.onClickOffcanvasHandler.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.listener=P.addListener(this.onChangeResultHandler.bind(this))}},{key:"componentWillUnmount",value:function(){this.listener.remove()}},{key:"onChangeResultHandler",value:function(){this.setState({itemsStore:P.getState()})}},{key:"onSubmitSearchHandler",value:function(e){e.preventDefault()}},{key:"onClickOffcanvasHandler",value:function(){this.setState(function(e){return{offcanvas:!e.offcanvas}}),document.body.classList.toggle("uk-offcanvas-page"),document.body.classList.toggle("uk-offcanvas-page-animation"),document.body.classList.toggle("uk-offcanvas-page-overlay"),document.body.classList.toggle("uk-offcanvas-flip")}},{key:"categories",value:function(){return h.a.map(this.state.itemsStore.categories,function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("label",{htmlFor:e},r.a.createElement("input",{id:e,className:"uk-checkbox",type:"checkbox",value:e,onChange:function(e){M.changeCategory(e.target)}})," ",e))})}},{key:"statuses",value:function(){return h.a.map(this.state.itemsStore.statuses,function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("label",{htmlFor:e},r.a.createElement("input",{id:e,className:"uk-checkbox",type:"checkbox",value:e,onChange:function(e){M.changeStatus(e.target)}})," ",e))})}},{key:"tags",value:function(){return h.a.map(this.state.itemsStore.tags,function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("label",{htmlFor:e},r.a.createElement("input",{id:e,className:"uk-checkbox",type:"checkbox",value:e,onChange:function(e){M.changeTag(e.target)}})," ",e))})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onSubmitSearchHandler},r.a.createElement("button",{className:"uk-form-icon uk-form-icon-flip",onClick:this.onClickOffcanvasHandler},r.a.createElement("i",{className:"fa fa-filter"})),r.a.createElement("input",{type:"search",placeholder:"Search",className:"uk-input",onChange:function(e){M.changeQuery(e.target.value)}})),r.a.createElement(v,{open:this.state.offcanvas,onClick:this.onClickOffcanvasHandler},r.a.createElement("h3",null,"Filter"),r.a.createElement("div",{className:"uk-margin uk-grid-small uk-child-width-auto"},r.a.createElement("div",{className:"uk-margin-small"},r.a.createElement("b",null,"Category")),this.categories()),r.a.createElement("div",{className:"uk-margin uk-grid-small uk-child-width-auto"},r.a.createElement("div",{className:"uk-margin-small"},r.a.createElement("b",null,"Status")),this.statuses()),r.a.createElement("div",{className:"uk-margin uk-grid-small uk-child-width-auto"},r.a.createElement("div",{className:"uk-margin-small"},r.a.createElement("b",null,"Tags")),this.tags()),r.a.createElement("button",{className:"uk-button uk-button-default uk-width-1-1 uk-margin",onClick:this.onClickOffcanvasHandler,type:"button"},"Close")))}}]),t}(n.Component),Q="view--grid",V="view--list",Y=function(){k.dispatch({type:Q})},U=function(){k.dispatch({type:V})},W=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.innerWidth<960&&U()}},{key:"onClickViewGrid",value:function(){Y()}},{key:"onClickViewList",value:function(){U()}},{key:"render",value:function(){return r.a.createElement("div",{className:"view-component"},r.a.createElement("button",{className:this.props.viewStore.view===Q?"active":"",onClick:this.onClickViewGrid},r.a.createElement("i",{className:"fa fa-th-large"})),r.a.createElement("button",{className:this.props.viewStore.view===V?"active":"",onClick:this.onClickViewList},r.a.createElement("i",{className:"fa fa-bars"})))}}],[{key:"propTypes",get:function(){return{viewStore:p.a.object.isRequired}}}]),t}(n.Component),$=new(function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(l.a)(t).call(this,k))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"getInitialState",value:function(){return{view:Q}}},{key:"reduce",value:function(e,t){switch(t.type){case Q:return{view:Q};case V:return{view:V};default:return e}}}]),t}(_.ReduceStore)),J=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(W,this.state)}}],[{key:"getStores",value:function(){return[$]}},{key:"calculateState",value:function(){return{viewStore:$.getState()}}}]),t}(n.Component),K=_.Container.create(J),X=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"uk-navbar-container uk-navbar-fixed uk-navbar-brand"},r.a.createElement("div",{className:"uk-container"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{alt:"Technology Radar logo",src:"images/logo.png"}),r.a.createElement("h1",null,"Technology Radar")),r.a.createElement("div",{className:"uk-search uk-width-1-4@s uk-align-right"},r.a.createElement(F,null),r.a.createElement(K,null))))}}]),t}(n.Component),z=a(31),Z=a.n(z),ee=a(32),te=a.n(ee),ae=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={modalOpen:!1},a.onClickModal=a.onClickModal.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"onClickModal",value:function(e){e.currentTarget.classList.contains("uk-modal")&&e.target!==e.currentTarget||(this.setState(function(e){return{modalOpen:!e.modalOpen}}),document.body.classList.toggle("uk-modal-page"))}},{key:"tags",value:function(){var e=this;return h.a.map(this.props.item.tags,function(t,a){return r.a.createElement("span",{key:a},r.a.createElement("div",{className:"uk-label",style:e.labelStyle},t),"\xa0")})}},{key:"renderCard",value:function(){return r.a.createElement("div",{className:"uk-card uk-card-default uk-card-hover",onClick:this.onClickModal},r.a.createElement("div",{className:"uk-card-body"},r.a.createElement("div",{className:"uk-card-badge uk-label",style:this.labelStyle},this.props.item.status),r.a.createElement("h3",{className:"uk-card-title"},this.props.item.name),r.a.createElement("p",{className:"uk-card-description"},this.props.item.description)),r.a.createElement("div",{className:"uk-card-footer"},this.tags()))}},{key:"renderModal",value:function(){return r.a.createElement("div",{className:"uk-modal ".concat(this.state.modalOpen?"uk-open":""),onClick:this.onClickModal},r.a.createElement("div",{className:"uk-modal-dialog"},r.a.createElement("button",{className:"uk-close uk-modal-close-default",onClick:this.onClickModal},r.a.createElement("i",{className:"fa fa-close","aria-hidden":"true"})),r.a.createElement("div",{className:"uk-modal-header"},r.a.createElement("h3",{className:"uk-modal-title"},this.props.item.name)),r.a.createElement("div",{className:"uk-modal-body"},r.a.createElement("div",{className:"uk-modal-badge uk-label",style:this.labelStyle},this.props.item.status),r.a.createElement("p",{className:"uk-modal-description"},this.props.item.description),r.a.createElement("a",Object.assign({target:"_blank",rel:"noopener noreferrer"},this.props.item.url?{href:this.props.item.url}:{}),r.a.createElement("i",{className:"fa fa-globe"}),"website")),r.a.createElement("div",{className:"uk-modal-footer"},this.tags())))}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderCard(),this.renderModal())}},{key:"labelStyle",get:function(){return{background:te()(this.props.item.category.color).darken(.15)}}}],[{key:"propTypes",get:function(){return{item:p.a.instanceOf(R)}}}]),t}(n.Component),ne=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"uk-spinner uk-icon"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30"},r.a.createElement("circle",{fill:"none",stroke:"#000",cx:"15",cy:"15",r:"14"})))}}]),t}(n.Component),re=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"renderItems",value:function(e){return h.a.map(e,function(e,t){return r.a.createElement("div",{key:t,className:"uk-grid-match uk-grid-margin"},r.a.createElement(ae,{item:e}))})}},{key:"renderCategory",value:function(e){var t={background:e.category.color},a=Z()({"uk-child-width-1-2@m uk-child-width-1-3@l":this.props.viewStore.view===Q,"uk-child-width-1-1":this.props.viewStore.view===V,"uk-grid uk-grid-match":!0});return r.a.createElement("section",{key:e.category.name,className:"uk-section",style:t},r.a.createElement("div",{className:"uk-container"},r.a.createElement("div",{className:"uk-panel uk-light uk-margin-medium"},r.a.createElement("h3",null,e.category.name)),r.a.createElement("div",{className:a},this.renderItems(e.items))))}},{key:"renderNoResults",value:function(){return r.a.createElement("div",{className:"no-results"},r.a.createElement("i",{className:"fa fa-meh-o","aria-hidden":"true"}),r.a.createElement("br",null),"There are no results!",r.a.createElement("br",null),r.a.createElement("small",null,"remember to set the environment variable: ",r.a.createElement("b",null,"REACT_APP_SPREADSHEET_ID")))}},{key:"renderCategories",value:function(){var e=this;return this.props.itemsStore.isSearching?r.a.createElement(ne,null):0===this.props.itemsStore.items.length?this.renderNoResults():h.a.map(this.props.itemsStore.items,function(t){return e.renderCategory(t)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"app--result ".concat(this.props.viewStore.view)},this.renderCategories())}}],[{key:"propTypes",get:function(){return{itemsStore:p.a.object.isRequired,viewStore:p.a.object.isRequired}}}]),t}(n.Component),ie=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(re,this.state)}}],[{key:"getStores",value:function(){return[P,$]}},{key:"calculateState",value:function(){return{itemsStore:P.getState(),viewStore:$.getState()}}}]),t}(n.Component),ce=_.Container.create(ie),se=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){M.load()}},{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(X,null),r.a.createElement(ce,null))}}]),t}(n.Component);i.render(n.createElement(se,null),document.getElementById("root"))}},[[33,2,1]]]);
//# sourceMappingURL=main.3271e99e.chunk.js.map