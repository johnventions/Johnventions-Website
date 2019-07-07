<template src="./project.html"></template>

<script>
export default {
  name: "Home",
  data() {
    return {
      projectList: require("@/projects.js"),
      project: null
    };
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
      this.$router.push("/");
    }
  }
};
</script>

<style src="./project.styl" lang="styl" scoped></style>