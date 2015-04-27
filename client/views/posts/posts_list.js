/**
 * Created by IVAN on 27/04/2015.
 */
//var postData = [
//
//    {
//        title: 'Introducing telescope',
//        author: 'Sasha Greif',
//        url: 'http://sachagreif.com/introducing-telescope/'
//    },
//    {
//        title: 'Meteor',
//        author: 'Tom Coleman',
//        url: 'http://meteor.com'
//    },
//    {
//        title: 'The Meteor Book',
//        author: 'Tom Coleman',
//        url: 'http://themeteorbook.com'
//    }
//
//];

Template.postsList.helpers({
    posts: function(){
        return Posts.find();
    }
})