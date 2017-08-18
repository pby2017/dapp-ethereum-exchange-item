Template.mypage.helpers({
  myName : function(){
    if (Meteor.user()){
      firstname = Meteor.user().profile.name;
      return firstname;
    } else{
      return "NULL";
    }
  },
  myAddress : function(){
    if (Meteor.user()){
      lastname = Meteor.user().profile.address;
      return lastname;
    } else{
      return "NULL";
    }
  },
  myBankName : function(){
    if (Meteor.user()){
      bankname = Meteor.user().profile.bankname;
      return bankname;
    } else{
      return "NULL";
    }
  },
  myAccountNumber : function(){
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
  },
  "click button[name=infoDelete]" : function(evt , tmpl){
    location.href="/infodelete";
  }
});

Template.mypage.onCreated(function(){
  this.subscribe('users',{});
  console.log('mypage.onCreated sub success');
});
