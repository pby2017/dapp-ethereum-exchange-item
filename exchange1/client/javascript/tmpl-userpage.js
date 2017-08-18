Template.userpage.helpers({
  userName : function(){
    if (Meteor.user()){
      firstname = Meteor.user().profile.name;
      return firstname;
    } else{
      return "NULL";
    }
  },
  userAddress : function(){
    if (Meteor.user()){
      lastname = Meteor.user().profile.address;
      return lastname;
    } else{
      return "NULL";
    }
  },
  userBankName : function(){
    if (Meteor.user()){
      bankname = Meteor.user().profile.bankname;
      return bankname;
    } else{
      return "NULL";
    }
  },
  userAccountNumber : function(){
    if (Meteor.user()){
      accountnumber = Meteor.user().profile.accountnumber;
      return accountnumber;
    } else{
      return "NULL";
    }
  }
});

Template.userpage.events({

});

Template.userpage.onCreated(function(){
  this.subscribe('users',{});
  console.log('mypage.onCreated sub success');
});
