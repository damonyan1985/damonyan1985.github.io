(window["webpackJsonpboyia-blog"]=window["webpackJsonpboyia-blog"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(9),r=a.n(i),s=(a(15),a(6)),l=a.n(s),u=a(7),c=a(2),d=a(1),m=a(4),p=a(3),y=a(5),f=(a(17),a(18),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).onClick=function(){console.log("checkbox value="+a.refs.checkbox.checked),a.props.onSwitchChecked&&a.props.onSwitchChecked(a.refs.checkbox.checked)},a.theme=a.props.theme,a.id=a.props.id,a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"bui-switch"},n.a.createElement("input",{id:this.id,name:"checkbox",ref:"checkbox",type:"checkbox",onClick:this.onClick}),n.a.createElement("label",{for:this.id,ref:"label",className:this.theme}))}}]),t}(o.Component)),h=function(){function e(){Object(c.a)(this,e)}return Object(d.a)(e,null,[{key:"get",value:function(){var e=Object(u.a)(l.a.mark(function e(t){var a,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return a=e.sent,e.next=6,a.text();case 6:return o=e.sent,console.log("get data="+o),e.abrupt("return",o);case 11:e.prev=11,e.t0=e.catch(0),console.log("HTTPUtil.get: error="+e.t0);case 14:return e.abrupt("return",null);case 15:case"end":return e.stop()}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()},{key:"asyncPost",value:function(e,t,a){fetch(e,{method:"POST",body:t,mode:"no-cors"}).then(function(e){return e.text()}).then(function(e){a(e)}).catch(function(e){console.log("error="+e)})}},{key:"post",value:function(){var e=Object(u.a)(l.a.mark(function e(t,a){var o,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{method:"POST",body:a,mode:"no-cors"});case 3:return o=e.sent,console.log("response status:"+o.status),console.log("response:"+JSON.stringify(o)),e.next=8,o.text();case 8:return n=e.sent,console.log("get data="+n),e.abrupt("return",n);case 13:e.prev=13,e.t0=e.catch(0),console.log("HTTPUtil.post: error="+e.t0);case 16:return e.abrupt("return",null);case 17:case"end":return e.stop()}},e,null,[[0,13]])}));return function(t,a){return e.apply(this,arguments)}}()}]),e}(),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).onHeaderClick=function(){a.showBody=!a.showBody,a.setState({showBody:a.showBody})},a.renderBody=function(){return a.state.showBody?n.a.createElement("div",{className:"article-body"},n.a.createElement("iframe",{className:"article-content",height:600,width:"100%",frameborder:"no",border:"0",marginwidth:"0",marginheight:"0",scrolling:"no",allowtransparency:"yes",src:a.itemData.content})):null},a.itemData=a.props.itemData,a.showBody=!0,a.state={showBody:a.showBody},a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return this.itemData?n.a.createElement("div",{className:"article-container"},n.a.createElement("div",{className:"article-header",onClick:this.onHeaderClick},this.itemData.title),this.renderBody()):null}}]),t}(o.Component),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).dataList=a.props.dataList,a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.dataList=e.dataList}},{key:"render",value:function(){return this.dataList&&0!==this.dataList.length?n.a.createElement("div",{className:"article-list"},this.dataList.map(function(e,t){return n.a.createElement(k,{key:t,itemData:e})})):null}}]),t}(o.Component);a(19);a(20);var v=function(){function e(){Object(c.a)(this,e),this.skinMap={},this.register({name:"default",style:{audioPlayer:"audio-player",audioContainerBlink:"audio-container-blink",audioButton:"audio-button",audioPlayButton:"audio-play-button",audioPlayPause:"audio-play-pause",audioPlayForwardFirst:"audio-forward-first",audioPlayForward:"audio-forward",audioBack:"audio-back",audioBackFirst:"audio-back-first",audioLayout:"audio-layout",audioButtonContainer:"audio-button-container",audioBottom:"audio-bottom",audioProgressCtrl:"audio-progress-ctrl",audioProgressContainer:"audio-progress-container",audioProgress:"audio-progress",audioImageContainer:"audio-image-container",audioImage:"audio-image",audioHeader:"audio-header",audioTitleContainer:"audio-title-container",audioTitleText:"audio-title-text",audioProgressText:"audio-progress-text",audioPlaylistContainer:"audio-playlist-container",audioPlaylistContainerHide:"audio-playlist-container-hide",audioPlaylistItem:"audio-playlist-item",audioItemIndex:"audio-item-index",audioItemName:"audio-item-name",audioItemAuthor:"audio-item-author",audioItemFocus:"audio-item-focus",audioListButtonContainer:"audio-list-button-container",audioListButtonStyle:"audio-list-button-style",audioVolumeIconFirst:"audio-volume-icon-first",audioVolumeIcon:"audio-volume-icon",audioVolumeView:"audio-volume-view",audioVolumeProgress:"audio-volume-progress",audioVolumeBar:"audio-volume-bar",audioVolumeIconContainer:"audio-volume-icon-container",audioVolumeContainer:"audio-volume-container"}}),this.register({name:"black",style:{audioPlayer:"audio-player-black",audioContainerBlink:"audio-container-blink-black",audioButton:"audio-button-black",audioPlayButton:"audio-play-button-black",audioPlayPause:"audio-play-pause-black",audioPlayForwardFirst:"audio-forward-first-black",audioPlayForward:"audio-forward-black",audioBack:"audio-back-black",audioBackFirst:"audio-back-first-black",audioLayout:"audio-layout-black",audioButtonContainer:"audio-button-container-black",audioBottom:"audio-bottom-black",audioProgressCtrl:"audio-progress-ctrl-black",audioProgressContainer:"audio-progress-container-black",audioProgress:"audio-progress-black",audioImageContainer:"audio-image-container-black",audioImage:"audio-image-black",audioHeader:"audio-header-black",audioTitleContainer:"audio-title-container-black",audioTitleText:"audio-title-text-black",audioProgressText:"audio-progress-text-black",audioPlaylistContainer:"audio-playlist-container-black",audioPlaylistContainerHide:"audio-playlist-container-hide-black",audioPlaylistItem:"audio-playlist-item-black",audioItemIndex:"audio-item-index-black",audioItemName:"audio-item-name-black",audioItemAuthor:"audio-item-author-black",audioItemFocus:"audio-item-focus-black",audioListButtonContainer:"audio-list-button-container-black",audioListButtonStyle:"audio-list-button-style-black",audioVolumeIconFirst:"audio-volume-icon-first-black",audioVolumeIcon:"audio-volume-icon-black",audioVolumeView:"audio-volume-view-black",audioVolumeProgress:"audio-volume-progress-black",audioVolumeBar:"audio-volume-bar-black",audioVolumeIconContainer:"audio-volume-icon-container-black",audioVolumeContainer:"audio-volume-container-black"}}),this.skinName="default"}return Object(d.a)(e,null,[{key:"instance",value:function(){return e.sInstance||(e.sInstance=new e),e.sInstance}}]),Object(d.a)(e,[{key:"getSkin",value:function(){return this.skinMap[this.skinName]}},{key:"register",value:function(e){console.log("SkinManager.js---register name="+e.name+" style="+e.style),this.skinMap[e.name]=e.style}},{key:"setSkin",value:function(e){this.skinName=e}}]),e}();v.sInstance=null;var g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).onClick=function(){a.props&&a.props.onClick()},a.playStatus=!1,a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=v.instance().getSkin();return n.a.createElement("div",{className:"".concat(e.audioButtonContainer," ").concat(e.audioLayout),onClick:this.onClick},n.a.createElement("div",{className:"".concat(e.audioButton," ").concat(e.audioPlayForwardFirst)}),n.a.createElement("div",{className:"".concat(e.audioButton," ").concat(e.audioPlayForward)}))}}]),t}(o.Component),P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).onClick=function(){a.props&&a.props.onClick()},a.playStatus=!1,a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=v.instance().getSkin();return n.a.createElement("div",{className:e.audioButtonContainer,onClick:this.onClick},n.a.createElement("div",{className:"".concat(e.audioButton," ").concat(e.audioBackFirst)}),n.a.createElement("div",{className:"".concat(e.audioButton," ").concat(e.audioBack)}))}}]),t}(o.Component),C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).onClick=function(){a.playStatus=!a.playStatus,a.refs.audioButton.className=a.playStatus?"audio-button audio-play-pause":"audio-button audio-play-button",a.props&&a.props.onClick(a.playStatus)},a.playStatus=!1,a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=v.instance().getSkin();return n.a.createElement("div",{className:"".concat(e.audioButtonContainer," ").concat(e.audioLayout),onClick:this.onClick},n.a.createElement("div",{ref:"audioButton",className:"".concat(e.audioButton," ").concat(e.audioPlayButton)}))}}]),t}(o.Component),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={text:a.props.text},a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"setText",value:function(e){this.setState({text:e})}},{key:"render",value:function(){return n.a.createElement("div",{className:this.props.textStyle},this.state.text)}}]),t}(o.Component),j=function(){function e(){Object(c.a)(this,e)}return Object(d.a)(e,null,[{key:"getUrlParams",value:function(){}}]),e}();j.timeFormat=function(e){var t=parseInt(e/60),a=parseInt(e%60);return(t<10?"0"+t:t)+":"+(a<10?"0"+a:a)};var I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).onClick=function(e){var t=a.refs.audioProgressContainer.getBoundingClientRect();console.log("position"+JSON.stringify(t)+" event="+e.clientX),a.setProgress(e.clientX-t.left,t.right-t.left),a.props.onSeek&&a.props.onSeek((e.clientX-t.left)/(t.right-t.left))},a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"updateDownload",value:function(e){}},{key:"setProgress",value:function(e,t){this.refs.progress&&(this.refs.progress.style.width=(e/t*100).toFixed(2)+"%",this.props.onAudioProgressUpdate&&this.props.onAudioProgressUpdate(j.timeFormat(e)+"-"+j.timeFormat(t)))}},{key:"render",value:function(){var e=v.instance().getSkin();return n.a.createElement("div",{className:e.audioProgressCtrl},n.a.createElement("div",{ref:"audioProgressContainer",className:e.audioProgressContainer,onClick:this.onClick.bind(this)},n.a.createElement("div",{className:e.audioProgress,ref:"progress"})))}}]),t}(o.Component),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={url:""},a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"setImage",value:function(e){this.refs.audioImage.src=e}},{key:"render",value:function(){var e=v.instance().getSkin();return n.a.createElement("div",{className:e.audioImageContainer},n.a.createElement("img",{className:e.audioImage,ref:"audioImage"}))}}]),t}(o.Component),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={title:""},a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"setTitle",value:function(e){this.setState({title:e})}},{key:"updateProgressText",value:function(e){this.audioProgressText&&this.audioProgressText.setText(e)}},{key:"render",value:function(){var e=this,t=v.instance().getSkin();return n.a.createElement("div",{className:t.audioTitleContainer},n.a.createElement("div",{className:t.audioTitleText},this.state.title),n.a.createElement(O,{ref:function(t){e.audioProgressText=t},textStyle:t.audioProgressText,text:"00:00-00:00"}))}}]),t}(o.Component),S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).onClick=function(){a.props.onItemClick&&a.props.onItemClick(a.props.index)},a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"setItemStatus",value:function(){this.audioPlayItem&&(this.audioPlayItem.className=v.instance().getSkin().audioItemFocus)}},{key:"resetItemStatus",value:function(){this.audioPlayItem&&(this.audioPlayItem.className=v.instance().getSkin().audioPlaylistItem)}},{key:"render",value:function(){var e=this;if(!this.props.itemData)return null;var t=this.props.itemData,a=v.instance().getSkin();return n.a.createElement("div",{ref:function(t){e.audioPlayItem=t},className:a.audioPlaylistItem,onClick:this.onClick},n.a.createElement("div",{className:a.audioItemIndex},this.props.index+1),n.a.createElement("div",{className:a.audioItemName},t.name),n.a.createElement("div",{className:a.audioItemAuthor},t.author))}}]),t}(o.Component),x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).onItemSwitch=function(e){a.resetPlayItem(e),a.props.onPlayItem&&a.props.onPlayItem(e)},a.appendItem=function(e){a.playListItems.push(e)},a.playList=null,a.playListItems=[],a.focusIndex=0,a.visible=!0,a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"show",value:function(e){if(this.visible=e,this.refs.audioPlaylistContainer){var t=v.instance().getSkin();this.refs.audioPlaylistContainer.className=e?t.audioPlaylistContainer:t.audioPlaylistContainerHide}}},{key:"setPlayList",value:function(e){this.playList=e,this.setState({})}},{key:"resetPlayItem",value:function(e){this.playListItems[this.focusIndex].resetItemStatus(),this.focusIndex=e,this.playListItems[this.focusIndex].setItemStatus()}},{key:"isVisible",value:function(){return this.visible}},{key:"render",value:function(){var e=this;if(!this.playList||0===this.playList.length)return null;var t=v.instance().getSkin();return n.a.createElement("div",{ref:"audioPlaylistContainer",className:t.audioPlaylistContainer},this.playList.map(function(t,a){return console.log("item name = "+t.name),n.a.createElement(S,{ref:function(t){return e.appendItem(t)},key:a,index:a,itemData:t,onItemClick:e.onItemSwitch})}))}}]),t}(o.Component),B=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).onClick=function(){a.props.onListButtonClick&&a.props.onListButtonClick()},a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=v.instance().getSkin();return n.a.createElement("div",{className:e.audioListButtonContainer,onClick:this.onClick},n.a.createElement("div",{className:e.audioListButtonStyle}),n.a.createElement("div",{className:e.audioListButtonStyle}),n.a.createElement("div",{className:e.audioListButtonStyle}))}}]),t}(o.Component),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).onClick=function(e){if(a.audioVolumeContainer&&a.audioVolumeProgress&&a.audioVolumeBar){var t=a.audioVolumeContainer.getBoundingClientRect(),o=t.right-t.left,n=e.clientX-t.left;n<0&&(n=0),e.clientX-t.left>o&&(n=o),console.log("position"+JSON.stringify(t)+" event="+e.clientX);var i=n/o;a.audioVolumeProgress.style.width=(100*i).toFixed(2)+"%",console.log("audioVolumeBar width="+a.audioVolumeBar.offsetWidth),a.audioVolumeBar.style.left=(n-a.audioVolumeBar.offsetWidth<0?0:n-a.audioVolumeBar.offsetWidth)+"px",a.props.onSetVolume&&a.props.onSetVolume(i)}},a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=v.instance().getSkin();return n.a.createElement("div",{className:"audio-volume-container"},n.a.createElement("div",{className:"audio-volume-icon-container",onClick:this.onClick},n.a.createElement("div",{className:"".concat(t.audioButton," ").concat(t.audioVolumeIconFirst)}),n.a.createElement("div",{className:"".concat(t.audioButton," ").concat(t.audioVolumeIcon)})),n.a.createElement("div",{ref:function(t){e.audioVolumeContainer=t},className:"audio-volume-view",onClick:this.onClick},n.a.createElement("div",{ref:function(t){e.audioVolumeProgress=t},className:"audio-volume-progress"}),n.a.createElement("div",{ref:function(t){e.audioVolumeBar=t},className:"audio-volume-bar"})))}}]),t}(o.Component),L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).onSeek=function(e){a.audioPlayer&&a.audioPlayer.duration&&(a.audioPlayer.currentTime=e*a.audioPlayer.duration)},a.onForward=function(){++a.playIndex>a.playList.length-1&&(a.playIndex=0),a.onPlayItem(a.playIndex)},a.onBack=function(){--a.playIndex<0&&(a.playIndex=0),a.onPlayItem(a.playIndex)},a.onPlay=function(e){a.playList&&(a.audioPlayer.src||(a.playIndex=0,console.log("playUrl = ",a.playList[0].playUrl),a.audioPlayer.src=a.playList[0].playUrl,a.refs.audioTitle.setTitle(a.playList[0].name+"-"+a.playList[0].author),a.refs.audioImage.setImage(a.playList[0].imgUrl),a.onPlayItem(a.playIndex)),e?a.audioPlayer.play():a.audioPlayer.pause())},a.onPlayItem=function(e){a.playIndex=e;var t=a.playList[a.playIndex];a.audioPlayer.src=t.playUrl,a.audioPlayer.play(),a.refs.audioTitle.setTitle(t.name+"-"+t.author),a.refs.audioImage.setImage(t.imgUrl),a.refs.playListView&&a.refs.playListView.resetPlayItem(e)},a.onListButtonClick=function(){a.refs.playListView&&a.refs.playListView.show(!a.refs.playListView.isVisible())},a.onSetVolume=function(e){a.audioPlayer&&(console.log("AudioPlayer.js---onSetVolume()---volume: "+e),a.audioPlayer.volume=e)},a.onAudioProgressUpdate=function(e){a.refs.audioTitle&&a.refs.audioTitle.updateProgressText(e)},a.loadPlaylist(),a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"refresh",value:function(){this.setState({})}},{key:"loadPlaylist",value:function(){var e=Object(u.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/json/boyia-playlist.json");case 2:t=e.sent,this.playList=JSON.parse(t),this.playIndex=0,this.refs.playListView.setPlayList(this.playList);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"initPlayer",value:function(){if(this.audioPlayer){var e=this;this.audioPlayer.oncanplay=function(){console.log("on audio prepared duration="+e.audioPlayer.duration)},this.audioPlayer.onplay=function(){console.log("on playing")},this.audioPlayer.onended=function(){console.log("on play completed"),++e.playIndex>e.playList.length-1&&(e.playIndex=0),e.onPlayItem(e.playIndex)},this.audioPlayer.onprogress=function(){console.log("on progress evt = "+e.audioPlayer.currentTime)},this.audioPlayer.ontimeupdate=function(){e.refs.audioProgress&&e.audioPlayer.currentTime&&e.audioPlayer.duration&&(console.log("on ontimeupdate evt = "+e.audioPlayer.currentTime),e.refs.audioProgress.setProgress(e.audioPlayer.currentTime,e.audioPlayer.duration))},this.audioPlayer.onerror=this.audioPlayer.onended}}},{key:"componentDidUpdate",value:function(){console.log("AudioPlayer play")}},{key:"componentDidMount",value:function(){this.initPlayer()}},{key:"render",value:function(){var e=this,t=v.instance().getSkin();return n.a.createElement("div",{ref:"audioPlayerContainer"},n.a.createElement("div",{className:t.audioContainerBlink}),n.a.createElement("div",{className:t.audioPlayer},n.a.createElement("audio",{ref:function(t){e.audioPlayer=t},preload:"auto"}),n.a.createElement("div",{className:t.audioHeader},n.a.createElement(w,{ref:"audioImage"}),n.a.createElement(E,{ref:"audioTitle"}),n.a.createElement(B,{ref:"audioListButton",onListButtonClick:this.onListButtonClick})),n.a.createElement("div",{className:t.audioBottom},n.a.createElement(P,{onClick:this.onBack}),n.a.createElement(C,{onClick:this.onPlay}),n.a.createElement(g,{onClick:this.onForward}),n.a.createElement(I,{ref:"audioProgress",onSeek:this.onSeek,onAudioProgressUpdate:this.onAudioProgressUpdate}),n.a.createElement(N,{onSetVolume:this.onSetVolume}))),n.a.createElement(x,{ref:"playListView",onPlayItem:this.onPlayItem}))}}]),t}(o.Component),T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).onMouseDown=function(e){console.log("App.js---onMouseDown"),a.moving=!0,a.refs.playerContainer&&(a.playerLeft=e.clientX,a.playerTop=e.clientY,a.playerOffsetLeft=a.refs.playerContainer.offsetLeft,a.playerOffsetTop=a.refs.playerContainer.offsetTop,a.refs.playerContainer.style.cursor="move")},a.onMouseMove=function(e){if(a.refs.playerContainer&&a.moving){console.log("playerLeft="+a.playerLeft+" playerTop"+a.playerTop);var t=e.clientX-(a.playerLeft-a.playerOffsetLeft),o=e.clientY-(a.playerTop-a.playerOffsetTop);console.log("App.js---onMouseMove---left: "+t+" top: "+o),a.refs.playerContainer.style.left=t+"px",a.refs.playerContainer.style.top=o+"px"}},a.onMouseUp=function(e){console.log("App.js---onMouseUp"),a.moving=!1,a.refs.playerContainer&&(a.refs.playerContainer.style.cursor="default")},a.onMusicSwitch=function(e){a.refs.playerContainer.className=e?"blog-audio-player-hide":"blog-audio-player"},a.onSkinSwitch=function(e){e?v.instance().setSkin("black"):v.instance().setSkin("default"),a.audioPlayerView&&a.audioPlayerView.refresh()},a.state={title:"Blog Test"},a.loadBloglist(),a.init(),a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"init",value:function(){window.onmousemove=this.onMouseMove,window.ontouchmove=this.onMouseMove,this.playerLeft=-1,this.playerTop=-1,this.playerOffsetLeft=-1,this.playerOffsetTop=-1}},{key:"loadBloglist",value:function(){var e=Object(u.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/json/boyia-blog.json");case 2:t=e.sent,a=JSON.parse(t),console.log("blogs = "+a.blogs[0].title),this.setState({title:"".concat(a.author,"'s Blog"),data:a.blogs});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state?n.a.createElement("div",{className:"App"},n.a.createElement("div",null,n.a.createElement("h1",null,this.state.title?this.state.title:"Blog Test")),n.a.createElement("div",{className:"setting-panel"},n.a.createElement("div",{className:"setting-item"},n.a.createElement("div",{className:"setting-title"},"Music Close"),n.a.createElement(f,{id:"musicSwitch",theme:"bui-theme-blue",onSwitchChecked:this.onMusicSwitch})),n.a.createElement("div",{className:"setting-item"},n.a.createElement("div",{className:"setting-title"},"Change Skin"),n.a.createElement(f,{id:"oneOpen",theme:"bui-theme-darkcyan",onSwitchChecked:this.onSkinSwitch}))),n.a.createElement("div",{className:"article\u2014list"},n.a.createElement(b,{dataList:this.state.data})),n.a.createElement("div",{ref:"playerContainer",className:"blog-audio-player",onTouchStart:function(t){return e.onMouseDown(t)},onTouchEnd:function(t){return e.onMouseUp(t)},onMouseDown:function(t){return e.onMouseDown(t)},onMouseUp:function(t){return e.onMouseUp(t)}},n.a.createElement(L,{ref:function(t){e.audioPlayerView=t}}))):n.a.createElement("div",null)}}]),t}(o.Component);r.a.render(n.a.createElement(T,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.c677ce23.chunk.js.map