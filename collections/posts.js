/**
 * Created by IVAN on 27/04/2015.
 */

Posts = new Meteor.Collection('posts');

//Posts.allow({
//    insert: function(userId, doc){
//        // Allowing insertion just for logged user
//        return !! userId;
//    }
//})

Meteor.methods({

    post: function(postAttributes){

        var user = Meteor.user(),
            postWithSameLink = Posts.findOne({url: postAttributes.url});

        // Check user logged in
        if(!user){
            throw new Meteor.Error(401, "You need to be logged in to post new stories");
        }

        // Ensure the post has a title
        if(!postAttributes.title){
            throw new Meteor.Error(422, "Please fill in the headline");
        }

        // Check there're no post with the same url
        if(postAttributes.url && postWithSameLink){
            throw new Meteor.Error(302, "This link has already been posted", postWithSameLink._id);
        }

        // Pick out the whitelisted keys
        var post = _.extend(_.pick(postAttributes, 'url', 'title', 'message'), {

            userId: user._id,
            author: user.username,
            submitted: new Date().getTime()

        });

        var postId = Posts.insert(post);

        return postId;
    }


});