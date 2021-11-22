import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Category } from "./Category";

@Entity("cars")
class Car {
  @PrimaryColumn()
  id: string;
 
  @Column()
  name: string;

  @Column()
  description: string;
 
  @Column()
  daily_rate: number;

  @Column()
  available: boolean;
  //available: boolean;

  @Column()
  license_plate: string;

  @Column()
  fine_amount: number;

  @Column()
  brand: string;

 // muitos carros para 1 categoria, many to one
  @ManyToOne(() => Category)
  @JoinColumn({name: "category_id"})
  category: Category;

  @Column()
  category_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuidv4();
      this.available = true;
      //this.created_at = new Date();
    }
  }
}

export { Car };