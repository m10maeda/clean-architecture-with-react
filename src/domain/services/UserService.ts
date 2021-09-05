import { IUserRepository, User } from '../models/user';

export default class UserService {
  private readonly userRepository: IUserRepository;

  public async exists(user: User): Promise<boolean> {
    const duplicatedUser = await this.userRepository.find(user.name);

    return duplicatedUser !== undefined;
  }

  public constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }
}
