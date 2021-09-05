import {
  CircleName,
  ICircleFactory,
  ICircleRepository,
} from '../../../domain/models/circle';
import { IUserRepository, UserId } from '../../../domain/models/user';
import { CircleService } from '../../../domain/services';
import {
  CircleCreateUseCaseRequest,
  CircleCreateUseCaseResponse,
  ICircleCreateUseCase,
} from '../../../usecases/circle/create';
import UserNotFoundError from '../../user/UserNotFoundError';
import CanNotRegisterCircleError from '../CanNotRegisterCircleError';

export default class CircleCreateInteractor implements ICircleCreateUseCase {
  private readonly circleFactory: ICircleFactory;

  private readonly circleRepository: ICircleRepository;

  private readonly userRepository: IUserRepository;

  private readonly circleService: CircleService;

  public async handle(
    request: CircleCreateUseCaseRequest,
  ): Promise<CircleCreateUseCaseResponse> {
    const ownerId = new UserId(request.ownerId);
    const owner = await this.userRepository.find(ownerId);

    if (owner === undefined) {
      throw new UserNotFoundError(
        ownerId,
        'サークルのオーナーとなるユーザーが見つかりませんでした。',
      );
    }

    const name = new CircleName(request.name);
    const circle = await this.circleFactory.create(name, owner);

    if (await this.circleService.exists(circle)) {
      throw new CanNotRegisterCircleError(
        circle,
        'サークルは既に存在しています。',
      );
    }

    this.circleRepository.save(circle);

    return new CircleCreateUseCaseResponse(circle.id.toString());
  }

  public constructor(
    circleFactory: ICircleFactory,
    circleRepository: ICircleRepository,
    userRepository: IUserRepository,
    circleService: CircleService,
  ) {
    this.circleFactory = circleFactory;
    this.circleRepository = circleRepository;
    this.userRepository = userRepository;
    this.circleService = circleService;
  }
}
