/**
 * Created by IVAN on 27/04/2015.
 */

Posts = new Meteor.Collection('posts');

Posts.allow({
    insert: function(userId, doc){
        // Allowing insertion just for logged user
        return !! userId;
    }
})