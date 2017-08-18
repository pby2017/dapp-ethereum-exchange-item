Template.main.helpers({

});

Template.main.events({
  "click button[name=myPageBtn]" : function(evt , tmpl){
    location.href="/mypage";
  }
});

Template.main.onCreated(function() {

});
