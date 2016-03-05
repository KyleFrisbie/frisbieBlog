if (Meteor.isClient) {
  Template.posts.helpers({
    'post': function () {
      return Posts.find({}, {sort: {createdOn: -1}});
    }
  })

  Template.createPost.events({
    'submit form': function (event) {
      event.preventDefault();
      var postTitle = $('[name="postTitle"]').val();
      var postBody = $('[name = "postBody"]').val();
      Posts.insert({
        title: postTitle,
        postBody: postBody,
        createdOn: new Date()
      });
    }
  });
  // reset field values
  $('[name="postTitle"]').val('');
  $('[name="postBody"]').val('');
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
