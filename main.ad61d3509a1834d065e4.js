(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2mXJ":function(e,t,n){var r=n("mp5j");e.exports=(r.default||r).template({1:function(e,t,n,r,a){var o,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"                    "+e.escapeExpression("function"==typeof(o=null!=(o=i(n,"name")||(null!=t?i(t,"name"):t))?o:e.hooks.helperMissing)?o.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:a,loc:{start:{line:29,column:20},end:{line:29,column:28}}}):o)+"&nbsp;&nbsp;\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,a){var o,i=e.lambda,l=e.escapeExpression,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\x3c!-- Шаблон модалки одного фильма --\x3e\r\n\r\n<div class="movie-container">\r\n    <div class="movie-image">\r\n        <img src="https://image.tmdb.org/t/p/w500'+l(i(null!=t?c(t,"poster_path"):t,t))+'" alt="'+l(i(null!=t?c(t,"title"):t,t))+'">\r\n    </div>\r\n    <div class="movie-description">\r\n        <h1 class="movie-description-title">'+l(i(null!=t?c(t,"title"):t,t))+'</h1>\r\n        <div class="movie-description-block">\r\n            <ul class="movie-description-list-left">\r\n                <li class="movie-description-list-left-item">Vote / Votes</li>\r\n                <li class="movie-description-list-left-item">Popularity</li>\r\n                <li class="movie-description-list-left-item">Original title</li>\r\n                <li class="movie-description-list-left-item">Genre</li>\r\n            </ul>\r\n            <ul class="movie-description-list-right">\r\n                <li class="movie-description-list-right-item">\r\n                    <span class="movie-rating">'+l(i(null!=t?c(t,"vote_average"):t,t))+'</span> /\r\n                    <span class="movie-vote-count">'+l(i(null!=t?c(t,"vote_count"):t,t))+'</span>\r\n                </li>\r\n                <li class="movie-description-list-right-item">\r\n                    '+l(i(null!=t?c(t,"popularity"):t,t))+'\r\n                </li>\r\n                <li class="movie-description-list-right-item">\r\n                    <span class="original-title">'+l(i(null!=t?c(t,"original_title"):t,t))+'</span>\r\n                </li>\r\n                <li class="movie-description-list-right-item">\r\n'+(null!=(o=c(n,"each").call(null!=t?t:e.nullContext||{},null!=t?c(t,"genres"):t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:28,column:20},end:{line:30,column:29}}}))?o:"")+'                </li>\r\n            </ul>\r\n        </div>\r\n        <div class="movie-about">\r\n            <p class="movie-about-title">ABOUT</p>\r\n            <p class="movie-about-text">'+l(i(null!=t?c(t,"overview"):t,t))+'</p>\r\n        </div>\r\n        <button class="add-to-watched" type="button" data-action-watched="watched" data-movie-id="'+l(i(null!=t?c(t,"id"):t,t))+'">ADD TO\r\n            WATCHED</button>\r\n        <button class="add-to-queue" type="button" data-action-queue="queue" data-movie-id="'+l(i(null!=t?c(t,"id"):t,t))+'">ADD TO\r\n            QUEUE</button>\r\n    </div>\r\n</div>'},useData:!0})},"Dv/5":function(e,t,n){},GwTD:function(e,t,n){var r=n("mp5j");e.exports=(r.default||r).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,r,a){return'<div class="btn-wrapper">\r\n  <button id="watched-film-btn" data-watched-film-btn="watch-btn" class="btn">Watched</button>\r\n  <button id="watched-queue-btn" data-queue-film-btn="queue-btn" class="btn">queue</button>\r\n</div>'},useData:!0})},QfWi:function(e,t,n){"use strict";n.r(t);n("Dv/5"),n("JBxO"),n("FdtR");var r=function(){return fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=50b81e1c6c3b9e5f74d2015b742ff0b0").then((function(e){return e.json()})).then((function(e){return e.results})).catch((function(e){return console.log(e)}))},a={gallery:document.querySelector("#gallery"),form:document.querySelector(".search-form"),modalDiv:document.querySelector(".js-lightbox"),overlayDiv:document.querySelector(".lightbox__overlay"),modalDivContent:document.querySelector(".lightbox__content"),openImg:document.querySelector(".lightbox__image"),libraryButton:document.querySelector(".library-ref"),container:document.getElementById(".container"),lightbox:document.querySelector(".lightbox"),header:document.querySelector("#page-header")},o=n("v+qO"),i=n.n(o);var l=function(e){var t="";"404"!==e.status&&(t=i()(e)),a.gallery.insertAdjacentHTML("beforeend",t)};var c=function(e){return fetch("https://api.themoviedb.org/3/movie/"+e+"?api_key=50b81e1c6c3b9e5f74d2015b742ff0b0").then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},s=n("2mXJ"),u=n.n(s);var d=function(e){var t="";"404"!==e.status&&(e.popularity=Math.round(e.popularity),t=u()(e)),a.modalDivContent.insertAdjacentHTML("beforeend",t)};function p(){window.removeEventListener("keydown",m),a.modalDiv.classList.remove("is-open"),a.openImg.src=""}function m(e){"Escape"===e.code&&p()}a.gallery.addEventListener("click",(function(e){if("IMG"!==e.target.nodeName)return;var t=e.target;t.dataset.src;!function(e){window.addEventListener("keydown",m),a.modalDiv.classList.add("is-open"),a.modalDivContent.innerHTML="",c(e).then((function(e){return d(e)}))}(t.dataset.movieId)})),a.overlayDiv.addEventListener("click",p);n("/YXa"),n("lmye"),n("Muwe"),n("WoWj"),n("aZFp"),n("U00V"),n("wcNg");function v(e,t,n,r,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){v(o,r,a,i,l,"next",e)}function l(e){v(o,r,a,i,l,"throw",e)}i(void 0)}))}}function f(){return(f=h(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem(t),r=n.split(","),e.next=4,Promise.all(r.map(function(){var e=h(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/"+t+"?api_key=50b81e1c6c3b9e5f74d2015b742ff0b0&");case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:a=e.sent,l(a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=function(e){return f.apply(this,arguments)};var b=function(){a.libraryButton.addEventListener("click",(function(){a.gallery.innerHTML="",g("watched")})),a.header.addEventListener("click",(function(){console.dir("target",EventTarget),event.target.dataset.queueFilmBtn&&(console.log("target",EventTarget),a.gallery.innerHTML="",g("queue")),event.target.dataset.watchedFilmBtn&&(a.gallery.innerHTML="",g("watched"))}))},y=(n("IvQZ"),n("4NM0"),n("bzha"),n("QJ3N"));n("zrP5");var w=function(e){y.notice({text:"The movie has been added to the list "+e,icon:!0,closer:!1,styling:"custom",delay:1e3,overlayClosesPinned:!0})};var x=function(e,t,n){var r=[],a=localStorage.getItem(""+t);a&&(r=a.split(",")),r.includes(e)||(r.push(e),w(""+n)),localStorage.setItem(""+t,r)};var k=function(){a.lightbox.addEventListener("click",(function(e){if(event.target.dataset.actionWatched){var t=event.target.dataset.movieId;x(t,"watched","WATCHED")}if(event.target.dataset.actionQueue){var n=event.target.dataset.movieId;x(n,"queue","QUEUE")}}))};r().then((function(e){return l(e)})),b(),k();var q=n("ZEAl"),E=document.getElementById("galery");new q.a({lines:15,length:0,width:10,radius:31,scale:1.25,corners:1,speed:1.4,rotate:0,animation:"spinner-line-fade-default",direction:1,color:"#FF6B08",fadeColor:"transparent",top:"51%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"}).spin(E).stop();n("y89P");var D,L=n("GwTD"),_=n.n(L),S=document.querySelector("#page-header"),T=document.querySelector(".library-ref"),j=document.querySelector(".search-form"),O=document.querySelector(".ref-wrapper"),P=document.querySelector(".remove");D=_()();var I=function(){j.remove(),O.insertAdjacentHTML("afterend",D),S.classList.replace("page-header","page-header-library")};T.addEventListener("click",I),P.addEventListener("click",(function(){P.removeEventListener("click",I)}))},"v+qO":function(e,t,n){var r=n("mp5j");e.exports=(r.default||r).template({1:function(e,t,n,r,a){var o,i=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,c="function",s=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="movie-card">\r\n    <img class="movie-poster" src="https://image.tmdb.org/t/p/w500'+s(typeof(o=null!=(o=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?o:l)===c?o.call(i,{name:"poster_path",hash:{},data:a,loc:{start:{line:5,column:66},end:{line:5,column:81}}}):o)+'" alt="'+s(typeof(o=null!=(o=u(n,"title")||(null!=t?u(t,"title"):t))?o:l)===c?o.call(i,{name:"title",hash:{},data:a,loc:{start:{line:5,column:88},end:{line:5,column:97}}}):o)+'"\r\n        data-src="https://image.tmdb.org/t/p/w500'+s(typeof(o=null!=(o=u(n,"backdrop_path")||(null!=t?u(t,"backdrop_path"):t))?o:l)===c?o.call(i,{name:"backdrop_path",hash:{},data:a,loc:{start:{line:6,column:49},end:{line:6,column:66}}}):o)+'" data-movie-id="'+s(typeof(o=null!=(o=u(n,"id")||(null!=t?u(t,"id"):t))?o:l)===c?o.call(i,{name:"id",hash:{},data:a,loc:{start:{line:6,column:83},end:{line:6,column:89}}}):o)+'">\r\n    <h1 class="movie-title">'+s(typeof(o=null!=(o=u(n,"title")||(null!=t?u(t,"title"):t))?o:l)===c?o.call(i,{name:"title",hash:{},data:a,loc:{start:{line:7,column:28},end:{line:7,column:37}}}):o)+"</h1>\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,a){var o;return"\x3c!-- Шаблон карточки фильмов --\x3e\r\n\r\n"+(null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:3,column:0},end:{line:9,column:9}}}))?o:"")},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.ad61d3509a1834d065e4.js.map