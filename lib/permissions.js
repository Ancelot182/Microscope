/**
 * Created by IVAN on 30/04/2015.
 */

ownsDocument = function(userId, doc){
    return doc && doc.userId == userId;
}