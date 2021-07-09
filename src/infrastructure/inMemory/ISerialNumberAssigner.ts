export interface ISerialNumberAssigner {
  next(): Promise<string>;
}
