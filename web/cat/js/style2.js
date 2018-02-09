
var duration = 2
  var code = `*{
	margin:0;
	padding: 0;
}

html{
	font-size: 37.5px;
}
body{
	background: #5f99a4;
}
@-webkit-keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}

  0%{
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
}

  20%{
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
}

  40%{
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
}

  60%{
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
}

  80%{
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
}

  to{
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.zoomInUp{
  -webkit-animation-name: zoomInUp;
  animation-name: zoomInUp;
}

.mao{
	position: relative;
	top:0.666667rem;
	animation: bounceIn 1.5s ease-in-out both;
}
.mao .mao-box{
	margin:1.066667rem auto;
	width: 5.333333rem;
	height: 4.586667rem;
}
.mao-head{
	position: relative;
	margin:0 auto;
	width: 5.333333rem;
	height: 4.533333rem;
	background: #ffda73;
	border-radius: 50% 50% 35% 35%;
	border:0.026667rem solid #2e2e2e;
	overflow: hidden;
	z-index: 10;
}
.huawen{
	/*position: absolute;
	left: 110px;*/
	width: 2.4rem;
	height: 2.133333rem;
	background: #8D8D8D;
	margin:0 auto;
	border-radius: 0 0 50% 50%;
	overflow: hidden;
}
.huawen>div:first-child{
	height: 2.133333rem;
	width: 1.2rem;
	background: #f0ac6b;
}
/*耳朵*/
.ear{
	position: absolute;
	top:-0.08rem;
	left: 50%;
	width: 4.986667rem;
	height: 1.6rem;
	margin-left:-2.493333rem;
	border-radius: 0% 0% 0% 0%;
}
/*左耳*/
.ear>div:first-child{
	position: absolute;
	left: -0.266667rem;
	top: 0;
	width: 2.666667rem;
	height: 2.133333rem;
	background: #ffda73;
	border-radius: 4% 80% 0% 50%;
	border:0.026667rem solid #2e2e2e;
	transform: rotate(-15deg);
    -webkit-transform: rotate(-15deg);
    -o-transform: rotate(-15deg);
    transition: transform 1s,left 1s;

}
.ear span{
	display: block;
	width: 0.666667rem;
	height: 0.666667rem;
	font-size: 0.666667rem;
	margin-top: 0.133333rem;
	margin-left: 0.133333rem;
	transform: rotate(30deg);
	-webkit-transform: rotate(-15deg);
}
/*右耳*/
.ear>div:last-child{
	position: absolute;
	right: -0.333333rem;
	top: 0;
	width: 2.666667rem;
	height: 2.133333rem;
	background: #ffda73;
	border-radius: 80% 4% 50% 0%;
	border:0.026667rem solid #2e2e2e;
	transform: rotate(15deg);
    -webkit-transform: rotate(15deg);
    -o-transform: rotate(15deg);
    transition: transform 1s,left 1s;
}
.mao-box .yanjing{
	position: absolute;
	top: 2.666667rem;
	left: 50%;
	width: 4.0rem;
	height: 0.8rem;
	z-index: 20;
	margin-left: -2.0rem;
	overflow: hidden;
}
/*左眼*/
.mao-box .yanquan{
	position: absolute;
	width: 1.333333rem;
	height: 1.333333rem;
	border:0.026667rem solid #2e2e2e;
	background: #fff;
	border-radius: 50% 50% 50% 50%;
	overflow: hidden;
}
.mao-box .yanquan>div:last-child{
	width: 0.4rem;
	height: 1.333333rem;
	background-color: #2e2e2e;
	margin-left: 0.466667rem;
	transition:all 1s;
}
.mao-box .yanquan-hedding{
	position: absolute;
	height: 1.333333rem;
	width: 2.4rem;
	border-top: 2px solid #2e2e2e;
	border-radius: 50% 50% 50% 50%;
	background: #ffda73;
	margin-top: 0.666667rem;
	margin-left: -0.533333rem;
	transition: margin-top 1s;
}
.hong{
	position: absolute;
	top:0.453333rem;
	left: 0.24rem;
	height: 0.373333rem;
	width: 0.933333rem;
	background: red;
	border-radius: 50% 50% 50% 50%;
	background-image: -moz-radial-gradient( 50% 50%, rgba(253,214,240,0.8) 0%, rgba(253,224,244,0.8) 66%, rgba(253,234,247,0.8) 100%);
    background-image: -webkit-radial-gradient( 50% 50%, rgba(253,214,240,0.8) 0%, rgba(253,224,244,0.8) 66%, rgba(253,234,247,0.8) 100%);
    background-image: -ms-radial-gradient( 50% 50%, rgba(253,214,240,0.8) 0%, rgba(253,224,244,0.8) 66%, rgba(253,234,247,0.8) 100%);
    opacity: 0.0;
}
.yan-right{
	position: absolute;
	left: 2.613333rem;
	top: 0;
	background: red;
}
/*============================*/
.face-huawen{
	position: absolute;
	top: 2.533333rem;
	left: 50%;
	height: 1.066667rem;
	width: 5.066667rem;
	margin-left: -2.533333rem;
	z-index: 20;
}
.face-grain>div:first-child{
	width: 0.4rem;
	height: 0.133333rem;
	border-top: 0.08rem solid #E53941;
	border-radius: 30% 80% 20% 50%;
	transform: rotate(25deg);
    -webkit-transform: rotate(25deg);
    -o-transform: rotate(25deg);
    margin-left: 0.266667rem;
}
.face-grain >div:nth-child(2){
	width: 0.266667rem;
	height: 0.08rem;
	background-color: #E53941;
	border-radius: 50% 50% 50% 50%;
	transform: rotate(25deg);
    -webkit-transform: rotate(25deg);
    -o-transform: rotate(25deg);
    margin-left: 0.266667rem;
}
.face-grain >div:nth-child(3){
	width: 0.426667rem;
	height: 0.133333rem;
	border-radius: 50% 50% 50% 50%;
	border-bottom: 0.053333rem solid #E53941;
	transform:rotate(25deg);
    -webkit-transform: rotate(25deg);
    -o-transform: rotate(25deg);
    margin-left: 0.106667rem;
}
.face-grain >div:nth-child(4){
	width: 0.346667rem;
	height: 0.266667rem;
	border-bottom: 0.053333rem solid #f53941;
	border-radius: 30% 0% 90% 30%;
	transform: rotate(30deg);
    -webkit-transform: rotate(30deg);
    -o-transform: rotate(30deg);
    margin-top: 0.266667rem;
    margin-left: 0.373333rem;
}
.face-grain >div:last-child{
	width: 0.293333rem;
	height: 0.133333rem;
	border-bottom: 0.04rem solid #f53941;
	border-radius: 0% 0% 50% 50%;
	transform: rotate(-15deg);
    -webkit-transform: rotate(-15deg);
    -o-transform: rotate(-15deg);
	margin-left: 0.533333rem;
	margin-top: -0.106667rem;
}
.huawen-right{
	float: right;
	transform: rotateY(180deg);
	margin-top: -1.133333rem;
}
.bizi{
	position: absolute;
	left: 50%;
	top: 3.466667rem;
	width: 0.4rem;
	height: 0.48rem;
	margin-left: -0.2rem;
	z-index: 30;
}
.bizi>div:first-child{
	width: 0.4rem;
	height: 0.133333rem;
	border-bottom: 0.106667rem solid #2e2e2e;
	border-radius: 0% 0% 50% 50%;
	margin-top: -0.133333rem;
}
/*======================================*/
/*嘴巴*/
.zuiba-box{
	position: absolute;
	left: 50%;
	top: 3.466667rem;
	width: 2.666667rem;
	height: 0.48rem;
	margin-left: -1.333333rem;
	z-index: 30;
	overflow: hidden;
}
.zuiba{
	margin-top: 0.08rem;
	margin-left: 1.133333rem;
}
.zuiba>div:first-child{
	width:0.053333rem;
	height: 0.106667rem;
	background: #2e2e2e;
	margin-left: 0.173333rem;
}
.zuiba>div:nth-child(2){
	position: absolute;
	width: 0.666667rem;
	height: 0.533333rem;
	border-bottom: 0.053333rem solid #2e2e2e;
	border-left: 0.053333rem solid #2e2e2e;
	border-radius: 40% 0% 20% 50%;
	margin-left: 0.173333rem;
	margin-top: -0.346667rem;
	transition: border-radius 1s;
}
.zuiba>div:nth-child(3){
	position: absolute;
	width: 0.666667rem;
	height: 0.533333rem;
	border-bottom: 0.053333rem solid #2e2e2e;
	border-right: 0.053333rem solid #2e2e2e;
	border-radius: 0% 20% 50% 20%;
	margin-left: -0.506667rem;
	margin-top: -0.346667rem;
	transition: border-radius 1s;
}
/*======================================================*/
/*左耳*/
.mao.active .ear>div:first-child{
	left: -0.133333rem;
	transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    border-radius: 4% 80% 0% 50%;
}
/*右耳*/
.mao.active .ear>div:last-child{
	/*right: -10px;*/
	transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    border-radius: 80% 4% 50% 0%;
}
.box{
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  overflow: hidden;
}
.txt{
    outline: none;
}
.txt{
  color: hsla(0,0%,0%,0);
  /*color:#313874;*/
  text-shadow: #fff 0 0 0.8rem;
  transition: text-shadow 2s cubic-bezier(0, 1, 0, 1);
}
.mao.active .mao-box .yanquan>div:first-child{
	width: 0.533333rem;
}
.mao.active .mao-box .yanquan-hedding{
	margin-top: 0.4rem;
}
.mao.active .mao-box .hong{
	opacity: 0.8;
	transition: opacity 0.5s ease-in 0.2s;
}
.mao.active .mao-box .zuiba>div:nth-child(2){
	border-radius: 50% 50% 50% 50%;
	width: 0.533333rem;
}
.mao.active .mao-box .zuiba>div:nth-child(3){
	border-radius: 50% 50% 50% 50%;
	width: 0.533333rem;
	margin-left: -0.4rem;
}
.mao.active .txt{
	text-shadow: #fff 0 0 0.066667rem;
	transition: text-shadow 1s cubic-bezier(0, 0.75, 0, 1);
}


/* ♥ ------------------------------------------------------ */

.xin{
  margin: 0 0.133333rem;
  color: hsla(0,0%,0%,0);
  text-shadow: red 0 0 0.066667rem;
  transition: text-shadow 3s cubic-bezier(0, 1, 0, 1);
  
}

.mao.active .xin{
	text-shadow: red 0 0 1.333333rem;
	transition: text-shadow 2s cubic-bezier(0, 0.75, 0, 1);
}

  `;
  
  let container = document.querySelector('#code')
  let styleTag = document.querySelector('#styleTag')
  writeCode();
  function writeCode(){
  	console.log('fff')
    let n = 100
    let id
    id = setTimeout(function run(){
      n+=3
      container.innerHTML = code.substring(0,n)
      styleTag.innerHTML = code.substring(0,n)
      container.scrollTop = container.scrollHeight
      if(n < code.length){
        id = setTimeout(run, duration)
      }else{
       	cb();
      }
    }, duration)
  }

function cb(){
	setTimeout(function(){
		document.querySelector('.mao').classList.add('active');
		addClick();
	},2000);
}

function addClick(){
	document.querySelector('.mao').onclick = function(){
		// if(this.classList.hasClass('active')){
		// 	this.classList.remove('active');
		// }else{
		// 	this.classList.add('active');
		// }

		this.classList.toggle('active');
	}
}
