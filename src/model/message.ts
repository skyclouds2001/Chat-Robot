class Message {
  private readonly _id: number;
  public poster: string;
  public avatar: string;
  public message: string;

  constructor (poster: string, message: string) {
    this._id = new Date().getTime()
    this.avatar = 'https://pic4.zhimg.com/v2-ea96501edb74e6e1231589c29ff9ded1_r.jpg'
    this.poster = poster
    this.message = message
    switch (poster) {
      case 'robot':
        this.avatar = 'https://cdn.dribbble.com/users/124475/screenshots/2470556/tettra_1.jpg'
        break
      case 'user':
        this.avatar = 'https://pic4.zhimg.com/v2-ea96501edb74e6e1231589c29ff9ded1_r.jpg'
        break
    }
  }

  get id (): number {
    return this._id
  }
}

export default Message
