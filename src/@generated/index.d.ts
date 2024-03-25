import { Prisma } from '@prisma/client';
export declare enum UserScalarFieldEnum {
    id = "id",
    name = "name",
    email = "email",
    password = "password",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    gender = "gender"
}
export declare enum ProductScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    price = "price",
    imageName = "imageName",
    imageURL = "imageURL",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId"
}
export declare enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}
export declare enum SortOrder {
    asc = "asc",
    desc = "desc"
}
export declare enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}
export declare enum NullsOrder {
    first = "first",
    last = "last"
}
export declare enum GenderEnum {
    UNKNOWN = "UNKNOWN",
    MALE = "MALE",
    FEMALE = "FEMALE"
}
export declare class AffectedRows {
    count: number;
}
export declare class DateTimeFieldUpdateOperationsInput {
    set?: Date | string;
}
export declare class DateTimeFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class DateTimeWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class EnumGenderEnumNullableFilter {
    equals?: keyof typeof GenderEnum;
    in?: Array<keyof typeof GenderEnum>;
    notIn?: Array<keyof typeof GenderEnum>;
    not?: InstanceType<typeof NestedEnumGenderEnumNullableFilter>;
}
export declare class EnumGenderEnumNullableWithAggregatesFilter {
    equals?: keyof typeof GenderEnum;
    in?: Array<keyof typeof GenderEnum>;
    notIn?: Array<keyof typeof GenderEnum>;
    not?: InstanceType<typeof NestedEnumGenderEnumNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedEnumGenderEnumNullableFilter>;
    _max?: InstanceType<typeof NestedEnumGenderEnumNullableFilter>;
}
export declare class FloatFieldUpdateOperationsInput {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
}
export declare class FloatFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatFilter>;
}
export declare class FloatWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _avg?: InstanceType<typeof NestedFloatFilter>;
    _sum?: InstanceType<typeof NestedFloatFilter>;
    _min?: InstanceType<typeof NestedFloatFilter>;
    _max?: InstanceType<typeof NestedFloatFilter>;
}
export declare class IntFieldUpdateOperationsInput {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
}
export declare class IntFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntFilter>;
}
export declare class IntWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _avg?: InstanceType<typeof NestedFloatFilter>;
    _sum?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedIntFilter>;
    _max?: InstanceType<typeof NestedIntFilter>;
}
export declare class NestedDateTimeFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class NestedDateTimeWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class NestedEnumGenderEnumNullableFilter {
    equals?: keyof typeof GenderEnum;
    in?: Array<keyof typeof GenderEnum>;
    notIn?: Array<keyof typeof GenderEnum>;
    not?: InstanceType<typeof NestedEnumGenderEnumNullableFilter>;
}
export declare class NestedEnumGenderEnumNullableWithAggregatesFilter {
    equals?: keyof typeof GenderEnum;
    in?: Array<keyof typeof GenderEnum>;
    notIn?: Array<keyof typeof GenderEnum>;
    not?: InstanceType<typeof NestedEnumGenderEnumNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedEnumGenderEnumNullableFilter>;
    _max?: InstanceType<typeof NestedEnumGenderEnumNullableFilter>;
}
export declare class NestedFloatFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatFilter>;
}
export declare class NestedFloatWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _avg?: InstanceType<typeof NestedFloatFilter>;
    _sum?: InstanceType<typeof NestedFloatFilter>;
    _min?: InstanceType<typeof NestedFloatFilter>;
    _max?: InstanceType<typeof NestedFloatFilter>;
}
export declare class NestedIntFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntFilter>;
}
export declare class NestedIntNullableFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableFilter>;
}
export declare class NestedIntWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _avg?: InstanceType<typeof NestedFloatFilter>;
    _sum?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedIntFilter>;
    _max?: InstanceType<typeof NestedIntFilter>;
}
export declare class NestedStringFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringFilter>;
}
export declare class NestedStringNullableFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class NestedStringNullableWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class NestedStringWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedStringFilter>;
    _max?: InstanceType<typeof NestedStringFilter>;
}
export declare class NullableEnumGenderEnumFieldUpdateOperationsInput {
    set?: keyof typeof GenderEnum;
}
export declare class NullableStringFieldUpdateOperationsInput {
    set?: string;
}
export declare class SortOrderInput {
    sort: keyof typeof SortOrder;
    nulls?: keyof typeof NullsOrder;
}
export declare class StringFieldUpdateOperationsInput {
    set?: string;
}
export declare class StringFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringFilter>;
}
export declare class StringNullableFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class StringNullableWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class StringWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedStringFilter>;
    _max?: InstanceType<typeof NestedStringFilter>;
}
export declare class AggregateProduct {
    _count?: InstanceType<typeof ProductCountAggregate>;
    _avg?: InstanceType<typeof ProductAvgAggregate>;
    _sum?: InstanceType<typeof ProductSumAggregate>;
    _min?: InstanceType<typeof ProductMinAggregate>;
    _max?: InstanceType<typeof ProductMaxAggregate>;
}
export declare class CreateManyProductArgs {
    data: Array<ProductCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneProductArgs {
    data: InstanceType<typeof ProductCreateInput>;
}
export declare class DeleteManyProductArgs {
    where?: InstanceType<typeof ProductWhereInput>;
}
export declare class DeleteOneProductArgs {
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}
export declare class FindFirstProductOrThrowArgs {
    where?: InstanceType<typeof ProductWhereInput>;
    orderBy?: Array<ProductOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProductScalarFieldEnum>;
}
export declare class FindFirstProductArgs {
    where?: InstanceType<typeof ProductWhereInput>;
    orderBy?: Array<ProductOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProductScalarFieldEnum>;
}
export declare class FindManyProductArgs {
    where?: InstanceType<typeof ProductWhereInput>;
    orderBy?: Array<ProductOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProductScalarFieldEnum>;
}
export declare class FindUniqueProductOrThrowArgs {
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}
export declare class FindUniqueProductArgs {
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}
export declare class ProductAggregateArgs {
    where?: InstanceType<typeof ProductWhereInput>;
    orderBy?: Array<ProductOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProductCountAggregateInput>;
    _avg?: InstanceType<typeof ProductAvgAggregateInput>;
    _sum?: InstanceType<typeof ProductSumAggregateInput>;
    _min?: InstanceType<typeof ProductMinAggregateInput>;
    _max?: InstanceType<typeof ProductMaxAggregateInput>;
}
export declare class ProductAvgAggregateInput {
    id?: true;
    price?: true;
}
export declare class ProductAvgAggregate {
    id?: number;
    price?: number;
}
export declare class ProductAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
}
export declare class ProductCountAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    imageName?: true;
    imageURL?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
    _all?: true;
}
export declare class ProductCountAggregate {
    id: number;
    name: number;
    description: number;
    price: number;
    imageName: number;
    imageURL: number;
    createdAt: number;
    updatedAt: number;
    userId: number;
    _all: number;
}
export declare class ProductCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    imageName?: keyof typeof SortOrder;
    imageURL?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
}
export declare class ProductCreateManyUserInputEnvelope {
    data: Array<ProductCreateManyUserInput>;
    skipDuplicates?: boolean;
}
export declare class ProductCreateManyUserInput {
    id?: number;
    name: string;
    description: string;
    price: number;
    imageName: string;
    imageURL: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProductCreateManyInput {
    id?: number;
    name: string;
    description: string;
    price: number;
    imageName: string;
    imageURL: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId?: string;
}
export declare class ProductCreateNestedManyWithoutUserInput {
    create?: Array<ProductCreateWithoutUserInput>;
    connectOrCreate?: Array<ProductCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof ProductCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}
export declare class ProductCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProductCreateWithoutUserInput>;
}
export declare class ProductCreateWithoutUserInput {
    name: string;
    description: string;
    price: number;
    imageName: string;
    imageURL: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProductCreateInput {
    name: string;
    description: string;
    price: number;
    imageName: string;
    imageURL: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: InstanceType<typeof UserCreateNestedOneWithoutProductsInput>;
}
export declare class ProductGroupByArgs {
    where?: InstanceType<typeof ProductWhereInput>;
    orderBy?: Array<ProductOrderByWithAggregationInput>;
    by: Array<keyof typeof ProductScalarFieldEnum>;
    having?: InstanceType<typeof ProductScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProductCountAggregateInput>;
    _avg?: InstanceType<typeof ProductAvgAggregateInput>;
    _sum?: InstanceType<typeof ProductSumAggregateInput>;
    _min?: InstanceType<typeof ProductMinAggregateInput>;
    _max?: InstanceType<typeof ProductMaxAggregateInput>;
}
export declare class ProductGroupBy {
    id: number;
    name: string;
    description: string;
    price: number;
    imageName: string;
    imageURL: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    userId?: string;
    _count?: InstanceType<typeof ProductCountAggregate>;
    _avg?: InstanceType<typeof ProductAvgAggregate>;
    _sum?: InstanceType<typeof ProductSumAggregate>;
    _min?: InstanceType<typeof ProductMinAggregate>;
    _max?: InstanceType<typeof ProductMaxAggregate>;
}
export declare class ProductListRelationFilter {
    every?: InstanceType<typeof ProductWhereInput>;
    some?: InstanceType<typeof ProductWhereInput>;
    none?: InstanceType<typeof ProductWhereInput>;
}
export declare class ProductMaxAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    imageName?: true;
    imageURL?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
}
export declare class ProductMaxAggregate {
    id?: number;
    name?: string;
    description?: string;
    price?: number;
    imageName?: string;
    imageURL?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId?: string;
}
export declare class ProductMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    imageName?: keyof typeof SortOrder;
    imageURL?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
}
export declare class ProductMinAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    imageName?: true;
    imageURL?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
}
export declare class ProductMinAggregate {
    id?: number;
    name?: string;
    description?: string;
    price?: number;
    imageName?: string;
    imageURL?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId?: string;
}
export declare class ProductMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    imageName?: keyof typeof SortOrder;
    imageURL?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
}
export declare class ProductOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class ProductOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    imageName?: keyof typeof SortOrder;
    imageURL?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    userId?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof ProductCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ProductAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ProductMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ProductMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ProductSumOrderByAggregateInput>;
}
export declare class ProductOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    imageName?: keyof typeof SortOrder;
    imageURL?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    userId?: InstanceType<typeof SortOrderInput>;
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
}
export declare class ProductScalarWhereWithAggregatesInput {
    AND?: Array<ProductScalarWhereWithAggregatesInput>;
    OR?: Array<ProductScalarWhereWithAggregatesInput>;
    NOT?: Array<ProductScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    price?: InstanceType<typeof FloatWithAggregatesFilter>;
    imageName?: InstanceType<typeof StringWithAggregatesFilter>;
    imageURL?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    userId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}
