export class Hotel {

  constructor(
    public id: any,
    public hotelName: string,
    public address: string,
    public hotelDescription: string,
    public hotelImage: string,
    public _hotelUrl:string,
    public picByte: any,
  ) {
  }

  get hotelUrl(): string {
    return this._hotelUrl;
  }
}
