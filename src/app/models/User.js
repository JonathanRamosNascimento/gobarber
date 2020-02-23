import Sequelize, { Model } from 'sequelize';
import brcypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await brcypt.hash(user.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return brcypt.compare(password, this.password_hash);
  }
}

export default User;
