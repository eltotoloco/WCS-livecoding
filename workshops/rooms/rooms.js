
class Reservation {
    constructor(startTime, endTime) {
        this.startTime = startTime;
        this.endTime = endTime;
    }
}

class Room {
    constructor(name, capacity, reservations = []) {
        this.name = name;
        this.capacity = capacity;
        this.reservations = reservations;
    }

    isAvailable(startTime, endTime) {
        return !this.reservations.some((value) => ((startTime >= value.startTime && startTime <= value.endTime) || (endTime >= value.startTime && endTime <= value.endTime)));
    }

    book(startTime, endTime) {
        if (this.isAvailable(startTime, endTime)) {
            this.reservations.push({
                startTime: startTime,
                endTime: endTime
            });
            return `Room ${this.name} has been book from ${startTime} until ${endTime}`;
        }else{
            return "Already booked"
        }
    }
}
const room1 = new Room("Rome", 30);
room1.book(1200, 1300)
