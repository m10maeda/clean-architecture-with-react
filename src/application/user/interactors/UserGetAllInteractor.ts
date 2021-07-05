import { IUserRepository } from '../../../domain/models/user';
import {
  IUserGetAllUseCase,
  UserGetAllUseCaseRequest,
  UserGetAllUseCaseResponse,
} from '../../../usecases/user/getAll';
import { UserData } from '../../../usecases/user/shared';

export default class UserGetAllInteractor implements IUserGetAllUseCase {
  private readonly userRepository: IUserRepository;

  public async handle(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    request: UserGetAllUseCaseRequest,
  ): Promise<UserGetAllUseCaseResponse> {
    const users = await this.userRepository.findAll();

    return new UserGetAllUseCaseResponse(
      Array.from(users).map(
        (user) => new UserData(user.id.toString(), user.name.toString()),
      ),
    );
  }

  public constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }
}
