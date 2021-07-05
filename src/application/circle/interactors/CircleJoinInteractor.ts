import {
  CircleFullError,
  CircleFullSpecification,
  CircleId,
  CircleMembers,
  ICircleRepository,
} from '../../../domain/models/circle';
import { IUserRepository, UserId } from '../../../domain/models/user';
import {
  CircleJoinUseCaseRequest,
  CircleJoinUseCaseResponse,
  ICircleJoinUseCase,
} from '../../../usecases/circle/join';
import UserNotFoundError from '../../user/UserNotFoundError';
import CircleNotFoundError from '../CircleNotFoundError';

export default class CircleJoinInteractor implements ICircleJoinUseCase {
  private readonly circleRepository: ICircleRepository;

  private readonly userRepository: IUserRepository;

  public async handle(
    request: CircleJoinUseCaseRequest,
  ): Promise<CircleJoinUseCaseResponse> {
    const memberId = new UserId(request.memberId);
    const member = await this.userRepository.find(memberId);

    if (member === undefined) {
      throw new UserNotFoundError(memberId, 'ユーザーが見つかりませんでした。');
    }

    const id = new CircleId(request.circleId);
    const circle = await this.circleRepository.find(id);

    if (circle === undefined) {
      throw new CircleNotFoundError(id, 'サークルが見つかりませんでした。');
    }

    const fullSpec = new CircleFullSpecification();
    const owner = await this.userRepository.find(circle.owner);

    if (owner === undefined) {
      throw new UserNotFoundError(
        circle.owner,
        'オーナーが見つかりませんでした。',
      );
    }

    const members = await this.userRepository.find(circle.members);

    if (!fullSpec.isSatisfiedBy(new CircleMembers(owner, members))) {
      throw new CircleFullError(
        id,
        'サークルに所属しているメンバーが上限に達しています',
      );
    }

    circle.join(member);

    this.circleRepository.save(circle);

    return new CircleJoinUseCaseResponse();
  }

  public constructor(
    circleRepository: ICircleRepository,
    userRepository: IUserRepository,
  ) {
    this.circleRepository = circleRepository;
    this.userRepository = userRepository;
  }
}
