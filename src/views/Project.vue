<template>
	<main v-if="project">
        <section class='hero'>
            <div class='container'>
                <router-link to="/">
                    <span class='back-button'><i class="fas fa-arrow-left"></i> Back</span>
                </router-link>
                <h1>{{ project.name }}</h1>
            </div>
        </section>
        <section class='description'>
            <div class='container'>
                <p v-html="project.description">
                </p>
                <div class='buttons'>
                    <a class='btn btn-primary' 
                        v-for="(btn, x) in project.buttons" 
                        v-bind:href="btn.url"
                        target="_blank"
                        v-bind:key="x">
                        {{ btn.title }}
                    </a>
                </div>
                <div class='row gallery'>
                    <div class='col-12 col-md-4 gallery-item' v-for="(i, x) in project.images" v-bind:key="x">
                        <img v-bind:src="i.s" v-on:click="lightbox(i)">
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
            project: null
		}
    },
    methods: {
        lightbox: function(img) {
            this.$lity(img.l);
        }
    },
    created: function() {
        var p = this.$route.params.slug;
        this.project = this.projectList.find(function(v) {
            return v.slug == p;
        });
        document.title = this.project.name + " | John Horton";
        if (this.project == null) {
            //redirect to homepage
            this.$router.push('/');
        }
    }
}
</script>

<style lang="styl" scoped>
    @import '~@/styles/imports.styl';
    .back-button
        position absolute
        top 30px
        color white
        &:hover
            color #e67bff
    h1
        font-size 40px
        @media $tablet-up
            font-size 70px
    section.hero
        padding 50px 0
        background linear-gradient(#082f50, #04233e)
        background linear-gradient(#082f50, #082f50 50%, #04233e)
        @media $tablet-up
            padding 100px 0
    section.description
        padding 40px 0
        .gallery
            padding-top 50px
            .gallery-item
                height 200px
                margin-bottom 20px
            img
                width 100%
                max-height 100%
                object-fit cover
                cursor pointer
                transition transform 1s ease
                &:hover
                    transform scale(0.90)
</style>