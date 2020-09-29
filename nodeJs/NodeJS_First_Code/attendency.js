const EventEmitter = require('events');
const uuid = require('uuid');


class Attendency extends EventEmitter {
    log(issue, type) {
        if (type === 'anwesend') {
            this.emit('fail', {
                id: uuid.v4(),
                details: issue
            })
        } else {
            this.emit('success', {
                id: uuid.v4(),
                details: issue
            })
        }
    }
}

module.exports = Attendency;