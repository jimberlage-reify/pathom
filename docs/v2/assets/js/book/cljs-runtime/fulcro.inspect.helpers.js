goog.provide('fulcro.inspect.helpers');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client.mutations');
goog.require('fulcro.inspect.lib.local_storage');
fulcro.inspect.helpers.om_ident_QMARK_ = (function fulcro$inspect$helpers$om_ident_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x))) && ((cljs.core.first(x) instanceof cljs.core.Keyword)));
});
fulcro.inspect.helpers.query_component = (function fulcro$inspect$helpers$query_component(var_args){
var G__66221 = arguments.length;
switch (G__66221) {
case 1:
return fulcro.inspect.helpers.query_component.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.inspect.helpers.query_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.inspect.helpers.query_component.cljs$core$IFn$_invoke$arity$1 = (function (this$){
var component = fulcro.client.primitives.react_type(this$);
var ref = fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(this$);
var state = cljs.core.deref(fulcro.client.primitives.app_state(fulcro.client.primitives.get_reconciler(this$)));
var query = fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(component);
return fulcro.client.primitives.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ref),state);
});

fulcro.inspect.helpers.query_component.cljs$core$IFn$_invoke$arity$2 = (function (this$,focus_path){
var component = fulcro.client.primitives.react_type(this$);
var ref = fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(this$);
var state = cljs.core.deref(fulcro.client.primitives.app_state(fulcro.client.primitives.get_reconciler(this$)));
var query = fulcro.client.primitives.focus_query(fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(component),focus_path);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ref),state),focus_path);
});

fulcro.inspect.helpers.query_component.cljs$lang$maxFixedArity = 2;

