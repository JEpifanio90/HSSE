(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+0D0":function(t,n,a){"use strict";a.d(n,"a",function(){return l}),a.d(n,"b",function(){return i});var e=a("CcnG"),l=(a("ioIN"),a("Ip0R"),e["\u0275crt"]({encapsulation:2,styles:[],data:{}}));function i(t){return e["\u0275vid"](0,[(t()(),e["\u0275eld"](0,0,null,null,1,"div",[["style","position:relative"]],[[4,"width",null],[4,"height",null]],null,null,null,null)),(t()(),e["\u0275eld"](1,0,null,null,0,"canvas",[],[[1,"width",0],[1,"height",0]],[[null,"click"]],function(t,n,a){var e=!0;return"click"===n&&(e=!1!==t.component.onCanvasClick(a)&&e),e},null,null))],null,function(t,n){var a=n.component;t(n,0,0,a.responsive&&!a.width?null:a.width,a.responsive&&!a.height?null:a.height),t(n,1,0,a.responsive&&!a.width?null:a.width,a.responsive&&!a.height?null:a.height)})}},"37jT":function(t,n,a){"use strict";a.d(n,"a",function(){return i}),a("BuZO");var e=a("1D4R"),l=a("CcnG"),i=function(){function t(t){this.utilService=t}return t.prototype.resolve=function(t){return this.utilService.getStatsFor(t.data.view,"2019-01-01","2019-12-01")},t.ngInjectableDef=l.defineInjectable({factory:function(){return new t(l.inject(e.a))},token:t,providedIn:"root"}),t}()},EDTi:function(t,n,a){"use strict";a.r(n);var e=a("CcnG"),l=function(){return function(){}}(),i=a("pMnS"),r=a("21Lb"),o=a("OzfB"),d=a("lzlj"),c=a("FVSy"),u=a("Mr+X"),s=a("SMsm"),p=a("+0D0"),m=a("ioIN"),h=a("zyt6"),g=a("crZB"),f=a("bujt"),x=a("UodH"),b=a("dWZg"),v=a("lLAP"),y=a("wFw1"),C=a("Ip0R"),w=a("rp+a"),_=a("EQlr"),O=a("1D4R"),M=function(){function t(t,n,a){this.acr=t,this.snackBar=n,this.statsService=a,this.dashboardQuestions=[],this.dashboardGraphs=[],this.formsHelper=new w.a,this.setUpQuestions()}return t.prototype.fillGraphs=function(t){for(var n=0,a=_.a.DASHBOARD_GRAPHS;n<a.length;n++){var e=a[n];switch(e.title){case"Users":e.info.datasets[0].data=t.users;break;case"Reports":e.info.datasets[0].data=t.reports;break;case"Indicators":e.info.datasets[0].data=t.indicators}this.dashboardGraphs.push(e)}},t.prototype.filterGraphs=function(){var t=this.dateRangeForm.getRawValue();t.start_date=new Date(t.start_date),t.end_date=new Date(t.end_date);var n=t.start_date.getFullYear()+"-"+(t.start_date.getMonth()+1)+"-"+t.start_date.getDate(),a=t.end_date.getFullYear()+"-"+(t.end_date.getMonth()+1)+"-"+t.end_date.getDate();this.dashboardGraphs=[],this.getDashboardData(n,a)},t.prototype.setUpQuestions=function(){var t=this;this.acr.data.subscribe(function(n){n.questions[0].value="2018-05-01",n.questions[1].value="2018-12-01",t.dashboardQuestions=n.questions,t.dateRangeForm=t.formsHelper.toFormGroup(n.questions),t.fillGraphs(n.stats)})},t.prototype.getDashboardData=function(t,n){var a=this;this.statsService.getStatsFor(_.a.DASHBOARD_VIEW,t,n).subscribe(function(t){a.fillGraphs(t)},function(t){a.snackBar.open(t,"OK",{duration:2800})})},t}(),P=a("ZYCi"),R=a("vARd"),D=e["\u0275crt"]({encapsulation:0,styles:[["mat-card[_ngcontent-%COMP%] > mat-card-header.environmental-graph[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%] > mat-card-header.indicators-graph[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%] > mat-card-header.monthly-reports-graph[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%] > mat-card-header.reports-graph[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%] > mat-card-header.users-graph[_ngcontent-%COMP%]{border-radius:3px;padding:15px;margin:-6% 0 3%;float:left;color:#f3f2f2;width:100%}.header[_ngcontent-%COMP%]{margin:0 2%}.header[_ngcontent-%COMP%] > #filterBtn[_ngcontent-%COMP%]{width:100%}mat-card[_ngcontent-%COMP%]{margin:5%}mat-card[_ngcontent-%COMP%] > mat-card-header.users-graph[_ngcontent-%COMP%]{box-shadow:0 4px 20px 0 rgba(0,0,0,.14),0 7px 10px -5px rgba(76,175,80,.4);background:linear-gradient(60deg,#66bb6a,#43a047)}mat-card[_ngcontent-%COMP%] > mat-card-header.reports-graph[_ngcontent-%COMP%]{box-shadow:0 4px 20px 0 rgba(0,0,0,.14),0 7px 10px -5px rgba(0,188,212,.4);background:linear-gradient(60deg,#26c6da,#00acc1)}mat-card[_ngcontent-%COMP%] > mat-card-header.indicators-graph[_ngcontent-%COMP%]{box-shadow:0 4px 20px 0 rgba(0,0,0,.14),0 7px 10px -5px rgba(244,67,54,.4);background:linear-gradient(60deg,#ef5350,#e53935)}mat-card[_ngcontent-%COMP%] > mat-card-header.monthly-reports-graph[_ngcontent-%COMP%]{box-shadow:0 4px 20px 0 rgba(0,0,0,.14),0 7px 10px -5px rgba(251,140,0,.4);background:linear-gradient(60deg,#ffa726,#fb8c00)}mat-card[_ngcontent-%COMP%] > mat-card-header.environmental-graph[_ngcontent-%COMP%]{box-shadow:0 4px 20px 0 rgba(0,0,0,.14),0 7px 10px -5px rgba(0,150,136,.4);background:linear-gradient(60deg,#26a69a,#009688)}mat-card[_ngcontent-%COMP%] > mat-card-header[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%]{color:#f3f2f2}[_nghost-%COMP%]{display:block;height:100%;width:100%}"]],data:{}});function F(t){return e["\u0275vid"](0,[(t()(),e["\u0275eld"](0,0,null,null,17,"div",[["fxFlex","50%"]],null,null,null,null,null)),e["\u0275did"](1,671744,null,0,r.a,[e.ElementRef,o.j,o.e,r.f,o.f],{fxFlex:[0,"fxFlex"]},null),(t()(),e["\u0275eld"](2,0,null,null,15,"mat-card",[["class","mat-card"]],null,null,null,d.d,d.a)),e["\u0275did"](3,49152,null,0,c.a,[],null,null),(t()(),e["\u0275eld"](4,0,null,0,9,"mat-card-header",[["class","mat-card-header"]],[[8,"className",0]],null,null,d.c,d.b)),e["\u0275did"](5,49152,null,0,c.d,[],null,null),(t()(),e["\u0275eld"](6,0,null,1,2,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),e["\u0275did"](7,16384,null,0,c.g,[],null,null),(t()(),e["\u0275ted"](8,null,["",""])),(t()(),e["\u0275eld"](9,0,null,2,1,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[8,"className",0],[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,u.b,u.a)),e["\u0275did"](10,9158656,null,0,s.b,[e.ElementRef,s.d,[8,null],[2,s.a]],null,null),(t()(),e["\u0275eld"](11,0,null,1,2,"mat-card-subtitle",[["class","mat-card-subtitle"]],null,null,null,null,null)),e["\u0275did"](12,16384,null,0,c.f,[],null,null),(t()(),e["\u0275ted"](13,null,["",""])),(t()(),e["\u0275eld"](14,0,null,0,3,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),e["\u0275did"](15,16384,null,0,c.c,[],null,null),(t()(),e["\u0275eld"](16,0,null,null,1,"p-chart",[["type","pie"]],null,null,null,p.b,p.a)),e["\u0275did"](17,4374528,null,0,m.UIChart,[e.ElementRef],{type:[0,"type"],data:[1,"data"]},null)],function(t,n){t(n,1,0,"50%"),t(n,10,0),t(n,17,0,"pie",n.context.$implicit.info)},function(t,n){t(n,4,0,e["\u0275inlineInterpolate"](1,"",n.context.$implicit.class,"")),t(n,8,0,n.context.$implicit.title),t(n,9,0,e["\u0275inlineInterpolate"](1,"fa fa-",n.context.$implicit.icon,""),e["\u0275nov"](n,10).inline,"primary"!==e["\u0275nov"](n,10).color&&"accent"!==e["\u0275nov"](n,10).color&&"warn"!==e["\u0275nov"](n,10).color),t(n,13,0,n.context.$implicit.subTitle)})}function I(t){return e["\u0275vid"](0,[(t()(),e["\u0275eld"](0,0,null,null,15,"div",[["fxLayout","column"]],null,null,null,null,null)),e["\u0275did"](1,671744,null,0,r.c,[e.ElementRef,o.j,[2,r.i],o.f],{fxLayout:[0,"fxLayout"]},null),(t()(),e["\u0275eld"](2,0,null,null,8,"div",[["class","header"],["fxFlex",""]],null,null,null,null,null)),e["\u0275did"](3,671744,null,0,r.a,[e.ElementRef,o.j,o.e,r.f,o.f],{fxFlex:[0,"fxFlex"]},null),(t()(),e["\u0275eld"](4,0,null,null,1,"h3",[],null,null,null,null,null)),(t()(),e["\u0275ted"](-1,null,["Date Range:"])),(t()(),e["\u0275eld"](6,0,null,null,1,"hsse-questions",[["gap","3%"],["layout","row"]],null,null,null,h.b,h.a)),e["\u0275did"](7,49152,null,0,g.a,[],{questions:[0,"questions"],form:[1,"form"],layout:[2,"layout"],gap:[3,"gap"]},null),(t()(),e["\u0275eld"](8,0,null,null,2,"button",[["color","accent"],["id","filterBtn"],["mat-stroked-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(t,n,a){var e=!0;return"click"===n&&(e=!1!==t.component.filterGraphs()&&e),e},f.d,f.b)),e["\u0275did"](9,180224,null,0,x.b,[e.ElementRef,b.a,v.h,[2,y.a]],{color:[0,"color"]},null),(t()(),e["\u0275ted"](-1,0,["Filter Graphs"])),(t()(),e["\u0275eld"](11,0,null,null,4,"div",[["fxFlex",""],["fxLayout","row wrap"],["fxLayout.xs","column"]],null,null,null,null,null)),e["\u0275did"](12,671744,null,0,r.c,[e.ElementRef,o.j,[2,r.i],o.f],{fxLayout:[0,"fxLayout"],"fxLayout.xs":[1,"fxLayout.xs"]},null),e["\u0275did"](13,671744,null,0,r.a,[e.ElementRef,o.j,o.e,r.f,o.f],{fxFlex:[0,"fxFlex"]},null),(t()(),e["\u0275and"](16777216,null,null,1,null,F)),e["\u0275did"](15,278528,null,0,C.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(t,n){var a=n.component;t(n,1,0,"column"),t(n,3,0,""),t(n,7,0,a.dashboardQuestions,a.dateRangeForm,"row","3%"),t(n,9,0,"accent"),t(n,12,0,"row wrap","column"),t(n,13,0,""),t(n,15,0,a.dashboardGraphs)},function(t,n){t(n,8,0,e["\u0275nov"](n,9).disabled||null,"NoopAnimations"===e["\u0275nov"](n,9)._animationMode)})}function k(t){return e["\u0275vid"](0,[(t()(),e["\u0275eld"](0,0,null,null,1,"hsse-dashboard",[],null,null,null,I,D)),e["\u0275did"](1,49152,null,0,M,[P.a,R.b,O.a],null,null)],null,null)}var j=e["\u0275ccf"]("hsse-dashboard",M,k,{},{},[]),E=a("xYTU"),L=a("t68o"),S=a("zbXB"),A=a("37jT"),G=a("eDkP"),z=a("Fzqc"),N=a("o3x0"),B=a("M2Lx"),T=a("jQLj"),q=a("Wf4p"),U=a("uGex"),V=a("gIcY"),Q=a("8//E"),Y=a("hUWP"),H=a("3pJQ"),Z=a("V9q+"),W=a("bJDL"),$={view:_.a.DASHBOARD_VIEW},J=function(){return function(){}}(),K=a("ZYjt"),X=a("4c35"),tt=a("qAlS"),nt=a("seP3"),at=a("/VYK"),et=a("b716"),lt=a("xTUE");a.d(n,"DashboardModuleNgFactory",function(){return it});var it=e["\u0275cmf"](l,[],function(t){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,j,E.a,E.b,L.a,S.b,S.a]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,C.NgLocalization,C.NgLocaleLocalization,[e.LOCALE_ID,[2,C["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](5120,e.APP_BOOTSTRAP_LISTENER,function(t,n){return[o.k(t,n)]},[C.DOCUMENT,e.PLATFORM_ID]),e["\u0275mpd"](4608,A.a,A.a,[O.a]),e["\u0275mpd"](4608,G.c,G.c,[G.i,G.e,e.ComponentFactoryResolver,G.h,G.f,e.Injector,e.NgZone,C.DOCUMENT,z.b,[2,C.Location]]),e["\u0275mpd"](5120,G.j,G.k,[G.c]),e["\u0275mpd"](5120,N.b,N.c,[G.c]),e["\u0275mpd"](135680,N.d,N.d,[G.c,e.Injector,[2,C.Location],[2,N.a],N.b,[3,N.d],G.e]),e["\u0275mpd"](4608,B.c,B.c,[]),e["\u0275mpd"](4608,T.i,T.i,[]),e["\u0275mpd"](5120,T.a,T.b,[G.c]),e["\u0275mpd"](4608,q.b,q.b,[]),e["\u0275mpd"](4608,q.a,q.w,[[2,q.f],b.a]),e["\u0275mpd"](5120,U.a,U.b,[G.c]),e["\u0275mpd"](4608,V.e,V.e,[]),e["\u0275mpd"](4608,V.t,V.t,[]),e["\u0275mpd"](4608,Q.a,Q.a,[]),e["\u0275mpd"](1073742336,C.CommonModule,C.CommonModule,[]),e["\u0275mpd"](1073742336,m.ChartModule,m.ChartModule,[]),e["\u0275mpd"](1073742336,o.c,o.c,[]),e["\u0275mpd"](1073742336,z.a,z.a,[]),e["\u0275mpd"](1073742336,r.e,r.e,[]),e["\u0275mpd"](1073742336,Y.a,Y.a,[]),e["\u0275mpd"](1073742336,H.a,H.a,[]),e["\u0275mpd"](1073742336,Z.a,Z.a,[[2,o.h],e.PLATFORM_ID]),e["\u0275mpd"](1073742336,P.r,P.r,[[2,P.x],[2,P.o]]),e["\u0275mpd"](1073742336,J,J,[]),e["\u0275mpd"](1073742336,q.l,q.l,[[2,q.d],[2,K.g]]),e["\u0275mpd"](1073742336,b.b,b.b,[]),e["\u0275mpd"](1073742336,q.v,q.v,[]),e["\u0275mpd"](1073742336,x.c,x.c,[]),e["\u0275mpd"](1073742336,c.e,c.e,[]),e["\u0275mpd"](1073742336,s.c,s.c,[]),e["\u0275mpd"](1073742336,X.g,X.g,[]),e["\u0275mpd"](1073742336,tt.c,tt.c,[]),e["\u0275mpd"](1073742336,G.g,G.g,[]),e["\u0275mpd"](1073742336,R.e,R.e,[]),e["\u0275mpd"](1073742336,N.g,N.g,[]),e["\u0275mpd"](1073742336,B.d,B.d,[]),e["\u0275mpd"](1073742336,v.a,v.a,[]),e["\u0275mpd"](1073742336,T.j,T.j,[]),e["\u0275mpd"](1073742336,nt.e,nt.e,[]),e["\u0275mpd"](1073742336,at.c,at.c,[]),e["\u0275mpd"](1073742336,et.c,et.c,[]),e["\u0275mpd"](1073742336,q.x,q.x,[]),e["\u0275mpd"](1073742336,q.o,q.o,[]),e["\u0275mpd"](1073742336,q.t,q.t,[]),e["\u0275mpd"](1073742336,q.r,q.r,[]),e["\u0275mpd"](1073742336,U.d,U.d,[]),e["\u0275mpd"](1073742336,V.r,V.r,[]),e["\u0275mpd"](1073742336,V.p,V.p,[]),e["\u0275mpd"](1073742336,lt.a,lt.a,[]),e["\u0275mpd"](1073742336,l,l,[]),e["\u0275mpd"](1024,P.m,function(){return[[{path:"",component:M,pathMatch:"full",resolve:{questions:W.a,stats:A.a},data:$}]]},[]),e["\u0275mpd"](256,q.e,q.i,[])])})},FVSy:function(t,n,a){"use strict";a.d(n,"c",function(){return e}),a.d(n,"g",function(){return l}),a.d(n,"f",function(){return i}),a.d(n,"b",function(){return r}),a.d(n,"a",function(){return o}),a.d(n,"d",function(){return d}),a.d(n,"h",function(){return c}),a.d(n,"e",function(){return u});var e=function(){return function(){}}(),l=function(){return function(){}}(),i=function(){return function(){}}(),r=function(){return function(){this.align="start"}}(),o=function(){return function(){}}(),d=function(){return function(){}}(),c=function(){return function(){}}(),u=function(){return function(){}}()},ioIN:function(t,n,a){var e=a("mrSG").__decorate,l=a("mrSG").__metadata;Object.defineProperty(n,"__esModule",{value:!0});var i=a("CcnG"),r=a("Ip0R"),o=function(){function t(t){this.el=t,this.options={},this.plugins=[],this.responsive=!0,this.onDataSelect=new i.EventEmitter}return Object.defineProperty(t.prototype,"data",{get:function(){return this._data},set:function(t){this._data=t,this.reinit()},enumerable:!0,configurable:!0}),t.prototype.ngAfterViewInit=function(){this.initChart(),this.initialized=!0},t.prototype.onCanvasClick=function(t){if(this.chart){var n=this.chart.getElementAtEvent(t),a=this.chart.getDatasetAtEvent(t);n&&n[0]&&a&&this.onDataSelect.emit({originalEvent:t,element:n[0],dataset:a})}},t.prototype.initChart=function(){var t=this.options||{};t.responsive=this.responsive,t.responsive&&(this.height||this.width)&&(t.maintainAspectRatio=!1),this.chart=new Chart(this.el.nativeElement.children[0].children[0],{type:this.type,data:this.data,options:this.options,plugins:this.plugins})},t.prototype.getCanvas=function(){return this.el.nativeElement.children[0].children[0]},t.prototype.getBase64Image=function(){return this.chart.toBase64Image()},t.prototype.generateLegend=function(){if(this.chart)return this.chart.generateLegend()},t.prototype.refresh=function(){this.chart&&this.chart.update()},t.prototype.reinit=function(){this.chart&&(this.chart.destroy(),this.initChart())},t.prototype.ngOnDestroy=function(){this.chart&&(this.chart.destroy(),this.initialized=!1,this.chart=null)},e([i.Input(),l("design:type",String)],t.prototype,"type",void 0),e([i.Input(),l("design:type",Object)],t.prototype,"options",void 0),e([i.Input(),l("design:type",Array)],t.prototype,"plugins",void 0),e([i.Input(),l("design:type",String)],t.prototype,"width",void 0),e([i.Input(),l("design:type",String)],t.prototype,"height",void 0),e([i.Input(),l("design:type",Boolean)],t.prototype,"responsive",void 0),e([i.Output(),l("design:type",i.EventEmitter)],t.prototype,"onDataSelect",void 0),e([i.Input(),l("design:type",Object),l("design:paramtypes",[Object])],t.prototype,"data",null),e([i.Component({selector:"p-chart",template:'\n        <div style="position:relative" [style.width]="responsive && !width ? null : width" [style.height]="responsive && !height ? null : height">\n            <canvas [attr.width]="responsive && !width ? null : width" [attr.height]="responsive && !height ? null : height" (click)="onCanvasClick($event)"></canvas>\n        </div>\n    '})],t)}();n.UIChart=o,n.ChartModule=function(){return e([i.NgModule({imports:[r.CommonModule],exports:[o],declarations:[o]})],function(){})}()},lzlj:function(t,n,a){"use strict";a.d(n,"a",function(){return l}),a.d(n,"d",function(){return i}),a.d(n,"b",function(){return r}),a.d(n,"c",function(){return o});var e=a("CcnG"),l=(a("FVSy"),a("Fzqc"),a("Wf4p"),a("ZYjt"),e["\u0275crt"]({encapsulation:2,styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:16px;border-radius:4px}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px 0}@media (max-width:599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child{margin-left:0;margin-right:0}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],data:{}}));function i(t){return e["\u0275vid"](2,[e["\u0275ncd"](null,0),e["\u0275ncd"](null,1)],null,null)}var r=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function o(t){return e["\u0275vid"](2,[e["\u0275ncd"](null,0),(t()(),e["\u0275eld"](1,0,null,null,1,"div",[["class","mat-card-header-text"]],null,null,null,null,null)),e["\u0275ncd"](null,1),e["\u0275ncd"](null,2)],null,null)}}}]);