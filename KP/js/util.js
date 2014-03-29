// JavaScript Document
var Util={
	windowWidth:350,
	windowHeight:480,
	selfPlaneElement:null,
	enemyPlaneElement:null,
	bulletElement:null,
	parentElement:null,
	scoreSpan:null,

	g:function(id){
		return document.getElementById(id);
	},
	
	init:function(){
		this.parentElement=this.g("parent");

		this.selfPlaneElement=this._loadImg("images/ali.gif");
		
		this.enemyPlaneElement=this._loadImg("images/pig.gif");
		
		this.bulletElement=this._loadImg("images/bullet.png");
		
		this.scoreSpan=this.g("score");
	},
	
	_loadImg:function(src){
		var e=document.createElement("img");
		e.style.position="absolute";
		e.src=src;
		return e;
	}
}