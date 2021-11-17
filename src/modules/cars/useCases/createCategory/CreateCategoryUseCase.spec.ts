import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
<<<<<<< HEAD
import { AppError } from "../../../../errors/AppError";
=======
>>>>>>> 507114cb8ebd38782f3373901aa414061c307d44


let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory

describe("Create category", () => {

  beforeEach(() =>{
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
<<<<<<< HEAD
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("should be able to create a new category", async () => {
=======
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory);
  });

  it("should be able to create a new category", async() => {
>>>>>>> 507114cb8ebd38782f3373901aa414061c307d44
    const category = {
      name: "Category test",
      description: "Category description test",
    };

    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description,
    });

    const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name);
  
    expect(categoryCreated).toHaveProperty("id");
  });
<<<<<<< HEAD

  it("should not be able to create a new category with name exists", async () => {
    expect(async () => {
      const category = {
        name: "Category test",
        description: "Category description test",
      };
  
      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      });
     
      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      });
    }).rejects.toBeInstanceOf(AppError);   
  });
=======
>>>>>>> 507114cb8ebd38782f3373901aa414061c307d44
})