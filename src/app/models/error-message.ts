export interface IErrorMessage {
  id: string;
  message: any;
}

export class ErrorMessage {
  static getMessages(): IErrorMessage[] {
    return [
      { id: 'required', message: () => ('This filed is required, please fill it to continue.') },
      { id: 'email', message: () => ('Please enter a valid email.') },
      { id: 'minlength', message: (data) => (`The value must be have a min length of ${data.requiredLength} characters.`) },
      { id: 'pattern', message: (data) => (`The value must match with this ${data.requiredPattern}.`) }
    ];
  }
}
