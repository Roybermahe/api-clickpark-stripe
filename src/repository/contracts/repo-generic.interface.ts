export interface RepoGenericInterface<T> {
  add(data: T);
  delete(id: number);
  findOne(id: number);
  find();
  saveAll(data: T[]);
}
