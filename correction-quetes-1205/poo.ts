class Counter {
    private name: string;
    private value = 0; // valeur à 0 par défaut
    private max: number;

    constructor(name: string, max: number) {
        this.max = max;
        this.name = name;
    }

    getValue(): number {
        return this.value;
    }

    canIncrement(): boolean {
        return this.value < this.max;
    }

    increment(): void {
        if (this.value < this.max) {
            this.value += 1;
            console.log(`Counter ${this.name}'s value is now ${this.value}`);
        } else {
            console.error(`Reached max (${this.max}) - Can't increment ${this.name}`);
        }
    }
}
const counter1 = new Counter('Counter #1', 5);
const counter2 = new Counter('Counter #2', 3);
