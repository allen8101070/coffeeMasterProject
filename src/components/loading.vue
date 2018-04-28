<template>
    <div class="mt-5 ml-auto mr-auto">
        <div class="cssload-loader">
            <div class="cssload-inner cssload-one"></div>
            <div class="cssload-inner cssload-two"></div>
            <div class="cssload-inner cssload-three"></div>
        </div>
        <h3 class="mt-3 mb-5">載入中..</h3>
    </div>
</template>

<script>
export default {
  name: 'loading'
}
</script>

<style scoped>
/*  以下是用網路上的css loading 轉圈圈產生器產生的 所以就不寫sass囉 :P  */
.cssload-loader {
	position: relative;
	left: calc(50% - 40px);
	width: 80px;
	height: 80px;
	border-radius: 50%;
		-o-border-radius: 50%;
		-ms-border-radius: 50%;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
	perspective: 1000px;
}

.cssload-inner {
	position: absolute;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
		-o-box-sizing: border-box;
		-ms-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
	border-radius: 50%;
		-o-border-radius: 50%;
		-ms-border-radius: 50%;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;	
}

.cssload-inner.cssload-one {
	left: 0%;
	top: 0%;
	animation: cssload-rotate-one 0.85s linear infinite;
		-o-animation: cssload-rotate-one 0.85s linear infinite;
		-ms-animation: cssload-rotate-one 0.85s linear infinite;
		-webkit-animation: cssload-rotate-one 0.85s linear infinite;
		-moz-animation: cssload-rotate-one 0.85s linear infinite;
	border-bottom: 4px solid rgb(219,140,76);
}

.cssload-inner.cssload-two {
	right: 0%;
	top: 0%;
	animation: cssload-rotate-two 0.85s linear infinite;
		-o-animation: cssload-rotate-two 0.85s linear infinite;
		-ms-animation: cssload-rotate-two 0.85s linear infinite;
		-webkit-animation: cssload-rotate-two 0.85s linear infinite;
		-moz-animation: cssload-rotate-two 0.85s linear infinite;
	border-right: 4px solid rgb(219,140,76);
}

.cssload-inner.cssload-three {
	right: 0%;
	bottom: 0%;
	animation: cssload-rotate-three 0.85s linear infinite;
		-o-animation: cssload-rotate-three 0.85s linear infinite;
		-ms-animation: cssload-rotate-three 0.85s linear infinite;
		-webkit-animation: cssload-rotate-three 0.85s linear infinite;
		-moz-animation: cssload-rotate-three 0.85s linear infinite;
	border-top: 4px solid rgb(219,140,76);
}







@keyframes cssload-rotate-one {
	0% {
		transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
	}
	100% {
		transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
	}
}

@-o-keyframes cssload-rotate-one {
	0% {
		-o-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
	}
	100% {
		-o-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
	}
}

@-ms-keyframes cssload-rotate-one {
	0% {
		-ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
	}
	100% {
		-ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
	}
}

@-webkit-keyframes cssload-rotate-one {
	0% {
		-webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
	}
	100% {
		-webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
	}
}

@-moz-keyframes cssload-rotate-one {
	0% {
		-moz-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
	}
	100% {
		-moz-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
	}
}

@keyframes cssload-rotate-two {
	0% {
		transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
	}
	100% {
		transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
	}
}

@-o-keyframes cssload-rotate-two {
	0% {
		-o-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
	}
	100% {
		-o-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
	}
}

@-ms-keyframes cssload-rotate-two {
	0% {
		-ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
	}
	100% {
		-ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
	}
}

@-webkit-keyframes cssload-rotate-two {
	0% {
		-webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
	}
	100% {
		-webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
	}
}

@-moz-keyframes cssload-rotate-two {
	0% {
		-moz-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
	}
	100% {
		-moz-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
	}
}

@keyframes cssload-rotate-three {
	0% {
		transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
	}
	100% {
		transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
	}
}

@-o-keyframes cssload-rotate-three {
	0% {
		-o-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
	}
	100% {
		-o-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
	}
}

@-ms-keyframes cssload-rotate-three {
	0% {
		-ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
	}
	100% {
		-ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
	}
}

@-webkit-keyframes cssload-rotate-three {
	0% {
		-webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
	}
	100% {
		-webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
	}
}

@-moz-keyframes cssload-rotate-three {
	0% {
		-moz-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
	}
	100% {
		-moz-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
	}
}

</style>