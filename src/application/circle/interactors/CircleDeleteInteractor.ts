import { CircleId, ICircleRepository } from '../../../domain/models/circle';
import {
  CircleDeleteUseCaseRequest,
  CircleDeleteUseCaseResponse,
  ICircleDeleteUseCase,
} from '../../../usecases/circle/delete';
import CircleNotFoundError from '../CircleNotFoundError';

export default class CircleDeleteInteractor implements ICircleDeleteUseCase {
  private readonly circleRepository: ICircleRepository;

  public async handle(
    request: CircleDeleteUseCaseRequest,
  ): Promise<CircleDeleteUseCaseResponse> {
    const id = new CircleId(request.id);
    const circle = await this.circleRepository.find(id);

    if (circle === undefined) {
      throw new CircleNotFoundError(id, 'サークルが見つかりませんでした。');
    }

    this.circleRepository.delete(circle);

    return new CircleDeleteUseCaseResponse();
  }

  public constructor(circleRepository: ICircleRepository) {
    this.circleRepository = circleRepository;
  }
}
