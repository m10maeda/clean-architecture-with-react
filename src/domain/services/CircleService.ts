import { Circle, ICircleRepository } from '../models/circle';

export default class CircleService {
  private readonly circleRepository: ICircleRepository;

  public async exists(circle: Circle): Promise<boolean> {
    const duplicatedCircle = await this.circleRepository.find(circle.name);

    return duplicatedCircle !== undefined;
  }

  public constructor(circleRepository: ICircleRepository) {
    this.circleRepository = circleRepository;
  }
}
