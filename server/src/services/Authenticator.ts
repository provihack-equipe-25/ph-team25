import * as jwt from "jsonwebtoken";
//criar interface que será o tipo do input. o return de data deve ter o tipo desta interface.
export class Authenticator {
  public generate = (input: string): string => {
    const token = jwt.sign(input, String(process.env.JWT_KEY), {
      expiresIn: process.env.EXPIRES_IN,
    });
    return token;
  };

  public getTokenData = (token: string) => {
    const data = jwt.verify(token, String(process.env.JWT_KEY));
    return data as string;
  };
}
