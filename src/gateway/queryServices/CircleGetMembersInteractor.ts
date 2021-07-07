import CircleNotFoundError from '../../application/circle/CircleNotFoundError';
import { CircleId } from '../../domain/models/circle';
import {
  CircleGetMembersUseCaseRequest,
  CircleGetMembersUseCaseResponse,
  ICircleGetMembersUseCase,
} from '../../usecases/circle/getMembers';
import { UserData } from '../../usecases/user/shared';
import { ICircleDao } from '../dao/ICircleDao';
import { IUserDao } from '../dao/IUserDao';

export default class CircleGetMembersQueryService
  implements ICircleGetMembersUseCase
{
  private readonly userDao: IUserDao;

  private readonly circleDao: ICircleDao;

  public async handle(
    request: CircleGetMembersUseCaseRequest,
  ): Promise<CircleGetMembersUseCaseResponse> {
    const id = new CircleId(request.id);
    const circle = await this.circleDao.get(id);

    if (circle === undefined) {
      throw new CircleNotFoundError(id, 'サークルが見つかりませんでした。');
    }

    const members = await this.userDao.findAll((user) =>
      Array.from(circle.members).some((member) => member.equals(user.id)),
    );

    const userData = Array.from(members).map(
      (member) => new UserData(member.id.toString(), member.name.toString()),
    );

    return new CircleGetMembersUseCaseResponse(userData);
  }

  public constructor(userDao: IUserDao, circleDao: ICircleDao) {
    this.userDao = userDao;
    this.circleDao = circleDao;
  }
}
