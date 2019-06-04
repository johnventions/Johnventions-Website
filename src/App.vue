<template>
	<div id="app">
		<transition name="fade" mode="out-in">
			<router-view/>
		</transition>
	</div>
</template>

<style lang="styl">
	body
		margin 0
		background #1d1e1f
		color white
		font-family 'PT Serif', serif
		-webkit-font-smoothing antialiased
		-moz-osx-font-smoothing grayscale
	h1, h2, h3, h4, h5
		font-family 'PT Serif', serif
		color white
		line-height 1.25
	p
		line-height 1.5
		font-size 20px
	.fade-enter-active, .fade-leave-active
		transition-duration 0.3s
		transition-property opacity
		transition-timing-function ease
	.fade-enter, .fade-leave-active
		opacity 0
	.btn
		display inline-block
		background #082f50
		color white
		text-decoration none
		padding 15px 20px
		border-radius 4px
		&:hover
			background #04233e
		+ .btn
			margin-left 20px
</style>
