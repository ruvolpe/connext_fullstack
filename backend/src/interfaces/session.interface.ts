import { z } from "zod";
import { sessionSchema } from "../schemas";

type SessionCreate = z.infer<typeof sessionSchema>;
type SessionReturn = { token: string; id: number };

export { SessionCreate, SessionReturn };
