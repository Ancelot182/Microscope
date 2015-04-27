/**
 * Created by IVAN on 27/04/2015.
 */

Meteor.publish('posts', function(){
   return Posts.find();
});
