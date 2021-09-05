import { IUserRepository, UserId } from '../../../domain/models/user';
import {
  IUserGetUseCase,
  UserGetUseCaseRequest,
  UserGetUseCaseResponse,
} from '../../../usecases/user/get';
import { UserData } from '../../../usecases/user/shared';
import UserNotFoundError from '../UserNotFoundError';

export default class UserGetInteractor implements IUserGetUseCase {
  private readonly userRepository: IUserRepository;

  public async handle(
    request: UserGetUseCaseRequest,
  ): Promise<UserGetUseCaseResponse> {
    const id = new UserId(request.id);
    const user = await this.userRepository.find(id);

    if (user === undefined) {
      throw new UserNotFoundError(id, 'ユーザーが見つかりませんでした。');
    }

    const data = new UserData(user.id.toString(), user.name.toString());

    return new UserGetUseCaseResponse(data);
  }

  public constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }
}
