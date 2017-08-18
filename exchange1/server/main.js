import { Meteor } from 'meteor/meteor';

RegItem = new Mongo.Collection("regItem");

Meteor.startup(() => {
  // code to run on server at startup
  if(RegItem.find().count() == 0 ){
    RegItem.insert({no: 1, name: "a", email: "a@a.com"});
    RegItem.insert({no: 2, name: "b", email: "b@b.com"});
    RegItem.insert({no: 3, name: "c", email: "c@c.com"});
    RegItem.insert({no: 4, name: "d", email: "d@d.com"});
  }
});

Meteor.publish("regItem", function () {
  return RegItem.find({});
});

Meteor.publish("users", function () {
  return Meteor.user();
});
