Meteor.users.allow({remove:function() { Console.log("good");return true; }});

Template.infodelete.events({
  "click button[name=infoConfirm]" : function(evt , tmpl){
  //  Meteor.users.remove({_id : Meteor.user()._id});
    location.href="/infodelete";
  },
  "click button[name=confirmCancel]" : function(evt , tmpl){
    location.href="/mypage";
  }
});
