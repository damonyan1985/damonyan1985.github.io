(window["webpackJsonpboyia-blog"]=window["webpackJsonpboyia-blog"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),i=a.n(o),s=(a(15),a(6)),c=a.n(s),l=a(7),u=a(1),d=a(2),m=a(4),p=a(3),h=a(5),y=(a(17),a(18),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).theme=a.props.theme,a.id=a.props.id,a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bui-switch"},r.a.createElement("input",{id:this.id,name:"checkbox",ref:"checkbox",type:"checkbox"}),r.a.createElement("label",{for:this.id,ref:"label",className:this.theme}))}}]),t}(n.Component)),f=function(){function e(){Object(u.a)(this,e)}return Object(d.a)(e,null,[{key:"get",value:function(){var e=Object(l.a)(c.a.mark(function e(t){var a,n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return a=e.sent,e.next=6,a.text();case 6:return n=e.sent,console.log("get data="+n),e.abrupt("return",n);case 11:e.prev=11,e.t0=e.catch(0),console.log("HTTPUtil.get: error="+e.t0);case 14:return e.abrupt("return",null);case 15:case"end":return e.stop()}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()},{key:"asyncPost",value:function(e,t,a){fetch(e,{method:"POST",body:t,mode:"no-cors"}).then(function(e){return e.text()}).then(function(e){a(e)}).catch(function(e){console.log("error="+e)})}},{key:"post",value:function(){var e=Object(l.a)(c.a.mark(function e(t,a){var n,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{method:"POST",body:a,mode:"no-cors"});case 3:return n=e.sent,console.log("response status:"+n.status),console.log("response:"+JSON.stringify(n)),e.next=8,n.text();case 8:return r=e.sent,console.log("get data="+r),e.abrupt("return",r);case 13:e.prev=13,e.t0=e.catch(0),console.log("HTTPUtil.post: error="+e.t0);case 16:return e.abrupt("return",null);case 17:case"end":return e.stop()}},e,null,[[0,13]])}));return function(t,a){return e.apply(this,arguments)}}()}]),e}(),b=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).onHeaderClick=function(){a.showBody=!a.showBody,a.setState({showBody:a.showBody})},a.renderBody=function(){return a.state.showBody?r.a.createElement("div",{className:"article-body"},r.a.createElement("iframe",{className:"article-content",height:600,width:"100%",frameborder:"no",border:"0",marginwidth:"0",marginheight:"0",scrolling:"no",allowtransparency:"yes",src:a.itemData.content})):null},a.itemData=a.props.itemData,a.showBody=!0,a.state={showBody:a.showBody},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return this.itemData?r.a.createElement("div",{className:"article-container"},r.a.createElement("div",{className:"article-header",onClick:this.onHeaderClick},this.itemData.title),this.renderBody()):null}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).dataList=a.props.dataList,a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.dataList=e.dataList}},{key:"render",value:function(){return this.dataList&&0!==this.dataList.length?r.a.createElement("div",{className:"article-list"},this.dataList.map(function(e,t){return r.a.createElement(b,{key:t,itemData:e})})):null}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).onClick=function(){a.playStatus=!a.playStatus,a.refs.audioButton.className=a.playStatus?"audio-button audio-play-pause":"audio-button audio-play-button",a.props&&a.props.onClick(a.playStatus)},a.playStatus=!1,a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"audio-button-container",onClick:this.onClick},r.a.createElement("div",{ref:"audioButton",className:"audio-button audio-play-button"}))}}]),t}(n.Component),O=function(e){function t(e){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).call(this,e))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"updateDownload",value:function(e){}},{key:"setProgress",value:function(e){this.refs.progress&&(this.refs.progress.style.width=(100*e).toFixed(2)+"%")}},{key:"render",value:function(){return r.a.createElement("div",{className:"audio-progress-container"},r.a.createElement("div",{className:"audio-progress",ref:"progress"}))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={url:""},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"setImage",value:function(e){this.refs.audioImage.src=e}},{key:"render",value:function(){return r.a.createElement("div",{className:"audio-image-container"},r.a.createElement("img",{className:"audio-image",ref:"audioImage"}))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={title:""},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"setTitle",value:function(e){this.setState({title:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"audio-title-container"},r.a.createElement("div",{className:"audio-title-text"},this.state.title))}}]),t}(n.Component),k=(a(19),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).onPlay=function(e){a.playList&&(a.audioPlayer.src||(a.playIndex=0,console.log("playUrl = ",a.playList[0].playUrl),a.audioPlayer.src=a.playList[0].playUrl,a.refs.audioTitle.setTitle(a.playList[0].name+"-"+a.playList[0].author),a.refs.audioImage.setImage(a.playList[0].imgUrl)),e?a.audioPlayer.play():a.audioPlayer.pause())},a.loadPlaylist(),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"loadPlaylist",value:function(){var e=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/json/boyia-playlist.json");case 2:t=e.sent,this.playList=JSON.parse(t),this.playIndex=0;case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"initPlayer",value:function(){if(this.audioPlayer){var e=this;this.audioPlayer.oncanplay=function(){console.log("on audio prepared duration="+e.audioPlayer.duration)},this.audioPlayer.onplay=function(){console.log("on playing")},this.audioPlayer.onended=function(){console.log("on play completed");var t=e.playList[++e.playIndex];e.audioPlayer.src=t.playUrl,e.audioPlayer.play(),e.refs.audioTitle.setTitle(t.name+"-"+t.author),e.refs.audioImage.setImage(t.imgUrl)},this.audioPlayer.onprogress=function(){console.log("on progress evt = "+e.audioPlayer.currentTime)},this.audioPlayer.ontimeupdate=function(){e.refs.audioProgress&&(console.log("on ontimeupdate evt = "+e.audioPlayer.currentTime),e.refs.audioProgress.setProgress(e.audioPlayer.currentTime/e.audioPlayer.duration))}}}},{key:"componentDidUpdate",value:function(){console.log("AudioPlayer play")}},{key:"componentDidMount",value:function(){this.initPlayer()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"audio-player"},r.a.createElement("audio",{ref:function(t){e.audioPlayer=t},preload:"auto"}),r.a.createElement("div",{className:"audio-header"},r.a.createElement(j,{ref:"audioImage"}),r.a.createElement(E,{ref:"audioTitle"})),r.a.createElement("div",{className:"audio-bottom"},r.a.createElement(g,{onClick:this.onPlay}),r.a.createElement(O,{ref:"audioProgress"})))}}]),t}(n.Component)),P=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={title:"Blog Test"},a.test(),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"test",value:function(){var e=Object(l.a)(c.a.mark(function e(){var t,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/json/boyia-blog.json");case 2:t=e.sent,a=JSON.parse(t),console.log("blogs = "+a.blogs[0].title),this.setState({title:"".concat(a.author,"'s Blog"),data:a.blogs});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state?r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"blog-audio-player"},r.a.createElement(k,null)),r.a.createElement("div",null,r.a.createElement("h1",null,this.state.title?this.state.title:"Blog Test")),r.a.createElement("div",{className:"setting-panel"},r.a.createElement("div",{className:"setting-item"},r.a.createElement("div",{className:"setting-title"},"All Open"),r.a.createElement(y,{id:"allOpen",theme:"bui-theme-blue"})),r.a.createElement("div",{className:"setting-item"},r.a.createElement("div",{className:"setting-title"},"One Open"),r.a.createElement(y,{id:"oneOpen",theme:"bui-theme-darkcyan"}))),r.a.createElement("div",{className:"article\u2014list"},r.a.createElement(v,{dataList:this.state.data}))):r.a.createElement("div",null)}}]),t}(n.Component);i.a.render(r.a.createElement(P,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.9c00efe3.chunk.js.map