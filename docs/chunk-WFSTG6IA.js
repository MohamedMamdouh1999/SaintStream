import{a as h,b as v,c as f}from"./chunk-IGLK47BH.js";import"./chunk-SPA7ACEC.js";import{$a as u,Fa as a,Jb as c,Ka as m,La as d,Ma as l,U as n,va as o,wa as p}from"./chunk-WDREGHC7.js";var S=(()=>{let s=class s{constructor(t){this.http=t,this.getMedia("movie","upcoming"),this.getMedia("movie","popular"),this.getMedia("movie","top_rated"),this.getMedia("tv","top_rated")}getMedia(t,e){e==="upcoming"?this.http.getMedia(t,e).subscribe({next:i=>this.releaseMovies=i.results}):e==="popular"?this.http.getMedia(t,e).subscribe({next:i=>this.popularMovies=i.results}):t==="movie"&&e==="top_rated"?this.http.getMedia(t,e).subscribe({next:i=>this.movies=i.results}):t==="tv"&&e==="top_rated"&&this.http.getMedia(t,e).subscribe({next:i=>this.series=i.results})}};s.\u0275fac=function(e){return new(e||s)(p(f))},s.\u0275cmp=n({type:s,selectors:[["app-home"]],standalone:!0,features:[u],decls:6,vars:7,consts:[[1,"mt-3","mb-5"],[1,"container"],[3,"title","medias"],[3,"medias"]],template:function(e,i){e&1&&(m(0,"main",0)(1,"div",1),l(2,"app-media-inset-info",2)(3,"app-popular-media",3)(4,"app-media-inset-info",2)(5,"app-media-inset-info",2),d()()),e&2&&(o(2),a("title","home.just-release")("medias",i.releaseMovies),o(1),a("medias",i.popularMovies),o(1),a("title","home.movies")("medias",i.movies),o(1),a("title","home.series")("medias",i.series))},dependencies:[c,h,v]});let r=s;return r})();export{S as HomeComponent};
