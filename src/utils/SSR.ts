export class SSRContainer<T> {
  private jsonData: string

  constructor(data: T) {
    this.jsonData = JSON.stringify(data)
  }

  get(): T {
    return JSON.parse(this.jsonData)
  }
}
