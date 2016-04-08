module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'), //read package.json file
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: './es5/app.js',
        dest: './build/app.min.js'
      }
    },
    watch: {
      generales5: {
        files: ['./src/*'],
        //tasks: ['babel', 'uglify'], //执行压缩task文件变更后
        tasks: ['babel'] //编译为es5
      },
      compressEs5: {
        files: ['./es5/*'],
        tasks: ['uglify'] //执行压缩
      }
    },
    babel: {
      options: {
        sourceMap: false, //生成源码文件
        presets: ['es2015']
      },
      dist: {
        files: {
          './es5/app.js': './src/app.js' //dist:es5-->  src: es6
        }
      }
    },
    concurrent: {
      task: ['uglify', 'watch', 'babel'],
      options: {
        logConcurrentOutput: true,
        limit: 3
      }
    }
  });

  // 加载任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-concurrent');
  //grunt.loadNpmTasks('grunt-contrib-concat'); //文件合并
  // 默认被执行的任务列表。
  grunt.option('force', true);
  //grunt.registerTask('default', ['uglify', 'watch', 'babel']);
  /*grunt.registerTask('test', function(taskName) {
    console.log(taskName);
    grunt.task.run(['watch:generales5']);
    grunt.task.run(['watch:compressEs5']);
  });*/
  grunt.registerTask('default', ['concurrent']);

};