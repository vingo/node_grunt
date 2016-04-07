module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'), //read package.json file
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: './src/app.js',
        dest: './build/app.min.js'
      }
    },
    watch: {
      files: ['./src/app.js'],
      tasks: ['uglify'] //执行压缩task文件变更后
    }
  });

  // 加载任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-contrib-concat'); //文件合并
  // 默认被执行的任务列表。
  grunt.registerTask('watch',
    //['watch'],
    function() {
      var args = arguments;
      if (args.length <= 0) {
        console.log('the task no args');
      } else {
        console.log('ready to exec task:', args[0]);
        grunt.task.run(['watch']);
      }

    });
  grunt.registerTask('default', ['uglify', 'watch']);
};