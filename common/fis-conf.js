fis.config.merge({
	namespace : 'common',
    pack : {
        'static/pkg/aio.css' : 'widget/**.css',
        'static/pkg/aio.js' : 'widget/nav/**.js'
    },
    settings: {
        smarty: {
            left_delimiter: "{%",
            right_delimiter: "%}"
        }
    }
});
