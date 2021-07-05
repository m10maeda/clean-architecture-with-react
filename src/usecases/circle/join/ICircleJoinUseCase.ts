import { IUseCase } from '../../shared';
import CircleJoinUseCaseRequest from './CircleJoinUseCaseRequest';
import CircleJoinUseCaseResponse from './CircleJoinUseCaseResponse';

export interface ICircleJoinUseCase
  extends IUseCase<CircleJoinUseCaseRequest, CircleJoinUseCaseResponse> {}
