//// $Id$

var Redirect = {

    onLoad : function() {
        var params = window.arguments[0];
        $('txtExampleUrl').value = params.inn.url;
        $('txtPattern').value = params.inn.url;
        $('txtRedirectUrl').value = params.inn.redirect || '';

    },

    onAccept : function() {
        var params = window.arguments[0];

        params.out.pattern = $('txtPattern').value;
        params.out.patternType = 'Wildcard';
        params.out.redirectUrl = $('txtRedirectUrl').value;
        params.out.onlyIfLinkExists = $('chkOnlyIfLinkExists').checked;

        return true;
    },

    testPattern : function() {
        try {
        alert(RedirectorCommon.wildcardMatch($('txtPattern').value, $('txtExampleUrl').value));
        } catch(e) {alert(e);}
    }

};