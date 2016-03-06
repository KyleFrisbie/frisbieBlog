if (Meteor.isClient) {

// tags
  Template.tags.helpers({
    'tag': function () {
      return Tags.find();
    }
  });

  Template.addTag.events({
    'submit form': function (event) {
      event.preventDefault();
      var tagName = $('[name="tagName"]').val();
      Tags.insert({
        name: tagName
      });
    }
  });

  Template.tags.events({
    'click .delete-tag': function(event) {
      event.preventDefault();
      var documentId = this._id;
      Tags.remove({_id: documentId});
    }
  });

// posts
  Template.posts.helpers({
    'post': function () {
      return Posts.find({}, {sort: {createdOn: -1}});
    }
  })

  Template.createPost.helpers({
    'tag': function () {
      return Tags.find();
    }
  })

  Template.createPost.events({
    'submit form': function (event) {
      event.preventDefault();
      var postTitle = $('[name="postTitle"]').val();
      var postBody = $('[name = "postBody"]').val();
      var tags = [];
      $('input[name="tag"]:checked').each(function() {
        tags.push(this.value);
      });
      Posts.insert({
        title: postTitle,
        postBody: postBody,
        tags: tags,
        createdOn: new Date()
      });
    }
  });
  // reset field values
  $('[name="postTitle"]').val('');
  $('[name="postBody"]').val('');

  Template.postItem.events({
    'click .delete-post': function(event) {
      event.preventDefault();
      var documentId = this._id;
      Posts.remove({_id: documentId});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