fulcro.inspect.helpers.swap_entity_BANG_ = (function fulcro$inspect$helpers$swap_entity_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66479 = arguments.length;
var i__4731__auto___66480 = (0);
while(true){
if((i__4731__auto___66480 < len__4730__auto___66479)){
args__4736__auto__.push((arguments[i__4731__auto___66480]));

var G__66481 = (i__4731__auto___66480 + (1));
i__4731__auto___66480 = G__66481;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__66241,args){
var map__66242 = p__66241;
var map__66242__$1 = (((((!((map__66242 == null))))?(((((map__66242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66242):map__66242);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66242__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66242__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.swap_BANG_,state,cljs.core.update_in,ref,args);
});

fulcro.inspect.helpers.swap_entity_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
fulcro.inspect.helpers.swap_entity_BANG_.cljs$lang$applyTo = (function (seq66230){
var G__66231 = cljs.core.first(seq66230);
var seq66230__$1 = cljs.core.next(seq66230);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66231,seq66230__$1);
});

fulcro.inspect.helpers.resolve_path = (function fulcro$inspect$helpers$resolve_path(state,path){
var G__66254 = path;
var vec__66255 = G__66254;
var seq__66256 = cljs.core.seq(vec__66255);
var first__66257 = cljs.core.first(seq__66256);
var seq__66256__$1 = cljs.core.next(seq__66256);
var h = first__66257;
var t = seq__66256__$1;
var new_path = cljs.core.PersistentVector.EMPTY;
var G__66254__$1 = G__66254;
var new_path__$1 = new_path;
while(true){
var vec__66261 = G__66254__$1;
var seq__66262 = cljs.core.seq(vec__66261);
var first__66263 = cljs.core.first(seq__66262);
var seq__66262__$1 = cljs.core.next(seq__66262);
var h__$1 = first__66263;
var t__$1 = seq__66262__$1;
var new_path__$2 = new_path__$1;
if(cljs.core.truth_(h__$1)){
var np = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_path__$2,h__$1);
var c = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,np);
if(fulcro.inspect.helpers.om_ident_QMARK_(c)){
var G__66484 = t__$1;
var G__66485 = c;
G__66254__$1 = G__66484;
new_path__$1 = G__66485;
continue;
} else {
var G__66486 = t__$1;
var G__66487 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_path__$2,h__$1);
G__66254__$1 = G__66486;
new_path__$1 = G__66487;
continue;
}
} else {
return new_path__$2;
}
break;
}
});
/**
 * Like get-in, but will resolve path before reading it.
 */
fulcro.inspect.helpers.get_in_path = (function fulcro$inspect$helpers$get_in_path(state,path){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,fulcro.inspect.helpers.resolve_path(state,path));
});
fulcro.inspect.helpers.swap_in_BANG_ = (function fulcro$inspect$helpers$swap_in_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66493 = arguments.length;
var i__4731__auto___66494 = (0);
while(true){
if((i__4731__auto___66494 < len__4730__auto___66493)){
args__4736__auto__.push((arguments[i__4731__auto___66494]));

var G__66499 = (i__4731__auto___66494 + (1));
i__4731__auto___66494 = G__66499;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fulcro.inspect.helpers.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fulcro.inspect.helpers.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__66281,path,args){
var map__66282 = p__66281;
var map__66282__$1 = (((((!((map__66282 == null))))?(((((map__66282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66282):map__66282);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66282__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66282__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var path__$1 = fulcro.inspect.helpers.resolve_path(cljs.core.deref(state),cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref,path));
if(cljs.core.truth_((function (){var and__4120__auto__ = path__$1;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),path__$1);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.swap_BANG_,state,cljs.core.update_in,path__$1,args);
} else {
return null;
}
});

fulcro.inspect.helpers.swap_in_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fulcro.inspect.helpers.swap_in_BANG_.cljs$lang$applyTo = (function (seq66274){
var G__66275 = cljs.core.first(seq66274);
var seq66274__$1 = cljs.core.next(seq66274);
var G__66276 = cljs.core.first(seq66274__$1);
var seq66274__$2 = cljs.core.next(seq66274__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66275,G__66276,seq66274__$2);
});

/**
 * Integrate an ident into any number of places in the app state. This function is safe to use within mutation
 *   implementations as a general helper function.
 *   The named parameters can be specified any number of times. They are:
 *   - set: A vector (path) to a list in your app state where this new object's ident should be set.
 *   - append:  A vector (path) to a list in your app state where this new object's ident should be appended. Will not append
 *   the ident if that ident is already in the list.
 *   - prepend: A vector (path) to a list in your app state where this new object's ident should be prepended. Will not append
 *   the ident if that ident is already in the list.
 *   - replace: A vector (path) to a specific location in app-state where this object's ident should be placed. Can target a to-one or to-many.
 * If the target is a vector element then that element must already exist in the vector.
 */
fulcro.inspect.helpers.integrate_ident = (function fulcro$inspect$helpers$integrate_ident(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66515 = arguments.length;
var i__4731__auto___66516 = (0);
while(true){
if((i__4731__auto___66516 < len__4730__auto___66515)){
args__4736__auto__.push((arguments[i__4731__auto___66516]));

var G__66519 = (i__4731__auto___66516 + (1));
i__4731__auto___66516 = G__66519;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fulcro.inspect.helpers.integrate_ident.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fulcro.inspect.helpers.integrate_ident.cljs$core$IFn$_invoke$arity$variadic = (function (state,ident,named_parameters){
if(cljs.core.map_QMARK_(state)){
} else {
throw (new Error("Assert failed: (map? state)"));
}

var actions = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),named_parameters);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (actions){
return (function (state__$1,p__66324){
var vec__66328 = p__66324;
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66328,(0),null);
var data_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66328,(1),null);
var already_has_ident_at_path_QMARK_ = ((function (vec__66328,command,data_path,actions){
return (function (data_path__$1){
return cljs.core.some(((function (vec__66328,command,data_path,actions){
return (function (p1__66289_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__66289_SHARP_,ident);
});})(vec__66328,command,data_path,actions))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,data_path__$1));
});})(vec__66328,command,data_path,actions))
;
var G__66331 = command;
var G__66331__$1 = (((G__66331 instanceof cljs.core.Keyword))?G__66331.fqn:null);
switch (G__66331__$1) {
case "set":
return cljs.core.assoc_in(state__$1,data_path,ident);

break;
case "prepend":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_(data_path))){
return state__$1;
} else {
if(cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,data_path))){
} else {
throw (new Error(["Assert failed: ",["Path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_path)," for prepend must target an app-state vector."].join(''),"\n","(vector? (get-in state data-path))"].join('')));
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state__$1,data_path,((function (G__66331,G__66331__$1,already_has_ident_at_path_QMARK_,vec__66328,command,data_path,actions){
return (function (p1__66290_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident], null),p1__66290_SHARP_);
});})(G__66331,G__66331__$1,already_has_ident_at_path_QMARK_,vec__66328,command,data_path,actions))
);
}

break;
case "append":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_(data_path))){
return state__$1;
} else {
if(cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,data_path))){
} else {
throw (new Error(["Assert failed: ",["Path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_path)," for append must target an app-state vector."].join(''),"\n","(vector? (get-in state data-path))"].join('')));
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,data_path,cljs.core.conj,ident);
}

break;
case "replace":
var path_to_vector = cljs.core.butlast(data_path);
var to_many_QMARK_ = ((cljs.core.seq(path_to_vector)) && (cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,path_to_vector))));
var index = cljs.core.last(data_path);
var vector = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,path_to_vector);
if(cljs.core.vector_QMARK_(data_path)){
} else {
throw (new Error(["Assert failed: ",["Replacement path must be a vector. You passed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_path)].join(''),"\n","(vector? data-path)"].join('')));
}

if(to_many_QMARK_){
if(cljs.core.vector_QMARK_(vector)){
} else {
throw (new Error(["Assert failed: ","Path for replacement must be a vector","\n","(vector? vector)"].join('')));
}

if(typeof index === 'number'){
} else {
throw (new Error(["Assert failed: ","Path for replacement must end in a vector index","\n","(number? index)"].join('')));
}

if(cljs.core.contains_QMARK_(vector,index)){
} else {
throw (new Error(["Assert failed: ",["Target vector for replacement does not have an item at index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),"\n","(contains? vector index)"].join('')));
}
} else {
}

return cljs.core.assoc_in(state__$1,data_path,ident);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unknown post-op to merge-state!: ",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),command,new cljs.core.Keyword(null,"arg","arg",-1747261837),data_path], null));

}
});})(actions))
,state,actions);
});

fulcro.inspect.helpers.integrate_ident.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fulcro.inspect.helpers.integrate_ident.cljs$lang$applyTo = (function (seq66306){
var G__66307 = cljs.core.first(seq66306);
var seq66306__$1 = cljs.core.next(seq66306);
var G__66308 = cljs.core.first(seq66306__$1);
var seq66306__$2 = cljs.core.next(seq66306__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66307,G__66308,seq66306__$2);
});

fulcro.inspect.helpers.merge_entity = (function fulcro$inspect$helpers$merge_entity(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66548 = arguments.length;
var i__4731__auto___66549 = (0);
while(true){
if((i__4731__auto___66549 < len__4730__auto___66548)){
args__4736__auto__.push((arguments[i__4731__auto___66549]));

var G__66551 = (i__4731__auto___66549 + (1));
i__4731__auto___66549 = G__66551;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return fulcro.inspect.helpers.merge_entity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

fulcro.inspect.helpers.merge_entity.cljs$core$IFn$_invoke$arity$variadic = (function (state,x,data,named_parameters){

var idents = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$3((function (){
if((typeof fulcro !== 'undefined') && (typeof fulcro.inspect !== 'undefined') && (typeof fulcro.inspect.helpers !== 'undefined') && (typeof fulcro.inspect.helpers.t_fulcro$inspect$helpers66354 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {fulcro.client.primitives.IQuery}
 * @implements {cljs.core.IWithMeta}
*/
fulcro.inspect.helpers.t_fulcro$inspect$helpers66354 = (function (state,x,data,named_parameters,meta66355){
this.state = state;
this.x = x;
this.data = data;
this.named_parameters = named_parameters;
this.meta66355 = meta66355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
fulcro.inspect.helpers.t_fulcro$inspect$helpers66354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66356,meta66355__$1){
var self__ = this;
var _66356__$1 = this;
return (new fulcro.inspect.helpers.t_fulcro$inspect$helpers66354(self__.state,self__.x,self__.data,self__.named_parameters,meta66355__$1));
});

fulcro.inspect.helpers.t_fulcro$inspect$helpers66354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66356){
var self__ = this;
var _66356__$1 = this;
return self__.meta66355;
});

fulcro.inspect.helpers.t_fulcro$inspect$helpers66354.prototype.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.inspect.helpers.t_fulcro$inspect$helpers66354.prototype.fulcro$client$primitives$IQuery$query$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.helpers","root","fulcro.inspect.helpers/root",-1338874925),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(self__.x)], null)], null);
});

fulcro.inspect.helpers.t_fulcro$inspect$helpers66354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"named-parameters","named-parameters",2053922585,null),new cljs.core.Symbol(null,"meta66355","meta66355",200144717,null)], null);
});

fulcro.inspect.helpers.t_fulcro$inspect$helpers66354.cljs$lang$type = true;

fulcro.inspect.helpers.t_fulcro$inspect$helpers66354.cljs$lang$ctorStr = "fulcro.inspect.helpers/t_fulcro$inspect$helpers66354";

fulcro.inspect.helpers.t_fulcro$inspect$helpers66354.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"fulcro.inspect.helpers/t_fulcro$inspect$helpers66354");
});

/**
 * Positional factory function for fulcro.inspect.helpers/t_fulcro$inspect$helpers66354.
 */
fulcro.inspect.helpers.__GT_t_fulcro$inspect$helpers66354 = (function fulcro$inspect$helpers$__GT_t_fulcro$inspect$helpers66354(state__$1,x__$1,data__$1,named_parameters__$1,meta66355){
return (new fulcro.inspect.helpers.t_fulcro$inspect$helpers66354(state__$1,x__$1,data__$1,named_parameters__$1,meta66355));
});

}

return (new fulcro.inspect.helpers.t_fulcro$inspect$helpers66354(state,x,data,named_parameters,cljs.core.PersistentArrayMap.EMPTY));
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.helpers","root","fulcro.inspect.helpers/root",-1338874925),data], null),true),new cljs.core.Keyword("fulcro.inspect.helpers","root","fulcro.inspect.helpers/root",-1338874925),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("fulcro.client.primitives","tables","fulcro.client.primitives/tables",-1418944816)], 0));
var root_ident = fulcro.client.primitives.ident(x,data);
var state__$1 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,idents], 0));
if(cljs.core.seq(named_parameters)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(fulcro.inspect.helpers.integrate_ident,state__$1,root_ident,named_parameters);
} else {
return state__$1;
}
});

