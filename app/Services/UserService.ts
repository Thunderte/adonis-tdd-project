import User from 'App/Models/User';

export default class UserService {
    public static async createUser(name: string, email: string, password: string) { 
            const user = await User.create({ name, email, password });

            return user;
    }

    public static async findUserRandom() {
        const user = await User.first();

        return user;
    }

    public static async findUserByEmail(email: string) {
        const user = await User.findBy('email', email);

        if(!user) return true;

        return false;
    }
  }