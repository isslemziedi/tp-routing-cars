export class Car {
    constructor(
      private _id: string,
      private _year: number,
      private _make: string,
      private _model: string,
      private _article: string
    ) {}
  
    get id(): string {
      return this._id;
    }
  
    get year(): number {
      return this._year;
    }
  
    get make(): string {
      return this._make;
    }
  
    get model(): string {
      return this._model;
    }
  
    get article(): string {
      return this._article;
    }
  }
  