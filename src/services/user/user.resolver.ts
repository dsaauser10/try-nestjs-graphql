import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserController } from './user.controller';
import { CreateOneUserArgs, FindUniqueUserArgs, User } from 'src/@generated';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userController: UserController) {}

  @Mutation(() => User, {
    nullable: true,
    description: 'create a new user',
  })
  async userCreateOne(
    @Args()
    userCreateArgs: CreateOneUserArgs,
  ): Promise<User | void> {
    return await this.userController.createOne({ ...userCreateArgs });
  }

  @Query(() => User, {
    nullable: true,
    description: 'get a user by id',
  })
  userFindOne(
    @Args()
    userFindUniqueArgs: FindUniqueUserArgs,
  ) {
    return this.userController.findOne({ ...userFindUniqueArgs });
  }

  @Query(() => [User], {
    nullable: true,
    description: 'get all users',
  })
  async userFindMany(): Promise<User[] | void> {
    return this.userController.findMany();
  }
}

//   @Query(() => [Product], {
//     nullable: true,
//     description: 'get all products',
//   })
//   async productFindMany(
//     @Args() productFindManyArgs: FindManyProductArgs,
//   ): Promise<Product[] | void> {
//     return this.productcontroller.getAllProducts();
//   }
