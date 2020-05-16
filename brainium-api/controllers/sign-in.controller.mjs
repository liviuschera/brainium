import bcrypt from 'bcryptjs';
import { getUserLogin } from '../database/query.database.mjs';

export default function handleSignIn() {
  async (req, res) => {
    const { email, password } = req.body;

    try {
      const userExists = await getUserLogin(email);
      console.log(userExists);

      if (!userExists) {
        throw new Error(`Unable find: ${email}`);
      }
      const passwordIsValid = await bcrypt.compare(password, userExists.hash);
      if (passwordIsValid) {
        res.json(userExists);
      } else {
        throw new Error('Wrong password');
      }
    } catch (error) {
      console.error(error.message);
      res.status(400).json('Unable to login!');
    }
  };
}