export declare class ProductScalarWhereInput {
    AND?: Array<ProductScalarWhereInput>;
    OR?: Array<ProductScalarWhereInput>;
    NOT?: Array<ProductScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    price?: InstanceType<typeof FloatFilter>;
    imageName?: InstanceType<typeof StringFilter>;
    imageURL?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    userId?: InstanceType<typeof StringNullableFilter>;
}
export declare class ProductSumAggregateInput {
    id?: true;
    price?: true;
}
export declare class ProductSumAggregate {
    id?: number;
    price?: number;
}
export declare class ProductSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
}
export declare class ProductUncheckedCreateNestedManyWithoutUserInput {
    create?: Array<ProductCreateWithoutUserInput>;
    connectOrCreate?: Array<ProductCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof ProductCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}
export declare class ProductUncheckedCreateWithoutUserInput {
    id?: number;
    name: string;
    description: string;
    price: number;
    imageName: string;
    imageURL: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProductUncheckedCreateInput {
    id?: number;
    name: string;
    description: string;
    price: number;
    imageName: string;
    imageURL: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId?: string;
}
export declare class ProductUncheckedUpdateManyWithoutUserNestedInput {
    create?: Array<ProductCreateWithoutUserInput>;
    connectOrCreate?: Array<ProductCreateOrConnectWithoutUserInput>;
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof ProductCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    update?: Array<ProductUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<ProductUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<ProductScalarWhereInput>;
}
export declare class ProductUncheckedUpdateManyWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    imageName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    imageURL?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProductUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    imageName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    imageURL?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class ProductUncheckedUpdateWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    imageName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    imageURL?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProductUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    imageName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    imageURL?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class ProductUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    imageName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    imageURL?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProductUpdateManyWithWhereWithoutUserInput {
    where: InstanceType<typeof ProductScalarWhereInput>;
    data: InstanceType<typeof ProductUpdateManyMutationInput>;
}
export declare class ProductUpdateManyWithoutUserNestedInput {
    create?: Array<ProductCreateWithoutUserInput>;
    connectOrCreate?: Array<ProductCreateOrConnectWithoutUserInput>;
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof ProductCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    update?: Array<ProductUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<ProductUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<ProductScalarWhereInput>;
}
export declare class ProductUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ProductUpdateWithoutUserInput>;
}
export declare class ProductUpdateWithoutUserInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    imageName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    imageURL?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProductUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    imageName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    imageURL?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneWithoutProductsNestedInput>;
}
export declare class ProductUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ProductUpdateWithoutUserInput>;
    create: InstanceType<typeof ProductCreateWithoutUserInput>;
}
export declare class ProductWhereUniqueInput {
    id?: number;
    AND?: Array<ProductWhereInput>;
    OR?: Array<ProductWhereInput>;
    NOT?: Array<ProductWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    price?: InstanceType<typeof FloatFilter>;
    imageName?: InstanceType<typeof StringFilter>;
    imageURL?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    userId?: InstanceType<typeof StringNullableFilter>;
    user?: InstanceType<typeof UserNullableRelationFilter>;
}
export declare class ProductWhereInput {
    AND?: Array<ProductWhereInput>;
    OR?: Array<ProductWhereInput>;
    NOT?: Array<ProductWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    price?: InstanceType<typeof FloatFilter>;
    imageName?: InstanceType<typeof StringFilter>;
    imageURL?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    userId?: InstanceType<typeof StringNullableFilter>;
    user?: InstanceType<typeof UserNullableRelationFilter>;
}
export declare class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageName: string;
    imageURL: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string | null;
    user?: InstanceType<typeof User> | null;
}
export declare class UpdateManyProductArgs {
    data: InstanceType<typeof ProductUpdateManyMutationInput>;
    where?: InstanceType<typeof ProductWhereInput>;
}
export declare class UpdateOneProductArgs {
    data: InstanceType<typeof ProductUpdateInput>;
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}
export declare class UpsertOneProductArgs {
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProductCreateInput>;
    update: InstanceType<typeof ProductUpdateInput>;
}
export declare class AggregateUser {
    _count?: InstanceType<typeof UserCountAggregate>;
    _min?: InstanceType<typeof UserMinAggregate>;
    _max?: InstanceType<typeof UserMaxAggregate>;
}
export declare class CreateManyUserArgs {
    data: Array<UserCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneUserArgs {
    data: InstanceType<typeof UserCreateInput>;
}
export declare class DeleteManyUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class DeleteOneUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class FindFirstUserOrThrowArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindFirstUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindManyUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindUniqueUserOrThrowArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class FindUniqueUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class UpdateManyUserArgs {
    data: InstanceType<typeof UserUpdateManyMutationInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UpdateOneUserArgs {
    data: InstanceType<typeof UserUpdateInput>;
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class UpsertOneUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    create: InstanceType<typeof UserCreateInput>;
    update: InstanceType<typeof UserUpdateInput>;
}
export declare class UserAggregateArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserCountAggregateInput>;
    _min?: InstanceType<typeof UserMinAggregateInput>;
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}
export declare class UserCountAggregateInput {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
    gender?: true;
    _all?: true;
}
export declare class UserCountAggregate {
    id: number;
    name: number;
    email: number;
    password: number;
    createdAt: number;
    updatedAt: number;
    gender: number;
    _all: number;
}
export declare class UserCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    gender?: keyof typeof SortOrder;
}
export declare class UserCount {
    products?: number;
}
export declare class UserCreateManyInput {
    id?: string;
    name: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    gender?: keyof typeof GenderEnum;
}
export declare class UserCreateNestedOneWithoutProductsInput {
    create?: InstanceType<typeof UserCreateWithoutProductsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutProductsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class UserCreateOrConnectWithoutProductsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    create: InstanceType<typeof UserCreateWithoutProductsInput>;
}
export declare class UserCreateWithoutProductsInput {
    id?: string;
    name: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    gender?: keyof typeof GenderEnum;
}
export declare class UserCreateInput {
    id?: string;
    name: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    gender?: keyof typeof GenderEnum;
    products?: InstanceType<typeof ProductCreateNestedManyWithoutUserInput>;
}
export declare class UserGroupByArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithAggregationInput>;
    by: Array<keyof typeof UserScalarFieldEnum>;
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserCountAggregateInput>;
    _min?: InstanceType<typeof UserMinAggregateInput>;
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}
export declare class UserGroupBy {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    gender?: keyof typeof GenderEnum;
    _count?: InstanceType<typeof UserCountAggregate>;
    _min?: InstanceType<typeof UserMinAggregate>;
    _max?: InstanceType<typeof UserMaxAggregate>;
}
export declare class UserMaxAggregateInput {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
    gender?: true;
}
export declare class UserMaxAggregate {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    gender?: keyof typeof GenderEnum;
}
export declare class UserMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    gender?: keyof typeof SortOrder;
}
export declare class UserMinAggregateInput {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
    gender?: true;
}
export declare class UserMinAggregate {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    gender?: keyof typeof GenderEnum;
}
export declare class UserMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    gender?: keyof typeof SortOrder;
}
export declare class UserNullableRelationFilter {
    is?: InstanceType<typeof UserWhereInput>;
    isNot?: InstanceType<typeof UserWhereInput>;
}
export declare class UserOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    gender?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}
export declare class UserOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    gender?: InstanceType<typeof SortOrderInput>;
    products?: InstanceType<typeof ProductOrderByRelationAggregateInput>;
}
export declare class UserScalarWhereWithAggregatesInput {
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    password?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    gender?: InstanceType<typeof EnumGenderEnumNullableWithAggregatesFilter>;
}
export declare class UserUncheckedCreateWithoutProductsInput {
    id?: string;
    name: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    gender?: keyof typeof GenderEnum;
}
export declare class UserUncheckedCreateInput {
    id?: string;
    name: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    gender?: keyof typeof GenderEnum;
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutUserInput>;
}
export declare class UserUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    gender?: InstanceType<typeof NullableEnumGenderEnumFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateWithoutProductsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    gender?: InstanceType<typeof NullableEnumGenderEnumFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    gender?: InstanceType<typeof NullableEnumGenderEnumFieldUpdateOperationsInput>;
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutUserNestedInput>;
}
export declare class UserUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    gender?: InstanceType<typeof NullableEnumGenderEnumFieldUpdateOperationsInput>;
}
export declare class UserUpdateOneWithoutProductsNestedInput {
    create?: InstanceType<typeof UserCreateWithoutProductsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutProductsInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutProductsInput>;
    disconnect?: InstanceType<typeof UserWhereInput>;
    delete?: InstanceType<typeof UserWhereInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutProductsInput>;
}
export declare class UserUpdateToOneWithWhereWithoutProductsInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutProductsInput>;
}
export declare class UserUpdateWithoutProductsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    gender?: InstanceType<typeof NullableEnumGenderEnumFieldUpdateOperationsInput>;
}
export declare class UserUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    gender?: InstanceType<typeof NullableEnumGenderEnumFieldUpdateOperationsInput>;
    products?: InstanceType<typeof ProductUpdateManyWithoutUserNestedInput>;
}
export declare class UserUpsertWithoutProductsInput {
    update: InstanceType<typeof UserUpdateWithoutProductsInput>;
    create: InstanceType<typeof UserCreateWithoutProductsInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserWhereUniqueInput {
    id?: string;
    email?: string;
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    password?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    gender?: InstanceType<typeof EnumGenderEnumNullableFilter>;
    products?: InstanceType<typeof ProductListRelationFilter>;
}
export declare class UserWhereInput {
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    name?: InstanceType<typeof StringFilter>;
    email?: InstanceType<typeof StringFilter>;
    password?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    gender?: InstanceType<typeof EnumGenderEnumNullableFilter>;
    products?: InstanceType<typeof ProductListRelationFilter>;
}
export declare class User {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    gender: keyof typeof GenderEnum | null;
    products?: Array<Product>;
    _count?: InstanceType<typeof UserCount>;
}
