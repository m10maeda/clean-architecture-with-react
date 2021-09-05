import { CircleId, ICircleRepository } from '../../../domain/models/circle';
import { IUserRepository, UserId } from '../../../domain/models/user';
import {
  CircleLeaveUseCaseRequest,
  CircleLeaveUseCaseResponse,
  ICircleLeaveUseCase,
} from '../../../usecases/circle/leave';
import UserNotFoundError from '../../user/UserNotFoundError';
import CircleNotFoundError from '../CircleNotFoundError';

export default class CircleLeaveInteractor implements ICircleLeaveUseCase {
  private readonly circleRepository: ICircleRepository;

  private readonly userRepository: IUserRepository;

  public async handle(
    request: CircleLeaveUseCaseRequest,
  ): Promise<CircleLeaveUseCaseResponse> {
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

    circle.leave(member);

    this.circleRepository.save(circle);

    return new CircleLeaveUseCaseResponse();
  }

  public constructor(
    circleRepository: ICircleRepository,
    userRepository: IUserRepository,
  ) {
    this.circleRepository = circleRepository;
    this.userRepository = userRepository;
  }
}
