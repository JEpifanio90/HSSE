(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{FVSy:function(t,n,a){"use strict";a.d(n,"c",function(){return i}),a.d(n,"g",function(){return l}),a.d(n,"f",function(){return e}),a.d(n,"b",function(){return r}),a.d(n,"a",function(){return c}),a.d(n,"d",function(){return d}),a.d(n,"h",function(){return o}),a.d(n,"e",function(){return u});var i=function(){return function(){}}(),l=function(){return function(){}}(),e=function(){return function(){}}(),r=function(){return function(){this.align="start"}}(),c=function(){return function(){}}(),d=function(){return function(){}}(),o=function(){return function(){}}(),u=function(){return function(){}}()},lzlj:function(t,n,a){"use strict";a.d(n,"a",function(){return l}),a.d(n,"d",function(){return e}),a.d(n,"b",function(){return r}),a.d(n,"c",function(){return c});var i=a("CcnG"),l=(a("FVSy"),a("Fzqc"),a("Wf4p"),a("ZYjt"),i["\u0275crt"]({encapsulation:2,styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:16px;border-radius:4px}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px 0}@media (max-width:599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child{margin-left:0;margin-right:0}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],data:{}}));function e(t){return i["\u0275vid"](2,[i["\u0275ncd"](null,0),i["\u0275ncd"](null,1)],null,null)}var r=i["\u0275crt"]({encapsulation:2,styles:[],data:{}});function c(t){return i["\u0275vid"](2,[i["\u0275ncd"](null,0),(t()(),i["\u0275eld"](1,0,null,null,1,"div",[["class","mat-card-header-text"]],null,null,null,null,null)),i["\u0275ncd"](null,1),i["\u0275ncd"](null,2)],null,null)}},oquA:function(t,n,a){"use strict";a.r(n);var i=a("CcnG"),l=function(){return function(){}}(),e=a("xYTU"),r=a("t68o"),c=a("zbXB"),d=a("pMnS"),o=a("lzlj"),u=a("FVSy"),m=a("zyt6"),s=a("crZB"),p=a("bujt"),f=a("UodH"),g=a("dWZg"),h=a("lLAP"),b=a("wFw1"),v=a("rp+a"),x=a("0aw/"),y=a("mZtN"),A=function(){function t(t,n,a,i,l){var e=this;this.acr=t,this.activityService=n,this.router=a,this.snackService=i,this.sessionService=l,this.safetyActivitiesQuestions=[],this.formsHelper=new v.a,this.acr.data.subscribe(function(t){e.safetyActivitiesForm=e.formsHelper.toFormGroup(t.questions),e.safetyActivitiesQuestions=t.questions,e.retrieveSites()})}return t.prototype.createActivity=function(){var t=this;this.activityService.createSafetyActivity(this.safetyActivitiesForm.getRawValue()).subscribe(function(){t.safetyActivitiesForm.reset(),t.router.navigate(["home"]),t.snackService.open("Activity created!","OK",{duration:2800})},function(t){console.log(t)})},t.prototype.retrieveSites=function(){for(var t=[],n=0,a=this.sessionService.sites;n<a.length;n++){var i=a[n];t.push({name:i.name,value:i.id})}this.safetyActivitiesQuestions[2].options=t},t}(),w=a("ZYCi"),S=a("vARd"),F=i["\u0275crt"]({encapsulation:0,styles:[["mat-card[_ngcontent-%COMP%]{margin:2%}[_nghost-%COMP%]{display:block;height:100%;width:100%}"]],data:{}});function C(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,18,"mat-card",[["class","mat-card"],["fxFlex",""]],null,null,null,o.d,o.a)),i["\u0275did"](1,49152,null,0,u.a,[],null,null),(t()(),i["\u0275eld"](2,0,null,0,4,"mat-card-header",[["class","mat-card-header"]],null,null,null,o.c,o.b)),i["\u0275did"](3,49152,null,0,u.d,[],null,null),(t()(),i["\u0275eld"](4,0,null,1,2,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),i["\u0275did"](5,16384,null,0,u.g,[],null,null),(t()(),i["\u0275ted"](-1,null,["New Safety Activity"])),(t()(),i["\u0275eld"](7,0,null,0,3,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),i["\u0275did"](8,16384,null,0,u.c,[],null,null),(t()(),i["\u0275eld"](9,0,null,null,1,"hsse-questions",[],null,null,null,m.b,m.a)),i["\u0275did"](10,49152,null,0,s.a,[],{questions:[0,"questions"],form:[1,"form"]},null),(t()(),i["\u0275eld"](11,0,null,0,7,"mat-card-actions",[["align","end"],["class","mat-card-actions"]],[[2,"mat-card-actions-align-end",null]],null,null,null,null)),i["\u0275did"](12,16384,null,0,u.b,[],{align:[0,"align"]},null),(t()(),i["\u0275eld"](13,0,null,null,2,"button",[["color","accent"],["mat-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,p.d,p.b)),i["\u0275did"](14,180224,null,0,f.b,[i.ElementRef,g.a,h.h,[2,b.a]],{color:[0,"color"]},null),(t()(),i["\u0275ted"](-1,0,["Cancel"])),(t()(),i["\u0275eld"](16,0,null,null,2,"button",[["color","primary"],["mat-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(t,n,a){var i=!0;return"click"===n&&(i=!1!==t.component.createActivity()&&i),i},p.d,p.b)),i["\u0275did"](17,180224,null,0,f.b,[i.ElementRef,g.a,h.h,[2,b.a]],{color:[0,"color"]},null),(t()(),i["\u0275ted"](-1,0,["Create Activitiy!"]))],function(t,n){var a=n.component;t(n,10,0,a.safetyActivitiesQuestions,a.safetyActivitiesForm),t(n,12,0,"end"),t(n,14,0,"accent"),t(n,17,0,"primary")},function(t,n){t(n,11,0,"end"===i["\u0275nov"](n,12).align),t(n,13,0,i["\u0275nov"](n,14).disabled||null,"NoopAnimations"===i["\u0275nov"](n,14)._animationMode),t(n,16,0,i["\u0275nov"](n,17).disabled||null,"NoopAnimations"===i["\u0275nov"](n,17)._animationMode)})}function _(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,1,"hsse-create-safety-activity",[],null,null,null,C,F)),i["\u0275did"](1,49152,null,0,A,[w.a,x.a,w.o,S.b,y.a],null,null)],null,null)}var k=i["\u0275ccf"]("hsse-create-safety-activity",A,_,{},{},[]),M=a("Ip0R"),j=a("eDkP"),L=a("Fzqc"),z=a("o3x0"),R=a("M2Lx"),E=a("jQLj"),I=a("Wf4p"),N=a("uGex"),T=a("gIcY"),q=a("OzfB"),O=a("8//E"),P=a("ZYjt"),V=a("4c35"),D=a("qAlS"),Q=a("seP3"),Y=a("SMsm"),Z=a("/VYK"),U=a("b716"),W=a("21Lb"),B=a("hUWP"),G=a("3pJQ"),J=a("V9q+"),H=a("xTUE"),K=a("bJDL"),X={view:a("EQlr").a.SAFETY_ACTIVITIES_VIEW},$=function(){return function(){}}();a.d(n,"CreateSafetyActivityModuleNgFactory",function(){return tt});var tt=i["\u0275cmf"](l,[],function(t){return i["\u0275mod"]([i["\u0275mpd"](512,i.ComponentFactoryResolver,i["\u0275CodegenComponentFactoryResolver"],[[8,[e.a,e.b,r.a,c.b,c.a,d.a,k]],[3,i.ComponentFactoryResolver],i.NgModuleRef]),i["\u0275mpd"](4608,M.NgLocalization,M.NgLocaleLocalization,[i.LOCALE_ID,[2,M["\u0275angular_packages_common_common_a"]]]),i["\u0275mpd"](4608,j.c,j.c,[j.i,j.e,i.ComponentFactoryResolver,j.h,j.f,i.Injector,i.NgZone,M.DOCUMENT,L.b,[2,M.Location]]),i["\u0275mpd"](5120,j.j,j.k,[j.c]),i["\u0275mpd"](5120,z.b,z.c,[j.c]),i["\u0275mpd"](135680,z.d,z.d,[j.c,i.Injector,[2,M.Location],[2,z.a],z.b,[3,z.d],j.e]),i["\u0275mpd"](4608,R.c,R.c,[]),i["\u0275mpd"](4608,E.i,E.i,[]),i["\u0275mpd"](5120,E.a,E.b,[j.c]),i["\u0275mpd"](4608,I.b,I.b,[]),i["\u0275mpd"](4608,I.a,I.w,[[2,I.f],g.a]),i["\u0275mpd"](5120,N.a,N.b,[j.c]),i["\u0275mpd"](4608,T.e,T.e,[]),i["\u0275mpd"](4608,T.t,T.t,[]),i["\u0275mpd"](5120,i.APP_BOOTSTRAP_LISTENER,function(t,n){return[q.k(t,n)]},[M.DOCUMENT,i.PLATFORM_ID]),i["\u0275mpd"](4608,O.a,O.a,[]),i["\u0275mpd"](1073742336,M.CommonModule,M.CommonModule,[]),i["\u0275mpd"](1073742336,L.a,L.a,[]),i["\u0275mpd"](1073742336,I.l,I.l,[[2,I.d],[2,P.g]]),i["\u0275mpd"](1073742336,g.b,g.b,[]),i["\u0275mpd"](1073742336,I.v,I.v,[]),i["\u0275mpd"](1073742336,f.c,f.c,[]),i["\u0275mpd"](1073742336,u.e,u.e,[]),i["\u0275mpd"](1073742336,V.g,V.g,[]),i["\u0275mpd"](1073742336,D.c,D.c,[]),i["\u0275mpd"](1073742336,j.g,j.g,[]),i["\u0275mpd"](1073742336,S.e,S.e,[]),i["\u0275mpd"](1073742336,z.g,z.g,[]),i["\u0275mpd"](1073742336,R.d,R.d,[]),i["\u0275mpd"](1073742336,h.a,h.a,[]),i["\u0275mpd"](1073742336,E.j,E.j,[]),i["\u0275mpd"](1073742336,Q.e,Q.e,[]),i["\u0275mpd"](1073742336,Y.c,Y.c,[]),i["\u0275mpd"](1073742336,Z.c,Z.c,[]),i["\u0275mpd"](1073742336,U.c,U.c,[]),i["\u0275mpd"](1073742336,I.x,I.x,[]),i["\u0275mpd"](1073742336,I.o,I.o,[]),i["\u0275mpd"](1073742336,I.t,I.t,[]),i["\u0275mpd"](1073742336,I.r,I.r,[]),i["\u0275mpd"](1073742336,N.d,N.d,[]),i["\u0275mpd"](1073742336,T.r,T.r,[]),i["\u0275mpd"](1073742336,T.p,T.p,[]),i["\u0275mpd"](1073742336,q.c,q.c,[]),i["\u0275mpd"](1073742336,W.e,W.e,[]),i["\u0275mpd"](1073742336,B.a,B.a,[]),i["\u0275mpd"](1073742336,G.a,G.a,[]),i["\u0275mpd"](1073742336,J.a,J.a,[[2,q.h],i.PLATFORM_ID]),i["\u0275mpd"](1073742336,H.a,H.a,[]),i["\u0275mpd"](1073742336,w.r,w.r,[[2,w.x],[2,w.o]]),i["\u0275mpd"](1073742336,$,$,[]),i["\u0275mpd"](1073742336,l,l,[]),i["\u0275mpd"](256,I.e,I.i,[]),i["\u0275mpd"](1024,w.m,function(){return[[{path:"",component:A,pathMatch:"full",resolve:{questions:K.a},data:X}]]},[])])})}}]);