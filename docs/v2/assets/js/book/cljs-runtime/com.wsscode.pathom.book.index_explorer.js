goog.provide('com.wsscode.pathom.book.index_explorer');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.book.app_types');
goog.require('com.wsscode.pathom.book.interactive_parser');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.fulcro.network');
goog.require('com.wsscode.pathom.viz.index_explorer');
goog.require('fulcro.client');
goog.require('fulcro.client.data_fetch');
goog.require('fulcro.client.localized_dom');
goog.require('fulcro.client.mutations');
goog.require('fulcro.client.primitives');
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.book !== 'undefined') && (typeof com.wsscode.pathom.book.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper = (function com$wsscode$pathom$book$index_explorer$IndexExplorerWrapper(){
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","IndexExplorerWrapper","com.wsscode.pathom.book.index-explorer/IndexExplorerWrapper",32361961),com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper);

var x66833_66897 = com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper.prototype;
x66833_66897.render = ((function (x66833_66897){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__66834 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__66835 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__66836 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__66837 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__66838 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__66839 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__66840 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__66841 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__66842 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__66843 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__66839;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__66840;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__66841;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__66842;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__66843;

try{var map__66845 = fulcro.client.primitives.props(this$);
var map__66845__$1 = (((((!((map__66845 == null))))?(((((map__66845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66845):map__66845);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66845__$1,new cljs.core.Keyword("ui","root","ui/root",-448656785));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),(com.wsscode.pathom.viz.index_explorer.index_explorer.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.index_explorer.cljs$core$IFn$_invoke$arity$1(root) : com.wsscode.pathom.viz.index_explorer.index_explorer.call(null,root))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__66838;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__66837;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__66836;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__66835;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__66834;
}});})(x66833_66897))
;


com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper.prototype.constructor = com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper;

com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper.prototype.constructor.displayName = "com.wsscode.pathom.book.index-explorer/IndexExplorerWrapper";

com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper.prototype.fulcro$isComponent = true;

var x66847_66898 = com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper;
x66847_66898.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x66847_66898.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x66847_66898){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null)], null);
});})(x66847_66898))
;

x66847_66898.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x66847_66898){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x66847_66898))
;

x66847_66898.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x66847_66898.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x66847_66898){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),"singleton"], null)], null);
});})(x66847_66898))
;

x66847_66898.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x66847_66898.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x66847_66898){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.IndexExplorer)], null)], null);
});})(x66847_66898))
;


var x66848_66899 = com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper.prototype;
x66848_66899.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x66848_66899.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x66848_66899){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null)], null);
});})(x66848_66899))
;

x66848_66899.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x66848_66899){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x66848_66899))
;

x66848_66899.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x66848_66899.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x66848_66899){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),"singleton"], null)], null);
});})(x66848_66899))
;

x66848_66899.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x66848_66899.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x66848_66899){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.IndexExplorer)], null)], null);
});})(x66848_66899))
;


com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper.cljs$lang$type = true;

com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper.cljs$lang$ctorStr = "com.wsscode.pathom.book.index-explorer/IndexExplorerWrapper";

com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.book.index-explorer/IndexExplorerWrapper");
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.book !== 'undefined') && (typeof com.wsscode.pathom.book.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper = (function com$wsscode$pathom$book$index_explorer$AttributeGraphPanelWrapper(){
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","AttributeGraphPanelWrapper","com.wsscode.pathom.book.index-explorer/AttributeGraphPanelWrapper",-167480038),com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper);

var x66854_66900 = com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper.prototype;
x66854_66900.render = ((function (x66854_66900){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__66856 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__66857 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__66858 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__66859 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__66860 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__66861 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__66862 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__66863 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__66864 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__66865 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__66861;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__66862;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__66863;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__66864;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__66865;

try{var map__66867 = fulcro.client.primitives.props(this$);
var map__66867__$1 = (((((!((map__66867 == null))))?(((((map__66867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66867):map__66867);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66867__$1,new cljs.core.Keyword("ui","root","ui/root",-448656785));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66867__$1,new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),(com.wsscode.pathom.viz.index_explorer.attribute_graph_panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_graph_panel.cljs$core$IFn$_invoke$arity$2(root,index) : com.wsscode.pathom.viz.index_explorer.attribute_graph_panel.call(null,root,index))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__66860;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__66859;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__66858;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__66857;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__66856;
}});})(x66854_66900))
;


com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper.prototype.constructor = com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper;

com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper.prototype.constructor.displayName = "com.wsscode.pathom.book.index-explorer/AttributeGraphPanelWrapper";

com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper.prototype.fulcro$isComponent = true;

var x66869_66907 = com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper;
x66869_66907.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x66869_66907.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x66869_66907){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),cljs.core.PersistentArrayMap.EMPTY], null)], null);
});})(x66869_66907))
;

