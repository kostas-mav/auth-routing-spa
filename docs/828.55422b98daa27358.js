"use strict";(self.webpackChunkspa_routing_showcase=self.webpackChunkspa_routing_showcase||[]).push([[828],{1828:(kt,F,l)=>{l.r(F),l.d(F,{LayoutComponent:()=>It});var p=l(6814),e=l(5879),T=l(9775),u=l(3680);let O=(()=>{var o;class s{}return(o=s).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.uc,u.BQ,u.uc,u.BQ]}),s})();var _=l(3334),z=l(2495),m=l(6028),D=l(8645),R=l(3019),P=l(7394),L=l(2096),G=l(6410),A=l(7921),Y=l(4664),v=l(8180),E=l(9773),C=l(2181),J=l(6321),W=l(5211),q=l(7538),tt=l(975),et=l(1631),it=l(4829);function j(o,s){return s?n=>(0,W.z)(s.pipe((0,v.q)(1),(0,q.l)()),n.pipe(j(o))):(0,et.z)((n,t)=>(0,it.Xf)(o(n,t)).pipe((0,v.q)(1),(0,tt.h)(n)))}var nt=l(9080);function $(o,s=J.z){const n=(0,nt.H)(o,s);return j(()=>n)}var st=l(8484),d=l(6825),ot=l(9388),S=l(9594),at=l(2831),rt=l(9829);const lt=["mat-menu-item",""];function ct(o,s){1&o&&(e.O4$(),e.TgZ(0,"svg",3),e._UZ(1,"polygon",4),e.qZA())}const dt=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],ut=["mat-icon, [matMenuItemIcon]","*"];function mt(o,s){if(1&o){const n=e.EpF();e.TgZ(0,"div",0),e.NdJ("keydown",function(i){e.CHM(n);const a=e.oxw();return e.KtG(a._handleKeydown(i))})("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.closed.emit("click"))})("@transformMenu.start",function(i){e.CHM(n);const a=e.oxw();return e.KtG(a._onAnimationStart(i))})("@transformMenu.done",function(i){e.CHM(n);const a=e.oxw();return e.KtG(a._onAnimationDone(i))}),e.TgZ(1,"div",1),e.Hsn(2),e.qZA()()}if(2&o){const n=e.oxw();e.Q6J("id",n.panelId)("ngClass",n._classList)("@transformMenu",n._panelAnimationState),e.uIk("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null)("aria-describedby",n.ariaDescribedby||null)}}const ht=["*"],H=new e.OlP("MAT_MENU_PANEL"),gt=(0,u.Kr)((0,u.Id)(class{}));let I=(()=>{var o;class s extends gt{constructor(t,i,a,r,c){super(),this._elementRef=t,this._document=i,this._focusMonitor=a,this._parentMenu=r,this._changeDetectorRef=c,this.role="menuitem",this._hovered=new D.x,this._focused=new D.x,this._highlighted=!1,this._triggersSubmenu=!1,r?.addItem?.(this)}focus(t,i){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,i):this._getHostElement().focus(i),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){const t=this._elementRef.nativeElement.cloneNode(!0),i=t.querySelectorAll("mat-icon, .material-icons");for(let a=0;a<i.length;a++)i[a].remove();return t.textContent?.trim()||""}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef?.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef?.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}}return(o=s).\u0275fac=function(t){return new(t||o)(e.Y36(e.SBq),e.Y36(p.K0),e.Y36(_.tE),e.Y36(H,8),e.Y36(e.sBO))},o.\u0275cmp=e.Xpm({type:o,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-mdc-focus-indicator"],hostVars:8,hostBindings:function(t,i){1&t&&e.NdJ("click",function(r){return i._checkDisabled(r)})("mouseenter",function(){return i._handleMouseEnter()}),2&t&&(e.uIk("role",i.role)("tabindex",i._getTabIndex())("aria-disabled",i.disabled)("disabled",i.disabled||null),e.ekj("mat-mdc-menu-item-highlighted",i._highlighted)("mat-mdc-menu-item-submenu-trigger",i._triggersSubmenu))},inputs:{disabled:"disabled",disableRipple:"disableRipple",role:"role"},exportAs:["matMenuItem"],features:[e.qOj],attrs:lt,ngContentSelectors:ut,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["class","mat-mdc-menu-submenu-icon","viewBox","0 0 5 10","focusable","false","aria-hidden","true",4,"ngIf"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,i){1&t&&(e.F$t(dt),e.Hsn(0),e.TgZ(1,"span",0),e.Hsn(2,1),e.qZA(),e._UZ(3,"div",1),e.YNc(4,ct,2,0,"svg",2)),2&t&&(e.xp6(3),e.Q6J("matRippleDisabled",i.disableRipple||i.disabled)("matRippleTrigger",i._getHostElement()),e.xp6(1),e.Q6J("ngIf",i._triggersSubmenu))},dependencies:[p.O5,u.wG],encapsulation:2,changeDetection:0}),s})();const pt=new e.OlP("MatMenuContent"),k={transformMenu:(0,d.X$)("transformMenu",[(0,d.SB)("void",(0,d.oB)({opacity:0,transform:"scale(0.8)"})),(0,d.eR)("void => enter",(0,d.jt)("120ms cubic-bezier(0, 0, 0.2, 1)",(0,d.oB)({opacity:1,transform:"scale(1)"}))),(0,d.eR)("* => void",(0,d.jt)("100ms 25ms linear",(0,d.oB)({opacity:0})))]),fadeInItems:(0,d.X$)("fadeInItems",[(0,d.SB)("showing",(0,d.oB)({opacity:1})),(0,d.eR)("void => *",[(0,d.oB)({opacity:0}),(0,d.jt)("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])};let ft=0;const Z=new e.OlP("mat-menu-default-options",{providedIn:"root",factory:function _t(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}});let y=(()=>{var o;class s{get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}get overlapTrigger(){return this._overlapTrigger}set overlapTrigger(t){this._overlapTrigger=(0,z.Ig)(t)}get hasBackdrop(){return this._hasBackdrop}set hasBackdrop(t){this._hasBackdrop=(0,z.Ig)(t)}set panelClass(t){const i=this._previousPanelClass;i&&i.length&&i.split(" ").forEach(a=>{this._classList[a]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(" ").forEach(a=>{this._classList[a]=!0}),this._elementRef.nativeElement.className="")}get classList(){return this.panelClass}set classList(t){this.panelClass=t}constructor(t,i,a,r){this._elementRef=t,this._ngZone=i,this._changeDetectorRef=r,this._directDescendantItems=new e.n_E,this._classList={},this._panelAnimationState="void",this._animationDone=new D.x,this.closed=new e.vpe,this.close=this.closed,this.panelId="mat-menu-panel-"+ft++,this.overlayPanelClass=a.overlayPanelClass||"",this._xPosition=a.xPosition,this._yPosition=a.yPosition,this.backdropClass=a.backdropClass,this._overlapTrigger=a.overlapTrigger,this._hasBackdrop=a.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new _.Em(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe((0,A.O)(this._directDescendantItems),(0,Y.w)(t=>(0,R.T)(...t.map(i=>i._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{const i=this._keyManager;if("enter"===this._panelAnimationState&&i.activeItem?._hasFocus()){const a=t.toArray(),r=Math.max(0,Math.min(a.length-1,i.activeItemIndex||0));a[r]&&!a[r].disabled?i.setActiveItem(r):i.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusSubscription?.unsubscribe()}_hovered(){return this._directDescendantItems.changes.pipe((0,A.O)(this._directDescendantItems),(0,Y.w)(i=>(0,R.T)(...i.map(a=>a._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){const i=t.keyCode,a=this._keyManager;switch(i){case m.hY:(0,m.Vb)(t)||(t.preventDefault(),this.closed.emit("keydown"));break;case m.oh:this.parentMenu&&"ltr"===this.direction&&this.closed.emit("keydown");break;case m.SV:this.parentMenu&&"rtl"===this.direction&&this.closed.emit("keydown");break;default:return(i===m.LH||i===m.JH)&&a.setFocusOrigin("keyboard"),void a.onKeydown(t)}t.stopPropagation()}focusFirstItem(t="program"){this._firstItemFocusSubscription?.unsubscribe(),this._firstItemFocusSubscription=this._ngZone.onStable.pipe((0,v.q)(1)).subscribe(()=>{let i=null;if(this._directDescendantItems.length&&(i=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),!i||!i.contains(document.activeElement)){const a=this._keyManager;a.setFocusOrigin(t).setFirstItemActive(),!a.activeItem&&i&&i.focus()}})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){const i=Math.min(this._baseElevation+t,24),a=`${this._elevationPrefix}${i}`,r=Object.keys(this._classList).find(c=>c.startsWith(this._elevationPrefix));(!r||r===this._previousElevation)&&(this._previousElevation&&(this._classList[this._previousElevation]=!1),this._classList[a]=!0,this._previousElevation=a)}setPositionClasses(t=this.xPosition,i=this.yPosition){const a=this._classList;a["mat-menu-before"]="before"===t,a["mat-menu-after"]="after"===t,a["mat-menu-above"]="above"===i,a["mat-menu-below"]="below"===i,this._changeDetectorRef?.markForCheck()}_startAnimation(){this._panelAnimationState="enter"}_resetAnimation(){this._panelAnimationState="void"}_onAnimationDone(t){this._animationDone.next(t),this._isAnimating=!1}_onAnimationStart(t){this._isAnimating=!0,"enter"===t.toState&&0===this._keyManager.activeItemIndex&&(t.element.scrollTop=0)}_updateDirectDescendants(){this._allItems.changes.pipe((0,A.O)(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(i=>i._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}}return(o=s).\u0275fac=function(t){return new(t||o)(e.Y36(e.SBq),e.Y36(e.R0b),e.Y36(Z),e.Y36(e.sBO))},o.\u0275dir=e.lG2({type:o,contentQueries:function(t,i,a){if(1&t&&(e.Suo(a,pt,5),e.Suo(a,I,5),e.Suo(a,I,4)),2&t){let r;e.iGM(r=e.CRH())&&(i.lazyContent=r.first),e.iGM(r=e.CRH())&&(i._allItems=r),e.iGM(r=e.CRH())&&(i.items=r)}},viewQuery:function(t,i){if(1&t&&e.Gf(e.Rgc,5),2&t){let a;e.iGM(a=e.CRH())&&(i.templateRef=a.first)}},inputs:{backdropClass:"backdropClass",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:"overlapTrigger",hasBackdrop:"hasBackdrop",panelClass:["class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"}}),s})(),vt=(()=>{var o;class s extends y{constructor(t,i,a,r){super(t,i,a,r),this._elevationPrefix="mat-elevation-z",this._baseElevation=8}}return(o=s).\u0275fac=function(t){return new(t||o)(e.Y36(e.SBq),e.Y36(e.R0b),e.Y36(Z),e.Y36(e.sBO))},o.\u0275cmp=e.Xpm({type:o,selectors:[["mat-menu"]],hostAttrs:["ngSkipHydration",""],hostVars:3,hostBindings:function(t,i){2&t&&e.uIk("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},exportAs:["matMenu"],features:[e._Bn([{provide:H,useExisting:o}]),e.qOj],ngContentSelectors:ht,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel","mat-mdc-elevation-specific",3,"id","ngClass","keydown","click"],[1,"mat-mdc-menu-content"]],template:function(t,i){1&t&&(e.F$t(),e.YNc(0,mt,3,6,"ng-template"))},dependencies:[p.mk],styles:['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;list-style-type:none}.mat-mdc-menu-content:focus{outline:none}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;white-space:normal;font-family:var(--mat-menu-item-label-text-font);line-height:var(--mat-menu-item-label-text-line-height);font-size:var(--mat-menu-item-label-text-size);letter-spacing:var(--mat-menu-item-label-text-tracking);font-weight:var(--mat-menu-item-label-text-weight)}.mat-mdc-menu-panel{--mat-menu-container-shape:4px;min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape);background-color:var(--mat-menu-container-color);will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;align-items:center;min-height:48px}.mat-mdc-menu-item:focus{outline:none}[dir=rtl] .mat-mdc-menu-item,.mat-mdc-menu-item[dir=rtl]{padding-left:16px;padding-right:16px}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color)}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color)}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item .mat-icon{margin-right:16px}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:16px}.mat-mdc-menu-item.mat-mdc-menu-item-submenu-trigger{padding-right:32px}[dir=rtl] .mat-mdc-menu-item.mat-mdc-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{position:absolute;top:50%;right:16px;transform:translateY(-50%);width:5px;height:10px;fill:currentColor}[dir=rtl] .mat-mdc-menu-submenu-icon{right:auto;left:16px;transform:translateY(-50%) scaleX(-1)}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],encapsulation:2,data:{animation:[k.transformMenu,k.fadeInItems]},changeDetection:0}),s})();const N=new e.OlP("mat-menu-scroll-strategy"),Mt={provide:N,deps:[S.aV],useFactory:function yt(o){return()=>o.scrollStrategies.reposition()}},U=(0,at.i$)({passive:!0});let bt=(()=>{var o;class s{get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){t!==this._menu&&(this._menu=t,this._menuCloseSubscription.unsubscribe(),t&&(this._menuCloseSubscription=t.close.subscribe(i=>{this._destroyMenu(i),("click"===i||"tab"===i)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(i)})),this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu()))}constructor(t,i,a,r,c,h,f,M,b){this._overlay=t,this._element=i,this._viewContainerRef=a,this._menuItemInstance=h,this._dir=f,this._focusMonitor=M,this._ngZone=b,this._overlayRef=null,this._menuOpen=!1,this._closingActionsSubscription=P.w0.EMPTY,this._hoverSubscription=P.w0.EMPTY,this._menuCloseSubscription=P.w0.EMPTY,this._changeDetectorRef=(0,e.f3M)(e.sBO),this._handleTouchStart=x=>{(0,_.yG)(x)||(this._openedBy="touch")},this._openedBy=void 0,this.restoreFocus=!0,this.menuOpened=new e.vpe,this.onMenuOpen=this.menuOpened,this.menuClosed=new e.vpe,this.onMenuClose=this.menuClosed,this._scrollStrategy=r,this._parentMaterialMenu=c instanceof y?c:void 0,i.nativeElement.addEventListener("touchstart",this._handleTouchStart,U)}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,U),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe()}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this.menu)}toggleMenu(){return this._menuOpen?this.closeMenu():this.openMenu()}openMenu(){const t=this.menu;if(this._menuOpen||!t)return;const i=this._createOverlay(t),a=i.getConfig(),r=a.positionStrategy;this._setPosition(t,r),a.hasBackdrop=null==t.hasBackdrop?!this.triggersSubmenu():t.hasBackdrop,i.attach(this._getPortal(t)),t.lazyContent&&t.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.closeMenu()),this._initMenu(t),t instanceof y&&(t._startAnimation(),t._directDescendantItems.changes.pipe((0,E.R)(t.close)).subscribe(()=>{r.withLockedPosition(!1).reapplyLastPosition(),r.withLockedPosition(!0)}))}closeMenu(){this.menu?.close.emit()}focus(t,i){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,i):this._element.nativeElement.focus(i)}updatePosition(){this._overlayRef?.updatePosition()}_destroyMenu(t){if(!this._overlayRef||!this.menuOpen)return;const i=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),this.restoreFocus&&("keydown"===t||!this._openedBy||!this.triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,i instanceof y?(i._resetAnimation(),i.lazyContent?i._animationDone.pipe((0,C.h)(a=>"void"===a.toState),(0,v.q)(1),(0,E.R)(i.lazyContent._attached)).subscribe({next:()=>i.lazyContent.detach(),complete:()=>this._setIsMenuOpen(!1)}):this._setIsMenuOpen(!1)):(this._setIsMenuOpen(!1),i?.lazyContent?.detach())}_initMenu(t){t.parentMenu=this.triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,this._setMenuElevation(t),t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0)}_setMenuElevation(t){if(t.setElevation){let i=0,a=t.parentMenu;for(;a;)i++,a=a.parentMenu;t.setElevation(i)}}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){const i=this._getOverlayConfig(t);this._subscribeToPositions(t,i.positionStrategy),this._overlayRef=this._overlay.create(i),this._overlayRef.keydownEvents().subscribe()}return this._overlayRef}_getOverlayConfig(t){return new S.X_({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:t.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir})}_subscribeToPositions(t,i){t.setPositionClasses&&i.positionChanges.subscribe(a=>{const r="start"===a.connectionPair.overlayX?"after":"before",c="top"===a.connectionPair.overlayY?"below":"above";this._ngZone?this._ngZone.run(()=>t.setPositionClasses(r,c)):t.setPositionClasses(r,c)})}_setPosition(t,i){let[a,r]="before"===t.xPosition?["end","start"]:["start","end"],[c,h]="above"===t.yPosition?["bottom","top"]:["top","bottom"],[f,M]=[c,h],[b,x]=[a,r],w=0;if(this.triggersSubmenu()){if(x=a="before"===t.xPosition?"start":"end",r=b="end"===a?"start":"end",this._parentMaterialMenu){if(null==this._parentInnerPadding){const X=this._parentMaterialMenu.items.first;this._parentInnerPadding=X?X._getHostElement().offsetTop:0}w="bottom"===c?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(f="top"===c?"bottom":"top",M="top"===h?"bottom":"top");i.withPositions([{originX:a,originY:f,overlayX:b,overlayY:c,offsetY:w},{originX:r,originY:f,overlayX:x,overlayY:c,offsetY:w},{originX:a,originY:M,overlayX:b,overlayY:h,offsetY:-w},{originX:r,originY:M,overlayX:x,overlayY:h,offsetY:-w}])}_menuClosingActions(){const t=this._overlayRef.backdropClick(),i=this._overlayRef.detachments(),a=this._parentMaterialMenu?this._parentMaterialMenu.closed:(0,L.of)(),r=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe((0,C.h)(c=>c!==this._menuItemInstance),(0,C.h)(()=>this._menuOpen)):(0,L.of)();return(0,R.T)(t,a,r,i)}_handleMousedown(t){(0,_.X6)(t)||(this._openedBy=0===t.button?"mouse":void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){const i=t.keyCode;(i===m.K5||i===m.L_)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(i===m.SV&&"ltr"===this.dir||i===m.oh&&"rtl"===this.dir)&&(this._openedBy="keyboard",this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){!this.triggersSubmenu()||!this._parentMaterialMenu||(this._hoverSubscription=this._parentMaterialMenu._hovered().pipe((0,C.h)(t=>t===this._menuItemInstance&&!t.disabled),$(0,G.E)).subscribe(()=>{this._openedBy="mouse",this.menu instanceof y&&this.menu._isAnimating?this.menu._animationDone.pipe((0,v.q)(1),$(0,G.E),(0,E.R)(this._parentMaterialMenu._hovered())).subscribe(()=>this.openMenu()):this.openMenu()}))}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new st.UE(t.templateRef,this._viewContainerRef)),this._portal}}return(o=s).\u0275fac=function(t){return new(t||o)(e.Y36(S.aV),e.Y36(e.SBq),e.Y36(e.s_b),e.Y36(N),e.Y36(H,8),e.Y36(I,10),e.Y36(ot.Is,8),e.Y36(_.tE),e.Y36(e.R0b))},o.\u0275dir=e.lG2({type:o,hostVars:3,hostBindings:function(t,i){1&t&&e.NdJ("click",function(r){return i._handleClick(r)})("mousedown",function(r){return i._handleMousedown(r)})("keydown",function(r){return i._handleKeydown(r)}),2&t&&e.uIk("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:["mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:["matMenuTriggerFor","menu"],menuData:["matMenuTriggerData","menuData"],restoreFocus:["matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"}}),s})(),xt=(()=>{var o;class s extends bt{}return(o=s).\u0275fac=function(){let n;return function(i){return(n||(n=e.n5z(o)))(i||o)}}(),o.\u0275dir=e.lG2({type:o,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],exportAs:["matMenuTrigger"],features:[e.qOj]}),s})(),Q=(()=>{var o;class s{}return(o=s).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[Mt],imports:[p.ez,u.si,u.BQ,S.U8,rt.ZD,u.BQ]}),s})(),wt=(()=>{var o;class s{}return(o=s).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[O,Q,O,Q]}),s})();var Tt=l(8153),Ct=l(7509);let St=(()=>{var o;class s{constructor(){this.authFacade=(0,e.f3M)(Tt.j)}logout(){this.authFacade.logout()}}return(o=s).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-layout-header"]],standalone:!0,features:[e.jDz],decls:26,vars:1,consts:[[1,"nav-items"],["fullButton","","mat-icon-button","",3,"matMenuTriggerFor"],["fullButton",""],["routerLink","/about"],[1,"title"],[1,"spacer"],["fullButton","",3,"click"],["yPosition","above","xPosition","before"],["menu","matMenu"],["mat-menu-item",""],["routerLink","/dashboard",1,"w-full"],["routerLink","/checkbox",1,"w-full"],["routerLink","/dynamic-form",1,"w-full"]],template:function(t,i){if(1&t&&(e.TgZ(0,"nav",0)(1,"li")(2,"button",1),e._uU(3," Components "),e.qZA()(),e.TgZ(4,"li")(5,"button",2)(6,"a",3),e._uU(7,"About"),e.qZA()()()(),e.TgZ(8,"div",4)(9,"span"),e._uU(10,"Kostas Mavrokoukoulakis"),e.qZA()(),e.TgZ(11,"div",5)(12,"button",6),e.NdJ("click",function(){return i.logout()}),e.TgZ(13,"span"),e._uU(14,"Logout"),e.qZA()()(),e.TgZ(15,"mat-menu",7,8)(17,"button",9)(18,"a",10),e._uU(19,"Dashboard"),e.qZA()(),e.TgZ(20,"button",9)(21,"a",11),e._uU(22,"Checkbox"),e.qZA()(),e.TgZ(23,"button",9)(24,"a",12),e._uU(25,"Dynamic Form"),e.qZA()()()),2&t){const a=e.MAs(16);e.xp6(2),e.Q6J("matMenuTriggerFor",a)}},dependencies:[p.ez,T.Bz,T.rH,wt,vt,I,xt,Ct.$],styles:["[_nghost-%COMP%]{display:flex;align-items:center;gap:1rem;width:100%;padding:.25rem;list-style-type:none;padding:.5rem 1rem;background-color:var(--neutral);box-shadow:0 4px 6px #0000001a}[_nghost-%COMP%]   .nav-items[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;width:100%}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:1rem;width:100%}[_nghost-%COMP%]   .spacer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;width:100%}"]}),s})(),It=(()=>{var o;class s{}return(o=s).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-layout"]],standalone:!0,features:[e.jDz],decls:5,vars:0,consts:[[1,"layout-content"],[1,"layout-outlet"]],template:function(t,i){1&t&&(e._UZ(0,"app-layout-header"),e.TgZ(1,"main",0)(2,"div",1),e.ynx(3),e._UZ(4,"router-outlet"),e.BQk(),e.qZA()())},dependencies:[p.ez,T.Bz,T.lC,St],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;height:100%}.layout-header[_ngcontent-%COMP%]{width:100%;height:64px;background-color:#2f4050;color:#fff;display:flex;justify-content:flex-start;align-items:center;padding:0 16px;box-sizing:border-box;box-shadow:0 2px 8px #00000026}.layout-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;padding:1rem;width:100%;height:100%;background-color:var(--secondary);overflow:auto}.layout-content[_ngcontent-%COMP%]   .layout-outlet[_ngcontent-%COMP%]{height:100%;width:100%}"]}),s})()}}]);