export class Restaurant {

  constructor(
    public id: any,
    public restaurantName: string,
    public restaurantAddress: string,
    public _restaurantUrl:string,
    public restaurantImage: string,
    public picByte: any,
  ) {
  }

  get restaurantUrl(): string {
    return this._restaurantUrl;
  }
}
