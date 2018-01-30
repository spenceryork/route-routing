module.exports = function(grunt) {
    grunt.initConfig({
      "angular-builder": {
        options: {
          mainModule: "RouteApp",
          externalModules: ["ngRoute"]
        },
        app: {
          src: "./app/**/*.js",
          dest: "./dist/project.js"
        }
      },
      jshint: {
        options: {
          predef: ["document", "console", "firebase"],
          esnext: true,
          globalstrict: true,
          globals: { angular: true }
        },
        files: ["./app/**/*.js"]
      },
      watch: {
        javascripts: {
          files: ["./app/**/*.js"],
          tasks: ["jshint"]
        },
      }
    });
  
    require("matchdep")
      .filter("grunt-*")
      .forEach(grunt.loadNpmTasks);
  
    grunt.registerTask("default", ["jshint", "watch"]);
  };