FlowRouter.route('/', {
    action: function () {
        BlazeLayout.render('home', {content:'main'});
    }
});

FlowRouter.route('/mypage', {
    action: function () {
      console.log(usercheck());
      if (usercheck()){
        BlazeLayout.render('home', {content:'mypage'});
      }
      else{
        // location.href="/";
        alert("need to login");
        BlazeLayout.render('home', {content:'main'});
      }
    }
});

FlowRouter.route('/infomodify', {
    action: function () {
      if (usercheck()){
        BlazeLayout.render('home', {content:'infomodify'});
      }
      else{
        // location.href="/";
        alert("need to login");
        BlazeLayout.render('home', {content:'main'});
      }
    }
});

FlowRouter.route('/infoDelete', {
    action: function () {
      if (usercheck()){
        BlazeLayout.render('home', {content:'infodelete'});
      }
      else{
        // location.href="/";
        alert("need to login");
        BlazeLayout.render('home', {content:'main'});
      }
    }
});

FlowRouter.route('/registerItem', {
    action: function () {
      if (usercheck()){
        BlazeLayout.render('home', {content:'registeritem'});
      }
      else{
        // location.href="/";
        alert("need to login");
        BlazeLayout.render('home', {content:'main'});
      }
    }
});

FlowRouter.route('/registerItem', {
    action: function () {
      if (usercheck()){
        BlazeLayout.render('home', {content:'registeritem'});
      }
      else{
        // location.href="/";
        alert("need to login");
        BlazeLayout.render('home', {content:'main'});
      }
    }
});

FlowRouter.route('/itemDetail/:no', {
    action: function (params, queryParams) {
        console.log(params.no);
        if (usercheck()){
          BlazeLayout.render('home', {content:'itemdetail'});
        }
        else{
          // location.href="/";
          alert("need to login");
          BlazeLayout.render('home', {content:'main'});
        }
    }
});



FlowRouter.route('/userPage', {
    action: function () {
      if (usercheck()){
        BlazeLayout.render('home', {content:'userpage'});
      }
      else{
        // location.href="/";
        alert("need to login");
        BlazeLayout.render('home', {content:'main'});
      }
    }
});

function usercheck(){
  return Meteor.users;
}

// BlazeLayout.render('layout1', { top: "header", main: "postList" });

// FlowRouter.route('/', {
//     action: function () {
//         BlazeLayout.render('header');
//     }
// });
//
// FlowRouter.route('/home', {
//     action: function () {
//         BlazeLayout.render('home');
//     }
// });
//
// FlowRouter.route('/mypage', {
//     action: function () {
//         BlazeLayout.render('mypage');
//     }
// });
//
// FlowRouter.route('/infomodify', {
//     action: function () {
//         BlazeLayout.render('infomodify');
//     }
// });
//
// FlowRouter.route('/asd', {
//     action: function () {
//         BlazeLayout.render('asd');
//     }
// });
