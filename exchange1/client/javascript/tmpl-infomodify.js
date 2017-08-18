Template.infomodify.helpers({
  myName : function(){
    if (Meteor.user()){
      name = Meteor.user().profile.name;
      return name;
    } else{
      return "NULL";
    }
  },
  myAddress : function(){
    if (Meteor.user()){
      address = Meteor.user().profile.address;
      return address;
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

Template.infomodify.events({
  "click button[name=infoConfirm]" : function(evt , tmpl){
    tmplname = Meteor.user().profile.name;
    tmpladdr = Meteor.user().profile.address;
    tmplbnk = Meteor.user().profile.bankname;
    tmplaccnt = Meteor.user().profile.accountnumber;
    if(tmpl.find("input[name=nModify]").value){
      inputname = tmpl.find("input[name=nModify]").value;
      if(inputname != tmplname){
        tmplname = inputname;
      }}
    if(tmpl.find("input[name=aDModify]").value){
      inputaddr = tmpl.find("input[name=aDModify]").value;
      if(inputaddr != tmpladdr){
        tmpladdr = inputaddr;
      }}
    if(tmpl.find("input[name=bNModify]").value){
      inputbnk = tmpl.find("input[name=bNModify]").value;
      if(inputbnk != tmplbnk){
        tmplbnk = inputbnk;
      }}
    if(tmpl.find("input[name=aNModify]").value){
      inputaccnt = tmpl.find("input[name=aNModify]").value;
      if(inputaccnt != tmplaccnt){
        tmplaccnt = inputaccnt;
      }}
      Meteor.users.update({_id : Meteor.user()._id},{$set: {profile : {name:tmplname, address:tmpladdr, bankname:tmplbnk, accountnumber:tmplaccnt}}});
      location.href="/mypage";
  },
  "click button[name=Cancel]" : function(evt , tmpl){
    location.href="/mypage";
  }
});
