import { ICircleRepository } from '../../../domain/models/circle';
import {
  CircleGetAllUseCaseRequest,
  CircleGetAllUseCaseResponse,
  ICircleGetAllUseCase,
} from '../../../usecases/circle/getAll';
import { CircleData } from '../../../usecases/circle/shared';

export default class CircleGetAllInteractor implements ICircleGetAllUseCase {
  private readonly circleRepository: ICircleRepository;

  public async handle(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    request: CircleGetAllUseCaseRequest,
  ): Promise<CircleGetAllUseCaseResponse> {
    const circles = await this.circleRepository.findAll();
    const circleData = Array.from(circles).map(
      (circle) =>
        new CircleData(
          circle.id.toString(),
          circle.name.toString(),
          circle.owner.toString(),
          Array.from(circle.members).map((member) => member.toString()),
        ),
    );

    return new CircleGetAllUseCaseResponse(circleData);
  }

  public constructor(circleRepository: ICircleRepository) {
    this.circleRepository = circleRepository;
  }
}
