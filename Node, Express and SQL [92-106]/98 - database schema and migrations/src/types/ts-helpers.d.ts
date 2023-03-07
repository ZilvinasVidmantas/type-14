type PartialRecursive<T> = {
  [Key in keyof T]?:
  T[Key] extends Object
  ? PartialRecursive<T[Key]>
  : T[Key] extends any[]
  ? T[Key][0] extends Object
  ? PartialRecursive<T[Key][0]>[]
  : T[Key]
  : T[Key]
};
