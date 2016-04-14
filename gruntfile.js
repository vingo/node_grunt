module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'), //read package.json file
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        //src: './es5/app.js',
        //dest: './build/app.min.js'
        src: './es5/*',
        dest: './build/all.min.js'
          /*files: {
            './build/app.min.js': './es5/app.js',
            './build/test.min.js': './es5/test.js'
          }*/
      }

    },
    watch: {
      generales5: {
        files: ['./src/*'],
        tasks: ['babel'] //编译为es5
      },
      compressEs5: {
        files: ['./es5/*'],
        tasks: ['clean', 'uglify', 'concat'] //删除,压缩,合并
      }
    },
    babel: {
      options: {
        sourceMap: false, //生成源码文件
        presets: ['es2015', 'stage-0']
      },
      convertToEs5: {
        files: {
          './es5/app.js': './src/app.js', //dist:es5-->  src: es6
          './es5/test.js': './src/test.js'
        }
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      fileMerge: {
        src: ['./build/*'],
        dest: './built/build.min.js'
      },
    },
    clean: {
      //folder: ['path/to/dir/'],
      //folder_v2: ['path/to/dir/**'],
      //contents: ['path/to/dir/*'],
      subfolders: ['./build/*', './built/*'],
      ///all_css: ['path/to/dir/**/*.css']
    },
    jsinspect: { //detect similar code.
      examples: {
        options: {
          configFile: '.jsinspectrc'
        },
        src: [
          './src/*.js' // limit directory
        ]
      }
    },
    concurrent: {
      task: ['uglify', 'watch', 'babel'],
      options: {
        logConcurrentOutput: true,
        limit: 4
      }
    }
  });

  // 加载任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-concat'); //文件合并
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-jsinspect'); //检测 代码相似的片段
  // 默认被执行的任务列表。
  grunt.option('force', true);
  grunt.registerTask('test', ['jsinspect']);
  //grunt.registerTask('default', ['uglify', 'watch', 'babel']);
  /*grunt.registerTask('test', function(taskName) {
    console.log(taskName);
    grunt.task.run(['watch:generales5']);
    grunt.task.run(['watch:compressEs5']);
  });*/
  grunt.registerTask('default', ['concurrent']);

};