import {
  IUserFactory,
  IUserRepository,
  UserName,
} from '../../../domain/models/user';
import { UserService } from '../../../domain/services';
import {
  IUserRegisterUseCase,
  UserRegisterUseCaseRequest,
  UserRegisterUseCaseResponse,
} from '../../../usecases/user/register';
import CanNotRegisterUserError from '../CanNotRegisterUserError';

export default class UserRegisterInteractor implements IUserRegisterUseCase {
  private readonly userRepository: IUserRepository;

  private readonly userFactory: IUserFactory;

  private readonly userService: UserService;

  public async handle(
    request: UserRegisterUseCaseRequest,
  ): Promise<UserRegisterUseCaseResponse> {
    const name = new UserName(request.name);
    const user = await this.userFactory.create(name);
    const isExist = await this.userService.exists(user);

    if (isExist) {
      throw new CanNotRegisterUserError(user, 'ユーザーは既に存在しています。');
    }

    await this.userRepository.save(user);

    return new UserRegisterUseCaseResponse(user.id.toString());
  }

  public constructor(
    userRepository: IUserRepository,
    userFactory: IUserFactory,
    userService: UserService,
  ) {
    this.userRepository = userRepository;
    this.userFactory = userFactory;
    this.userService = userService;
  }
}
