<template>
	<main>
		<section class='hero-background'>
			<svg height="100%" 
					width="100%" 
					preserveAspectRatio="none" 
					viewBox="0 0 100 100">
				<polygon v-for="(m, x) in mountains" 
					class='mountain'
					v-bind:points="m.points" 
					v-bind:key="x"
					v-bind:style="m.style">
					</polygon>
			</svg>
		</section>
		<section class='hero-fixed'>
			<div class='container'>
				<div class="animated fadeInUp delay-1s slow">
					<h1 class='col-12'>
						John Horton
					</h1>
					<p class='col-md-12'>
						Web Developer & Maker
					</p>
				</div>
			</div>
		</section>
		<section class='hero-overlay'></section>
		<section class='about content'>
			<div class='container'>
				<div class='row'>
					<div class='col-12 col-lg-4'>
						<h2 class='hangright'>About Me</h2>
					</div>
					<div class='col-12 col-lg-8'>
						<p>
							I'm a Full Stack developer building fun things for the web, the physical world, and everywhere in between. 
							Lately I've been particularly interested in <em>Angular</em>, <em>VueJS</em>, and <em>Socket.io</em> applications that bring groups of people together.
						</p>
						<p>
							In my free time I like messing with <em>Embedded Electronics</em> (i.e. Arduino, Raspberry Pi, etc) and <em>3D printing</em>, to bring the digital world to life.
						</p>
					</div>
				</div>
			</div>
		</section>
		<section class='work content'>
			<div class='container'>
				<h2 class='hangall'>My Work</h2>
				<div class='row justify-content-md-center'>
					<div class='col-12 col-lg-8'>
						<p>
							I'm always tinkering with something new outside of work – below are a few of the side-projects that I've been passionate about over the past few years
						</p>
					</div>
				</div>
				<div class='row'>
					<div class='col-12 col-md-6 col-lg-4 item animated fadeIn' v-for="(proj) in projectList" v-bind:key="proj.slug">
						<router-link :to="proj.path">
							<div class='item-contents'>
								<img v-bind:src="proj.img" v-if="proj.img">
									{{proj.name}}
							</div>
						</router-link>
					</div>
				</div>
			</div>
		</section>
		<section class='skills content'>
			<div class='container'>
				<div class='row'>
					<div class='col-12 col-lg-2'>
						<h2 class='hangright'>Skills</h2>
					</div>
					<div class='col-12 col-md-6 col-lg-5 skill-list'>
						<p v-for="skill in skills1" v-bind:key="skill">
							{{ skill }}
						</p>
					</div>
					<div class='col-12 col-md-6 col-lg-5 skill-list'>
						<p v-for="skill in skills2" v-bind:key="skill">
							{{ skill }}
						</p>
					</div>
				</div>
			</div>
		</section>
		<section class='content contact'>
			<div class='container'>
				<div class='row'>
					<div class='offset-lg-4 col-lg-8'>
						<h2 class='hangleft'>Contact</h2>
						<p>Interested in working together?</p>
					</div>
				</div>
				<div class='row justify-content-center cards'>
					<div class='col-12 col-md-3'>
						<a target='_blank' class='card' href='https://www.twitter.com/johnventions'>
						<i class="fab fa-twitter"></i>
							<span>Twitter</span>
						</a>
					</div>
					<div class='col-12 col-md-3'>
						<a target='_blank' class='card' href='https://www.github.com/johnventions'>
						<i class="fab fa-github"></i>
							<span>GitHub</span>
						</a>
					</div>
					<div class='col-12 col-md-3'>
						<a class='card' href='mailto:johnharoldhorton@gmail.com'>
							<i class="fas fa-comments"></i>
							<span>E-Mail</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>

