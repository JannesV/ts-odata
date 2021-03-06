export class SkipSettings {
    skip: number;
    defaultSkip: number;

    constructor() {
        this.skip = null;
        this.defaultSkip = null;
    }


    toString(): string {
        return '$skip=' + (this.skip !== null ? this.skip : this.defaultSkip);
    }

    reset(): void {
        this.skip = null;
    }

    isSet(): boolean {
        return this.skip !== null || this.defaultSkip !== null;
    }
}
