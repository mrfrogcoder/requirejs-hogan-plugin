require.config({
    // set paths since they are outside the baseUrl
    paths : {
        hgn : '../../hgn',
        text : '../../text',
        hogan : '../../hogan'
    },

    // configure hgn! plugin
    hgn : {
        // load "*.mustache" files, set to empty string if you
        // want to specify the template extension for each individual file
        // the default value is "mustache"
        templateExtension : 'mustache'
    }
});


// template is loaded and compiled dynamically
// the ".mustache" extension is inferred based on the settings above
// using `require` instead of define since this is our "entry-point"
require(['hgn!foo'], function(foo){

    var data = {
        title : 'Hello!',
        names : ['world', 'foo bar', 'lorem ipsum', 'nurse']
    };

    document.getElementById('wrapper').innerHTML += foo.render(data);

});
