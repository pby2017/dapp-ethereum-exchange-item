FlowRouter.route('/', {
    action: function () {
        BlazeLayout.render('header');
    }
});

FlowRouter.route('/mypage', {
    action: function () {
        BlazeLayout.render('mypage');
    }
});

FlowRouter.route('/infomodify', {
    action: function () {
        BlazeLayout.render('infomodify');
    }
});