fulcro.inspect.helpers.merge_entity.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fulcro.inspect.helpers.merge_entity.cljs$lang$applyTo = (function (seq66342){
var G__66343 = cljs.core.first(seq66342);
var seq66342__$1 = cljs.core.next(seq66342);
var G__66344 = cljs.core.first(seq66342__$1);
var seq66342__$2 = cljs.core.next(seq66342__$1);
var G__66345 = cljs.core.first(seq66342__$2);
var seq66342__$3 = cljs.core.next(seq66342__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66343,G__66344,G__66345,seq66342__$3);
});

fulcro.inspect.helpers.create_entity_BANG_ = (function fulcro$inspect$helpers$create_entity_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66561 = arguments.length;
var i__4731__auto___66562 = (0);
while(true){
if((i__4731__auto___66562 < len__4730__auto___66561)){
args__4736__auto__.push((arguments[i__4731__auto___66562]));

var G__66563 = (i__4731__auto___66562 + (1));
i__4731__auto___66562 = G__66563;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return fulcro.inspect.helpers.create_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

fulcro.inspect.helpers.create_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__66372,x,data,named_parameters){
var map__66374 = p__66372;
var map__66374__$1 = (((((!((map__66374 == null))))?(((((map__66374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66374):map__66374);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66374__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66374__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var named_parameters__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__66374,map__66374__$1,state,ref){
return (function (p__66378){
var vec__66379 = p__66378;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66379,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66379,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,path)], null);
});})(map__66374,map__66374__$1,state,ref))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),named_parameters)));
var data_SINGLEQUOTE_ = (cljs.core.truth_(new cljs.core.Keyword("fulcro.inspect.helpers","initialized","fulcro.inspect.helpers/initialized",-1739021626).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(data)))?data:fulcro.client.primitives.get_initial_state(x,data));
cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.swap_BANG_,state,fulcro.inspect.helpers.merge_entity,x,data_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([named_parameters__$1], 0));

