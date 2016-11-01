var Context = require('Modules/Context');

function goToHike (args) {
    var hike = args.data;
    router.push('editHike', hike);
}

module.exports = {
    hikes: Context.hikes,
    goToHike: goToHike
}