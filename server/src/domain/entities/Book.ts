export default class Book {
  constructor(
    public id: number,
    public title: string,
    public isbn: string,
    public author: string,
    public publisher: string,
    public category: string,
    public rack: string,
    public noOfCopy: number,
    public updatedOn: Date
  ) {}
}
