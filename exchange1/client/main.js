import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor'

import './main.html';

RegItem = new Mongo.Collection("regItem");

Template.xloginBox.helpers({

});

Template.xloginBox.events({
  "click button[name=myPageBtn]" : function(evt , tmpl){
    location.href="/mypage";
  }
});

Template.xloginBox.onCreated(function() {

});

Template.mypage.helpers({
  firstName : function(){
    if (Meteor.user()){
      firstname = Meteor.user().profile.firstname;
      return firstname;
    } else{
      return "NULL";
    }
  },
  lastName : function(){
    if (Meteor.user()){
      lastname = Meteor.user().profile.lastname;
      return lastname;
    } else{
      return "NULL";
    }
  },
  accountNumber : function(){
    if (Meteor.user()){
      accountnumber = Meteor.user().profile.accountnumber;
      return accountnumber;
    } else{
      return "NULL";
    }
  }
});

Template.mypage.events({
  "click button[name=infoModify]" : function(evt , tmpl){
    location.href="/infomodify";
  }
});

Template.mypage.onCreated(function(){
  this.subscribe('users',{});
  console.log('mypage.onCreated sub success');
});

Template.infomodify.helpers({
  firstName : function(){
    if (Meteor.user()){
      firstname = Meteor.user().profile.firstname;
      return firstname;
    } else{
      return "NULL";
    }
  },
  lastName : function(){
    if (Meteor.user()){
      lastname = Meteor.user().profile.lastname;
      return lastname;
    } else{
      return "NULL";
    }
  },
  accountNumber : function(){
    if (Meteor.user()){
      accountnumber = Meteor.user().profile.accountnumber;
      return accountnumber;
    } else{
      return "NULL";
    }
  }
});

Template.infomodify.events({
  "click button[name=infoConfirm]" : function(evt , tmpl){

    // Meteor.users.update({_id : this._id},{$set: {profile : {firstname:tmpl.find("input[name=fNModify]").value, lastname:tmpl.find("input[name=lNModify]").value,accountnumber:tmpl.find("input[name=aNModify]").value}}});
    Meteor.users.update({_id : Meteor.user()._id},{$set: {profile : {firstname:tmpl.find("input[name=fNModify]").value, lastname:tmpl.find("input[name=lNModify]").value, accountnumber:tmpl.find("input[name=aNModify]").value}}});
    console.log(tmpl.find("input[name=fNModify]").value);
    console.log(Meteor.user().profile.firstname);
    location.href="/mypage";
  }
});

Template.xboard.helpers({
  xboardList : function(){
    console.log('xboard.helpers return success');
    return RegItem.find({},{sort:{no:-1}});
  }
});

Template.xboard.onCreated(function(){
  this.subscribe('regItem',{});
  console.log('xboard.onCreated sub success');
});