x66869_66907.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x66869_66907){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x66869_66907))
;

x66869_66907.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x66869_66907.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x66869_66907){
return (function (this$,p__66870){
var map__66871 = p__66870;
var map__66871__$1 = (((((!((map__66871 == null))))?(((((map__66871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66871):map__66871);
var data = map__66871__$1;
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66871__$1,new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190));
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","root","ui/root",-448656785),data,new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190),index], null);
});})(x66869_66907))
;

x66869_66907.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x66869_66907.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x66869_66907){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationIndex)], null)], null)], null)], null);
});})(x66869_66907))
;


var x66873_66912 = com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper.prototype;
x66873_66912.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x66873_66912.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x66873_66912){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),cljs.core.PersistentArrayMap.EMPTY], null)], null);
});})(x66873_66912))
;

x66873_66912.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x66873_66912){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x66873_66912))
;

x66873_66912.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x66873_66912.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x66873_66912){
return (function (this$,p__66874){
var map__66875 = p__66874;
var map__66875__$1 = (((((!((map__66875 == null))))?(((((map__66875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66875):map__66875);
var data = map__66875__$1;
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66875__$1,new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190));
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","root","ui/root",-448656785),data,new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190),index], null);
});})(x66873_66912))
;

x66873_66912.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x66873_66912.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x66873_66912){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationIndex)], null)], null)], null)], null);
});})(x66873_66912))
;


com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper.cljs$lang$type = true;

com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper.cljs$lang$ctorStr = "com.wsscode.pathom.book.index-explorer/AttributeGraphPanelWrapper";

