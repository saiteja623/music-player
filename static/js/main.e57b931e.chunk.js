(this.webpackJsonpawesome=this.webpackJsonpawesome||[]).push([[0],{104:function(e,t,a){e.exports=a.p+"static/media/Bomdiggy.f27b15bd.mp3"},105:function(e,t,a){e.exports=a.p+"static/media/Butta Bomma.957119a0.mp3"},106:function(e,t,a){e.exports=a.p+"static/media/Emo Emo.b9656229.mp3"},107:function(e,t,a){e.exports=a.p+"static/media/Endhuko Emo.eb94fa12.mp3"},108:function(e,t,a){e.exports=a.p+"static/media/Faded.8cbc580b.mp3"},109:function(e,t,a){e.exports=a.p+"static/media/Haan Main Galat.3b43bc8b.mp3"},110:function(e,t,a){e.exports=a.p+"static/media/Hawayein.3add829c.mp3"},111:function(e,t,a){e.exports=a.p+"static/media/Ik Variaa.66cdf415.mp3"},112:function(e,t,a){e.exports=a.p+"static/media/Illegal Weapon.7399644f.mp3"},113:function(e,t,a){e.exports=a.p+"static/media/Inka Edho.bddd0ee3.mp3"},114:function(e,t,a){e.exports=a.p+"static/media/Kudukku song.ad29d069.mp3"},115:function(e,t,a){e.exports=a.p+"static/media/Kutti story.32f1e41c.mp3"},116:function(e,t,a){e.exports=a.p+"static/media/Maatevinadhuga.9fa80226.mp3"},117:function(e,t,a){e.exports=a.p+"static/media/Malang.a9f834fd.mp3"},118:function(e,t,a){e.exports=a.p+"static/media/Manasu Maree.96fc4bc2.mp3"},119:function(e,t,a){e.exports=a.p+"static/media/O saki saki.dc47aaad.mp3"},120:function(e,t,a){e.exports=a.p+"static/media/Pachtaoge.056cf2d6.mp3"},121:function(e,t,a){e.exports=a.p+"static/media/Ramulo Ramula.9059fe26.mp3"},122:function(e,t,a){e.exports=a.p+"static/media/Rowdybaby.0f489c78.mp3"},123:function(e,t,a){e.exports=a.p+"static/media/Samajavaragamana.ba5665a8.mp3"},124:function(e,t,a){e.exports=a.p+"static/media/Singles Anthem.a78ad68c.mp3"},125:function(e,t,a){e.exports=a.p+"static/media/Solo.b7ea04a5.mp3"},126:function(e,t,a){e.exports=a.p+"static/media/Sorry.075e0ea5.mp3"},127:function(e,t,a){e.exports=a.p+"static/media/Starboy.ee12e1ab.mp3"},128:function(e,t,a){e.exports=a.p+"static/media/Taki Taki.0fb149e0.mp3"},129:function(e,t,a){e.exports=a.p+"static/media/Thodi jagah.5cfc06ad.mp3"},130:function(e,t,a){e.exports=a.p+"static/media/Thunder.b94c98b1.mp3"},131:function(e,t,a){e.exports=a.p+"static/media/Yaanji.967021be.mp3"},132:function(e,t,a){e.exports=a.p+"static/media/sanamre.d8e9d52f.mp3"},155:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(10),r=a.n(i),o=a(23),s=a(24),c=a(29),m=a(27),u=a(42),p=a(13),d=Object(n.createContext)(),g=function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var l=arguments.length,i=new Array(l),r=0;r<l;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={list:["Manasu Maree","Samajavaragamana","Emo Emo","Ramulo Ramula","Singles Anthem","Endhuko Emo","Butta Bomma","Inka Edho","Maatevinadhuga","Ik Variaa","Illegal Weapon","Bomdiggy","Haan Main Galat","Hawayein","Thodi jagah","Malang","O saki saki","Pachtaoge","sanamre","Faded","Solo","Sorry","Starboy","Taki Taki","Thunder","Kutti story","Rowdybaby","Yaanji"],songs:[{img:null,infoObj:{title:"",artist:"sai",album:"",genre:"",year:2020},song:"Manasu Maree"}],i:0,selected:{img:null,infoObj:{title:"",artist:"sai",album:"",genre:"",year:2020},song:"inkaedo"},activeSong:0,isPlay:!1},e.componentDidMount=function(){e.setDetails()},e.handlePlayPause=function(){e.setState({isPlay:!e.state.isPlay})},e.setDetails=function(){a(98).read("https://saiteja623.github.io".concat(a(68)("./".concat(e.state.list[e.state.i],".mp3"))),{onSuccess:function(t){for(var a=t.tags.picture,n="",l=0;l<a.data.length;l++)n+=String.fromCharCode(a.data[l]);var i,r={img:"data:"+a.format+";base64,"+window.btoa(n),infoObj:t.tags,song:e.state.list[e.state.i]};(console.log(r),0==e.state.i)?((i=[]).push(r),e.setState({songs:i,selected:r})):((i=e.state.songs).push(r),e.setState({songs:i}));e.setState({i:e.state.i+1}),28!==e.state.i&&e.setDetails()}})},e.playNext=function(){var t=e.state.activeSong;27===t?t=0:t+=1,e.setState({activeSong:t}),e.setPlayTrue()},e.playPrev=function(){var t=e.state.activeSong;0===t?t=27:t-=1,e.setState({activeSong:t}),e.setPlayTrue()},e.setSong=function(t){e.setState({activeSong:t})},e.setPlayTrue=function(){e.setState({isPlay:!0})},e}return Object(s.a)(n,[{key:"render",value:function(){return l.a.createElement(d.Provider,{value:{songs:this.state.songs,list:this.state.list,setSong:this.setSong,activeSong:this.state.activeSong,playPrev:this.playPrev,playNext:this.playNext,handlePlayPause:this.handlePlayPause,isPlay:this.state.isPlay,setPlayTrue:this.setPlayTrue}},this.props.children)}}]),n}(n.Component),f=a(162),E=a(195),b=a(198),h=a(53),y=a(200),v=a(208),S=a(199),k=a(194),x=a(201),O=a(196),w=a(203),j=a(202),C=a(190),z=a(204),P=a(193),T=a(57),R=(a(69),a(73)),M=a.n(R),N=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={tabValue:0},e.handleTabs=function(t,a){e.setState({tabValue:a})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(d.Consumer,null,(function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(C.a,{position:"sticky",className:"appbar"},l.a.createElement(z.a,{value:e.state.tabValue,onChange:e.handleTabs,variant:"scrollable",scrollButtons:"off",style:{padding:0},indicatorColor:"primary"},l.a.createElement(P.a,{label:"All songs",style:{fontSize:"0.72rem",minWidth:"100px"},wrapped:!0,fullWidth:!0,disableRipple:!0}),l.a.createElement(P.a,{label:"Telugu",style:{fontSize:"0.72rem",minWidth:"100px"},disableRipple:!0}),l.a.createElement(P.a,{label:"Hindi",style:{fontSize:"0.72rem",minWidth:"100px"},disableRipple:!0}),l.a.createElement(P.a,{label:"English",style:{fontSize:"0.72rem",minWidth:"100px"},disableRipple:!0}),l.a.createElement(P.a,{label:"Other",style:{fontSize:"0.72rem",minWidth:"100px"},disableRipple:!0}))),l.a.createElement(M.a,{index:e.state.tabValue},l.a.createElement(k.a,null,l.a.createElement(T.a,{appearAnimation:"fade",enterAnimation:"fade",staggerDelayBy:1e3},t.songs.map((function(a,n){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{button:!0,onClick:function(){t.setSong(n),e.props.checkforlike(n),e.props.resetSong(),t.setPlayTrue()}},l.a.createElement(E.a,{container:!0,spacing:2,justify:"space-between"},l.a.createElement(E.a,{item:!0},l.a.createElement("img",{src:a.img})),l.a.createElement(E.a,{item:!0,xs:!0,container:!0,direction:"column",style:t.activeSong==n?{color:"#ff3b57"}:null},l.a.createElement(E.a,{item:!0},l.a.createElement(h.a,{variant:"body2",style:{fontWeight:"bold",textTransform:"capitalize"}},a.song)),l.a.createElement(E.a,{item:!0},l.a.createElement(h.a,{variant:"subtitle2",style:{fontSize:"0.8rem",overflow:"hidden",textOverflow:"ellipsis",height:"20px"}},a.infoObj.artist))))),l.a.createElement(O.a,null))})))),l.a.createElement("div",null,t.songs.map((function(a,n){if(n>=0&&n<9)return l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{button:!0,onClick:function(){t.setSong(n),e.props.checkforlike(n),e.props.resetSong(),t.setPlayTrue()}},l.a.createElement(E.a,{container:!0,spacing:2,justify:"space-between"},l.a.createElement(E.a,{item:!0},l.a.createElement("img",{src:a.img})),l.a.createElement(E.a,{item:!0,xs:!0,container:!0,direction:"column",style:t.activeSong==n?{color:"#ff3b57"}:null},l.a.createElement(E.a,{item:!0},l.a.createElement(h.a,{variant:"body2",style:{fontWeight:"bold",textTransform:"capitalize"}},a.song)),l.a.createElement(E.a,{item:!0},l.a.createElement(h.a,{variant:"subtitle2",style:{fontSize:"0.8rem",overflow:"hidden",textOverflow:"ellipsis",height:"20px"}},a.infoObj.artist))))),l.a.createElement(O.a,null))}))),l.a.createElement("div",null,t.songs.map((function(a,n){if(n>=9&&n<19)return l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{button:!0,onClick:function(){t.setSong(n),e.props.checkforlike(n),e.props.resetSong(),t.setPlayTrue()}},l.a.createElement(E.a,{container:!0,spacing:2,justify:"space-between"},l.a.createElement(E.a,{item:!0},l.a.createElement("img",{src:a.img})),l.a.createElement(E.a,{item:!0,xs:!0,container:!0,direction:"column",style:t.activeSong==n?{color:"#ff3b57"}:null},l.a.createElement(E.a,{item:!0},l.a.createElement(h.a,{variant:"body2",style:{fontWeight:"bold",textTransform:"capitalize"}},a.song)),l.a.createElement(E.a,{item:!0},l.a.createElement(h.a,{variant:"subtitle2",style:{fontSize:"0.8rem",overflow:"hidden",textOverflow:"ellipsis",height:"20px"}},a.infoObj.artist))))),l.a.createElement(O.a,null))}))),l.a.createElement("div",null,t.songs.map((function(a,n){if(n>=19&&n<25)return l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{button:!0,onClick:function(){t.setSong(n),e.props.checkforlike(n),e.props.resetSong(),t.setPlayTrue()}},l.a.createElement(E.a,{container:!0,spacing:2,justify:"space-between"},l.a.createElement(E.a,{item:!0},l.a.createElement("img",{src:a.img})),l.a.createElement(E.a,{item:!0,xs:!0,container:!0,direction:"column",style:t.activeSong==n?{color:"#ff3b57"}:null},l.a.createElement(E.a,{item:!0},l.a.createElement(h.a,{variant:"body2",style:{fontWeight:"bold",textTransform:"capitalize"}},a.song)),l.a.createElement(E.a,{item:!0},l.a.createElement(h.a,{style:{fontSize:"0.8rem",overflow:"hidden",textOverflow:"ellipsis",height:"20px"}},a.infoObj.artist))))),l.a.createElement(O.a,null))}))),l.a.createElement("div",null,t.songs.map((function(a,n){if(n>=25&&n<t.songs.length)return l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{button:!0,onClick:function(){t.setSong(n),e.props.checkforlike(n),e.props.resetSong(),t.setPlayTrue()}},l.a.createElement(E.a,{container:!0,spacing:2,justify:"space-between"},l.a.createElement(E.a,{item:!0},l.a.createElement("img",{src:a.img})),l.a.createElement(E.a,{item:!0,xs:!0,container:!0,direction:"column",style:t.activeSong==n?{color:"#ff3b57"}:null},l.a.createElement(E.a,{item:!0},l.a.createElement(h.a,{variant:"body2",style:{fontWeight:"bold",textTransform:"capitalize"}},a.song)),l.a.createElement(E.a,{item:!0},l.a.createElement(h.a,{variant:"subtitle2",style:{fontSize:"0.8rem",overflow:"hidden",textOverflow:"ellipsis",height:"20px"}},a.infoObj.artist))))),l.a.createElement(O.a,null))})))))}))}}]),a}(n.Component),B=(a(155),a(209)),I=a(197),F=a(205),D=a(207),A=a(79),L=a.n(A),W=a(78),H=a.n(W),V=a(77),K=a.n(V),U=a(80),G=a.n(U),Y=a(81),J=a.n(Y),X=a(60),_=a.n(X),q=a(51),Q=a.n(q),Z=a(59),$=a.n(Z),ee=a(83),te=a.n(ee),ae=a(58),ne=a.n(ae),le=a(84),ie=a.n(le),re=a(82),oe=a.n(re),se=a(206),ce=function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={volume:60,snackBarMessage:"",obj:null,play:!1,songPosition:0,img:null,shuffle:!1,repeatOne:!1,snackBarOpen:!1,slideOpen:!1,loading:!1,isLiked:!1},a.handleVolume=function(e,t){a.audioref.current.volume=t/100,a.setState({volume:t})},a.playPause=function(){a.state.play?a.audioref.current.pause():a.audioref.current.play(),a.setState({play:!a.state.play})},a.handleSongPosition=function(e,t){a.audioref.current.currentTime=a.audioref.current.duration*(t/100),a.setState({songPosition:t})},a.changeSlide=function(){setInterval((function(){var e=a.audioref.current.currentTime*(100/a.audioref.current.duration);a.setState({songPosition:e})}),1e3)},a.songEnded=function(){},a.repeatSong=function(){a.audioref.current.play(),a.setState({play:!0})},a.resetSong=function(){a.setState({play:!0}),a.setState({songPosition:0}),a.audioref.current.currentTime=0,setTimeout((function(){a.audioref.current.play()}),1e3)},a.likeUnlike=function(e){a.state.isLiked?localStorage.removeItem(e):localStorage.setItem(e,e)},a.checkForLike=function(e,t){"prev"==e?-1==(t-=1)&&(t=27):"random"==e?t=t:10==(t+=1)&&(t=0),null!=localStorage.getItem(t)?a.setState({isLiked:!0}):a.setState({isLiked:!1})},a.audioref=new l.a.createRef,a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.Consumer,null,(function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement("audio",{ref:e.audioref,src:a(68)("./".concat(t.songs[t.activeSong].song,".mp3")),type:"audio/mp3",onEnded:function(){if(e.setState({songPosition:0}),e.audioref.current.currentTime=0,e.setState({play:!1}),e.state.repeatOne)e.repeatSong();else if(e.state.shuffle){var a=Math.floor(27*Math.random());t.setSong(a),e.checkForLike("random",a),e.resetSong()}else e.resetSong(),t.playNext(),e.checkForLike("next",t.activeSong)},onPlaying:e.changeSlide}),l.a.createElement(f.a,{className:"music-player-paper",elevation:3,style:{position:"relative"}},l.a.createElement("div",{className:"album-title"},t.songs[t.activeSong].infoObj.title),l.a.createElement(h.a,{variant:"caption",align:"left",className:"album-artist"},t.songs[t.activeSong].infoObj.artist),l.a.createElement("div",{className:"album-image"},e.state.loading?l.a.createElement(se.a,{variant:"circle",className:"skeleton"}):l.a.createElement("img",{src:t.songs[t.activeSong].img,style:{width:"100%",height:"100%"}})),l.a.createElement("div",{className:"music-slider"},l.a.createElement(B.a,{onChange:e.handleSongPosition,value:e.state.songPosition,style:{width:"100%"},className:"music-slider"})),l.a.createElement(E.a,{container:!0,justify:"center"},l.a.createElement(E.a,{item:!0,xs:2},l.a.createElement(I.a,{onClick:function(){e.resetSong(),t.playPrev(),e.checkForLike("prev",t.activeSong)},style:{color:"black",backgroundColor:"transparent",boxShadow:"none"},size:"small"},l.a.createElement(K.a,{size:"small"}))),l.a.createElement(E.a,{item:!0,xs:2},l.a.createElement(I.a,{onClick:function(){e.playPause(),t.handlePlayPause()},style:{color:"white",backgroundColor:"black"},size:"small"},e.state.play?l.a.createElement(H.a,{size:"small"}):l.a.createElement(L.a,{size:"small"}))),l.a.createElement(E.a,{item:!0,xs:2},l.a.createElement(I.a,{onClick:function(){e.resetSong(),t.playNext(),e.checkForLike("next",t.activeSong)},style:{color:"black",backgroundColor:"transparent",boxShadow:"none"},size:"small"},l.a.createElement(G.a,{size:"small"})))),l.a.createElement(E.a,{container:!0,justify:"center",alignItems:"center",className:"bottom-nav"},l.a.createElement(E.a,{item:!0,xs:!0},l.a.createElement(I.a,{style:{color:"black",backgroundColor:"transparent",boxShadow:"none"},disableRipple:!0},l.a.createElement(F.a,{icon:l.a.createElement(J.a,{size:"small",disableRipple:!0}),checkedIcon:l.a.createElement(oe.a,{size:"small",disableRipple:!0}),size:"small",checked:e.state.shuffle,onChange:function(){var t=e.state.shuffle;t?e.setState({snackBarMessage:"Repeat All"}):e.setState({snackBarMessage:"Shuffle on"}),e.setState({shuffle:!t,snackBarOpen:!0})}}))),l.a.createElement(E.a,{item:!0,xs:!0},l.a.createElement(I.a,{style:{color:"black",backgroundColor:"transparent",boxShadow:"none"},disableRipple:!0},l.a.createElement(F.a,{icon:l.a.createElement(te.a,{size:"small",disableRipple:!0}),checkedIcon:l.a.createElement(Q.a,{size:"small",dissbleRipple:!0}),size:"small",checked:e.state.isLiked,onChange:function(){e.likeUnlike(t.activeSong),e.state.isLiked||e.setState({snackBarOpen:!0,snackBarMessage:"Added to favourites"}),e.setState({isLiked:!e.state.isLiked})}}))),l.a.createElement(E.a,{item:!0,xs:!0},l.a.createElement(b.a,{onClickAway:function(){e.setState({slideOpen:!1})}},l.a.createElement(I.a,{style:{color:"black",backgroundColor:"transparent",boxShadow:"none"},disableRipple:!0,onClick:function(){e.setState({slideOpen:!e.state.slideOpen})}},0==e.state.volume?l.a.createElement(ne.a,{size:"small"}):l.a.createElement($.a,{size:"small"})))),l.a.createElement(E.a,{item:!0,xs:!0},l.a.createElement(I.a,{style:{color:"black",backgroundColor:"transparent",boxShadow:"none"},disableRipple:!0},l.a.createElement(F.a,{icon:l.a.createElement(_.a,{size:"small"}),checkedIcon:l.a.createElement(_.a,{size:"small",style:{color:"red"}}),size:"small",checked:e.state.repeatOne,onChange:function(){var t=e.state.repeatOne;t?e.setState({snackBarMessage:"Single repeat is off"}):e.setState({snackBarMessage:"Single repeat"}),e.setState({repeatOne:!t,snackBarOpen:!0})}})))),l.a.createElement(D.a,{open:e.state.snackBarOpen,message:e.state.snackBarMessage,anchorOrigin:{vertical:"bottom",horizontal:"left"},autoHideDuration:1500,onClose:function(){e.setState({snackBarOpen:!1})}}),l.a.createElement(S.a,{direction:"up",in:e.state.slideOpen,style:{position:"absolute",bottom:0,left:0},timeout:{enter:600,exit:1e3}},l.a.createElement(f.a,{className:"volume-slider-paper",style:{background:"whiteSmoke"}},l.a.createElement("div",{className:"volume-slider"},l.a.createElement("div",null,0==e.state.volume?l.a.createElement(ne.a,{size:"small"}):l.a.createElement(ie.a,{size:"small"})),l.a.createElement(B.a,{style:{width:"60%"},onChange:e.handleVolume,defaultValue:60,onMouseUp:function(){e.setState({slideOpen:!1})}}),l.a.createElement("div",null,l.a.createElement($.a,{size:"small"})))))))})))}}]),n}(n.Component),me=a(86),ue=a.n(me),pe=a(85),de=a.n(pe),ge=a(89),fe=a.n(ge),Ee=a(87),be=a.n(Ee),he=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(d.Consumer,null,(function(t){return l.a.createElement(k.a,null,t.songs.map((function(a,n){if(null!=localStorage.getItem(n))return l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{button:!0,onClick:function(){t.setSong(n),e.props.checkforlike(n),e.props.resetSong(),t.setPlayTrue()}},l.a.createElement(E.a,{container:!0,spacing:2,justify:"space-between"},l.a.createElement(E.a,{item:!0},l.a.createElement("img",{src:a.img})),l.a.createElement(E.a,{item:!0,xs:!0,container:!0,direction:"column",style:t.activeSong==n?{color:"#ff3b57"}:null},l.a.createElement(E.a,{item:!0},l.a.createElement(h.a,{variant:"body2",style:{fontWeight:"bold",textTransform:"capitalize"}},a.song)),l.a.createElement(E.a,{item:!0},l.a.createElement(h.a,{variant:"subtitle2",style:{overflowX:"hidden"}},a.infoObj.artist))))),l.a.createElement(O.a,null))})))}))}}]),a}(n.Component),ye=a(88),ve=a.n(ye),Se=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={tab:0,loading:!0,DrawerOpen:!1,currentSongOpen:!1,DialogOpen:!1},n.handleCurrentSongSlide=function(){n.setState({currentSongOpen:!n.state.currentSongOpen})},n.handleDialog=function(){n.setState({DialogOpen:!n.state.DialogOpen})},n.HomeRef=new l.a.createRef,n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(g,null,l.a.createElement(d.Consumer,null,(function(t){return l.a.createElement(u.a,{basename:window.location.pathname||""},l.a.createElement(f.a,{className:"wrapper-paper",elevation:2},l.a.createElement(E.a,{container:!0,justify:"center",alignItems:"center",className:"title-grid"},l.a.createElement(E.a,{item:!0,xs:!0,style:{textAlign:"center"}},l.a.createElement(b.a,{onClickAway:function(){e.setState({DrawerOpen:!1})}},e.state.currentSongOpen?l.a.createElement(de.a,{size:"small",onClick:e.handleCurrentSongSlide,style:{color:"white",cursor:"pointer"}}):l.a.createElement(ue.a,{size:"small",style:{color:"white",cursor:"pointer"},onClick:function(){e.setState({DrawerOpen:!0})}}))),l.a.createElement(E.a,{item:!0,xs:8},l.a.createElement(h.a,{align:"center",variant:"h6",className:"title"},e.state.currentSongOpen?"Now Playing":"Music"," ")),l.a.createElement(E.a,{item:!0,xs:!0},e.state.currentSongOpen&&l.a.createElement(y.a,{onClick:e.handleDialog,disableRipple:!0},l.a.createElement(be.a,{size:"small",style:{color:"white"}})))),l.a.createElement(p.a,{path:"/",exact:!0},l.a.createElement("div",{className:"play-list"},l.a.createElement(N,{checkforlike:function(t){e.HomeRef.current.checkForLike("random",t)},resetSong:function(){e.HomeRef.current.resetSong()}}))),l.a.createElement(p.a,{path:"/fav",exact:!0},l.a.createElement("div",{className:"play-list"},l.a.createElement(he,{checkforlike:function(t){e.HomeRef.current.checkForLike("random",t)},resetSong:function(){e.HomeRef.current.resetSong()}}))),l.a.createElement(f.a,{className:"music-player-bottom",elevation:4},l.a.createElement(v.a,{button:!0,onClick:e.handleCurrentSongSlide},l.a.createElement(E.a,{container:!0,spacing:2,justify:"space-between"},l.a.createElement(E.a,{item:!0},l.a.createElement("img",{src:t.songs[t.activeSong].img})),l.a.createElement(E.a,{item:!0,xs:!0,container:!0,direction:"column"},l.a.createElement(E.a,{item:!0},l.a.createElement(h.a,{variant:"body2",style:{fontWeight:"bold",textTransform:"capitalize"}},t.songs[t.activeSong].song)),l.a.createElement(E.a,{item:!0},l.a.createElement(h.a,{variant:"subtitle2",style:{overflowX:"hidden",height:"20px",textOverflow:"ellipsis"}},t.songs[t.activeSong].infoObj.artist))),l.a.createElement(E.a,{item:!0,style:{paddingRight:"10px"}},l.a.createElement("div",{className:t.isPlay?"anim-div":null},l.a.createElement("div",{className:"one"}),l.a.createElement("div",{className:"two"}),l.a.createElement("div",{className:"three"})))))),l.a.createElement(S.a,{direction:"right",in:e.state.DrawerOpen,style:{position:"absolute",top:0,left:0,width:"150px",height:"100%"},timeout:{enter:600,exit:1e3}},l.a.createElement("div",{style:{width:"200px"},className:"slide"},l.a.createElement(h.a,{gutterBottom:!0,align:"right",style:{paddingRight:"10px"}},l.a.createElement(ve.a,{style:{cursor:"pointer"},onClick:function(){e.setState({DrawerOpen:!1})}})),l.a.createElement(k.a,null,l.a.createElement(v.a,{button:!0,component:u.b,to:"/"},l.a.createElement(x.a,null,l.a.createElement(h.a,{variant:"body1",align:"left"},l.a.createElement(fe.a,{size:"small"})," All songs"))),l.a.createElement(O.a,null),l.a.createElement(v.a,{button:!0,component:u.b,to:"/fav"},l.a.createElement(x.a,null,l.a.createElement(h.a,{variant:"body1",align:"left"},l.a.createElement(Q.a,{size:"small"})," Favourites")))))),l.a.createElement(S.a,{in:e.state.currentSongOpen,direction:"up",style:{position:"absolute",bottom:0,left:0,width:"100%",height:"91.5%",zIndex:1e5},timeout:{enter:600,exit:400}},l.a.createElement(f.a,null,l.a.createElement(ce,{ref:e.HomeRef}))),l.a.createElement(w.a,{open:e.state.DialogOpen,onClose:e.handleDialog,style:{zIndex:"10000000"}},l.a.createElement(j.a,{style:{padding:0}},l.a.createElement(k.a,null,l.a.createElement(v.a,null,l.a.createElement(x.a,null,l.a.createElement(h.a,{variant:"body1"},"Title :"," ",t.songs[t.activeSong].infoObj.title))),l.a.createElement(v.a,null,l.a.createElement(x.a,null,l.a.createElement(h.a,{variant:"body1"},"Album :"," ",t.songs[t.activeSong].infoObj.album))),l.a.createElement(v.a,null,l.a.createElement(x.a,null,l.a.createElement(h.a,{variant:"body1"},"Genre :"," ",t.songs[t.activeSong].infoObj.genre))),l.a.createElement(v.a,null,l.a.createElement(x.a,null,l.a.createElement(h.a,{variant:"body1"},"Artist :"," ",t.songs[t.activeSong].infoObj.artist))),l.a.createElement(v.a,null,l.a.createElement(x.a,null,l.a.createElement(h.a,{variant:"body1"},"Year released :"," ",t.songs[t.activeSong].infoObj.year))))))))})))}}]),a}(n.Component);r.a.render(l.a.createElement(Se,null),document.getElementById("root"))},68:function(e,t,a){var n={"./Bomdiggy.mp3":104,"./Butta Bomma.mp3":105,"./Emo Emo.mp3":106,"./Endhuko Emo.mp3":107,"./Faded.mp3":108,"./Haan Main Galat.mp3":109,"./Hawayein.mp3":110,"./Ik Variaa.mp3":111,"./Illegal Weapon.mp3":112,"./Inka Edho.mp3":113,"./Kudukku song.mp3":114,"./Kutti story.mp3":115,"./Maatevinadhuga.mp3":116,"./Malang.mp3":117,"./Manasu Maree.mp3":118,"./O saki saki.mp3":119,"./Pachtaoge.mp3":120,"./Ramulo Ramula.mp3":121,"./Rowdybaby.mp3":122,"./Samajavaragamana.mp3":123,"./Singles Anthem.mp3":124,"./Solo.mp3":125,"./Sorry.mp3":126,"./Starboy.mp3":127,"./Taki Taki.mp3":128,"./Thodi jagah.mp3":129,"./Thunder.mp3":130,"./Yaanji.mp3":131,"./sanamre.mp3":132};function l(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=i,e.exports=l,l.id=68},69:function(e,t,a){},93:function(e,t,a){e.exports=a(161)}},[[93,1,2]]]);
//# sourceMappingURL=main.e57b931e.chunk.js.map