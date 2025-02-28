export class UserRead {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public created_at: Date
  ) {}
}

export class UserWrite {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public passwordHash: string,
    public created_at: Date
  ) {}
}
