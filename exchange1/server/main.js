import { Meteor } from 'meteor/meteor';

RegItem = new Mongo.Collection("regItem");

Meteor.startup(() => {
  // code to run on server at startup
  if(RegItem.find().count() == 0 ){
    RegItem.insert({no: 1, itemname: "item1", name: "abc", status: "ing", contents: "test"});
    RegItem.insert({no: 2, itemname: "item2", name: "def", status: "no", contents: "test"});
    RegItem.insert({no: 3, itemname: "item3", name: "ghi", status: "no", contents: "test"});
    RegItem.insert({no: 4, itemname: "item4", name: "jkl", status: "ing", contents: "test"});
  }
});

Meteor.publish("regItem", function () {
  return RegItem.find({});
});

Meteor.publish("users", function () {
  return Meteor.user();
});
