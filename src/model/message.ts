class Message {
  private readonly id: string;
  public poster: string;
  public avatar: string;
  public message: string;
  public response: string | null;
  public readonly timestamp: number;

  constructor (poster: string, message: string) {
    this.timestamp = new Date().getTime()
    this.avatar = 'https://pic4.zhimg.com/v2-ea96501edb74e6e1231589c29ff9ded1_r.jpg'
    this.poster = poster
    this.message = message
    this.id = this.timestamp + '#message#' + Math.floor(Math.random() * 10000)
    this.response = null
    switch (poster) {
      case 'robot':
        this.avatar = 'https://cdn.dribbble.com/users/124475/screenshots/2470556/tettra_1.jpg'
        break
      case 'user':
        this.avatar = 'https://pic4.zhimg.com/v2-ea96501edb74e6e1231589c29ff9ded1_r.jpg'
        break
    }
  }
}

export default Message
