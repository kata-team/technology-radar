(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e){e.exports={name:"technology-radar",version:"4.2.0",description:"Technology Radar is a tool that helps organizations to monitor their own discoveries. Keep track of your technologies according to your previous successes and failures.",main:"index.js",homepage:".",author:"Kata Team",contributors:[{name:"Marco Montalbano",email:"me@marcomontalbano.com",url:"https://marcomontalbano.com"},{name:"Stefano Sala",email:"salaste83@gmail.com"},{name:"Matteo Colombo Speroni",email:"matteocolombo.work@gmail.com"}],license:"MIT",repository:{type:"git",url:"https://github.com/kata-team/technology-radar"},keywords:["react","flux","gh-pages","heroku","travis","google-spreadsheet"],scripts:{test:"react-scripts test","build-css":"lessc --source-map --clean-css='--advanced --compatibility=ie8' src/stylesheets/app.less public/stylesheets/app.min.css","build-js":"react-scripts build",build:"npm-run-all build-css build-js","start-css":"watch-run -p 'src/stylesheets/**/*.less' npm run build-css","start-js":"react-scripts start",start:"npm-run-all -p start-css start-js",predeploy:"npm run build",deploy:"node ./scripts/publish.js master",postinstall:"npm run build"},engines:{node:"6.x || 7.x || 8.x"},dependencies:{classnames:"^2.2.6",color:"~3.1.0",flux:"^3.1.3","js-cookie":"~2.2.0",lodash:"~4.17.11","prop-types":"^15.6.2",react:"~16.6.3","react-dom":"~16.6.3",rest:"^2.0.0",uikit:"~3.0.0-rc.26"},devDependencies:{"gh-pages":"^1.2.0",less:"~3.9.0","less-plugin-clean-css":"^1.5.1","npm-run-all":"~4.1.5","react-scripts":"~2.1.3","watch-run":"^1.2.5"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}},36:function(e,t,a){e.exports=a(74)},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(28),i=a(2),c=a(3),o=a(5),l=a(4),u=a(6),m=a(7),d=a(11),h=a.n(d),p=a(1),f=a.n(p),v=a(8),g=a.n(v),k=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"toClassName",value:function(e){return f()(e).reduce(function(e,t,a){return!0===t&&e.push(a),e},[]).join(" ")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:this.overlayClassName,onClick:this.props.onClick}),r.a.createElement("div",{className:this.barClassName},this.props.children))}},{key:"overlayClassName",get:function(){return this.toClassName({"uk-offcanvas":!0,"uk-offcanvas-flip":!0,"uk-offcanvas-overlay":!0,"uk-open":Boolean(this.props.open)})}},{key:"barClassName",get:function(){return this.toClassName({"uk-offcanvas-bar":!0,"uk-offcanvas-bar-animation":!0,"uk-offcanvas-push":!0,"uk-offcanvas-flip":!0,"uk-open":Boolean(this.props.open)})}}],[{key:"propTypes",get:function(){return{onClick:g.a.func,open:g.a.bool,children:g.a.node}}}]),t}(n.Component),b=new(a(29).Dispatcher),y="START_SEARCHING",E="CHANGE_ITEMS",O="CHANGE_QUERY",j="CHANGE_CATEGORY",w="CHANGE_STATUS",C="CHANGE_TAG",N=a(35),S=a(30),x=a.n(S),T=a(31),H=a.n(T),I=x.a.wrap(H.a),_=function(e,t,a){switch(!0){case 0===e.indexOf("https://spreadsheets.google.com/feeds/list/"):return function(e,t,a){return new Promise(function(n,r){var s=[],i=a||function(e){return e},c=function(){return Math.round(100*Math.random())},o=document.createElement("script");o.id="spreadsheets_".concat(c(),"_").concat(c(),"_").concat(c()),o.src=e.replace("{1}",o.id),o.onerror=function(e){return r(e)},null===document.getElementById(o.id)&&(window[o.id]=function(e){delete window[o.id];f.a.map(e.feed.entry,function(e){var a=function(e){var a={},n=/^gsx\$(.*)$/;return f.a.map(e,function(e,t){n.test(t)&&(a[n.exec(t)[1]]=e.$t)}),a=i(a),new t(a)}(e);s.push(a)}),n(s)},document.head.appendChild(o))})}(e,t,a);default:return function(e,t,a){return new Promise(function(n,r){var s=[],i=a||function(e){return e};I(e).then(function(e){f.a.map(e.entity,function(e){var a=i(e);s.push(new t(a))}),n(s)}).catch(function(e){return r(e)})})}(e,t,a)}};var R=function e(t){var a=t.name,n=void 0===a?"":a,r=t.description,s=void 0===r?"":r,c=t.category,o=void 0===c?"":c,l=t.status,u=void 0===l?"":l,m=t.url,d=void 0===m?"":m,h=t.tags,p=void 0===h?"":h,v=t.comments,g=void 0===v?"":v;Object(i.a)(this,e),this.name=n,this.description=s,this.category=o,this.status=u,this.tags=""!==p.trim()?f.a.map(p.split(","),function(e){return e.trim()}):[],this.url=d,this.comments=g||[]},M=function e(t){var a=t.name,n=void 0===a?"":a,r=t.color,s=void 0===r?"":r;Object(i.a)(this,e),this.name=n,this.color=s},L=function e(t){var a=t.date,n=void 0===a?"":a,r=t.name,s=void 0===r?"":r,c=t.author,o=void 0===c?"":c,l=t.message,u=void 0===l?"":l,m=t.status,d=void 0===m?"":m;Object(i.a)(this,e),this.date=n,this.name=s,this.author=o,this.message=u,this.status=d},A=new(function(){function e(){Object(i.a)(this,e)}return Object(c.a)(e,[{key:"setup",value:function(){this.spreadsheetId=h.a.get("document_id")||"112MlfyXSlIQ8nae85Te_xWDBP136GRaYeHlDdKgYyPo",this.urls={items:"https://spreadsheets.google.com/feeds/list/".concat(this.spreadsheetId,"/1/public/values?alt=json-in-script&callback={1}"),categories:"https://spreadsheets.google.com/feeds/list/".concat(this.spreadsheetId,"/2/public/values?alt=json-in-script&callback={1}"),comments:"https://spreadsheets.google.com/feeds/list/".concat(this.spreadsheetId,"/3/public/values?alt=json-in-script&callback={1}")}}},{key:"load",value:function(){var e=this;this.setup(),D.startSearching(),void 0!==this.spreadsheetId?Promise.all([_(this.urls.categories,M),_(this.urls.comments,L)]).then(function(t){var a=Object(N.a)(t,2),n=a[0],r=a[1],s=function(e,t){return f.a.filter(e,function(e){return e.name===t})};_(e.urls.items,R,function(e){var t=e;return t.category=s(n,e.category)[0]||{name:"uncategorized",color:"#e0e0e0"},t.comments=s(r,e.name).sort(function(e,t){return new Date(t.date)-new Date(e.date)}),t}).then(function(e){D.changeItems(e),window.items=e}).catch(function(){D.changeItems([])})}).catch(function(){D.changeItems([])}):D.changeItems([])}}]),e}()),D={load:function(){A.load()},startSearching:function(){b.dispatch({type:y,value:void 0})},changeItems:function(e){b.dispatch({type:E,value:e})},changeQuery:function(e){b.dispatch({type:O,value:e})},changeCategory:function(e){b.dispatch({type:j,value:e})},changeStatus:function(e){b.dispatch({type:w,value:e})},changeTag:function(e){b.dispatch({type:C,value:e})}},G=a(10),B={query:"",items:[],categories:[],statuses:[],tags:[]},P=function(){var e=f.a.groupBy(B.items,function(e){return e.category.name});return f.a.keys(e)},q=function(){var e=f.a.groupBy(B.items,function(e){return e.status});return f.a.keys(e)},F=function(){var e=[];return f.a.each(B.items,function(t){f.a.isEmpty(t.tags)||(e=f.a.union(e,t.tags))}),e},Q=function(){var e=new RegExp(B.query,"i");return function(e){var t=f.a.groupBy(e,function(e){return e.category.name});return f.a.map(t,function(e){return{items:e,category:e[0].category}})}(f.a.filter(B.items,function(t){var a=e.test(t.name)||e.test(t.description)||t.comments.filter(function(t){return e.test(t.message)}).length>0;return a=(a=(a=a&&(0===B.categories.length||B.categories.indexOf(t.category.name)>=0))&&(0===B.statuses.length||B.statuses.indexOf(t.status)>=0))&&(0===B.tags.length||f.a.filter(B.tags,function(e){return t.tags.indexOf(e)>=0}).length>0)}))},U=function(e,t,a){return void 0===a?-1===f.a.indexOf(e,t)?f.a.union(e,[t]):f.a.without(e,t):a?f.a.union(e,[t]):f.a.without(e,t)},V=new(function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(l.a)(t).call(this,b))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"getInitialState",value:function(){return{isSearching:!1,categories:[],statuses:[],tags:[],items:[]}}},{key:"areEqual",value:function(e,t){f.a.isEqual(e,t)}},{key:"reduce",value:function(e,t){switch(t.type){case y:e.isSearching=!0;break;case E:return a=t.value,B.items=a,{isSearching:!1,categories:P(),statuses:q(),tags:F(),items:Q()};case O:B.query=t.value;break;case j:B.categories=U(B.categories,t.value.value,t.value.checked);break;case w:B.statuses=U(B.statuses,t.value.value,t.value.checked);break;case C:B.tags=U(B.tags,t.value.value,t.value.checked);break;default:return e}var a;return Object.assign({},function(e){var t=e;return t.items=Q(),t}(e))}}]),t}(G.ReduceStore)),Y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={itemsStore:V.getState(),offcanvas:!1},a.onClickOffcanvasHandler=a.onClickOffcanvasHandler.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.listener=V.addListener(this.onChangeResultHandler.bind(this))}},{key:"componentWillUnmount",value:function(){this.listener.remove()}},{key:"onChangeResultHandler",value:function(){this.setState({itemsStore:V.getState()})}},{key:"onSubmitSearchHandler",value:function(e){e.preventDefault()}},{key:"onClickOffcanvasHandler",value:function(){this.setState(function(e){return{offcanvas:!e.offcanvas}}),document.body.classList.toggle("uk-offcanvas-page"),document.body.classList.toggle("uk-offcanvas-page-animation"),document.body.classList.toggle("uk-offcanvas-page-overlay"),document.body.classList.toggle("uk-offcanvas-flip")}},{key:"categories",value:function(){return f.a.map(this.state.itemsStore.categories,function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("label",{htmlFor:e},r.a.createElement("input",{id:e,className:"uk-checkbox",type:"checkbox",value:e,onChange:function(e){D.changeCategory(e.target)}})," ",e))})}},{key:"statuses",value:function(){return f.a.map(this.state.itemsStore.statuses,function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("label",{htmlFor:e},r.a.createElement("input",{id:e,className:"uk-checkbox",type:"checkbox",value:e,onChange:function(e){D.changeStatus(e.target)}})," ",e))})}},{key:"tags",value:function(){return f.a.map(this.state.itemsStore.tags,function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("label",{htmlFor:e},r.a.createElement("input",{id:e,className:"uk-checkbox",type:"checkbox",value:e,onChange:function(e){D.changeTag(e.target)}})," ",e))})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onSubmitSearchHandler},r.a.createElement("button",{className:"uk-form-icon uk-form-icon-flip",onClick:this.onClickOffcanvasHandler},r.a.createElement("i",{className:"fa fa-filter"})),r.a.createElement("input",{type:"search",placeholder:"Search",className:"uk-input",onChange:function(e){D.changeQuery(e.target.value)}})),r.a.createElement(k,{open:this.state.offcanvas,onClick:this.onClickOffcanvasHandler},r.a.createElement("h3",null,"Filter"),r.a.createElement("div",{className:"uk-margin uk-grid-small uk-child-width-auto"},r.a.createElement("div",{className:"uk-margin-small"},r.a.createElement("b",null,"Category")),this.categories()),r.a.createElement("div",{className:"uk-margin uk-grid-small uk-child-width-auto"},r.a.createElement("div",{className:"uk-margin-small"},r.a.createElement("b",null,"Status")),this.statuses()),r.a.createElement("div",{className:"uk-margin uk-grid-small uk-child-width-auto"},r.a.createElement("div",{className:"uk-margin-small"},r.a.createElement("b",null,"Tags")),this.tags()),r.a.createElement("button",{className:"uk-button uk-button-default uk-width-1-1 uk-margin",onClick:this.onClickOffcanvasHandler,type:"button"},"Close")))}}]),t}(n.Component),K="view--grid",W="view--list",$=function(){b.dispatch({type:K})},z=function(){b.dispatch({type:W})},J=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.innerWidth<960&&z()}},{key:"onClickViewGrid",value:function(){$()}},{key:"onClickViewList",value:function(){z()}},{key:"render",value:function(){return r.a.createElement("div",{className:"view-component"},r.a.createElement("button",{className:this.props.viewStore.view===K?"active":"",onClick:this.onClickViewGrid},r.a.createElement("i",{className:"fa fa-th-large"})),r.a.createElement("button",{className:this.props.viewStore.view===W?"active":"",onClick:this.onClickViewList},r.a.createElement("i",{className:"fa fa-bars"})))}}],[{key:"propTypes",get:function(){return{viewStore:g.a.object.isRequired}}}]),t}(n.Component),X=new(function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(l.a)(t).call(this,b))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"getInitialState",value:function(){return{view:K}}},{key:"reduce",value:function(e,t){switch(t.type){case K:return{view:K};case W:return{view:W};default:return e}}}]),t}(G.ReduceStore)),Z=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(J,this.state)}}],[{key:"getStores",value:function(){return[X]}},{key:"calculateState",value:function(){return{viewStore:X.getState()}}}]),t}(n.Component),ee=G.Container.create(Z),te=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"uk-navbar-container uk-navbar-fixed uk-navbar-brand"},r.a.createElement("div",{className:"uk-container"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{alt:"Technology Radar logo",src:"images/logo.png"}),r.a.createElement("h1",null,"Technology Radar")),r.a.createElement("div",{className:"uk-search uk-width-1-4@s uk-align-right"},r.a.createElement(Y,null),r.a.createElement(ee,null))))}}]),t}(n.Component),ae=a(32),ne=a.n(ae),re=a(33),se=a.n(re),ie=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={modalOpen:!1},a.onClickModal=a.onClickModal.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"onClickModal",value:function(e){e.currentTarget.classList.contains("uk-modal")&&e.target!==e.currentTarget||(this.setState(function(e){return{modalOpen:!e.modalOpen}}),document.body.classList.toggle("uk-modal-page"))}},{key:"renderLabel",value:function(e){return r.a.createElement("div",{className:"uk-label",style:this.labelStyle},e)}},{key:"renderTags",value:function(e){var t=this,a=f.a.map(this.props.item.tags,function(e,a){return r.a.createElement("span",{key:a},t.renderLabel(e),"\xa0")});return!1===f.a.isEmpty(a)&&e?r.a.createElement("div",{className:"uk-modal-footer"},a):a}},{key:"renderComments",value:function(){var e=this,t=f.a.map(this.props.item.comments,function(t,a){return r.a.createElement("li",{key:a},r.a.createElement("article",{className:"uk-comment"},r.a.createElement("div",{className:"uk-comment-body"},r.a.createElement("div",null,r.a.createElement("small",null,t.date)),r.a.createElement("div",{className:"uk-text-bold uk-text-primary"},t.author),e.renderLabel(t.status),r.a.createElement("div",{className:"uk-margin-small-top"},t.message))))});return!1===f.a.isEmpty(t)?r.a.createElement("div",{className:"uk-modal-footer uk-padding-small"},r.a.createElement("ul",{className:"uk-comment-list"},t)):t}},{key:"renderCard",value:function(){return r.a.createElement("div",{className:"uk-card uk-card-default uk-card-hover",onClick:this.onClickModal},r.a.createElement("div",{className:"uk-card-body"},r.a.createElement("div",{className:"uk-card-badge uk-label",style:this.labelStyle},this.props.item.status),r.a.createElement("h3",{className:"uk-card-title"},this.props.item.name),r.a.createElement("p",{className:"uk-card-description"},this.props.item.description)),r.a.createElement("div",{className:"uk-card-footer"},this.renderTags(!1)))}},{key:"renderModal",value:function(){return r.a.createElement("div",{className:"uk-modal ".concat(this.state.modalOpen?"uk-open":""),onClick:this.onClickModal},r.a.createElement("div",{className:"uk-modal-dialog"},r.a.createElement("button",{className:"uk-close uk-modal-close-default",onClick:this.onClickModal},r.a.createElement("i",{className:"fa fa-close","aria-hidden":"true"})),r.a.createElement("div",{className:"uk-modal-header"},r.a.createElement("h3",{className:"uk-modal-title"},this.props.item.name)),r.a.createElement("div",{className:"uk-modal-body"},r.a.createElement("div",{className:"uk-modal-badge uk-label",style:this.labelStyle},this.props.item.status),r.a.createElement("p",{className:"uk-modal-description"},this.props.item.description),r.a.createElement("a",Object.assign({target:"_blank",rel:"noopener noreferrer"},this.props.item.url?{href:this.props.item.url}:{}),r.a.createElement("i",{className:"fa fa-globe"}),"website")),this.renderTags(!0),this.renderComments()))}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderCard(),this.renderModal())}},{key:"labelStyle",get:function(){return{background:se()(this.props.item.category.color).darken(.15)}}}],[{key:"propTypes",get:function(){return{item:g.a.instanceOf(R)}}}]),t}(n.Component),ce=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"uk-spinner uk-icon"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30"},r.a.createElement("circle",{fill:"none",stroke:"#000",cx:"15",cy:"15",r:"14"})))}}]),t}(n.Component),oe=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"renderItems",value:function(e){return f.a.map(e,function(e,t){return r.a.createElement("div",{key:t,className:"uk-grid-match uk-grid-margin"},r.a.createElement(ie,{item:e}))})}},{key:"renderCategory",value:function(e){var t={background:e.category.color},a=ne()({"uk-child-width-1-2@m uk-child-width-1-3@l":this.props.viewStore.view===K,"uk-child-width-1-1":this.props.viewStore.view===W,"uk-grid uk-grid-match":!0});return r.a.createElement("section",{key:e.category.name,className:"uk-section",style:t},r.a.createElement("div",{className:"uk-container"},r.a.createElement("div",{className:"uk-panel uk-light uk-margin-medium"},r.a.createElement("h3",null,e.category.name)),r.a.createElement("div",{className:a},this.renderItems(e.items))))}},{key:"renderNoResults",value:function(){return r.a.createElement("div",{className:"no-results"},r.a.createElement("i",{className:"fa fa-meh-o","aria-hidden":"true"}),r.a.createElement("br",null),"There are no results!",r.a.createElement("br",null),r.a.createElement("small",null,"remember to set the environment variable: ",r.a.createElement("b",null,"REACT_APP_SPREADSHEET_ID")))}},{key:"renderCategories",value:function(){var e=this;return this.props.itemsStore.isSearching?r.a.createElement(ce,null):0===this.props.itemsStore.items.length?this.renderNoResults():f.a.map(this.props.itemsStore.items,function(t){return e.renderCategory(t)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"app--result ".concat(this.props.viewStore.view)},this.renderCategories())}}],[{key:"propTypes",get:function(){return{itemsStore:g.a.object.isRequired,viewStore:g.a.object.isRequired}}}]),t}(n.Component),le=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(oe,this.state)}}],[{key:"getStores",value:function(){return[V,X]}},{key:"calculateState",value:function(){return{itemsStore:V.getState(),viewStore:X.getState()}}}]),t}(n.Component),ue=G.Container.create(le),me=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={document_id:h.a.get("document_id")},a.onLogoutHandler=a.onLogoutHandler.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){D.load()}},{key:"onLogoutHandler",value:function(){h.a.remove("document_id"),D.load(),this.setState({document_id:void 0})}},{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(te,null),r.a.createElement(ue,null),this.state.document_id?r.a.createElement("div",{className:"uk-container uk-margin-top uk-text-right"},r.a.createElement("button",{className:"uk-button uk-button-link",onClick:this.onLogoutHandler},"logout")):"")}}]),t}(n.Component),de=a(34),he=new URL(window.location.href),pe=he.searchParams.get("id");pe&&(h.a.set("document_id",pe),window.history.replaceState({},document.title,he.pathname)),document.getElementById("version").innerHTML="v ".concat(de.version),s.render(n.createElement(me,null),document.getElementById("root"))}},[[36,2,1]]]);
//# sourceMappingURL=main.bbc7d221.chunk.js.map