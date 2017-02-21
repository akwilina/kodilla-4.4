/**
 * Created by delola lokal on 2017-02-21.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
    //grunt w folderze "sass" projektu plik main.sass skompiluje do pliku main.css w katalogu "css"
    // (najpierw utwórz te katalogi i wrzuć plik sass)
                    'css/main.css': 'sass/main.sass'
                }
            }
        },

    imagemin: {
        dynamic: {
            files: [{
                expand: true,

                cwd: 'images/', //cwd - current working directory, czyli stwórz folder "images" i wrzuć do niego rysunki
                src: ['**/*.{png,jpg,gif}'],
                dest: 'images/build/' //wrzuci przerobione zdjęcia do folderu images/build
            }]
        }
    },

    watch: {
        scripts: {
            files: ['sass/*.sass'],
            tasks: ['sass'],
            options: {
               spawn: false,
            }
        }
    },
    // watching CSS files and using the built-in server for static HTML/CSS/JS files. This config alone will launch a
   // mini-server (using your current working directory as the base), watch your CSS files for changes &
   // auto-inject those changes into all connected browsers.
    browserSync: {
        dev: {
            bsFiles: {
                src: [
                    'app/css/*.css',
                    'app/*html'
                ]
            },
            options: {
                watchTask: true,
                server: '.app'
            }
        }
    }
});

// Load the plugins tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync')

// Default task(s).
    grunt.registerTask('default', ['sass', 'imagemin', 'browserSync', 'watch']);
};