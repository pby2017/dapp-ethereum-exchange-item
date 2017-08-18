Template.xboarditem.events({
  "click tr[name=gotodetail]" : function(evt , tmpl){
    var test = document.getElementsByName('no');
    console.log(evt);
    console.log(test);
    //location.href="/itemDetail/:no";
  }
});
//tmpl.find("td[name=no]")
