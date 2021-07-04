import { IUserRepository, UserId, UserName } from '../../../domain/models/user';
import { UserService } from '../../../domain/services';
import {
  IUserUpdateUseCase,
  UserUpdateUseCaseRequest,
  UserUpdateUseCaseResponse,
} from '../../../usecases/user/update';
import CanNotRegisterUserError from '../CanNotRegisterUserError';
import UserNotFoundError from '../UserNotFoundError';

export default class UserUpdateInteractor implements IUserUpdateUseCase {
  private readonly userRepository: IUserRepository;

  private readonly userService: UserService;

  public async handle(
    request: UserUpdateUseCaseRequest,
  ): Promise<UserUpdateUseCaseResponse> {
    const id = new UserId(request.id);
    const user = await this.userRepository.find(id);

    if (user === undefined) {
      throw new UserNotFoundError(id, 'ユーザーが見つかりませんでした。');
    }

    const name = new UserName(request.name);
    user.changeName(name);

    const isExist = await this.userService.exists(user);

    if (isExist) {
      throw new CanNotRegisterUserError(user, 'ユーザは既に存在しています。');
    }

    await this.userRepository.save(user);

    return new UserUpdateUseCaseResponse();
  }

  public constructor(
    userRepository: IUserRepository,

    userService: UserService,
  ) {
    this.userRepository = userRepository;
    this.userService = userService;
  }
}
