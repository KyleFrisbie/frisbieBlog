Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function () {
    this.render('posts');
});

Router.route('/posts');

Router.route('/tags');
