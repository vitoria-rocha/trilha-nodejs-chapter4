import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}
/* QUando eu faço uma requisição o decode me retorna alguams informações no terminal
    console.log(decoded);
 {
  iat: 1636484675,
  exp: 1636571075,
  sub: 'ee615765-0824-47a3-a96d-56ead95b453c'
}
mas eu preciso só do SUB, por isso criaremos a interface
*/
export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  // Capturar Token do Usuário (Headers)
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing.", 401);
  }

  // authHeader: "Bearer InR5cCIpXVCJ9.E2MTk3MjkImV.ucUxKdlak4"
  // [0]: Bearer , [1] InR5cCIpXVCJ9.E2MTk3MjkImV.ucUxKdlak4
  const [, token] = authHeader.split(" ");
  //const decoded = verify(token, "f9ee3831ad2e4d738179fbbb8a66a9d7");
    //console.log(decoded);
  try {
    // Desestruturando JWT pegando o "sub" e chamando de "user_id"
    const { sub: user_id } = verify(
      token,
      "f9ee3831ad2e4d738179fbbb8a66a9d7"
    ) as IPayload;

    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User does not exists.", 401);
    }

    request.user = {
      id: user_id,
    };

    next();
  } catch {
    throw new AppError("Invalid token.", 401);
  }
}