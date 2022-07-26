class Message {
  private id: number;
  public poster: string;
  public avatar: string;
  public message: string;

  constructor (poster: string, message: string) {
    this.id = 0
    this.avatar = ''
    this.poster = poster
    this.message = message
  }
}

export default Message
