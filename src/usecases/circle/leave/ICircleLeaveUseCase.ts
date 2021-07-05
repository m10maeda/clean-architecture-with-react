import { IUseCase } from '../../shared';
import CircleLeaveUseCaseRequest from './CircleLeaveUseCaseRequest';
import CircleLeaveUseCaseResponse from './CircleLeaveUseCaseResponse';

export interface ICircleLeaveUseCase
  extends IUseCase<CircleLeaveUseCaseRequest, CircleLeaveUseCaseResponse> {}
