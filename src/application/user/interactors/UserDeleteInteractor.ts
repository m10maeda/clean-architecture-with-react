import { IUserRepository, UserId } from '../../../domain/models/user';
import {
  IUserDeleteUseCase,
  UserDeleteUseCaseRequest,
  UserDeleteUseCaseResponse,
} from '../../../usecases/user/delete';

export default class UserDeleteInteractor implements IUserDeleteUseCase {
  private readonly userRepository: IUserRepository;

  public async handle(
    request: UserDeleteUseCaseRequest,
  ): Promise<UserDeleteUseCaseResponse> {
    const id = new UserId(request.id);
    const user = await this.userRepository.find(id);

    if (user === undefined) {
      return new UserDeleteUseCaseResponse();
    }

    await this.userRepository.delete(user);

    return new UserDeleteUseCaseResponse();
  }

  public constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }
}
