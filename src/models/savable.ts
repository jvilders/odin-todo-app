// localStorage stuff
export default interface ISavable<U> {
  serialize(): U;
}
