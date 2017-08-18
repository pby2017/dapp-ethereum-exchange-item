Template.xboard.helpers({
  xboardList : function(){
    return RegItem.find({},{sort:{no:-1}});
  }
});

Template.xboard.events({
  "click button[name=regBtn]" : function(evt , tmpl){
    location.href="/registerItem";
  }
});

Template.xboard.onCreated(function(){
  this.subscribe('regItem',{});
  console.log('(xboard) subscribe success');
});
