import { UserCreate, UserRead, UserReturn, UserUpdate } from "../interfaces";
import { User } from "../entities";
import { userRepository } from "../repositories";
import { userReadSchema, userReturnSchema, userUpdateSchema } from "../schemas";

const createUser = async (payload: UserCreate): Promise<UserReturn> => {
  const user: User = userRepository.create(payload);
  await userRepository.save(user);

  return userReturnSchema.parse(user);
};

const readUser = async (): Promise<UserRead> => {
  return userReadSchema.parse(await userRepository.find());
};

const updateUser = async (
  payload: UserUpdate,
  id: number
): Promise<UserReturn> => {
  const user: User | null = await userRepository.findOne({ where: { id } });
  const updatedUser: User = userRepository.create({ ...user, ...payload });
  await userRepository.save(updatedUser);

  return userReturnSchema.parse(updatedUser);
};

const destroyUser = async (user: User): Promise<void> => {
  await userRepository.softRemove(user);
};

export default { createUser, readUser, destroyUser, updateUser };
