/**
 * The User type is a class instead of an interface to have access to a
 * custom ".create" static method to imidiately instantiate a mock object
 * instead of adding the properties ad hoc everytime
 */
export class User {
  id: string = '1';
  email: string = 'kostasmavrokou@gmail.com';
  name: string = 'Guest User';
  createdAt: string = new Date().toJSON();
  updatedAt: string = new Date().toJSON();

  static create(overwriter: Partial<User> = {}): User {
    return { ...JSON.parse(JSON.stringify(new this())), ...overwriter };
  }
}

export interface LoginCredentials {
  email: string;
  password: string;
}
