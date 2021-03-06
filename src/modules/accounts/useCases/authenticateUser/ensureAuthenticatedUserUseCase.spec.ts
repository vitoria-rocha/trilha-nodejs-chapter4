import { AppError } from "@shared/errors/AppError";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });
  it("should be able to authenticate an user", async () => {
    const user: ICreateUserDTO = {
      driver_license: "001234",
      email: "user@user.com",
      password: "12345",
      name: "Test",
    };
    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });
    expect(result).toHaveProperty("token");
  });

  it("should not to be able to authenticate an nonexistent user", () =>{
    expect(async () => {
        await authenticateUserUseCase.execute({
        email: "user@test.com",
        password: "123456",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
  
  it("should not to be able to authenticate with incorrect password", () =>{
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: "9999",
        email: "teste@teste.com",
        password: "12345",
        name: "Test Error",
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: "teste@teste.com",
        password: "senha",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});