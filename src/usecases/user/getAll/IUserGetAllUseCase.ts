import { IUseCase } from '../../shared';
import UserGetAllUseCaseRequest from './UserGetAllUseCaseRequest';
import UserGetAllUseCaseResponse from './UserGetAllUseCaseResponse';

export interface IUserGetAllUseCase
  extends IUseCase<UserGetAllUseCaseRequest, UserGetAllUseCaseResponse> {}
