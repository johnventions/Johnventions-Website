<template src="./home.html"></template>
<style src="./home.styl" lang="stylus" scoped></style>
<script>
import { isMobile } from "@/isMobile.js";
const allProjects = require("@/projects.js");

export default {
  name: "Home",
  data() {
    return {
      // projectList: require("@/projects.js"),
      projectList: allProjects.filter( x => x.hidden != true ),
      mountains: [],
      skills1: [
        ".Net MVC",
        "MySQL / SQL Server",
        "MongoDB",
        "NodeJS & Express"
      ],
      skills2: [
        "Angular2 & VueJS",
        "Javascript / jQuery",
        "CSS / Stylus / SASS",
        "PHP"
      ]
    };
  },
  methods: {},
  mounted: function() {
    var pos = -10;
    var mountainCount = isMobile() ? 4 : 8;
    for (var i = 0; i < mountainCount; i++) {
      pos += Math.floor(Math.random() * 20) + (isMobile() ? 12 : 6);
      var w = Math.floor(Math.random() * 5) + (isMobile() ? 20 : 12);
      var left = pos - w;
      var right = pos + w;
      var t = 2 + Math.random() * 3;
      var d = 1 + Math.random() * 2;
      var y = 55 - Math.floor(Math.random() * 20);
      var m = {
        width: w,
        pos: pos,
        order: Math.floor(Math.random() * 16),
        points: pos + "," + y + " " + left + ",100 " + right + ",100",
        style: {
          transform: "translateY(55%)",
          transition: "transform " + t + "s ease",
          "transition-delay": d + "s"
        }
      };
      this.mountains.push(m);
    }
    this.mountains = this.mountains.sort(function(a, b) {
      return a.order - b.order;
    });
    var self = this;
    setTimeout(function() {
      self.mountains.forEach(function(v) {
        var y = Math.floor(Math.random() * 10) - 1;
        v.style.transform = "translateY(" + y + "%)";
      });
    }, 200);
  }
};
</script>
