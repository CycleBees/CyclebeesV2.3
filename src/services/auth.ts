import { account } from './appwrite';
import { ID } from 'react-native-appwrite';

export interface AuthUser {
  $id: string;
  name: string;
  email: string;
  phone: string;
}

class AuthService {
  async createPhoneSession(phone: string): Promise<void> {
    try {
      await account.createPhoneToken(ID.unique(), phone);
    } catch (error) {
      throw new Error('Failed to send OTP');
    }
  }

  async verifyPhoneSession(userId: string, secret: string): Promise<AuthUser> {
    try {
      await account.createSession(userId, secret);
      const user = await account.get();
      return {
        $id: user.$id,
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
      };
    } catch (error) {
      throw new Error('Failed to verify OTP');
    }
  }

  async getCurrentUser(): Promise<AuthUser | null> {
    try {
      const user = await account.get();
      return {
        $id: user.$id,
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
      };
    } catch (error) {
      return null;
    }
  }

  async logout(): Promise<void> {
    try {
      await account.deleteSession('current');
    } catch (error) {
      throw new Error('Failed to logout');
    }
  }
}

export default new AuthService();