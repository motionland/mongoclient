/**
 * Created by RSercan on 19.1.2016.
 */
Router.route('/settings', {
    waitOn: function () {
        return [Meteor.subscribe('settings'), Meteor.subscribe('connections')];
    }
});