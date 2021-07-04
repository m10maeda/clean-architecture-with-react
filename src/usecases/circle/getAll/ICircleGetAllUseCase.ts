import { IUseCase } from '../../shared';
import CircleGetAllUseCaseRequest from './CircleGetAllUseCaseRequest';
import CircleGetAllUseCaseResponse from './CircleGetAllUseCaseResponse';

export interface ICircleGetAllUseCase
  extends IUseCase<CircleGetAllUseCaseRequest, CircleGetAllUseCaseResponse> {}
