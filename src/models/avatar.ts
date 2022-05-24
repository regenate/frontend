export class AvatarModel {
  constructor(
    public readonly filename: string,
    public readonly mime: string,
    public readonly data: string
  ) {}
}
