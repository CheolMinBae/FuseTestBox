var hikes = require('hikes');

function goToHike (args) {
    var hike = args.data;
    router.push('editHike', hike);
}

module.exports = {
    hikes: hikes,
    goToHike: goToHike
}