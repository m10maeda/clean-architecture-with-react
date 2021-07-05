import { CircleId, ICircleRepository } from '../../../domain/models/circle';
import {
  CircleGetUseCaseRequest,
  CircleGetUseCaseResponse,
  ICircleGetUseCase,
} from '../../../usecases/circle/get';
import { CircleData } from '../../../usecases/circle/shared';
import CircleNotFoundError from '../CircleNotFoundError';

export default class CircleGetInteractor implements ICircleGetUseCase {
  private readonly circleRepository: ICircleRepository;

  public async handle(
    request: CircleGetUseCaseRequest,
  ): Promise<CircleGetUseCaseResponse> {
    const id = new CircleId(request.id);
    const circle = await this.circleRepository.find(id);

    if (circle === undefined) {
      throw new CircleNotFoundError(id, 'サークルが見つかりませんでした。');
    }

    const circleData = new CircleData(
      circle.id.toString(),
      circle.name.toString(),
      circle.owner.toString(),
      Array.from(circle.members).map((member) => member.toString()),
    );

    return new CircleGetUseCaseResponse(circleData);
  }

  public constructor(circleRepository: ICircleRepository) {
    this.circleRepository = circleRepository;
  }
}
