(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(t,e,g){"use strict";g.r(e);var M=g(0),A=g(141),I=g(196),n=g(167),a=g.n(n),T=(g(71),g(51),g(145),g(169)),i=g.n(T),o=g(146),C=g.n(o),r=g(170),c=g(171),N=g.n(c),s="fields=documents%2Ffields%2CnextPageToken&orderBy=id&pageSize=5",l={blogs:"https://firestore.googleapis.com/v1beta1/projects/shindomeeee-d5a0d/databases/(default)/documents/blogs/?"+s,events:"https://firestore.googleapis.com/v1beta1/projects/shindomeeee-d5a0d/databases/(default)/documents/events/?"+s},D=C()(),y=Object(r.asyncFactory)(D)("THUNKS_FETCH_BLOGS",function(){var t=i()(a.a.mark(function t(e){var g,M,A;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.next=6;break;case 6:return t.prev=6,g=e?l.blogs+"&pageToken="+e:l.blogs,t.next=10,N.a.get(g);case 10:return M=t.sent,A=M.data,t.abrupt("return",{blogs:A.documents.map(function(t){var e=new Date(t.fields.created_at.timestampValue),g=e.getFullYear(),M=e.getMonth()+1,A=e.getDate();return{id:+t.fields.id.integerValue,title:t.fields.title.stringValue,url:t.fields.url.stringValue,tags:t.fields.tags.arrayValue.values.map(function(t){return t.stringValue}),created_at:g+"年"+M+"月"+A+"日"}}),nextPageToken:A.nextPageToken?A.nextPageToken:null});case 15:throw t.prev=15,t.t0=t.catch(6),console.error(t.t0),new Error("don't blogs fetch");case 19:case"end":return t.stop()}},t,this,[[6,15]])}));return function(e){return t.apply(this,arguments)}}()),L=g(191),d=g(7),E=g.n(d),x=function(t){function e(e){var g;return(g=t.call(this,e)||this).state={loading:!0},g}E()(e,t);var g=e.prototype;return g.componentDidMount=function(){var t,e,g,M,A=this;t=document,e="facebook-jssdk",M=t.getElementsByTagName("script")[0],t.getElementById(e)||((g=t.createElement("script")).id=e,g.src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v3.1&appId=523808208077162&autoLogAppEvents=1",M.parentNode.insertBefore(g,M),A.setState({loading:!1}))},g.render=function(){return M.createElement("div",{className:"fb-share-button","data-href":location.href,"data-layout":"button_count","data-size":"small","data-mobile-iframe":"true"},M.createElement("a",{target:"_blank",href:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&src=sdkpreparse",className:"fb-xfbml-parse-ignore"},this.state.loading?"":"シェア"))},e}(M.Component),z=function(t){function e(e){var g;return(g=t.call(this,e)||this).state={loading:!0},g}E()(e,t);var g=e.prototype;return g.componentDidMount=function(){var t,e,g,M=this;t=document,g=t.getElementsByTagName("script")[0],(e=t.createElement("script")).src="https://platform.twitter.com/widgets.js",g.parentNode.insertBefore(e,g),M.setState({loading:!1})},g.render=function(){return this.state.loading?null:M.createElement("a",{href:"https://twitter.com/share?ref_src=twsrc%5Etfw",className:"twitter-share-button","data-show-count":"false"},"Tweet")},e}(M.Component),u=g(192),m=function(t){var e=t.blogs.blogs.data.blogs.map(function(t){return M.createElement("div",{key:t.id},M.createElement("div",null,t.created_at),M.createElement("div",null,M.createElement("a",{href:t.url,target:"_blank",rel:"noopener"},t.title)))});return M.createElement("section",{className:u.blogsSection},M.createElement("h2",null,"Blogs"),M.createElement("div",null,e),M.createElement("button",{className:t.blogs.blogs.data.nextPageToken?u.moreReadButton:u.moreReadButtonHidden,onClick:function(){return t.actions.blogs.fetchBlogs(t.blogs.blogs.data.nextPageToken)}},"さらに読む"))},j=g(193),w=g.n(j),O=Object(I.a)(function(t){return t},function(t){return{actions:{blogs:{fetchBlogs:function(e){return t(y.action(e))}}}}})(function(t){return M.createElement("div",{className:L.wrapper},M.createElement("div",{className:L.siteContent},M.createElement("header",{className:L.header},M.createElement("object",{className:L.headerSvg,type:"image/svg+xml",data:w.a})),M.createElement("main",{className:L.main},M.createElement(m,t)),M.createElement("footer",{className:L.footer},M.createElement("nav",{className:L.nav},M.createElement(x,null),M.createElement("span",{className:L.margin}),M.createElement(z,null)))))}),S=g(144),p=g(197),b=g(194),f=(g(31),g(195)),Q=Object(f.reducerWithInitialState)({blogs:{data:{blogs:[],nextPageToken:null},loading:!1,error:null}}).case(y.async.started,function(t){return Object.assign({},t,{blogs:Object.assign({},t.blogs,{loading:!0,error:null})})}).case(y.async.failed,function(t,e){return Object.assign({},t,{blogs:Object.assign({},t.blogs,{loading:!1,error:e.error})})}).case(y.async.done,function(t,e){return Object.assign({},t,{blogs:Object.assign({},t.blogs,{data:Object.assign({},t.blogs.data,e.result,{blogs:[].concat(t.blogs.data.blogs,e.result.blogs)}),loading:!1,error:null})})}),h=Object(S.d)(Object(S.a)(b.a)),k=(Object(p.a)(),Object(S.e)(Object(S.c)({blogs:Q}),Object(S.d)(Object(S.a)(b.a),h)));k.dispatch(y.action());e.default=function(){return M.createElement(M.Fragment,null,M.createElement(A.a,{title:"shin・DO・meeee",keywords:["gatsby","application","react"]}),M.createElement(O,null))}},141:function(t,e,g){"use strict";var M=g(0),A=g(142);g.d(e,"a",function(){return I});var I=function(t){return M.createElement(A.Helmet,{htmlAttributes:{lang:t.lang},title:t.title,titleTemplate:t.title,meta:[{name:"description",content:t.description},{property:"og:title",content:t.title},{property:"og:description",content:t.description},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.author},{name:"twitter:title",content:t.title},{name:"twitter:description",content:t.description}].concat(t.keywords.length>0?{name:"keywords",content:t.keywords.join(", ")}:[]).concat(t.meta.length>0?t.meta:[])})};I.defaultProps={lang:"ja",description:"テックな集まり",title:"shin・DO・meeeee",author:"@UltraBirdTech",keywords:[],meta:[]}},191:function(t,e,g){t.exports={wrapper:"_3gmjK1YtEMpzme1KGX0nUm",siteContent:"_3CnmamcO475A60-LgTN14b",header:"_34ixCLR5diRxaOCuCJAwpd",headerSvg:"Dszgl2GHAJM6t6ZgqyRbx",main:"YM-rWXJFMF0A4hSrSzKdh",footer:"_2FDJXDIwu9Lvp4SqxhO658",footerAnimation:"_8QBbqcGVmypx2RNVRYxkQ",nav:"AC6PL3zAelMpzIu29-_ig",margin:"_3o5flrntKKP4Jx75kjiES4"}},192:function(t,e,g){t.exports={blogsSection:"_1nGsdKWrh7PqD2yuR41E81",moreReadButton:"_1WvR2Woj3Lv9dSUzg_43w_",moreReadButtonHidden:"_3clpcWoHuRzOG4i6I1C_EE"}},193:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMzAwLjAwMDAwMHB0IiBoZWlnaHQ9IjUyLjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgMzAwLjAwMDAwMCA1Mi4wMDAwMDAiCiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KPG1ldGFkYXRhPgpDcmVhdGVkIGJ5IHBvdHJhY2UgMS4xMCwgd3JpdHRlbiBieSBQZXRlciBTZWxpbmdlciAyMDAxLTIwMTEKPC9tZXRhZGF0YT4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsNTIuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMjY5IDUwMyBjLTEwIC0xMSAtMTQgLTQzIC0xMyAtMTA3IDQgLTMzOCA1IC0zNDQgMjEgLTM1MCAyNiAtMTAgMzUKOCAzNSA3MCAxIDYxIDE3IDExNSA0NSAxNDYgMjUgMjggMzMgMTIgMzMgLTYzIDAgLTc1IDE3IC0xMjEgNDkgLTEzOSA0MyAtMjMKNTcgNCAyMSA0MCAtMTQgMTQgLTIwIDM0IC0yMCA2MyAtMiAxNDAgLTQ3IDE4OCAtMTE3IDEyNCBsLTIzIC0yMCAwIDEyMSBjMAo2NiAtNCAxMjMgLTkgMTI2IC01IDMgLTE1IC0yIC0yMiAtMTF6Ii8+CjxwYXRoIGQ9Ik01NTIgNDU4IGMtMTMgLTEzIC0xNiAtNDEgLTUgLTUxIDEwIC0xMCAzMyAxMyAzMyAzNCAwIDIzIC0xNCAzMQotMjggMTd6Ii8+CjxwYXRoIGQ9Ik0xNTc1IDQ0MSBjLTM5IC0yMyAtODQgLTc2IC0xMDIgLTExOCAtMzEgLTc2IC03IC0xNzkgNTEgLTIxNCA0MQotMjUgNjIgLTI0IDEyMSA5IDYyIDM0IDg2IDc1IDkyIDE1NiA3IDc3IC04IDEyNyAtNDggMTYxIC0zNiAzMCAtNzMgMzIgLTExNAo2eiBtOTQgLTQ3IGMyNyAtMzQgMzAgLTE0OCA1IC0xOTUgLTE3IC0zMyAtOTEgLTczIC0xMTcgLTYzIC01MiAyMCAtNjggMTMzCi0yOCAxOTggMjggNDQgNzcgODYgMTAxIDg2IDEwIDAgMjggLTEyIDM5IC0yNnoiLz4KPHBhdGggZD0iTTExOTggNDMzIGMtMjIgLTYgLTI2IC0yMCAtMzggLTEzOSAtMTIgLTEyNyAtMTIgLTI0NSAwIC0yNjQgOCAtMTMKMTMgLTEzIDMwIC0yIDExIDcgMjQgMTAgMjkgOCAxMyAtOCA4MiAxNCAxMTIgMzYgNjIgNDYgODggMTgwIDUwIDI2MyAtMjcgNjAKLTgzIDEwNSAtMTI5IDEwNCAtMjAgLTEgLTQ1IC0zIC01NCAtNnogbTEwMiAtMzMgYzE1IC0xMSAzNyAtNDMgNTAgLTcyIDUwCi0xMTYgLTEyIC0yNDggLTExNyAtMjQ4IC0zOCAwIC0zNSAtMTUgLTMzIDE2MCAxIDE2MyA1IDE4MCA0MiAxODAgMTYgMCA0MiAtOQo1OCAtMjB6Ii8+CjxwYXRoIGQ9Ik0yNDcwIDM0NCBjLTE4IC00NyAtMjIgLTEwMSAtMTAgLTEyNCAxMyAtMjUgOTQgLTY0IDExNiAtNTYgMjggMTEKMTQgMzUgLTI1IDQ2IC0yMSA1IC00NCAxNiAtNTAgMjQgLTkgMTEgLTUgMTUgMTkgMjAgMjkgNSA1MCAzNSA1MCA3MSAwIDIzCi0zMCA0NSAtNjEgNDUgLTIyIDAgLTMyIC02IC0zOSAtMjZ6IG03MCAtMjIgYzAgLTIxIC0yNyAtNjIgLTQxIC02MiAtMTAgMAotMTIgNDAgLTMgNjQgOSAyMiA0NCAyMSA0NCAtMnoiLz4KPHBhdGggZD0iTTI2ODYgMzUxIGMtMjggLTMxIC00NSAtOTAgLTM1IC0xMjUgMTAgLTM1IDY0IC04NiA5MSAtODYgMjggMCAyMQoyOCAtMTIgNDUgLTE2IDggLTM0IDI0IC00MCAzNCAtOCAxNiAtNSAyMCAxOCAyNiA1MiAxMiA3NCAzNCA2NyA2MyAtMTQgNTgKLTU3IDc4IC04OSA0M3ogbTU4IC01MiBjLTMgLTUgLTE4IC0xNiAtMzUgLTI0IC0zMyAtMTggLTM3IC05IC0xMyAzNiAxNSAyOQoxNiAzMCAzNCAxNCAxMSAtMTAgMTcgLTIyIDE0IC0yNnoiLz4KPHBhdGggZD0iTTI4ODcgMzQzIGMtOCAtMTAgLTE4IC0zNSAtMjIgLTU2IC00IC0yMCAtMTQgLTQxIC0yMiAtNDYgLTExIC02Ci0xMiAtMTAgLTQgLTE1IDYgLTQgMTEgLTE3IDExIC0zMCAwIC0yOSAzOCAtNjQgODQgLTc3IDM5IC0xMSA1NiAtNiA1NiAxNyAwCjkgLTEwIDE0IC0yOSAxNCAtMzIgMCAtODEgMzQgLTgxIDU2IDAgOSAxMSAxNCAzNCAxNCA1NSAwIDgxIDMyIDc3IDkyIC0xIDE4Ci00OCA0OCAtNzQgNDggLTggMCAtMjEgLTggLTMwIC0xN3ogbTY3IC0yOSBjOSAtOCAxNiAtMTkgMTYgLTIzIDAgLTE5IC0yOAotNDEgLTU5IC00NyAtMzIgLTcgLTMzIC02IC0yNiAxNyAyMyA3NCAzNyA4NSA2OSA1M3oiLz4KPHBhdGggZD0iTTUxIDMyNSBjLTUwIC00MyAtNDQgLTc2IDMwIC0xNDYgNTMgLTUxIDYwIC02MyA1NyAtOTEgLTQgLTQxIC0yNgotNDcgLTgwIC0yMiAtMjkgMTMgLTQyIDE0IC01MCA2IC0yOCAtMjggNjEgLTcwIDEyNSAtNTggMjYgNSAzOCAxNCA0NyAzNyAyMQo0OSAwIDk5IC02NSAxNTUgLTMwIDI1IC01NSA1MiAtNTUgNTkgMCAyMCA0OSA1NSA3NyA1NSAzOCAwIDIyIDI1IC0xOSAyOCAtMjYKMiAtNDMgLTQgLTY3IC0yM3oiLz4KPHBhdGggZD0iTTIyODQgMzMyIGMtNTMgLTQyIC01OCAtMTAxIC0xNCAtMTU0IDMxIC0zNyA4MiAtNTcgMTE1IC00NCAyNiA5IDUKMzYgLTI4IDM2IC0zNSAwIC04NyA0MyAtODcgNzEgMCAzMiAyMyA2OSA0NiA3NSA1NCAxNCA2MiAtMzggOSAtNjMgLTM5IC0xOQotNDggLTM4IC0xMiAtMjcgNTYgMTcgNzcgMzQgNzcgNjMgMCA1NCAtNjIgNzkgLTEwNiA0M3oiLz4KPHBhdGggZD0iTTE5ODYgMzE4IGMtOSAtMTIgLTE2IC0zNiAtMTYgLTUzIC0xIC0xNiAtNyAtNTkgLTE0IC05NCAtOCAtMzUgLTEyCi03MCAtOSAtNzggOCAtMjEgNDMgLTE2IDQzIDYgMCAzOCA0MCAxNDggNjEgMTY3IGwyMiAxOSAtOCAtNTAgYy0xNCAtODcgLTEyCi0xMjYgOCAtMTM5IDI1IC0xNiAzNyA3IDM3IDcyIDAgMzMgNyA2MyAxOCA4MCBsMTcgMjYgNSAtNzQgYzQgLTY3IDcgLTc1IDI1Ci03NSAxOCAwIDIwIDcgMjAgNzcgLTEgNDggLTYgODIgLTE0IDkyIC0xNiAxOSAtNTIgMjEgLTY5IDQgLTkgLTkgLTEyIC05IC0xMgotMSAwIDE4IC0zNyAyNSAtNjAgMTMgLTE2IC04IC0yMCAtOCAtMjAgNCAwIDI1IC0xOCAyNyAtMzQgNHoiLz4KPHBhdGggZD0iTTcwNiAzMTAgYy0xMCAtMjggLTI2IC0xNzEgLTI2IC0yMzYgMCAtNTYgMiAtNjQgMTkgLTY0IDIwIDAgMzEgMzkKMzEgMTIwIDEgNTkgMzIgMTMwIDU4IDEzMCAyMyAwIDMxIC0yNCAzMyAtOTAgMSAtODggNDcgLTE1NSA5MiAtMTM3IDI0IDkgMjEKMzcgLTMgMzcgLTI3IDAgLTQxIDMxIC01MSAxMTIgLTUgMzcgLTEzIDc3IC0xOSA4OCAtMTMgMjUgLTY2IDI3IC0xMDAgMyAtMTgKLTEzIC0yMiAtMTMgLTE4IC0yIDMgOCAyIDIzIC0yIDM0IC02IDE2IC05IDE3IC0xNCA1eiIvPgo8cGF0aCBkPSJNNTY2IDI3MyBjLTIgLTE2IC04IC02NyAtMTEgLTExNCAtNiAtNzYgLTUgLTg3IDExIC05MyA5IC00IDIxIC0zCjI2IDIgMTAgMTAgLTIgMjMyIC0xMyAyMzIgLTQgMCAtMTAgLTEyIC0xMyAtMjd6Ii8+CjxwYXRoIGQ9Ik0xMDQwIDI4NSBjLTkgLTExIC0xMCAtMTggLTEgLTI5IDEyIC0xNSA1MSAtMTAgNjMgNyAyMCAzMiAtMzcgNTIKLTYyIDIyeiIvPgo8cGF0aCBkPSJNMTg0NSAyNzQgYy0xOSAtMTkgLTIwIC01NCAtMSAtNTQgMjkgMCA0NiAxMyA0NiAzNSAwIDI5IC0yNSAzOSAtNDUKMTl6Ii8+CjwvZz4KPC9zdmc+Cg=="}}]);
//# sourceMappingURL=component---src-pages-index-tsx-34d188c15e928a6b0f61.js.map