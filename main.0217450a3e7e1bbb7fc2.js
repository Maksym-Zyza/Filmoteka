(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2mXJ":function(e,t,n){var l=n("mp5j");e.exports=(l.default||l).template({1:function(e,t,n,l,a){var r,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"                    "+e.escapeExpression("function"==typeof(r=null!=(r=i(n,"name")||(null!=t?i(t,"name"):t))?r:e.hooks.helperMissing)?r.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:a,loc:{start:{line:29,column:20},end:{line:29,column:28}}}):r)+"&nbsp;&nbsp;\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,l,a){var r,i=e.lambda,o=e.escapeExpression,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\x3c!-- Шаблон модалки одного фильма --\x3e\r\n\r\n<div class="movie-container">\r\n    <div class="movie-image">\r\n        <img src="https://image.tmdb.org/t/p/w500'+o(i(null!=t?c(t,"poster_path"):t,t))+'" alt="'+o(i(null!=t?c(t,"title"):t,t))+'">\r\n    </div>\r\n    <div class="movie-description">\r\n        <h1 class="movie-description-title">'+o(i(null!=t?c(t,"title"):t,t))+'</h1>\r\n        <div class="movie-description-block">\r\n            <ul class="movie-description-list-left">\r\n                <li class="movie-description-list-left-item">Vote / Votes</li>\r\n                <li class="movie-description-list-left-item">Popularity</li>\r\n                <li class="movie-description-list-left-item">Original title</li>\r\n                <li class="movie-description-list-left-item">Genre</li>\r\n            </ul>\r\n            <ul class="movie-description-list-right">\r\n                <li class="movie-description-list-right-item">\r\n                    <span class="movie-rating filler">'+o(i(null!=t?c(t,"vote_average"):t,t))+'</span> /\r\n                    <span class="movie-vote-count filler">'+o(i(null!=t?c(t,"vote_count"):t,t))+'</span>\r\n                </li>\r\n                <li class="movie-description-list-right-item">\r\n                    '+o(i(null!=t?c(t,"popularity"):t,t))+'\r\n                </li>\r\n                <li class="movie-description-list-right-item">\r\n                    <span class="original-title">'+o(i(null!=t?c(t,"original_title"):t,t))+'</span>\r\n                </li>\r\n                <li class="movie-description-list-right-item">\r\n'+(null!=(r=c(n,"each").call(null!=t?t:e.nullContext||{},null!=t?c(t,"genres"):t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:28,column:20},end:{line:30,column:29}}}))?r:"")+'                </li>\r\n            </ul>\r\n        </div>\r\n        <div class="movie-about">\r\n            <p class="movie-about-title">ABOUT</p>\r\n            <p class="movie-about-text">'+o(i(null!=t?c(t,"overview"):t,t))+'</p>\r\n        </div>\r\n        <button class="add-to-watched" type="button" data-action-watched="watched" data-movie-id="'+o(i(null!=t?c(t,"id"):t,t))+'">ADD TO\r\n            WATCHED</button>\r\n        <button class="add-to-queue" type="button" data-action-queue="queue" data-movie-id="'+o(i(null!=t?c(t,"id"):t,t))+'">ADD TO\r\n            QUEUE</button>\r\n    </div>\r\n</div>'},useData:!0})},"Dv/5":function(e,t,n){},GwTD:function(e,t,n){var l=n("mp5j");e.exports=(l.default||l).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,l,a){return'<div class="btn-wrapper">\r\n  <button id="watched-film-btn" data-watched-film-btn="watch-btn" class="btn btn-active-style" disabled>Watched</button>\r\n  <button id="watched-queue-btn" data-queue-film-btn="queue-btn" class="btn btn-nonactive-style">queue</button>\r\n</div>'},useData:!0})},QfWi:function(e,t,n){"use strict";n.r(t);n("Dv/5"),n("lYjL"),n("IvQZ"),n("8cZI"),n("lmye"),n("WB5j"),n("Xlt+"),n("D/wG"),n("JBxO"),n("FdtR"),n("Muwe"),n("4NM0"),n("aZFp");var l={gallery:document.querySelector("#gallery"),form:document.querySelector(".search-form"),modalDiv:document.querySelector(".js-lightbox"),overlayDiv:document.querySelector(".lightbox__overlay"),modalDivContent:document.querySelector(".lightbox__content"),openImg:document.querySelector(".lightbox__image"),libraryButton:document.querySelector(".library-ref"),container:document.getElementById(".container"),lightbox:document.querySelector(".lightbox"),header:document.querySelector("#page-header"),galleryList:document.querySelector(".gallery"),watchedBtn:document.querySelector("#watched-film-btn"),homeBtn:document.querySelector(".home-ref")},a=n("v+qO"),r=n.n(a);var i=function(e){var t="";"404"!==e.status&&(t=r()(e)),l.gallery.insertAdjacentHTML("beforeend",t)},o="api_key=50b81e1c6c3b9e5f74d2015b742ff0b0";var c=function(){return fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=50b81e1c6c3b9e5f74d2015b742ff0b0").then((function(e){return e.json()})).then((function(e){var t=e.results;fetch("https://api.themoviedb.org/3/genre/movie/list?"+o).then((function(e){return e.json()})).then((function(e){var n=e.genres;!function(e,t){e.map((function(e){var n=e.id,l=e.poster_path,a=e.title,r=e.release_date,o=e.genre_ids,c=t.filter((function(e){return o.includes(e.id)})).map((function(e){return e.name}));c.length>3&&c.splice(3,0,"Other");var s=c.slice(0,4).join(", "),u=r.split("-")[0];i([{id:n,poster_path:l,title:a,movieGenres:s,releaseDate:u}])}))}(t,n)}))}))};var s=function(e){return fetch("https://api.themoviedb.org/3/movie/"+e+"?api_key=50b81e1c6c3b9e5f74d2015b742ff0b0").then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},u=n("2mXJ"),d=n.n(u);var m=function(e){var t="";"404"!==e.status&&(e.popularity=Math.round(e.popularity),t=d()(e)),l.modalDivContent.insertAdjacentHTML("beforeend",t)};function p(){window.removeEventListener("keydown",v),l.modalDiv.classList.remove("is-open"),l.openImg.src=""}function v(e){"Escape"===e.code&&p()}l.gallery.addEventListener("click",(function(e){if("IMG"!==e.target.nodeName)return;if(e.target.dataset.emptyPage)return;var t=e.target;t.dataset.src;!function(e){window.addEventListener("keydown",v),l.modalDiv.classList.add("is-open"),l.modalDivContent.innerHTML="",s(e).then((function(e){return m(e)}))}(t.dataset.movieId)})),l.overlayDiv.addEventListener("click",p);var h=n("ZEAl"),f=document.getElementById("galery");new h.a({lines:15,length:0,width:10,radius:31,scale:1.25,corners:1,speed:1.4,rotate:0,animation:"spinner-line-fade-default",direction:1,color:"#FF6B08",fadeColor:"transparent",top:"51%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"}).spin(f).stop();n("/YXa"),n("WoWj"),n("U00V"),n("wcNg");var y=n("SJqc"),g=n.n(y);function b(e,t,n,l,a,r,i){try{var o=e[r](i),c=o.value}catch(e){return void n(e)}o.done?t(c):Promise.resolve(c).then(l,a)}function w(e){return function(){var t=this,n=arguments;return new Promise((function(l,a){var r=e.apply(t,n);function i(e){b(r,l,a,i,o,"next",e)}function o(e){b(r,l,a,i,o,"throw",e)}i(void 0)}))}}function L(e){var t="";"404"!==e.status&&(t=g()(e)),l.gallery.insertAdjacentHTML("beforeend",t)}function k(){return(k=w(regeneratorRuntime.mark((function e(t){var n,a,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem(t)){e.next=10;break}return l.galleryList.classList.remove("empty-page-style"),l.galleryList.classList.add("gallery"),n=localStorage.getItem(t),a=n.split(","),e.next=7,Promise.all(a.map(function(){var e=w(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/"+t+"?api_key=50b81e1c6c3b9e5f74d2015b742ff0b0&");case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:r=e.sent,console.log(r),L(r);case 10:l.galleryList.hasChildNodes()||(l.galleryList.classList.add("empty-page-style"),l.galleryList.classList.remove("gallery"),l.gallery.innerHTML='<li><h2>EMPTY<h2><p>Nothing has been added yet :(</p><img class="image" data-empty-page="empty-page" src="https://i0.wp.com/www.ecommerce-nation.com/wp-content/uploads/2017/08/How-to-Give-Your-E-Commerce-No-Results-Page-the-Power-to-Sell.png?fit=1000%2C600&ssl=1" alt="empty page pic"></li>');case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=function(e){return k.apply(this,arguments)};function q(e){["btn-nonactive-style","btn-active-style"].map((function(t){return e.classList.toggle(t)}))}l.homeBtn.addEventListener("click",(function(){l.libraryButton.classList.contains("activ-link-style")&&(l.homeBtn.classList.add("activ-link-style"),l.libraryButton.classList.remove("activ-link-style"))}));var E=function(){l.libraryButton.addEventListener("click",(function(){l.gallery.innerHTML="",x("watched"),l.homeBtn.classList.contains("activ-link-style")&&(l.homeBtn.classList.remove("activ-link-style"),l.libraryButton.classList.add("activ-link-style")),l.libraryButton.addEventListener("click",(function(){var e=document.querySelector("#watched-film-btn"),t=document.querySelector("#watched-queue-btn");t.toggleAttribute("disabled"),e.toggleAttribute("disabled"),t.classList.contains("btn-active-style")&&(q(t),q(e))}))})),l.header.addEventListener("click",(function(){var e=document.querySelector("#watched-film-btn"),t=document.querySelector("#watched-queue-btn");event.target.dataset.queueFilmBtn&&(l.gallery.innerHTML="",x("queue"),q(t),q(e),t.setAttribute("disabled",!0),e.removeAttribute("disabled")),event.target.dataset.watchedFilmBtn&&(l.gallery.innerHTML="",x("watched"),q(e),q(t),t.removeAttribute("disabled"),e.setAttribute("disabled",!0))}))},S=(n("bzha"),n("QJ3N"));n("zrP5");var D=function(e){S.notice({text:"The movie has been added to the "+e+" list",icon:!0,styling:"custom",delay:700,overlayClosesPinned:!0})};var _=function(e,t,n){var l=[],a=localStorage.getItem(""+t);a&&(l=a.split(",")),l.includes(e)||(l.push(e),D(""+n)),localStorage.setItem(""+t,l)};var P=function(){l.lightbox.addEventListener("click",(function(e){if(event.target.dataset.actionWatched){var t=event.target.dataset.movieId;_(t,"watched",'"WATCHED"')}if(event.target.dataset.actionQueue){var n=event.target.dataset.movieId;_(n,"queue",'"QUEUE"')}}))},j=(n("y89P"),n("GwTD")),B=n.n(j);var O,M=function(){x("watched"),l.homeBtn.classList.contains("activ-link-style")&&(l.homeBtn.classList.remove("activ-link-style"),l.libraryButton.classList.add("activ-link-style"))},T=document.querySelector("#page-header"),C=document.querySelector(".library-ref"),A=document.querySelector(".search-form"),I=document.querySelector(".ref-wrapper"),H=document.querySelector(".remove");O=B()();var G=function(){A.remove(),I.insertAdjacentHTML("afterend",O),T.classList.replace("page-header","page-header-library")};C.addEventListener("click",G),H.addEventListener("click",(function(){H.removeEventListener("click",G)}));var W=function(){"#library"===location.hash&&(G(),H.removeEventListener("click",G),M())};(function(){location.hash||c(),W()})(),E(),P()},SJqc:function(e,t,n){var l=n("mp5j");e.exports=(l.default||l).template({1:function(e,t,n,l,a){var r,i,o=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,s=e.escapeExpression,u=e.lambda,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="movie-card">\r\n    <img class="movie-poster" src="https://image.tmdb.org/t/p/w500'+s("function"==typeof(i=null!=(i=d(n,"poster_path")||(null!=t?d(t,"poster_path"):t))?i:c)?i.call(o,{name:"poster_path",hash:{},data:a,loc:{start:{line:3,column:66},end:{line:3,column:81}}}):i)+'" alt="'+s("function"==typeof(i=null!=(i=d(n,"title")||(null!=t?d(t,"title"):t))?i:c)?i.call(o,{name:"title",hash:{},data:a,loc:{start:{line:3,column:88},end:{line:3,column:97}}}):i)+'"\r\n        data-movie-id="'+s("function"==typeof(i=null!=(i=d(n,"id")||(null!=t?d(t,"id"):t))?i:c)?i.call(o,{name:"id",hash:{},data:a,loc:{start:{line:4,column:23},end:{line:4,column:29}}}):i)+'">\r\n    <h1 class="movie-title">'+s(u(null!=t?d(t,"title"):t,t))+'</h1>\r\n    <p class="movie-info"> '+s(u(null!=(r=null!=t?d(t,"id"):t)?d(r,"name"):r,t))+'</p>\r\n    <div class="info-wrapper">\r\n        <p class="movie-info">\r\n'+(null!=(r=d(n,"each").call(o,null!=t?d(t,"genres"):t,{name:"each",hash:{},fn:e.program(2,a,0),inverse:e.noop,data:a,loc:{start:{line:9,column:12},end:{line:11,column:21}}}))?r:"")+" | "+s(u(null!=t?d(t,"release_date"):t,t))+'\r\n        </p>\r\n        <p class="vote">'+s(u(null!=t?d(t,"vote_average"):t,t))+"</p>\r\n    </div>\r\n</li>\r\n"},2:function(e,t,n,l,a){var r,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"            "+e.escapeExpression("function"==typeof(r=null!=(r=i(n,"name")||(null!=t?i(t,"name"):t))?r:e.hooks.helperMissing)?r.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:a,loc:{start:{line:10,column:12},end:{line:10,column:20}}}):r)+"&nbsp;&nbsp;\r\n            "},compiler:[8,">= 4.3.0"],main:function(e,t,n,l,a){var r;return null!=(r=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:16,column:9}}}))?r:""},useData:!0})},"v+qO":function(e,t,n){var l=n("mp5j");e.exports=(l.default||l).template({1:function(e,t,n,l,a){var r,i=null!=t?t:e.nullContext||{},o=e.hooks.helperMissing,c="function",s=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="movie-card">\r\n    <img class="movie-poster" src="https://image.tmdb.org/t/p/w500'+s(typeof(r=null!=(r=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?r:o)===c?r.call(i,{name:"poster_path",hash:{},data:a,loc:{start:{line:5,column:66},end:{line:5,column:81}}}):r)+'" alt="'+s(typeof(r=null!=(r=u(n,"title")||(null!=t?u(t,"title"):t))?r:o)===c?r.call(i,{name:"title",hash:{},data:a,loc:{start:{line:5,column:88},end:{line:5,column:97}}}):r)+'"\r\n        data-movie-id="'+s(typeof(r=null!=(r=u(n,"id")||(null!=t?u(t,"id"):t))?r:o)===c?r.call(i,{name:"id",hash:{},data:a,loc:{start:{line:6,column:23},end:{line:6,column:29}}}):r)+'">\r\n    <h1 class="movie-title">'+s(typeof(r=null!=(r=u(n,"title")||(null!=t?u(t,"title"):t))?r:o)===c?r.call(i,{name:"title",hash:{},data:a,loc:{start:{line:7,column:28},end:{line:7,column:37}}}):r)+'</h1>\r\n    <p class="movie-info"> '+s(typeof(r=null!=(r=u(n,"movieGenres")||(null!=t?u(t,"movieGenres"):t))?r:o)===c?r.call(i,{name:"movieGenres",hash:{},data:a,loc:{start:{line:8,column:27},end:{line:8,column:42}}}):r)+" | "+s(typeof(r=null!=(r=u(n,"releaseDate")||(null!=t?u(t,"releaseDate"):t))?r:o)===c?r.call(i,{name:"releaseDate",hash:{},data:a,loc:{start:{line:8,column:45},end:{line:8,column:60}}}):r)+"</p>\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,l,a){var r;return"\x3c!-- Шаблон карточки фильмов --\x3e\r\n\r\n"+(null!=(r=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:3,column:0},end:{line:10,column:9}}}))?r:"")},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.0217450a3e7e1bbb7fc2.js.map