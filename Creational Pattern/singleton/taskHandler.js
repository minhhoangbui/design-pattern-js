let myrepo = require('./Repo');

let taskHandler = function () {
    return {
        save: function () {
            myrepo.save('Hi from taskHandler');
        }
    }
};

module.exports = taskHandler();

