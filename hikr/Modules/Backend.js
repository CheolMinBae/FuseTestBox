var hikes = require('./hikes');

var getHikes = function () {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            resolve(hikes);
        }, 0);
    });
};

var updateHikes = function (id, name, location, distance, rating, comments) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            for (var i = 0; i < hikes.length; i++) {
                var hike = hikes[i];
                if (hike.id === id) {
                    hike.name = name;
                    hike.location = location;
                    hike.distance = distance;
                    hike.rating = rating;
                    hike.comments = comments;
                    break;
                }
            }

            resolve();
        }, 0);
    });
};

module.exports = {
    getHikes: getHikes,
    updateHikes: updateHikes
};
