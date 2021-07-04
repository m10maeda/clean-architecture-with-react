import { IUseCase } from '../../shared';
import CircleGetMembersUseCaseRequest from './CircleGetMembersUseCaseRequest';
import CircleGetMembersUseCaseResponse from './CircleGetMembersUseCaseResponse';

export interface ICircleGetMembersUseCase
  extends IUseCase<
    CircleGetMembersUseCaseRequest,
    CircleGetMembersUseCaseResponse
  > {}