return data_SINGLEQUOTE_;
});

fulcro.inspect.helpers.create_entity_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fulcro.inspect.helpers.create_entity_BANG_.cljs$lang$applyTo = (function (seq66363){
var G__66364 = cljs.core.first(seq66363);
var seq66363__$1 = cljs.core.next(seq66363);
var G__66365 = cljs.core.first(seq66363__$1);
var seq66363__$2 = cljs.core.next(seq66363__$1);
var G__66366 = cljs.core.first(seq66363__$2);
var seq66363__$3 = cljs.core.next(seq66363__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66364,G__66365,G__66366,seq66363__$3);
});

fulcro.inspect.helpers.dissoc_in = (function fulcro$inspect$helpers$dissoc_in(m,path){
var G__66391 = m;
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,cljs.core.butlast(path)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__66391,cljs.core.butlast(path),cljs.core.dissoc,cljs.core.last(path));
} else {
return G__66391;
}
});
fulcro.inspect.helpers.deep_remove_ref = (function fulcro$inspect$helpers$deep_remove_ref(state,ref){

var item = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ref);
var idents = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$1(((function (item){
return (function (v){
if(fulcro.inspect.helpers.om_ident_QMARK_(v)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
} else {
if(((cljs.core.vector_QMARK_(v)) && (cljs.core.every_QMARK_(fulcro.inspect.helpers.om_ident_QMARK_,v)))){
return v;
} else {
return null;
}
}
});})(item))
),cljs.core.cat),cljs.core.vals(item));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (item,idents){
return (function (s,i){
return (fulcro.inspect.helpers.deep_remove_ref.cljs$core$IFn$_invoke$arity$2 ? fulcro.inspect.helpers.deep_remove_ref.cljs$core$IFn$_invoke$arity$2(s,i) : fulcro.inspect.helpers.deep_remove_ref.call(null,s,i));
});})(item,idents))
,fulcro.inspect.helpers.dissoc_in(state,ref),idents);
});
fulcro.inspect.helpers.remove_edge_BANG_ = (function fulcro$inspect$helpers$remove_edge_BANG_(p__66406,field){
var map__66407 = p__66406;
var map__66407__$1 = (((((!((map__66407 == null))))?(((((map__66407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66407):map__66407);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66407__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66407__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var children = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,field));
if(fulcro.inspect.helpers.om_ident_QMARK_(children)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (children,map__66407,map__66407__$1,state,ref){
return (function (p1__66400_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__66400_SHARP_,ref,cljs.core.dissoc,field);
});})(children,map__66407,map__66407__$1,state,ref))
,((function (children,map__66407,map__66407__$1,state,ref){
return (function (p1__66401_SHARP_){
return fulcro.inspect.helpers.deep_remove_ref(p1__66401_SHARP_,children);
});})(children,map__66407,map__66407__$1,state,ref))
));
} else {
if(cljs.core.seq(children)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (children,map__66407,map__66407__$1,state,ref){
return (function (p1__66402_SHARP_){
return cljs.core.assoc_in(p1__66402_SHARP_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,field),cljs.core.PersistentVector.EMPTY);
});})(children,map__66407,map__66407__$1,state,ref))
,((function (children,map__66407,map__66407__$1,state,ref){
return (function (p1__66404_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(fulcro.inspect.helpers.deep_remove_ref,p1__66404_SHARP_,children);
});})(children,map__66407,map__66407__$1,state,ref))
));
} else {
return null;
}
}
});
fulcro.inspect.helpers.vec_remove_index = (function fulcro$inspect$helpers$vec_remove_index(i,v){

return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),i),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(i + (1)),cljs.core.count(v))));
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("fulcro.inspect.helpers","persistent-set-props","fulcro.inspect.helpers/persistent-set-props",-1753072879,null),(function (fulcro_incoming_env,_,p__66424){
var map__66425 = p__66424;
var map__66425__$1 = (((((!((map__66425 == null))))?(((((map__66425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66425):map__66425);
var local_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66425__$1,new cljs.core.Keyword("fulcro.inspect.helpers","local-key","fulcro.inspect.helpers/local-key",-858551382));
var storage_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66425__$1,new cljs.core.Keyword("fulcro.inspect.helpers","storage-key","fulcro.inspect.helpers/storage-key",1801490937));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66425__$1,new cljs.core.Keyword("fulcro.inspect.helpers","value","fulcro.inspect.helpers/value",1147993961));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = fulcro_incoming_env;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env,map__66425,map__66425__$1,local_key,storage_key,value){
return (function (){
fulcro.inspect.lib.local_storage.set_BANG_(storage_key,value);

return fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc,local_key,value], 0));
});})(env,map__66425,map__66425__$1,local_key,storage_key,value))
], null);
})()], 0));
}));
fulcro.inspect.helpers.persistent_set_BANG_ = (function fulcro$inspect$helpers$persistent_set_BANG_(comp,local_key,storage_key,value){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(comp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.helpers","persistent-set-props","fulcro.inspect.helpers/persistent-set-props",-1753072879,null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.helpers","local-key","fulcro.inspect.helpers/local-key",-858551382),local_key,new cljs.core.Keyword("fulcro.inspect.helpers","storage-key","fulcro.inspect.helpers/storage-key",1801490937),storage_key,new cljs.core.Keyword("fulcro.inspect.helpers","value","fulcro.inspect.helpers/value",1147993961),value], null),null,(1),null)),(2),null)),local_key], null));
});
fulcro.inspect.helpers.normalize_id = (function fulcro$inspect$helpers$normalize_id(id){
var temp__5718__auto__ = cljs.core.re_find(/(.+?)(-\d+)$/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__66434 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66434,(0),null);
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66434,(1),null);
if((id instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(prefix,(1)));
} else {
if((id instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(prefix);
} else {
return prefix;

}
}
} else {
return id;
}
});
/**
 * Extracts the app uuid from a ident.
 */
