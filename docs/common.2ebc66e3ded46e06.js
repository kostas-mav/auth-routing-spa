"use strict";(self.webpackChunkspa_routing_showcase=self.webpackChunkspa_routing_showcase||[]).push([[592],{7509:(T,S,e)=>{e.d(S,{$:()=>b});var C=e(6814),u=e(5879);const g=["fullButton",""],y=["*"];let b=(()=>{var d;class a{}return(d=a).\u0275fac=function(p){return new(p||d)},d.\u0275cmp=u.Xpm({type:d,selectors:[["","fullButton",""]],standalone:!0,features:[u.jDz],attrs:g,ngContentSelectors:y,decls:1,vars:0,template:function(p,E){1&p&&(u.F$t(),u.Hsn(0))},dependencies:[C.ez],styles:["[_nghost-%COMP%]{display:flex;align-items:center;gap:1rem;border:solid 1px transparent;background-color:#f5f5f5;border-radius:.5rem;padding:.25rem .5rem}"]}),a})()},2497:(T,S,e)=>{e.d(S,{t:()=>x});var C=e(6814),u=e(95),g=e(8645),y=e(9773),b=e(9397),d=e(9297),a=e(5879);let x=(()=>{var p;class E{constructor(l){this.fb=l,this._destroy$=new g.x,this.type="text",this.label="",this.placeholder="",this.control=this.fb.control(""),this.onChange=h=>{},this.onTouched=()=>{}}writeValue(l){this.control.setValue(l)}registerOnChange(l){this.onChange=l}registerOnTouched(l){this.onTouched=l}setDisabledState(l){l?this.control.disable():this.control.enable()}ngOnInit(){this.control.valueChanges.pipe((0,y.R)(this._destroy$),(0,b.b)(l=>{this.onChange(l),this.onTouched()})).subscribe()}ngOnDestroy(){this._destroy$.next()}}return(p=E).\u0275fac=function(l){return new(l||p)(a.Y36(u.j3))},p.\u0275cmp=a.Xpm({type:p,selectors:[["app-text-input"]],inputs:{type:"type",label:"label",placeholder:"placeholder",control:"control"},standalone:!0,features:[a._Bn([(0,d.p)(p)]),a.jDz],decls:3,vars:4,consts:[[3,"formControl","placeholder","type"]],template:function(l,h){1&l&&(a.TgZ(0,"label"),a._uU(1),a._UZ(2,"input",0),a.qZA()),2&l&&(a.xp6(1),a.hij(" ",h.label," "),a.xp6(1),a.Q6J("formControl",h.control)("placeholder",h.placeholder)("type",h.type))},dependencies:[C.ez,u.UX,u.Fj,u.JJ,u.oH],styles:["[_nghost-%COMP%]{width:100%;max-width:var(--form-max);outline:solid 1px green;border-radius:.5rem;box-shadow:4px 5px 11px 3px #0000004a;-webkit-box-shadow:4px 5px 11px 3px rgba(0,0,0,.29);-moz-box-shadow:4px 5px 11px 3px rgba(0,0,0,.29)}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{border-radius:.5rem;width:100%;padding:.25rem .5rem;padding:.5rem 1rem}"]}),E})()},5426:(T,S,e)=>{e.d(S,{m1:()=>Z});var C=e(5592),u=e(7394),g=e(6410),y=e(7328),b=e(7258),d=e(2096),a=e(2381),x=e(6232),p=e(8504),E=e(5154),$=e(2572),l=e(8645),h=e(9773),F=e(3093),M=e(9397),z=e(2460),A=e(7398),L=e(6306),U=e(8180),B=e(3997),K=e(3020),I=e(5879),H=e(1993);function j(o){return"function"==typeof o.ngrxOnStoreInit}function P(o){return"function"==typeof o.ngrxOnStateInit}const X=new I.OlP("@ngrx/component-store Initial State");let Z=(()=>{var o;class s{constructor(t){this.destroySubject$=new y.t(1),this.destroy$=this.destroySubject$.asObservable(),this.stateSubject$=new y.t(1),this.isInitialized=!1,this.state$=this.select(n=>n),this.state=(0,H.O4)(this.stateSubject$.pipe((0,h.R)(this.destroy$)),{requireSync:!1,manualCleanup:!0}),this.\u0275hasProvider=!1,t&&this.initState(t),this.checkProviderForHooks()}ngOnDestroy(){this.stateSubject$.complete(),this.destroySubject$.next()}updater(t){return n=>{let c,r=!0;const m=((0,b.b)(n)?n:(0,d.of)(n)).pipe((0,F.Q)(a.N),(0,M.b)(()=>this.assertStateIsInitialized()),(0,z.M)(this.stateSubject$),(0,A.U)(([v,O])=>t(O,v)),(0,M.b)(v=>this.stateSubject$.next(v)),(0,L.K)(v=>r?(c=v,x.E):(0,p._)(v)),(0,h.R)(this.destroy$)).subscribe();if(c)throw c;return r=!1,m}}initState(t){(0,E.x)([t],a.N).subscribe(n=>{this.isInitialized=!0,this.stateSubject$.next(n)})}setState(t){"function"!=typeof t?this.initState(t):this.updater(t)()}patchState(t){const n="function"==typeof t?t(this.get()):t;this.updater((r,c)=>({...r,...c}))(n)}get(t){let n;return this.assertStateIsInitialized(),this.stateSubject$.pipe((0,U.q)(1)).subscribe(r=>{n=t?t(r):r}),n}select(...t){const{observablesOrSelectorsObject:n,projector:r,config:c}=function J(o){const s=Array.from(o);let t={debounce:!1,equal:(c,f)=>c===f};if(function Q(o){return typeof o.debounce<"u"||typeof o.equal<"u"}(s[s.length-1])&&(t={...t,...s.pop()}),1===s.length&&"function"!=typeof s[0])return{observablesOrSelectorsObject:s[0],projector:void 0,config:t};const n=s.pop();return{observablesOrSelectorsObject:s,projector:n,config:t}}(t);return(function Y(o,s){return Array.isArray(o)&&0===o.length&&s}(n,r)?this.stateSubject$:(0,$.a)(n)).pipe(c.debounce?function w(){return o=>new C.y(s=>{let i,t;const n=new u.w0;return n.add(o.subscribe({complete:()=>{i&&s.next(t),s.complete()},error:r=>{s.error(r)},next:r=>{t=r,i||(i=g.E.schedule(()=>{s.next(t),i=void 0}),n.add(i))}})),n})}():o=>o,r?(0,A.U)(m=>n.length>0&&Array.isArray(m)?r(...m):r(m)):o=>o,(0,B.x)(c.equal),function W(o,s,i){let t,n=!1;return o&&"object"==typeof o?({bufferSize:t=1/0,windowTime:s=1/0,refCount:n=!1,scheduler:i}=o):t=o??1/0,(0,K.B)({connector:()=>new y.t(t,s,i),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:n})}({refCount:!0,bufferSize:1}),(0,h.R)(this.destroy$))}selectSignal(...t){const n=[...t],r=(O,D)=>O===D,c="object"==typeof n[t.length-1]?{equal:n.pop().equal||r}:{equal:r},f=n.pop(),m=n;return(0,I.Flj)(0===m.length?()=>f(this.state()):()=>{const O=m.map(D=>D());return f(...O)},c)}effect(t){const n=new l.x;return t(n).pipe((0,h.R)(this.destroy$)).subscribe(),r=>((0,b.b)(r)?r:(0,d.of)(r)).pipe((0,h.R)(this.destroy$)).subscribe(f=>{n.next(f)})}checkProviderForHooks(){g.E.schedule(()=>{if((0,I.X6Q)()&&(j(this)||P(this))&&!this.\u0275hasProvider){const t=[j(this)?"OnStoreInit":"",P(this)?"OnStateInit":""].filter(n=>n);console.warn(`@ngrx/component-store: ${this.constructor.name} has the ${t.join(" and ")} lifecycle hook(s) implemented without being provided using the provideComponentStore(${this.constructor.name}) function. To resolve this, provide the component store via provideComponentStore(${this.constructor.name})`)}})}assertStateIsInitialized(){if(!this.isInitialized)throw new Error(`${this.constructor.name} has not been initialized yet. Please make sure it is initialized before updating/getting.`)}}return(o=s).\u0275fac=function(t){return new(t||o)(I.LFG(X,8))},o.\u0275prov=I.Yz7({token:o,factory:o.\u0275fac}),s})()}}]);