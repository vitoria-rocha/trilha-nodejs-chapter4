import { Category } from "../../entities/Category";
<<<<<<< HEAD
import { 
  ICategoriesRepository, 
  ICreateCategoryDTO 
} from "../ICategoriesRepository";
=======
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";
>>>>>>> 507114cb8ebd38782f3373901aa414061c307d44

class CategoriesRepositoryInMemory implements ICategoriesRepository{
  categories: Category[] = [];

  async findByName(name: string): Promise<Category>{
    const category = this.categories.find((category) => category.name === name);
    return category;
<<<<<<< HEAD
=======
    /*throw new Error("not implemented");*/ 
>>>>>>> 507114cb8ebd38782f3373901aa414061c307d44
  }

  async list(): Promise<Category[]>{
    const all = this.categories;
    return all;
  }

  async create({name, description}: ICreateCategoryDTO): Promise<void>{
    const category = new Category();

    Object.assign(category, {
      name, description,
    });
    
    this.categories.push(category);
  }
}

export { CategoriesRepositoryInMemory };