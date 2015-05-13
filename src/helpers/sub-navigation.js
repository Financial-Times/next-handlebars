'use strict';

require('array.prototype.find');

module.exports = function (sectionHref, params) {
    // expect the navigation middleware to be used
    var nav = params.data.root.nav || [];
    var sectionItem = nav.find(function (navItem) {
        return navItem.href === sectionHref;
    });
    if (sectionItem) {
        var buffer = [];
        sectionItem.children.forEach(function (subSectionItem) {
            buffer.push(params.fn(subSectionItem));
        });
        return buffer.join('');
    } else {
        return params.inverse();
    }
};
