export interface serviceGeneric<R, U, M> {
  add(request: R): Promise<M>;
  getOne(id: number): Promise<M>;
  getAll(): Promise<M>;
  deleteOne(id: number): Promise<M>;
  updateOne(request: U): Promise<M>;
}
