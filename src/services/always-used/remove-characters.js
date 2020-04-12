export class RemoveCharacters {
  static remove(v) {
    return v.replace(/[A-Za-z!@#$^&%*()+=[]\/{}|:<>?,.]+/g, '')
  }
}