fulcro.inspect.helpers.ref_app_uuid = (function fulcro$inspect$helpers$ref_app_uuid(ref){
if(((cljs.core.vector_QMARK_(ref)) && (cljs.core.vector_QMARK_(cljs.core.second(ref))))){
} else {
throw (new Error(["Assert failed: ","Ref with app it must be in the format: [:id-key [::app-id app-id]]","\n","(and (vector? ref) (vector? (second ref)))"].join('')));
}

var vec__66439 = ref;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66439,(0),null);
var vec__66442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66439,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66442,(0),null);
var app_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66442,(1),null);
return app_id;
});
fulcro.inspect.helpers.ref_app_id = (function fulcro$inspect$helpers$ref_app_id(state,ref){
var app_uuid = fulcro.inspect.helpers.ref_app_uuid(ref);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.inspector","id","fulcro.inspect.ui.inspector/id",-803234094),app_uuid,new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233)], null));
});
/**
 * Read app uuid from a component
 */
fulcro.inspect.helpers.comp_app_uuid = (function fulcro$inspect$helpers$comp_app_uuid(comp){
return fulcro.inspect.helpers.ref_app_uuid(fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(comp));
});
fulcro.inspect.helpers.all_apps = (function fulcro$inspect$helpers$all_apps(state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.multi-inspector","multi-inspector","fulcro.inspect.ui.multi-inspector/multi-inspector",1353666037),"main",new cljs.core.Keyword("fulcro.inspect.ui.multi-inspector","inspectors","fulcro.inspect.ui.multi-inspector/inspectors",-1565317572)], null));
});
fulcro.inspect.helpers.matching_apps = (function fulcro$inspect$helpers$matching_apps(state,app_id){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filterv((function (p1__66449_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app_id,new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,p1__66449_SHARP_)));
}),fulcro.inspect.helpers.all_apps(state)));
});
fulcro.inspect.helpers.update_matching_apps = (function fulcro$inspect$helpers$update_matching_apps(state,app_id,f){
var apps = fulcro.inspect.helpers.matching_apps(state,app_id);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (apps){
return (function (s,app){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(s,app) : f.call(null,s,app));
});})(apps))
,state,apps);
});
fulcro.inspect.helpers.remote_mutation = (function fulcro$inspect$helpers$remote_mutation(p__66456,key){
var map__66457 = p__66456;
var map__66457__$1 = (((((!((map__66457 == null))))?(((((map__66457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66457):map__66457);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66457__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66457__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"key","key",-1516042587),key),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491)], null),fulcro.inspect.helpers.ref_app_uuid(ref));
});
fulcro.inspect.helpers.pprint = (function fulcro$inspect$helpers$pprint(x){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__66461_66607 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__66462_66608 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__66463_66609 = true;
var _STAR_print_fn_STAR__temp_val__66464_66610 = ((function (_STAR_print_newline_STAR__orig_val__66461_66607,_STAR_print_fn_STAR__orig_val__66462_66608,_STAR_print_newline_STAR__temp_val__66463_66609,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__66461_66607,_STAR_print_fn_STAR__orig_val__66462_66608,_STAR_print_newline_STAR__temp_val__66463_66609,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__66463_66609;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__66464_66610;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__66462_66608;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__66461_66607;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});

//# sourceMappingURL=fulcro.inspect.helpers.js.map
