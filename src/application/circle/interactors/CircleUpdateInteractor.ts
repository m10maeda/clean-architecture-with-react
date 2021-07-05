import {
  CircleId,
  CircleName,
  ICircleRepository,
} from '../../../domain/models/circle';
import {
  CircleUpdateUseCaseRequest,
  CircleUpdateUseCaseResponse,
  ICircleUpdateUseCase,
} from '../../../usecases/circle/update';
import CircleNotFoundError from '../CircleNotFoundError';

export default class CircleUpdateInteractor implements ICircleUpdateUseCase {
  private readonly circleRepository: ICircleRepository;

  public async handle(
    request: CircleUpdateUseCaseRequest,
  ): Promise<CircleUpdateUseCaseResponse> {
    const id = new CircleId(request.id);
    const circle = await this.circleRepository.find(id);

    if (circle === undefined) {
      throw new CircleNotFoundError(id, 'サークルが見つかりませんでした。');
    }

    const name = new CircleName(request.name);

    circle.changeName(name);

    this.circleRepository.save(circle);

    return new CircleUpdateUseCaseResponse();
  }

  public constructor(circleRepository: ICircleRepository) {
    this.circleRepository = circleRepository;
  }
}