com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.book.index-explorer/AttributeGraphPanelWrapper");
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.book.index-explorer","force-refresh","com.wsscode.pathom.book.index-explorer/force-refresh",-1309472747,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__66877 = fulcro_incoming_env;
var map__66877__$1 = (((((!((map__66877 == null))))?(((((map__66877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66877):map__66877);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66877__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__66877,map__66877__$1,reconciler){
return (function (){
return setTimeout(((function (map__66877,map__66877__$1,reconciler){
return (function (){
return fulcro.client.primitives.force_root_render_BANG_(reconciler);
});})(map__66877,map__66877__$1,reconciler))
,(300));
});})(map__66877,map__66877__$1,reconciler))
], null);
})()], 0));
}));
com.wsscode.pathom.book.index_explorer.index_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.index-explorer","index-resolver","com.wsscode.pathom.book.index-explorer/index-resolver",-1178259525,null),(function (){var G__66879 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252)], null)], null);
return G__66879;

})(),(function com$wsscode$pathom$book$index_explorer$index_resolver(p__66880,_){
var map__66881 = p__66880;
var map__66881__$1 = (((((!((map__66881 == null))))?(((((map__66881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66881):map__66881);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66881__$1,new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","indexes","com.wsscode.pathom.book.index-explorer/indexes",1553238160));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252),indexes], null);
}));
com.wsscode.pathom.book.index_explorer.parser = com.wsscode.pathom.core.parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.reader2,com.wsscode.pathom.connect.open_ident_reader], null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.index_explorer.index_resolver], null)], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.elide_special_outputs_plugin], null)], null));
com.wsscode.pathom.book.index_explorer.index_parsers = (function com$wsscode$pathom$book$index_explorer$index_parsers(resolvers){
return (function (env,tx){
return com.wsscode.pathom.book.index_explorer.parser(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","indexes","com.wsscode.pathom.book.index-explorer/indexes",1553238160),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__66883_SHARP_,p2__66884_SHARP_){
return com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$3(p1__66883_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p2__66884_SHARP_),p2__66884_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,resolvers)),tx);
});
});
com.wsscode.pathom.book.index_explorer.parsers = com.wsscode.pathom.book.interactive_parser.parsers;
com.wsscode.pathom.book.app_types.register_app("index-explorer",(function (p__66886){
var map__66887 = p__66886;
var map__66887__$1 = (((((!((map__66887 == null))))?(((((map__66887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66887):map__66887);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66887__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","node","com.wsscode.pathom.book.app-types/node",-1702617550));
var parser_name = node.getAttribute("data-parser");
var map__66889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.book.index_explorer.parsers,parser_name);
var map__66889__$1 = (((((!((map__66889 == null))))?(((((map__66889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66889):map__66889);
var iparser = map__66889__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66889__$1,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043));
var app_id = ["index-explorer-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parser_name)].join('');
if(cljs.core.truth_(iparser)){
} else {
throw (new Error(["Assert failed: ",["parser ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parser_name)," not found"].join(''),"\n","iparser"].join('')));
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137),fulcro.client.make_fulcro_client.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.get_initial_state(com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app_id),new cljs.core.Keyword(null,"client-did-mount","client-did-mount",-958324226),((function (parser_name,map__66889,map__66889__$1,iparser,parser,app_id,map__66887,map__66887__$1,node){
return (function (p1__66885_SHARP_){
return fulcro.client.data_fetch.load.cljs$core$IFn$_invoke$arity$4(p1__66885_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),"singleton"], null),com.wsscode.pathom.viz.index_explorer.IndexExplorer,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","root","ui/root",-448656785)], null),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","root","ui/root",-448656785)], null),new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Symbol("com.wsscode.pathom.book.index-explorer","force-refresh","com.wsscode.pathom.book.index-explorer/force-refresh",-1309472747,null)], null));
});})(parser_name,map__66889,map__66889__$1,iparser,parser,app_id,map__66887,map__66887__$1,node))
,new cljs.core.Keyword(null,"networking","networking",586110628),com.wsscode.pathom.fulcro.network.pathom_remote(parser)], null)),new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039),com.wsscode.pathom.book.index_explorer.IndexExplorerWrapper], null);
}));
com.wsscode.pathom.book.index_explorer.prepare_index = (function com$wsscode$pathom$book$index_explorer$prepare_index(registry){
var _LT__GT_ = com.wsscode.pathom.connect.register(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__66891_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__66891_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),(function (_,___$1){
return null;
}));
}),registry));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.viz.index_explorer.process_index(_LT__GT_),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252),_LT__GT_);
});
com.wsscode.pathom.book.index_explorer.graph_demos = new cljs.core.PersistentArrayMap(null, 7, ["index-explorer.user",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"user-by-id","user-by-id",-1086259110,null),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","id","user/id",-1375756663),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598)], null)], null)], null)], null),"index-explorer.user2",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"user-by-id","user-by-id",-1086259110,null),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","id","user/id",-1375756663),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("user","dob","user/dob",1342185100),new cljs.core.Keyword("twitter","url","twitter/url",1507397577)], null)], null)], null)], null),"index-explorer.user3",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"user-by-id","user-by-id",-1086259110,null),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","id","user/id",-1375756663),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("user","dob","user/dob",1342185100),new cljs.core.Keyword("twitter","url","twitter/url",1507397577)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"user-by-email","user-by-email",-1947157909,null),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","email","user/email",1419686391),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","dob","user/dob",1342185100),new cljs.core.Keyword("twitter","url","twitter/url",1507397577)], null)], null)], null)], null),"index-explorer.user4",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"user-by-id","user-by-id",-1086259110,null),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","id","user/id",-1375756663),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("user","dob","user/dob",1342185100),new cljs.core.Keyword("twitter","url","twitter/url",1507397577)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"user-by-email","user-by-email",-1947157909,null),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","email","user/email",1419686391),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","dob","user/dob",1342185100),new cljs.core.Keyword("twitter","url","twitter/url",1507397577)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"user-groups","user-groups",375605073,null),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","id","user/id",-1375756663),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","groups","user/groups",-134476593),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("group","id","group/id",-1281514539),new cljs.core.Keyword("group","name","group/name",1606764202)], null)], null)], null)], null)], null)], null),"index-explorer.sizes",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"user-by-id","user-by-id",-1086259110,null),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","id","user/id",-1375756663),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("user","dob","user/dob",1342185100),new cljs.core.Keyword("twitter","url","twitter/url",1507397577),new cljs.core.Keyword("youtube","url","youtube/url",1566478425),new cljs.core.Keyword("linked-in","url","linked-in/url",873923375),new cljs.core.Keyword("user","attr1","user/attr1",1213087561),new cljs.core.Keyword("user","attr2","user/attr2",-646622559),new cljs.core.Keyword("user","attr3","user/attr3",-1529784800),new cljs.core.Keyword("user","attr4","user/attr4",-873990096),new cljs.core.Keyword("user","attr5","user/attr5",1753202591)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"email-by-twitter","email-by-twitter",-2097022841,null),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("twitter","url","twitter/url",1507397577),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","email","user/email",1419686391)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"email-by-youtube","email-by-youtube",-1260939918,null),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("youtube","url","youtube/url",1566478425),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","email","user/email",1419686391)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"email-by-linkedin","email-by-linkedin",1145966233,null),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("linked-in","url","linked-in/url",873923375),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","email","user/email",1419686391)], null)], null)], null)], null),"index-explorer.groups",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"user-by-id","user-by-id",-1086259110,null),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("github.repository","owner","github.repository/owner",1288983924),null,new cljs.core.Keyword("github.repository","name","github.repository/name",1240527476),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("github.repository","id","github.repository/id",21190655),new cljs.core.Keyword("github.repository","url","github.repository/url",881596427),new cljs.core.Keyword("github.repository","name-with-owner","github.repository/name-with-owner",682905354)], null)], null)], null)], null),"index-explorer.globals",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"time","time",-1268547887,null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("time","now","time/now",-1654036502)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"pi","pi",176774184,null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("math","pi","math/pi",-1460298023)], null)], null)], null)], null)], null);
com.wsscode.pathom.book.index_explorer.parse_attribute = (function com$wsscode$pathom$book$index_explorer$parse_attribute(str){
if(clojure.string.starts_with_QMARK_(str,"#")){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(str);
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(str);
}
});
com.wsscode.pathom.book.app_types.register_app("index-explorer-attr-graph",(function (p__66892){
var map__66893 = p__66892;
var map__66893__$1 = (((((!((map__66893 == null))))?(((((map__66893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66893):map__66893);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66893__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","node","com.wsscode.pathom.book.app-types/node",-1702617550));
var index_group = node.getAttribute("data-index-group");
var attribute = com.wsscode.pathom.book.index_explorer.parse_attribute(node.getAttribute("data-attribute"));
var map__66895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.book.index_explorer.graph_demos,index_group);
var map__66895__$1 = (((((!((map__66895 == null))))?(((((map__66895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66895):map__66895);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66895__$1,new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190));
var app_id = ["attribute-graph-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index_group)].join('');
if(cljs.core.truth_(index)){
} else {
throw (new Error(["Assert failed: ",["no index found for group  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index_group)].join(''),"\n","index"].join('')));
}

var index__$1 = com.wsscode.pathom.book.index_explorer.prepare_index(index);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137),fulcro.client.make_fulcro_client.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.get_initial_state(com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword("com.wsscode.pathom.book.index-explorer","index","com.wsscode.pathom.book.index-explorer/index",-1441726190),index__$1], null)),new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app_id),new cljs.core.Keyword(null,"networking","networking",586110628),com.wsscode.pathom.fulcro.network.pathom_remote(com.wsscode.pathom.book.index_explorer.parser)], null)),new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039),com.wsscode.pathom.book.index_explorer.AttributeGraphPanelWrapper], null);
}));

//# sourceMappingURL=com.wsscode.pathom.book.index_explorer.js.map
