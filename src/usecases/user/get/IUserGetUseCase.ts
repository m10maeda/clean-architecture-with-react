import { IUseCase } from '../../shared';
import UserGetUseCaseRequest from './UserGetUseCaseRequest';
import UserGetUseCaseResponse from './UserGetUseCaseResponse';

export interface IUserGetUseCase
  extends IUseCase<UserGetUseCaseRequest, UserGetUseCaseResponse> {}
