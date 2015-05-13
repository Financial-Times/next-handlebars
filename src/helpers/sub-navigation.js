'use strict';

require('array.prototype.find');

module.exports = function (section, params) {
    // expect the navigation middleware to be used
    var nav = params.data.root.nav || [];
    var sectionItem = nav.find(function (navItem) {
        return navItem.name === section;
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
