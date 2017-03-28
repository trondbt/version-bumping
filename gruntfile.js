module.exports = function(grunt) {

  grunt.initConfig({
    bump: {
      options: {
        files: ['package.json', 'bower.json'],
        commitFiles: ['package.json', 'bower.json'],
        tagMessage: 'v%VERSION%',
      },
      release: {

      },
      snapshot: {
        options: {
          metadata: 'SNAPSHOT',
          createTag: false,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bump');

  //var dry = grunt.option()
  //grunt.registerTask('release', ['bump-only --dry-run']);
  grunt.registerTask('default', []);

};