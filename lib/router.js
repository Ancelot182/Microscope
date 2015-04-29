/**
 * Created by ADMIN on 29/04/2015.
 */

Router.configure({

    layoutTemplate : 'layout',
    loadingTemplate : 'loading',
    waitOn: function(){ return Meteor.subscribe('posts');}

});

Router.map(function(){

    this.route('postsList', { path: '/'});

});

Router.onBeforeAction('loading');