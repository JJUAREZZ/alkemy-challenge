const bcrypt = require("bcrypt");
const User = require("../models/usersNew");

class UserRepository {
  constructor() {}

  async findAll() {
    return await User.findAll();
  }

  /*async findAllWithPagination(filter, options){
        return await User.paginate(filter, options);
    }*/

  async findById(id) {
    return await User.findByPk(id);
  }

  async findByEmail(email) {
    return await User.findOne({ email });
  }

  async save(user) {
    user.password = await bcrypt.hash(user.password, 10);
    return await User.create(user);
  }

  async update(id, user) {
    return await User.update(user, {
      where: {
        id,
      },
    });
  }

  async remove(id) {
    return await User.destroy({
      where: {
        id,
      },
    });
  }
}

module.exports = UserRepository;
