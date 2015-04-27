/**
 * Created by IVAN on 27/04/2015.
 */
if(Posts.find().count() === 0){

    Posts.insert({
        title: "Introducing Telescope",
        author: "Sasha Greif",
        url: "http://sashagreif.com/introducing-telescope/"
    });

    Posts.insert({
        title: "Meteor",
        author: "Tom Coleman",
        url: "http://meteor.com"
    });

    Posts.insert({
        title: "The Meteor Book",
        author: "Tom Coleman",
        url: "http://themeteorbook.com"
    });
}