export default {
	name: 'Home',
	data () {
		return {
			projectList: require('@/projects.js'),
			mountains: [],
			skills1: ['.Net MVC', 'MySQL / SQL Server', 'MongoDB', 'NodeJS & Express'],
			skills2: ['Javascript / jQuery', 'Angular2 & VueJS', 'CSS / Stylus / SASS',  'PHP']
		}
	},
	methods: {

	},
	mounted: function() {
		var pos = -10;
		for(var i=0; i<8; i++) {
			pos += Math.floor(Math.random() * 24) + 5;
			var w = Math.floor(Math.random() * 5) + 12;
			var left = pos - w;
			var right = pos + w;
			var t = 2 + Math.random() * 3;
			var d = 1 + Math.random() * 2;
			var y = 55 -Math.floor(Math.random() * 20);
			var m = {
				width: w,
				pos: pos,
				points: pos + "," + y + " "+ left + ",100 " + right + ",100",
				style: {
					'transform': 'translateY(35%)',
					'transition': 'transform ' + t + 's ease',
					'transition-delay': d +'s'
				}
			};
			this.mountains.push(m);
		}
		var self = this;
		setTimeout(function() {
			self.mountains.forEach(function(v) {
				var y = Math.floor(Math.random() * 10) - 1;
				v.style.transform = 'translateY(' + y +'%)';
			});
		}, 200);
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="styl" scoped>
	@import '~@/styles/imports.styl';
	space = #181419;
	lgreen = #0a2711;
	sky = #111133;
	purps = #230929;
	lpurps = #e67bff;
	dpurps = #430652;
	lblue = #4aa1ff;
	
	main
		background space
	.mountain
		fill #440552
		fill #181419
	h2
		border-bottom 4px solid lblue
		display inline-block
		margin-bottom 25px
		&.hangright
			padding-right 42px
			transition padding-right 0.5s ease
			&:hover
				padding-right 52px
		&.hangleft
			padding-left 42px
			transition padding-left 0.5s ease
			&:hover
				padding-left 52px
		&.hangall
			padding-left 30px
			padding-right 30px
			transition padding 0.5s ease
			&:hover
				padding-left 42px
				padding-right 42px
	em
		color lpurps
		font-style initial
		transition color 0.5s ease
	.hero-fixed
		position fixed
		width 100%
		padding 7vw 0
		@media $tablet-up
			padding 100px 0
		@media $desktop-up
			padding 65px 0
		@media $desktop-hd-up
			padding 150px 0
		p
			color white
			font-size 18px
			text-align center
	.hero-background
		background linear-gradient(rgba(0,0,0,.25), rgba(lgreen, 0.5)) ,url('~@/assets/stars.jpeg')
		background-position bottom center
		height 78vw
		background-size 500%
		width 100%
		position absolute
		overflow hidden
		z-index 0
		@media $tablet-up
			height 52vw
			background-size cover
		@media $desktop-up
			height 34vw
			background-size cover

	.hero-overlay
		height 78vw
		position relative
		background linear-gradient(rgba(0,0,0,.01), rgba(0,0,0,.01) 60%, space)
		@media $tablet-up
			height 50vw
			background linear-gradient(rgba(0,0,0,.01), rgba(0,0,0,.01) 70%, space)
		@media $desktop-up
			height 35vw
			background linear-gradient(rgba(0,0,0,.01), rgba(0,0,0,.01) 70%, space)
		@media $desktop-hd-up
			height 31vw
	h1
		font-size 42px
		color white
		text-align center
		@media $tablet-up
			font-size 70px
			margin-bottom 10px
		@media $desktop-xl-up
			font-size 84px

	section.content
		padding 35px 0 20px
		position relative
		background #181419
		@media $tablet-up
			padding 55px 0 30px
		@media $desktop-up
			padding 85px 0 30px
	section.about
		background linear-gradient(space, purps)
		margin-top -1px
		margin-bottom -1px
	section.work
		text-align center
		background linear-gradient(purps, sky 75%, sky)
		p
			margin-bottom 40px
		h2, p
			text-align center

		.item
			a
				color white
			.item-contents
				background rgba(0, 5, 0, 0.2)
				margin-bottom 30px
				padding 8px
				img
					display block
					width 100%
					margin-bottom 5px
					transition transform 1s ease
				&:hover
					img
						transform scale(0.90)
	section.skills
		background sky
		h2
			@media $desktop-up
				position absolute
				top 40%
				transform translateY(-50%)
		.skill-list
			text-align center
	section.contact
		background linear-gradient(sky, space)
		text-align right
		a, li
			font-size 20px
		.cards
			text-align center
			.card
				display block
				color white
				text-decoration none
				padding-top 20px
				@media $tablet-up
					padding-top 40px
				&:hover
					color lblue
				i
					display inline-block
					font-size 30px
					padding-right 10px
					vertical-align middle
				span
					text-decoration underline
</style>
