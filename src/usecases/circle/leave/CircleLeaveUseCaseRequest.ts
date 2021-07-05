import { UseCaseRequest } from '../../shared';

export default class CircleLeaveUseCaseRequest extends UseCaseRequest {
  public readonly circleId: string;

  public readonly memberId: string;

  public constructor(circleId: string, memberId: string) {
    super();

    this.circleId = circleId;
    this.memberId = memberId;
  }
}
