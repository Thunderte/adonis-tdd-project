import User from 'App/Models/User';

export default class UserService {
    public static async createUser(name: string, email: string, password: string) { 
        const user = await User.create({ name, email, password });
        return user;
    }
  }