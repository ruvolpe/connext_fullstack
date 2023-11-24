import { AppDataSource } from "../data-source";
import { Contact } from "../entities";

export default AppDataSource.getRepository(Contact);
