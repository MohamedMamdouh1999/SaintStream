import{a as _}from"./chunk-AJFKTNKV.js";import{k as h,l as u,m as c,n as v,o as M,p as y}from"./chunk-NFQNMKCA.js";import{A as r,B as m,H as s,P as p,Q as f,R as l,fa as g,m as d}from"./chunk-VBDSVXC6.js";var D=(()=>{let a=class a{constructor(n){this.http=n,this.getGenres(),this.getMedias("trending","tv/day"),this.getMedias("tv","on_the_air"),this.getMedias("tv","airing_today"),this.getMedias("tv","popular"),this.getMedias("tv","top_rated"),this.getMedias("trending","person/day")}getGenres(){this.http.getGenres("tv").subscribe({next:n=>this.genres=n.genres})}getMedias(n,t){this.http.getMedias(n,t).subscribe({next:e=>{t==="tv/day"?this.trending=e.results.filter(i=>i.backdrop_path!==null):t==="on_the_air"?this.onTheAir=e.results.filter(i=>i.poster_path!==null):t==="airing_today"?this.airingToday=e.results.filter(i=>i.poster_path!==null):t==="popular"?this.popular=e.results.filter(i=>i.poster_path!==null):t==="top_rated"?this.topRated=e.results.filter(i=>i.poster_path!==null):t==="person/day"&&(this.actors=e.results.filter(i=>i.profile_path!==null&&i.gender===2),this.actresses=e.results.filter(i=>i.profile_path!==null&&i.gender===1))}})}};a.\u0275fac=function(t){return new(t||a)(m(_))},a.\u0275cmp=d({type:a,selectors:[["app-series"]],standalone:!0,features:[g],decls:9,vars:18,consts:[[1,"mb-5"],[3,"medias","genres"],[1,"container"],[3,"title","medias","genres"],[3,"type","title","medias"],[3,"title","people"]],template:function(t,e){t&1&&(p(0,"main",0),l(1,"app-media-intro",1),p(2,"div",2),l(3,"app-media-inset-info",3)(4,"app-media-index",4)(5,"app-media-inset-info",3)(6,"app-media-outset-info",3)(7,"app-media-people",5)(8,"app-media-people",5),f()()),t&2&&(r(1),s("medias",e.trending)("genres",e.genres),r(2),s("title","On The Air")("medias",e.onTheAir)("genres",e.genres),r(1),s("type","Series")("title","Airing Today")("medias",e.airingToday),r(1),s("title","Popular")("medias",e.popular)("genres",e.genres),r(1),s("title","Top Rated")("medias",e.topRated)("genres",e.genres),r(1),s("title","Actors")("people",e.actors),r(1),s("title","Actresses")("people",e.actresses))},dependencies:[y,h,u,c,v,M]});let o=a;return o})();export{D as SeriesComponent};