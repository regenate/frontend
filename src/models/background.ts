export class BackgroundModel {
  constructor(
    public readonly figmaPortfolioUrl: string,
    public readonly gitHubUrl: string,
    public readonly linkedlnUrl: string,
    public readonly jobTitle?: string,
    public readonly companyOrSchool?: string
  ) {}
}
