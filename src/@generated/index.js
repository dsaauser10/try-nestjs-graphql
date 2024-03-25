"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NestedDateTimeFilter_1, NestedDateTimeWithAggregatesFilter_1, NestedEnumGenderEnumNullableFilter_1, NestedEnumGenderEnumNullableWithAggregatesFilter_1, NestedFloatFilter_1, NestedFloatWithAggregatesFilter_1, NestedIntFilter_1, NestedIntNullableFilter_1, NestedIntWithAggregatesFilter_1, NestedStringFilter_1, NestedStringNullableFilter_1, NestedStringNullableWithAggregatesFilter_1, NestedStringWithAggregatesFilter_1, ProductScalarWhereWithAggregatesInput_1, ProductScalarWhereInput_1, ProductWhereInput_1, UserScalarWhereWithAggregatesInput_1, UserWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProductArgs = exports.FindUniqueProductOrThrowArgs = exports.FindManyProductArgs = exports.FindFirstProductArgs = exports.FindFirstProductOrThrowArgs = exports.DeleteOneProductArgs = exports.DeleteManyProductArgs = exports.CreateOneProductArgs = exports.CreateManyProductArgs = exports.AggregateProduct = exports.StringWithAggregatesFilter = exports.StringNullableWithAggregatesFilter = exports.StringNullableFilter = exports.StringFilter = exports.StringFieldUpdateOperationsInput = exports.SortOrderInput = exports.NullableStringFieldUpdateOperationsInput = exports.NullableEnumGenderEnumFieldUpdateOperationsInput = exports.NestedStringWithAggregatesFilter = exports.NestedStringNullableWithAggregatesFilter = exports.NestedStringNullableFilter = exports.NestedStringFilter = exports.NestedIntWithAggregatesFilter = exports.NestedIntNullableFilter = exports.NestedIntFilter = exports.NestedFloatWithAggregatesFilter = exports.NestedFloatFilter = exports.NestedEnumGenderEnumNullableWithAggregatesFilter = exports.NestedEnumGenderEnumNullableFilter = exports.NestedDateTimeWithAggregatesFilter = exports.NestedDateTimeFilter = exports.IntWithAggregatesFilter = exports.IntFilter = exports.IntFieldUpdateOperationsInput = exports.FloatWithAggregatesFilter = exports.FloatFilter = exports.FloatFieldUpdateOperationsInput = exports.EnumGenderEnumNullableWithAggregatesFilter = exports.EnumGenderEnumNullableFilter = exports.DateTimeWithAggregatesFilter = exports.DateTimeFilter = exports.DateTimeFieldUpdateOperationsInput = exports.AffectedRows = exports.GenderEnum = exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.TransactionIsolationLevel = exports.ProductScalarFieldEnum = exports.UserScalarFieldEnum = void 0;
exports.UpdateManyProductArgs = exports.Product = exports.ProductWhereInput = exports.ProductWhereUniqueInput = exports.ProductUpsertWithWhereUniqueWithoutUserInput = exports.ProductUpdateInput = exports.ProductUpdateWithoutUserInput = exports.ProductUpdateWithWhereUniqueWithoutUserInput = exports.ProductUpdateManyWithoutUserNestedInput = exports.ProductUpdateManyWithWhereWithoutUserInput = exports.ProductUpdateManyMutationInput = exports.ProductUncheckedUpdateInput = exports.ProductUncheckedUpdateWithoutUserInput = exports.ProductUncheckedUpdateManyInput = exports.ProductUncheckedUpdateManyWithoutUserInput = exports.ProductUncheckedUpdateManyWithoutUserNestedInput = exports.ProductUncheckedCreateInput = exports.ProductUncheckedCreateWithoutUserInput = exports.ProductUncheckedCreateNestedManyWithoutUserInput = exports.ProductSumOrderByAggregateInput = exports.ProductSumAggregate = exports.ProductSumAggregateInput = exports.ProductScalarWhereInput = exports.ProductScalarWhereWithAggregatesInput = exports.ProductOrderByWithRelationInput = exports.ProductOrderByWithAggregationInput = exports.ProductOrderByRelationAggregateInput = exports.ProductMinOrderByAggregateInput = exports.ProductMinAggregate = exports.ProductMinAggregateInput = exports.ProductMaxOrderByAggregateInput = exports.ProductMaxAggregate = exports.ProductMaxAggregateInput = exports.ProductListRelationFilter = exports.ProductGroupBy = exports.ProductGroupByArgs = exports.ProductCreateInput = exports.ProductCreateWithoutUserInput = exports.ProductCreateOrConnectWithoutUserInput = exports.ProductCreateNestedManyWithoutUserInput = exports.ProductCreateManyInput = exports.ProductCreateManyUserInput = exports.ProductCreateManyUserInputEnvelope = exports.ProductCountOrderByAggregateInput = exports.ProductCountAggregate = exports.ProductCountAggregateInput = exports.ProductAvgOrderByAggregateInput = exports.ProductAvgAggregate = exports.ProductAvgAggregateInput = exports.ProductAggregateArgs = void 0;
exports.UserWhereInput = exports.UserWhereUniqueInput = exports.UserUpsertWithoutProductsInput = exports.UserUpdateInput = exports.UserUpdateWithoutProductsInput = exports.UserUpdateToOneWithWhereWithoutProductsInput = exports.UserUpdateOneWithoutProductsNestedInput = exports.UserUpdateManyMutationInput = exports.UserUncheckedUpdateInput = exports.UserUncheckedUpdateWithoutProductsInput = exports.UserUncheckedUpdateManyInput = exports.UserUncheckedCreateInput = exports.UserUncheckedCreateWithoutProductsInput = exports.UserScalarWhereWithAggregatesInput = exports.UserOrderByWithRelationInput = exports.UserOrderByWithAggregationInput = exports.UserNullableRelationFilter = exports.UserMinOrderByAggregateInput = exports.UserMinAggregate = exports.UserMinAggregateInput = exports.UserMaxOrderByAggregateInput = exports.UserMaxAggregate = exports.UserMaxAggregateInput = exports.UserGroupBy = exports.UserGroupByArgs = exports.UserCreateInput = exports.UserCreateWithoutProductsInput = exports.UserCreateOrConnectWithoutProductsInput = exports.UserCreateNestedOneWithoutProductsInput = exports.UserCreateManyInput = exports.UserCount = exports.UserCountOrderByAggregateInput = exports.UserCountAggregate = exports.UserCountAggregateInput = exports.UserAggregateArgs = exports.UpsertOneUserArgs = exports.UpdateOneUserArgs = exports.UpdateManyUserArgs = exports.FindUniqueUserArgs = exports.FindUniqueUserOrThrowArgs = exports.FindManyUserArgs = exports.FindFirstUserArgs = exports.FindFirstUserOrThrowArgs = exports.DeleteOneUserArgs = exports.DeleteManyUserArgs = exports.CreateOneUserArgs = exports.CreateManyUserArgs = exports.AggregateUser = exports.UpsertOneProductArgs = exports.UpdateOneProductArgs = void 0;
exports.User = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const graphql_5 = require("@nestjs/graphql");
const graphql_6 = require("@nestjs/graphql");
const graphql_7 = require("@nestjs/graphql");
const class_transformer_1 = require("class-transformer");
var UserScalarFieldEnum;
(function (UserScalarFieldEnum) {
    UserScalarFieldEnum["id"] = "id";
    UserScalarFieldEnum["name"] = "name";
    UserScalarFieldEnum["email"] = "email";
    UserScalarFieldEnum["password"] = "password";
    UserScalarFieldEnum["createdAt"] = "createdAt";
    UserScalarFieldEnum["updatedAt"] = "updatedAt";
    UserScalarFieldEnum["gender"] = "gender";
})(UserScalarFieldEnum = exports.UserScalarFieldEnum || (exports.UserScalarFieldEnum = {}));
var ProductScalarFieldEnum;
(function (ProductScalarFieldEnum) {
    ProductScalarFieldEnum["id"] = "id";
    ProductScalarFieldEnum["name"] = "name";
    ProductScalarFieldEnum["description"] = "description";
    ProductScalarFieldEnum["price"] = "price";
    ProductScalarFieldEnum["imageName"] = "imageName";
    ProductScalarFieldEnum["imageURL"] = "imageURL";
    ProductScalarFieldEnum["createdAt"] = "createdAt";
    ProductScalarFieldEnum["updatedAt"] = "updatedAt";
    ProductScalarFieldEnum["userId"] = "userId";
})(ProductScalarFieldEnum = exports.ProductScalarFieldEnum || (exports.ProductScalarFieldEnum = {}));
var TransactionIsolationLevel;
(function (TransactionIsolationLevel) {
    TransactionIsolationLevel["ReadUncommitted"] = "ReadUncommitted";
    TransactionIsolationLevel["ReadCommitted"] = "ReadCommitted";
    TransactionIsolationLevel["RepeatableRead"] = "RepeatableRead";
    TransactionIsolationLevel["Serializable"] = "Serializable";
})(TransactionIsolationLevel = exports.TransactionIsolationLevel || (exports.TransactionIsolationLevel = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["asc"] = "asc";
    SortOrder["desc"] = "desc";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var QueryMode;
(function (QueryMode) {
    QueryMode["default"] = "default";
    QueryMode["insensitive"] = "insensitive";
})(QueryMode = exports.QueryMode || (exports.QueryMode = {}));
var NullsOrder;
(function (NullsOrder) {
    NullsOrder["first"] = "first";
    NullsOrder["last"] = "last";
})(NullsOrder = exports.NullsOrder || (exports.NullsOrder = {}));
var GenderEnum;
(function (GenderEnum) {
    GenderEnum["UNKNOWN"] = "UNKNOWN";
    GenderEnum["MALE"] = "MALE";
    GenderEnum["FEMALE"] = "FEMALE";
})(GenderEnum = exports.GenderEnum || (exports.GenderEnum = {}));
(0, graphql_6.registerEnumType)(GenderEnum, { name: 'GenderEnum', description: undefined });
(0, graphql_6.registerEnumType)(NullsOrder, { name: 'NullsOrder', description: undefined });
(0, graphql_6.registerEnumType)(QueryMode, { name: 'QueryMode', description: undefined });
(0, graphql_6.registerEnumType)(SortOrder, { name: 'SortOrder', description: undefined });
(0, graphql_6.registerEnumType)(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined });
(0, graphql_6.registerEnumType)(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum', description: undefined });
(0, graphql_6.registerEnumType)(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined });
let AffectedRows = class AffectedRows {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], AffectedRows.prototype, "count", void 0);
AffectedRows = __decorate([
    (0, graphql_2.ObjectType)()
], AffectedRows);
exports.AffectedRows = AffectedRows;
let DateTimeFieldUpdateOperationsInput = class DateTimeFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFieldUpdateOperationsInput.prototype, "set", void 0);
DateTimeFieldUpdateOperationsInput = __decorate([
    (0, graphql_4.InputType)()
], DateTimeFieldUpdateOperationsInput);
exports.DateTimeFieldUpdateOperationsInput = DateTimeFieldUpdateOperationsInput;
let DateTimeFilter = class DateTimeFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], DateTimeFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], DateTimeFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter, { nullable: true })
], DateTimeFilter.prototype, "not", void 0);
DateTimeFilter = __decorate([
    (0, graphql_4.InputType)()
], DateTimeFilter);
exports.DateTimeFilter = DateTimeFilter;
let DateTimeWithAggregatesFilter = class DateTimeWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeWithAggregatesFilter, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "_max", void 0);
DateTimeWithAggregatesFilter = __decorate([
    (0, graphql_4.InputType)()
], DateTimeWithAggregatesFilter);
exports.DateTimeWithAggregatesFilter = DateTimeWithAggregatesFilter;
let EnumGenderEnumNullableFilter = class EnumGenderEnumNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => GenderEnum, { nullable: true })
], EnumGenderEnumNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GenderEnum], { nullable: true })
], EnumGenderEnumNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GenderEnum], { nullable: true })
], EnumGenderEnumNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumGenderEnumNullableFilter, { nullable: true })
], EnumGenderEnumNullableFilter.prototype, "not", void 0);
EnumGenderEnumNullableFilter = __decorate([
    (0, graphql_4.InputType)()
], EnumGenderEnumNullableFilter);
exports.EnumGenderEnumNullableFilter = EnumGenderEnumNullableFilter;
let EnumGenderEnumNullableWithAggregatesFilter = class EnumGenderEnumNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => GenderEnum, { nullable: true })
], EnumGenderEnumNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GenderEnum], { nullable: true })
], EnumGenderEnumNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GenderEnum], { nullable: true })
], EnumGenderEnumNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumGenderEnumNullableWithAggregatesFilter, { nullable: true })
], EnumGenderEnumNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], EnumGenderEnumNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumGenderEnumNullableFilter, { nullable: true })
], EnumGenderEnumNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumGenderEnumNullableFilter, { nullable: true })
], EnumGenderEnumNullableWithAggregatesFilter.prototype, "_max", void 0);
EnumGenderEnumNullableWithAggregatesFilter = __decorate([
    (0, graphql_4.InputType)()
], EnumGenderEnumNullableWithAggregatesFilter);
exports.EnumGenderEnumNullableWithAggregatesFilter = EnumGenderEnumNullableWithAggregatesFilter;
let FloatFieldUpdateOperationsInput = class FloatFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], FloatFieldUpdateOperationsInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], FloatFieldUpdateOperationsInput.prototype, "increment", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], FloatFieldUpdateOperationsInput.prototype, "decrement", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], FloatFieldUpdateOperationsInput.prototype, "multiply", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], FloatFieldUpdateOperationsInput.prototype, "divide", void 0);
FloatFieldUpdateOperationsInput = __decorate([
    (0, graphql_4.InputType)()
], FloatFieldUpdateOperationsInput);
exports.FloatFieldUpdateOperationsInput = FloatFieldUpdateOperationsInput;
let FloatFilter = class FloatFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], FloatFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_5.Float], { nullable: true })
], FloatFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_5.Float], { nullable: true })
], FloatFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], FloatFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], FloatFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], FloatFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], FloatFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatFilter, { nullable: true })
], FloatFilter.prototype, "not", void 0);
FloatFilter = __decorate([
    (0, graphql_4.InputType)()
], FloatFilter);
exports.FloatFilter = FloatFilter;
let FloatWithAggregatesFilter = class FloatWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], FloatWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_5.Float], { nullable: true })
], FloatWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_5.Float], { nullable: true })
], FloatWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], FloatWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], FloatWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], FloatWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], FloatWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatWithAggregatesFilter, { nullable: true })
], FloatWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], FloatWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatFilter, { nullable: true })
], FloatWithAggregatesFilter.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatFilter, { nullable: true })
], FloatWithAggregatesFilter.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatFilter, { nullable: true })
], FloatWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatFilter, { nullable: true })
], FloatWithAggregatesFilter.prototype, "_max", void 0);
FloatWithAggregatesFilter = __decorate([
    (0, graphql_4.InputType)()
], FloatWithAggregatesFilter);
exports.FloatWithAggregatesFilter = FloatWithAggregatesFilter;
let IntFieldUpdateOperationsInput = class IntFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntFieldUpdateOperationsInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntFieldUpdateOperationsInput.prototype, "increment", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntFieldUpdateOperationsInput.prototype, "decrement", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntFieldUpdateOperationsInput.prototype, "multiply", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntFieldUpdateOperationsInput.prototype, "divide", void 0);
IntFieldUpdateOperationsInput = __decorate([
    (0, graphql_4.InputType)()
], IntFieldUpdateOperationsInput);
exports.IntFieldUpdateOperationsInput = IntFieldUpdateOperationsInput;
let IntFilter = class IntFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true })
], IntFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true })
], IntFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], IntFilter.prototype, "not", void 0);
IntFilter = __decorate([
    (0, graphql_4.InputType)()
], IntFilter);
exports.IntFilter = IntFilter;
let IntWithAggregatesFilter = class IntWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true })
], IntWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true })
], IntWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntWithAggregatesFilter, { nullable: true })
], IntWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], IntWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatFilter, { nullable: true })
], IntWithAggregatesFilter.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], IntWithAggregatesFilter.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], IntWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], IntWithAggregatesFilter.prototype, "_max", void 0);
IntWithAggregatesFilter = __decorate([
    (0, graphql_4.InputType)()
], IntWithAggregatesFilter);
exports.IntWithAggregatesFilter = IntWithAggregatesFilter;
let NestedDateTimeFilter = NestedDateTimeFilter_1 = class NestedDateTimeFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], NestedDateTimeFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], NestedDateTimeFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter_1, { nullable: true })
], NestedDateTimeFilter.prototype, "not", void 0);
NestedDateTimeFilter = NestedDateTimeFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedDateTimeFilter);
exports.NestedDateTimeFilter = NestedDateTimeFilter;
let NestedDateTimeWithAggregatesFilter = NestedDateTimeWithAggregatesFilter_1 = class NestedDateTimeWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeWithAggregatesFilter_1, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "_max", void 0);
NestedDateTimeWithAggregatesFilter = NestedDateTimeWithAggregatesFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedDateTimeWithAggregatesFilter);
exports.NestedDateTimeWithAggregatesFilter = NestedDateTimeWithAggregatesFilter;
let NestedEnumGenderEnumNullableFilter = NestedEnumGenderEnumNullableFilter_1 = class NestedEnumGenderEnumNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => GenderEnum, { nullable: true })
], NestedEnumGenderEnumNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GenderEnum], { nullable: true })
], NestedEnumGenderEnumNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GenderEnum], { nullable: true })
], NestedEnumGenderEnumNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumGenderEnumNullableFilter_1, { nullable: true })
], NestedEnumGenderEnumNullableFilter.prototype, "not", void 0);
NestedEnumGenderEnumNullableFilter = NestedEnumGenderEnumNullableFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedEnumGenderEnumNullableFilter);
exports.NestedEnumGenderEnumNullableFilter = NestedEnumGenderEnumNullableFilter;
let NestedEnumGenderEnumNullableWithAggregatesFilter = NestedEnumGenderEnumNullableWithAggregatesFilter_1 = class NestedEnumGenderEnumNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => GenderEnum, { nullable: true })
], NestedEnumGenderEnumNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GenderEnum], { nullable: true })
], NestedEnumGenderEnumNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GenderEnum], { nullable: true })
], NestedEnumGenderEnumNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumGenderEnumNullableWithAggregatesFilter_1, { nullable: true })
], NestedEnumGenderEnumNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], NestedEnumGenderEnumNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumGenderEnumNullableFilter, { nullable: true })
], NestedEnumGenderEnumNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumGenderEnumNullableFilter, { nullable: true })
], NestedEnumGenderEnumNullableWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumGenderEnumNullableWithAggregatesFilter = NestedEnumGenderEnumNullableWithAggregatesFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedEnumGenderEnumNullableWithAggregatesFilter);
exports.NestedEnumGenderEnumNullableWithAggregatesFilter = NestedEnumGenderEnumNullableWithAggregatesFilter;
let NestedFloatFilter = NestedFloatFilter_1 = class NestedFloatFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], NestedFloatFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_5.Float], { nullable: true })
], NestedFloatFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_5.Float], { nullable: true })
], NestedFloatFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], NestedFloatFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], NestedFloatFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], NestedFloatFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], NestedFloatFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatFilter_1, { nullable: true })
], NestedFloatFilter.prototype, "not", void 0);
NestedFloatFilter = NestedFloatFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedFloatFilter);
exports.NestedFloatFilter = NestedFloatFilter;
let NestedFloatWithAggregatesFilter = NestedFloatWithAggregatesFilter_1 = class NestedFloatWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], NestedFloatWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_5.Float], { nullable: true })
], NestedFloatWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_5.Float], { nullable: true })
], NestedFloatWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], NestedFloatWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], NestedFloatWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], NestedFloatWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], NestedFloatWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatWithAggregatesFilter_1, { nullable: true })
], NestedFloatWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedFloatWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatFilter, { nullable: true })
], NestedFloatWithAggregatesFilter.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatFilter, { nullable: true })
], NestedFloatWithAggregatesFilter.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatFilter, { nullable: true })
], NestedFloatWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatFilter, { nullable: true })
], NestedFloatWithAggregatesFilter.prototype, "_max", void 0);
NestedFloatWithAggregatesFilter = NestedFloatWithAggregatesFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedFloatWithAggregatesFilter);
exports.NestedFloatWithAggregatesFilter = NestedFloatWithAggregatesFilter;
let NestedIntFilter = NestedIntFilter_1 = class NestedIntFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true })
], NestedIntFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true })
], NestedIntFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter_1, { nullable: true })
], NestedIntFilter.prototype, "not", void 0);
NestedIntFilter = NestedIntFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedIntFilter);
exports.NestedIntFilter = NestedIntFilter;
let NestedIntNullableFilter = NestedIntNullableFilter_1 = class NestedIntNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true })
], NestedIntNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true })
], NestedIntNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntNullableFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntNullableFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntNullableFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntNullableFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter_1, { nullable: true })
], NestedIntNullableFilter.prototype, "not", void 0);
NestedIntNullableFilter = NestedIntNullableFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedIntNullableFilter);
exports.NestedIntNullableFilter = NestedIntNullableFilter;
let NestedIntWithAggregatesFilter = NestedIntWithAggregatesFilter_1 = class NestedIntWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntWithAggregatesFilter_1, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatFilter, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "_max", void 0);
NestedIntWithAggregatesFilter = NestedIntWithAggregatesFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedIntWithAggregatesFilter);
exports.NestedIntWithAggregatesFilter = NestedIntWithAggregatesFilter;
let NestedStringFilter = NestedStringFilter_1 = class NestedStringFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter_1, { nullable: true })
], NestedStringFilter.prototype, "not", void 0);
NestedStringFilter = NestedStringFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedStringFilter);
exports.NestedStringFilter = NestedStringFilter;
let NestedStringNullableFilter = NestedStringNullableFilter_1 = class NestedStringNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableFilter_1, { nullable: true })
], NestedStringNullableFilter.prototype, "not", void 0);
NestedStringNullableFilter = NestedStringNullableFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedStringNullableFilter);
exports.NestedStringNullableFilter = NestedStringNullableFilter;
let NestedStringNullableWithAggregatesFilter = NestedStringNullableWithAggregatesFilter_1 = class NestedStringNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableWithAggregatesFilter_1, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableFilter, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableFilter, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "_max", void 0);
NestedStringNullableWithAggregatesFilter = NestedStringNullableWithAggregatesFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedStringNullableWithAggregatesFilter);
exports.NestedStringNullableWithAggregatesFilter = NestedStringNullableWithAggregatesFilter;
let NestedStringWithAggregatesFilter = NestedStringWithAggregatesFilter_1 = class NestedStringWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringWithAggregatesFilter_1, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "_max", void 0);
NestedStringWithAggregatesFilter = NestedStringWithAggregatesFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedStringWithAggregatesFilter);
exports.NestedStringWithAggregatesFilter = NestedStringWithAggregatesFilter;
let NullableEnumGenderEnumFieldUpdateOperationsInput = class NullableEnumGenderEnumFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => GenderEnum, { nullable: true })
], NullableEnumGenderEnumFieldUpdateOperationsInput.prototype, "set", void 0);
NullableEnumGenderEnumFieldUpdateOperationsInput = __decorate([
    (0, graphql_4.InputType)()
], NullableEnumGenderEnumFieldUpdateOperationsInput);
exports.NullableEnumGenderEnumFieldUpdateOperationsInput = NullableEnumGenderEnumFieldUpdateOperationsInput;
let NullableStringFieldUpdateOperationsInput = class NullableStringFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NullableStringFieldUpdateOperationsInput.prototype, "set", void 0);
NullableStringFieldUpdateOperationsInput = __decorate([
    (0, graphql_4.InputType)()
], NullableStringFieldUpdateOperationsInput);
exports.NullableStringFieldUpdateOperationsInput = NullableStringFieldUpdateOperationsInput;
let SortOrderInput = class SortOrderInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: false })
], SortOrderInput.prototype, "sort", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullsOrder, { nullable: true })
], SortOrderInput.prototype, "nulls", void 0);
SortOrderInput = __decorate([
    (0, graphql_4.InputType)()
], SortOrderInput);
exports.SortOrderInput = SortOrderInput;
let StringFieldUpdateOperationsInput = class StringFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFieldUpdateOperationsInput.prototype, "set", void 0);
StringFieldUpdateOperationsInput = __decorate([
    (0, graphql_4.InputType)()
], StringFieldUpdateOperationsInput);
exports.StringFieldUpdateOperationsInput = StringFieldUpdateOperationsInput;
let StringFilter = class StringFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueryMode, { nullable: true })
], StringFilter.prototype, "mode", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter, { nullable: true })
], StringFilter.prototype, "not", void 0);
StringFilter = __decorate([
    (0, graphql_4.InputType)()
], StringFilter);
exports.StringFilter = StringFilter;
let StringNullableFilter = class StringNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueryMode, { nullable: true })
], StringNullableFilter.prototype, "mode", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableFilter, { nullable: true })
], StringNullableFilter.prototype, "not", void 0);
StringNullableFilter = __decorate([
    (0, graphql_4.InputType)()
], StringNullableFilter);
exports.StringNullableFilter = StringNullableFilter;
let StringNullableWithAggregatesFilter = class StringNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueryMode, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "mode", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableWithAggregatesFilter, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableFilter, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableFilter, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "_max", void 0);
StringNullableWithAggregatesFilter = __decorate([
    (0, graphql_4.InputType)()
], StringNullableWithAggregatesFilter);
exports.StringNullableWithAggregatesFilter = StringNullableWithAggregatesFilter;
let StringWithAggregatesFilter = class StringWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueryMode, { nullable: true })
], StringWithAggregatesFilter.prototype, "mode", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringWithAggregatesFilter, { nullable: true })
], StringWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], StringWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter, { nullable: true })
], StringWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter, { nullable: true })
], StringWithAggregatesFilter.prototype, "_max", void 0);
StringWithAggregatesFilter = __decorate([
    (0, graphql_4.InputType)()
], StringWithAggregatesFilter);
exports.StringWithAggregatesFilter = StringWithAggregatesFilter;
let AggregateProduct = class AggregateProduct {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCountAggregate, { nullable: true })
], AggregateProduct.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductAvgAggregate, { nullable: true })
], AggregateProduct.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductSumAggregate, { nullable: true })
], AggregateProduct.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductMinAggregate, { nullable: true })
], AggregateProduct.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductMaxAggregate, { nullable: true })
], AggregateProduct.prototype, "_max", void 0);
AggregateProduct = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateProduct);
exports.AggregateProduct = AggregateProduct;
let CreateManyProductArgs = class CreateManyProductArgs {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateManyInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCreateManyInput)
], CreateManyProductArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CreateManyProductArgs.prototype, "skipDuplicates", void 0);
CreateManyProductArgs = __decorate([
    (0, graphql_7.ArgsType)()
], CreateManyProductArgs);
exports.CreateManyProductArgs = CreateManyProductArgs;
let CreateOneProductArgs = class CreateOneProductArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCreateInput)
], CreateOneProductArgs.prototype, "data", void 0);
CreateOneProductArgs = __decorate([
    (0, graphql_7.ArgsType)()
], CreateOneProductArgs);
exports.CreateOneProductArgs = CreateOneProductArgs;
let DeleteManyProductArgs = class DeleteManyProductArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereInput)
], DeleteManyProductArgs.prototype, "where", void 0);
DeleteManyProductArgs = __decorate([
    (0, graphql_7.ArgsType)()
], DeleteManyProductArgs);
exports.DeleteManyProductArgs = DeleteManyProductArgs;
let DeleteOneProductArgs = class DeleteOneProductArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], DeleteOneProductArgs.prototype, "where", void 0);
DeleteOneProductArgs = __decorate([
    (0, graphql_7.ArgsType)()
], DeleteOneProductArgs);
exports.DeleteOneProductArgs = DeleteOneProductArgs;
let FindFirstProductOrThrowArgs = class FindFirstProductOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereInput)
], FindFirstProductOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductOrderByWithRelationInput], { nullable: true })
], FindFirstProductOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: true })
], FindFirstProductOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstProductOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstProductOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductScalarFieldEnum], { nullable: true })
], FindFirstProductOrThrowArgs.prototype, "distinct", void 0);
FindFirstProductOrThrowArgs = __decorate([
    (0, graphql_7.ArgsType)()
], FindFirstProductOrThrowArgs);
exports.FindFirstProductOrThrowArgs = FindFirstProductOrThrowArgs;
let FindFirstProductArgs = class FindFirstProductArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereInput)
], FindFirstProductArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductOrderByWithRelationInput], { nullable: true })
], FindFirstProductArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: true })
], FindFirstProductArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstProductArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstProductArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductScalarFieldEnum], { nullable: true })
], FindFirstProductArgs.prototype, "distinct", void 0);
FindFirstProductArgs = __decorate([
    (0, graphql_7.ArgsType)()
], FindFirstProductArgs);
exports.FindFirstProductArgs = FindFirstProductArgs;
let FindManyProductArgs = class FindManyProductArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereInput)
], FindManyProductArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductOrderByWithRelationInput], { nullable: true })
], FindManyProductArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: true })
], FindManyProductArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyProductArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyProductArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductScalarFieldEnum], { nullable: true })
], FindManyProductArgs.prototype, "distinct", void 0);
FindManyProductArgs = __decorate([
    (0, graphql_7.ArgsType)()
], FindManyProductArgs);
exports.FindManyProductArgs = FindManyProductArgs;
let FindUniqueProductOrThrowArgs = class FindUniqueProductOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], FindUniqueProductOrThrowArgs.prototype, "where", void 0);
FindUniqueProductOrThrowArgs = __decorate([
    (0, graphql_7.ArgsType)()
], FindUniqueProductOrThrowArgs);
exports.FindUniqueProductOrThrowArgs = FindUniqueProductOrThrowArgs;
let FindUniqueProductArgs = class FindUniqueProductArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], FindUniqueProductArgs.prototype, "where", void 0);
FindUniqueProductArgs = __decorate([
    (0, graphql_7.ArgsType)()
], FindUniqueProductArgs);
exports.FindUniqueProductArgs = FindUniqueProductArgs;
let ProductAggregateArgs = class ProductAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereInput)
], ProductAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductOrderByWithRelationInput], { nullable: true })
], ProductAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: true })
], ProductAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ProductAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ProductAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCountAggregateInput, { nullable: true })
], ProductAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductAvgAggregateInput, { nullable: true })
], ProductAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductSumAggregateInput, { nullable: true })
], ProductAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductMinAggregateInput, { nullable: true })
], ProductAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductMaxAggregateInput, { nullable: true })
], ProductAggregateArgs.prototype, "_max", void 0);
ProductAggregateArgs = __decorate([
    (0, graphql_7.ArgsType)()
], ProductAggregateArgs);
exports.ProductAggregateArgs = ProductAggregateArgs;
let ProductAvgAggregateInput = class ProductAvgAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductAvgAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductAvgAggregateInput.prototype, "price", void 0);
ProductAvgAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], ProductAvgAggregateInput);
exports.ProductAvgAggregateInput = ProductAvgAggregateInput;
let ProductAvgAggregate = class ProductAvgAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], ProductAvgAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], ProductAvgAggregate.prototype, "price", void 0);
ProductAvgAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], ProductAvgAggregate);
exports.ProductAvgAggregate = ProductAvgAggregate;
let ProductAvgOrderByAggregateInput = class ProductAvgOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductAvgOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductAvgOrderByAggregateInput.prototype, "price", void 0);
ProductAvgOrderByAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], ProductAvgOrderByAggregateInput);
exports.ProductAvgOrderByAggregateInput = ProductAvgOrderByAggregateInput;
let ProductCountAggregateInput = class ProductCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCountAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCountAggregateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCountAggregateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCountAggregateInput.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCountAggregateInput.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCountAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCountAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCountAggregateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCountAggregateInput.prototype, "_all", void 0);
ProductCountAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], ProductCountAggregateInput);
exports.ProductCountAggregateInput = ProductCountAggregateInput;
let ProductCountAggregate = class ProductCountAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ProductCountAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ProductCountAggregate.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ProductCountAggregate.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ProductCountAggregate.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ProductCountAggregate.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ProductCountAggregate.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ProductCountAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ProductCountAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ProductCountAggregate.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ProductCountAggregate.prototype, "_all", void 0);
ProductCountAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], ProductCountAggregate);
exports.ProductCountAggregate = ProductCountAggregate;
let ProductCountOrderByAggregateInput = class ProductCountOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCountOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCountOrderByAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCountOrderByAggregateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCountOrderByAggregateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCountOrderByAggregateInput.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCountOrderByAggregateInput.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCountOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCountOrderByAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCountOrderByAggregateInput.prototype, "userId", void 0);
ProductCountOrderByAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], ProductCountOrderByAggregateInput);
exports.ProductCountOrderByAggregateInput = ProductCountOrderByAggregateInput;
let ProductCreateManyUserInputEnvelope = class ProductCreateManyUserInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateManyUserInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCreateManyUserInput)
], ProductCreateManyUserInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
ProductCreateManyUserInputEnvelope = __decorate([
    (0, graphql_4.InputType)()
], ProductCreateManyUserInputEnvelope);
exports.ProductCreateManyUserInputEnvelope = ProductCreateManyUserInputEnvelope;
let ProductCreateManyUserInput = class ProductCreateManyUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ProductCreateManyUserInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateManyUserInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateManyUserInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: false })
], ProductCreateManyUserInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateManyUserInput.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateManyUserInput.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCreateManyUserInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCreateManyUserInput.prototype, "updatedAt", void 0);
ProductCreateManyUserInput = __decorate([
    (0, graphql_4.InputType)()
], ProductCreateManyUserInput);
exports.ProductCreateManyUserInput = ProductCreateManyUserInput;
let ProductCreateManyInput = class ProductCreateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ProductCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateManyInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateManyInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: false })
], ProductCreateManyInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateManyInput.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateManyInput.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCreateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCreateManyInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCreateManyInput.prototype, "userId", void 0);
ProductCreateManyInput = __decorate([
    (0, graphql_4.InputType)()
], ProductCreateManyInput);
exports.ProductCreateManyInput = ProductCreateManyInput;
let ProductCreateNestedManyWithoutUserInput = class ProductCreateNestedManyWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateWithoutUserInput)
], ProductCreateNestedManyWithoutUserInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateOrConnectWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateOrConnectWithoutUserInput)
], ProductCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateManyUserInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateManyUserInputEnvelope)
], ProductCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
ProductCreateNestedManyWithoutUserInput = __decorate([
    (0, graphql_4.InputType)()
], ProductCreateNestedManyWithoutUserInput);
exports.ProductCreateNestedManyWithoutUserInput = ProductCreateNestedManyWithoutUserInput;
let ProductCreateOrConnectWithoutUserInput = class ProductCreateOrConnectWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductCreateOrConnectWithoutUserInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCreateWithoutUserInput)
], ProductCreateOrConnectWithoutUserInput.prototype, "create", void 0);
ProductCreateOrConnectWithoutUserInput = __decorate([
    (0, graphql_4.InputType)()
], ProductCreateOrConnectWithoutUserInput);
exports.ProductCreateOrConnectWithoutUserInput = ProductCreateOrConnectWithoutUserInput;
let ProductCreateWithoutUserInput = class ProductCreateWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateWithoutUserInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateWithoutUserInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: false })
], ProductCreateWithoutUserInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateWithoutUserInput.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateWithoutUserInput.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCreateWithoutUserInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCreateWithoutUserInput.prototype, "updatedAt", void 0);
ProductCreateWithoutUserInput = __decorate([
    (0, graphql_4.InputType)()
], ProductCreateWithoutUserInput);
exports.ProductCreateWithoutUserInput = ProductCreateWithoutUserInput;
let ProductCreateInput = class ProductCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: false })
], ProductCreateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateInput.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateInput.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateNestedOneWithoutProductsInput, { nullable: true })
], ProductCreateInput.prototype, "user", void 0);
ProductCreateInput = __decorate([
    (0, graphql_4.InputType)()
], ProductCreateInput);
exports.ProductCreateInput = ProductCreateInput;
let ProductGroupByArgs = class ProductGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereInput)
], ProductGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductOrderByWithAggregationInput], { nullable: true })
], ProductGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductScalarFieldEnum], { nullable: false })
], ProductGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductScalarWhereWithAggregatesInput, { nullable: true })
], ProductGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ProductGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ProductGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCountAggregateInput, { nullable: true })
], ProductGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductAvgAggregateInput, { nullable: true })
], ProductGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductSumAggregateInput, { nullable: true })
], ProductGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductMinAggregateInput, { nullable: true })
], ProductGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductMaxAggregateInput, { nullable: true })
], ProductGroupByArgs.prototype, "_max", void 0);
ProductGroupByArgs = __decorate([
    (0, graphql_7.ArgsType)()
], ProductGroupByArgs);
exports.ProductGroupByArgs = ProductGroupByArgs;
let ProductGroupBy = class ProductGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ProductGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductGroupBy.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductGroupBy.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: false })
], ProductGroupBy.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductGroupBy.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductGroupBy.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ProductGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ProductGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductGroupBy.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCountAggregate, { nullable: true })
], ProductGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductAvgAggregate, { nullable: true })
], ProductGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductSumAggregate, { nullable: true })
], ProductGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductMinAggregate, { nullable: true })
], ProductGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductMaxAggregate, { nullable: true })
], ProductGroupBy.prototype, "_max", void 0);
ProductGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], ProductGroupBy);
exports.ProductGroupBy = ProductGroupBy;
let ProductListRelationFilter = class ProductListRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereInput, { nullable: true })
], ProductListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductWhereInput, { nullable: true })
], ProductListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductWhereInput, { nullable: true })
], ProductListRelationFilter.prototype, "none", void 0);
ProductListRelationFilter = __decorate([
    (0, graphql_4.InputType)()
], ProductListRelationFilter);
exports.ProductListRelationFilter = ProductListRelationFilter;
let ProductMaxAggregateInput = class ProductMaxAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMaxAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMaxAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMaxAggregateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMaxAggregateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMaxAggregateInput.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMaxAggregateInput.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMaxAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMaxAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMaxAggregateInput.prototype, "userId", void 0);
ProductMaxAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], ProductMaxAggregateInput);
exports.ProductMaxAggregateInput = ProductMaxAggregateInput;
let ProductMaxAggregate = class ProductMaxAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ProductMaxAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductMaxAggregate.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductMaxAggregate.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], ProductMaxAggregate.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductMaxAggregate.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductMaxAggregate.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductMaxAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductMaxAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductMaxAggregate.prototype, "userId", void 0);
ProductMaxAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], ProductMaxAggregate);
exports.ProductMaxAggregate = ProductMaxAggregate;
let ProductMaxOrderByAggregateInput = class ProductMaxOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMaxOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMaxOrderByAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMaxOrderByAggregateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMaxOrderByAggregateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMaxOrderByAggregateInput.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMaxOrderByAggregateInput.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMaxOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMaxOrderByAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMaxOrderByAggregateInput.prototype, "userId", void 0);
ProductMaxOrderByAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], ProductMaxOrderByAggregateInput);
exports.ProductMaxOrderByAggregateInput = ProductMaxOrderByAggregateInput;
let ProductMinAggregateInput = class ProductMinAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMinAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMinAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMinAggregateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMinAggregateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMinAggregateInput.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMinAggregateInput.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMinAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMinAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMinAggregateInput.prototype, "userId", void 0);
ProductMinAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], ProductMinAggregateInput);
exports.ProductMinAggregateInput = ProductMinAggregateInput;
let ProductMinAggregate = class ProductMinAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ProductMinAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductMinAggregate.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductMinAggregate.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], ProductMinAggregate.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductMinAggregate.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductMinAggregate.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductMinAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductMinAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductMinAggregate.prototype, "userId", void 0);
ProductMinAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], ProductMinAggregate);
exports.ProductMinAggregate = ProductMinAggregate;
let ProductMinOrderByAggregateInput = class ProductMinOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMinOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMinOrderByAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMinOrderByAggregateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMinOrderByAggregateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMinOrderByAggregateInput.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMinOrderByAggregateInput.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMinOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMinOrderByAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMinOrderByAggregateInput.prototype, "userId", void 0);
ProductMinOrderByAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], ProductMinOrderByAggregateInput);
exports.ProductMinOrderByAggregateInput = ProductMinOrderByAggregateInput;
let ProductOrderByRelationAggregateInput = class ProductOrderByRelationAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByRelationAggregateInput.prototype, "_count", void 0);
ProductOrderByRelationAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], ProductOrderByRelationAggregateInput);
exports.ProductOrderByRelationAggregateInput = ProductOrderByRelationAggregateInput;
let ProductOrderByWithAggregationInput = class ProductOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCountOrderByAggregateInput, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductAvgOrderByAggregateInput, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductMaxOrderByAggregateInput, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductMinOrderByAggregateInput, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductSumOrderByAggregateInput, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "_sum", void 0);
ProductOrderByWithAggregationInput = __decorate([
    (0, graphql_4.InputType)()
], ProductOrderByWithAggregationInput);
exports.ProductOrderByWithAggregationInput = ProductOrderByWithAggregationInput;
let ProductOrderByWithRelationInput = class ProductOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithRelationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithRelationInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithRelationInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithRelationInput.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithRelationInput.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], ProductOrderByWithRelationInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserOrderByWithRelationInput, { nullable: true })
], ProductOrderByWithRelationInput.prototype, "user", void 0);
ProductOrderByWithRelationInput = __decorate([
    (0, graphql_4.InputType)()
], ProductOrderByWithRelationInput);
exports.ProductOrderByWithRelationInput = ProductOrderByWithRelationInput;
let ProductScalarWhereWithAggregatesInput = ProductScalarWhereWithAggregatesInput_1 = class ProductScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductScalarWhereWithAggregatesInput_1], { nullable: true })
], ProductScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductScalarWhereWithAggregatesInput_1], { nullable: true })
], ProductScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductScalarWhereWithAggregatesInput_1], { nullable: true })
], ProductScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntWithAggregatesFilter, { nullable: true })
], ProductScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], ProductScalarWhereWithAggregatesInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], ProductScalarWhereWithAggregatesInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => FloatWithAggregatesFilter, { nullable: true })
], ProductScalarWhereWithAggregatesInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], ProductScalarWhereWithAggregatesInput.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], ProductScalarWhereWithAggregatesInput.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], ProductScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], ProductScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableWithAggregatesFilter, { nullable: true })
], ProductScalarWhereWithAggregatesInput.prototype, "userId", void 0);
ProductScalarWhereWithAggregatesInput = ProductScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_4.InputType)()
], ProductScalarWhereWithAggregatesInput);
exports.ProductScalarWhereWithAggregatesInput = ProductScalarWhereWithAggregatesInput;
let ProductScalarWhereInput = ProductScalarWhereInput_1 = class ProductScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductScalarWhereInput_1], { nullable: true })
], ProductScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductScalarWhereInput_1], { nullable: true })
], ProductScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductScalarWhereInput_1], { nullable: true })
], ProductScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
], ProductScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductScalarWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductScalarWhereInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => FloatFilter, { nullable: true })
], ProductScalarWhereInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductScalarWhereInput.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductScalarWhereInput.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductScalarWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], ProductScalarWhereInput.prototype, "userId", void 0);
ProductScalarWhereInput = ProductScalarWhereInput_1 = __decorate([
    (0, graphql_4.InputType)()
], ProductScalarWhereInput);
exports.ProductScalarWhereInput = ProductScalarWhereInput;
let ProductSumAggregateInput = class ProductSumAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductSumAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductSumAggregateInput.prototype, "price", void 0);
ProductSumAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], ProductSumAggregateInput);
exports.ProductSumAggregateInput = ProductSumAggregateInput;
let ProductSumAggregate = class ProductSumAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ProductSumAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true })
], ProductSumAggregate.prototype, "price", void 0);
ProductSumAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], ProductSumAggregate);
exports.ProductSumAggregate = ProductSumAggregate;
let ProductSumOrderByAggregateInput = class ProductSumOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductSumOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductSumOrderByAggregateInput.prototype, "price", void 0);
ProductSumOrderByAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], ProductSumOrderByAggregateInput);
exports.ProductSumOrderByAggregateInput = ProductSumOrderByAggregateInput;
let ProductUncheckedCreateNestedManyWithoutUserInput = class ProductUncheckedCreateNestedManyWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateWithoutUserInput)
], ProductUncheckedCreateNestedManyWithoutUserInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateOrConnectWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateOrConnectWithoutUserInput)
], ProductUncheckedCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateManyUserInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateManyUserInputEnvelope)
], ProductUncheckedCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUncheckedCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
ProductUncheckedCreateNestedManyWithoutUserInput = __decorate([
    (0, graphql_4.InputType)()
], ProductUncheckedCreateNestedManyWithoutUserInput);
exports.ProductUncheckedCreateNestedManyWithoutUserInput = ProductUncheckedCreateNestedManyWithoutUserInput;
let ProductUncheckedCreateWithoutUserInput = class ProductUncheckedCreateWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ProductUncheckedCreateWithoutUserInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductUncheckedCreateWithoutUserInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductUncheckedCreateWithoutUserInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: false })
], ProductUncheckedCreateWithoutUserInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductUncheckedCreateWithoutUserInput.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductUncheckedCreateWithoutUserInput.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductUncheckedCreateWithoutUserInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductUncheckedCreateWithoutUserInput.prototype, "updatedAt", void 0);
ProductUncheckedCreateWithoutUserInput = __decorate([
    (0, graphql_4.InputType)()
], ProductUncheckedCreateWithoutUserInput);
exports.ProductUncheckedCreateWithoutUserInput = ProductUncheckedCreateWithoutUserInput;
let ProductUncheckedCreateInput = class ProductUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ProductUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductUncheckedCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductUncheckedCreateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: false })
], ProductUncheckedCreateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductUncheckedCreateInput.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductUncheckedCreateInput.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductUncheckedCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductUncheckedCreateInput.prototype, "userId", void 0);
ProductUncheckedCreateInput = __decorate([
    (0, graphql_4.InputType)()
], ProductUncheckedCreateInput);
exports.ProductUncheckedCreateInput = ProductUncheckedCreateInput;
let ProductUncheckedUpdateManyWithoutUserNestedInput = class ProductUncheckedUpdateManyWithoutUserNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateWithoutUserInput)
], ProductUncheckedUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateOrConnectWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateOrConnectWithoutUserInput)
], ProductUncheckedUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductUpsertWithWhereUniqueWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductUpsertWithWhereUniqueWithoutUserInput)
], ProductUncheckedUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateManyUserInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateManyUserInputEnvelope)
], ProductUncheckedUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUncheckedUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUncheckedUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUncheckedUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUncheckedUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductUpdateWithWhereUniqueWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductUpdateWithWhereUniqueWithoutUserInput)
], ProductUncheckedUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductUpdateManyWithWhereWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductUpdateManyWithWhereWithoutUserInput)
], ProductUncheckedUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductScalarWhereInput)
], ProductUncheckedUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
ProductUncheckedUpdateManyWithoutUserNestedInput = __decorate([
    (0, graphql_4.InputType)()
], ProductUncheckedUpdateManyWithoutUserNestedInput);
exports.ProductUncheckedUpdateManyWithoutUserNestedInput = ProductUncheckedUpdateManyWithoutUserNestedInput;
let ProductUncheckedUpdateManyWithoutUserInput = class ProductUncheckedUpdateManyWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutUserInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutUserInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutUserInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => FloatFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutUserInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutUserInput.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutUserInput.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutUserInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutUserInput.prototype, "updatedAt", void 0);
ProductUncheckedUpdateManyWithoutUserInput = __decorate([
    (0, graphql_4.InputType)()
], ProductUncheckedUpdateManyWithoutUserInput);
exports.ProductUncheckedUpdateManyWithoutUserInput = ProductUncheckedUpdateManyWithoutUserInput;
let ProductUncheckedUpdateManyInput = class ProductUncheckedUpdateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => FloatFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyInput.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyInput.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyInput.prototype, "userId", void 0);
ProductUncheckedUpdateManyInput = __decorate([
    (0, graphql_4.InputType)()
], ProductUncheckedUpdateManyInput);
exports.ProductUncheckedUpdateManyInput = ProductUncheckedUpdateManyInput;
let ProductUncheckedUpdateWithoutUserInput = class ProductUncheckedUpdateWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutUserInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutUserInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutUserInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => FloatFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutUserInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutUserInput.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutUserInput.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutUserInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutUserInput.prototype, "updatedAt", void 0);
ProductUncheckedUpdateWithoutUserInput = __decorate([
    (0, graphql_4.InputType)()
], ProductUncheckedUpdateWithoutUserInput);
exports.ProductUncheckedUpdateWithoutUserInput = ProductUncheckedUpdateWithoutUserInput;
let ProductUncheckedUpdateInput = class ProductUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => FloatFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateInput.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateInput.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateInput.prototype, "userId", void 0);
ProductUncheckedUpdateInput = __decorate([
    (0, graphql_4.InputType)()
], ProductUncheckedUpdateInput);
exports.ProductUncheckedUpdateInput = ProductUncheckedUpdateInput;
let ProductUpdateManyMutationInput = class ProductUpdateManyMutationInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateManyMutationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateManyMutationInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => FloatFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateManyMutationInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateManyMutationInput.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateManyMutationInput.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateManyMutationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateManyMutationInput.prototype, "updatedAt", void 0);
ProductUpdateManyMutationInput = __decorate([
    (0, graphql_4.InputType)()
], ProductUpdateManyMutationInput);
exports.ProductUpdateManyMutationInput = ProductUpdateManyMutationInput;
let ProductUpdateManyWithWhereWithoutUserInput = class ProductUpdateManyWithWhereWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductScalarWhereInput)
], ProductUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductUpdateManyMutationInput)
], ProductUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
ProductUpdateManyWithWhereWithoutUserInput = __decorate([
    (0, graphql_4.InputType)()
], ProductUpdateManyWithWhereWithoutUserInput);
exports.ProductUpdateManyWithWhereWithoutUserInput = ProductUpdateManyWithWhereWithoutUserInput;
let ProductUpdateManyWithoutUserNestedInput = class ProductUpdateManyWithoutUserNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateWithoutUserInput)
], ProductUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateOrConnectWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateOrConnectWithoutUserInput)
], ProductUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductUpsertWithWhereUniqueWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductUpsertWithWhereUniqueWithoutUserInput)
], ProductUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateManyUserInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateManyUserInputEnvelope)
], ProductUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductUpdateWithWhereUniqueWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductUpdateWithWhereUniqueWithoutUserInput)
], ProductUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductUpdateManyWithWhereWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductUpdateManyWithWhereWithoutUserInput)
], ProductUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductScalarWhereInput)
], ProductUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
ProductUpdateManyWithoutUserNestedInput = __decorate([
    (0, graphql_4.InputType)()
], ProductUpdateManyWithoutUserNestedInput);
exports.ProductUpdateManyWithoutUserNestedInput = ProductUpdateManyWithoutUserNestedInput;
let ProductUpdateWithWhereUniqueWithoutUserInput = class ProductUpdateWithWhereUniqueWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductUpdateWithoutUserInput)
], ProductUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
ProductUpdateWithWhereUniqueWithoutUserInput = __decorate([
    (0, graphql_4.InputType)()
], ProductUpdateWithWhereUniqueWithoutUserInput);
exports.ProductUpdateWithWhereUniqueWithoutUserInput = ProductUpdateWithWhereUniqueWithoutUserInput;
let ProductUpdateWithoutUserInput = class ProductUpdateWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutUserInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutUserInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => FloatFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutUserInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutUserInput.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutUserInput.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutUserInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutUserInput.prototype, "updatedAt", void 0);
ProductUpdateWithoutUserInput = __decorate([
    (0, graphql_4.InputType)()
], ProductUpdateWithoutUserInput);
exports.ProductUpdateWithoutUserInput = ProductUpdateWithoutUserInput;
let ProductUpdateInput = class ProductUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => FloatFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateInput.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateInput.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpdateOneWithoutProductsNestedInput, { nullable: true })
], ProductUpdateInput.prototype, "user", void 0);
ProductUpdateInput = __decorate([
    (0, graphql_4.InputType)()
], ProductUpdateInput);
exports.ProductUpdateInput = ProductUpdateInput;
let ProductUpsertWithWhereUniqueWithoutUserInput = class ProductUpsertWithWhereUniqueWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductUpdateWithoutUserInput)
], ProductUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCreateWithoutUserInput)
], ProductUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
ProductUpsertWithWhereUniqueWithoutUserInput = __decorate([
    (0, graphql_4.InputType)()
], ProductUpsertWithWhereUniqueWithoutUserInput);
exports.ProductUpsertWithWhereUniqueWithoutUserInput = ProductUpsertWithWhereUniqueWithoutUserInput;
let ProductWhereUniqueInput = class ProductWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ProductWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereInput], { nullable: true })
], ProductWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereInput], { nullable: true })
], ProductWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereInput], { nullable: true })
], ProductWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductWhereUniqueInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductWhereUniqueInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => FloatFilter, { nullable: true })
], ProductWhereUniqueInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductWhereUniqueInput.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductWhereUniqueInput.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], ProductWhereUniqueInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserNullableRelationFilter, { nullable: true })
], ProductWhereUniqueInput.prototype, "user", void 0);
ProductWhereUniqueInput = __decorate([
    (0, graphql_4.InputType)()
], ProductWhereUniqueInput);
exports.ProductWhereUniqueInput = ProductWhereUniqueInput;
let ProductWhereInput = ProductWhereInput_1 = class ProductWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereInput_1], { nullable: true })
], ProductWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereInput_1], { nullable: true })
], ProductWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereInput_1], { nullable: true })
], ProductWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
], ProductWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductWhereInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => FloatFilter, { nullable: true })
], ProductWhereInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductWhereInput.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductWhereInput.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], ProductWhereInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserNullableRelationFilter, { nullable: true })
], ProductWhereInput.prototype, "user", void 0);
ProductWhereInput = ProductWhereInput_1 = __decorate([
    (0, graphql_4.InputType)()
], ProductWhereInput);
exports.ProductWhereInput = ProductWhereInput;
let Product = class Product {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], Product.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Product.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Product.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: false })
], Product.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Product.prototype, "imageName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Product.prototype, "imageURL", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Product.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Product.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], Product.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => User, { nullable: true })
], Product.prototype, "user", void 0);
Product = __decorate([
    (0, graphql_2.ObjectType)()
], Product);
exports.Product = Product;
let UpdateManyProductArgs = class UpdateManyProductArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductUpdateManyMutationInput)
], UpdateManyProductArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereInput)
], UpdateManyProductArgs.prototype, "where", void 0);
UpdateManyProductArgs = __decorate([
    (0, graphql_7.ArgsType)()
], UpdateManyProductArgs);
exports.UpdateManyProductArgs = UpdateManyProductArgs;
let UpdateOneProductArgs = class UpdateOneProductArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductUpdateInput)
], UpdateOneProductArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], UpdateOneProductArgs.prototype, "where", void 0);
UpdateOneProductArgs = __decorate([
    (0, graphql_7.ArgsType)()
], UpdateOneProductArgs);
exports.UpdateOneProductArgs = UpdateOneProductArgs;
let UpsertOneProductArgs = class UpsertOneProductArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], UpsertOneProductArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCreateInput)
], UpsertOneProductArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductUpdateInput)
], UpsertOneProductArgs.prototype, "update", void 0);
UpsertOneProductArgs = __decorate([
    (0, graphql_7.ArgsType)()
], UpsertOneProductArgs);
exports.UpsertOneProductArgs = UpsertOneProductArgs;
let AggregateUser = class AggregateUser {
};
__decorate([
    (0, graphql_1.Field)(() => UserCountAggregate, { nullable: true })
], AggregateUser.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMinAggregate, { nullable: true })
], AggregateUser.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMaxAggregate, { nullable: true })
], AggregateUser.prototype, "_max", void 0);
AggregateUser = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateUser);
exports.AggregateUser = AggregateUser;
let CreateManyUserArgs = class CreateManyUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => [UserCreateManyInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => UserCreateManyInput)
], CreateManyUserArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CreateManyUserArgs.prototype, "skipDuplicates", void 0);
CreateManyUserArgs = __decorate([
    (0, graphql_7.ArgsType)()
], CreateManyUserArgs);
exports.CreateManyUserArgs = CreateManyUserArgs;
let CreateOneUserArgs = class CreateOneUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserCreateInput)
], CreateOneUserArgs.prototype, "data", void 0);
CreateOneUserArgs = __decorate([
    (0, graphql_7.ArgsType)()
], CreateOneUserArgs);
exports.CreateOneUserArgs = CreateOneUserArgs;
let DeleteManyUserArgs = class DeleteManyUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], DeleteManyUserArgs.prototype, "where", void 0);
DeleteManyUserArgs = __decorate([
    (0, graphql_7.ArgsType)()
], DeleteManyUserArgs);
exports.DeleteManyUserArgs = DeleteManyUserArgs;
let DeleteOneUserArgs = class DeleteOneUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], DeleteOneUserArgs.prototype, "where", void 0);
DeleteOneUserArgs = __decorate([
    (0, graphql_7.ArgsType)()
], DeleteOneUserArgs);
exports.DeleteOneUserArgs = DeleteOneUserArgs;
let FindFirstUserOrThrowArgs = class FindFirstUserOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], FindFirstUserOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserOrderByWithRelationInput], { nullable: true })
], FindFirstUserOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true })
], FindFirstUserOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstUserOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstUserOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarFieldEnum], { nullable: true })
], FindFirstUserOrThrowArgs.prototype, "distinct", void 0);
FindFirstUserOrThrowArgs = __decorate([
    (0, graphql_7.ArgsType)()
], FindFirstUserOrThrowArgs);
exports.FindFirstUserOrThrowArgs = FindFirstUserOrThrowArgs;
let FindFirstUserArgs = class FindFirstUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], FindFirstUserArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserOrderByWithRelationInput], { nullable: true })
], FindFirstUserArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true })
], FindFirstUserArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstUserArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstUserArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarFieldEnum], { nullable: true })
], FindFirstUserArgs.prototype, "distinct", void 0);
FindFirstUserArgs = __decorate([
    (0, graphql_7.ArgsType)()
], FindFirstUserArgs);
exports.FindFirstUserArgs = FindFirstUserArgs;
let FindManyUserArgs = class FindManyUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], FindManyUserArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserOrderByWithRelationInput], { nullable: true })
], FindManyUserArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true })
], FindManyUserArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyUserArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyUserArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarFieldEnum], { nullable: true })
], FindManyUserArgs.prototype, "distinct", void 0);
FindManyUserArgs = __decorate([
    (0, graphql_7.ArgsType)()
], FindManyUserArgs);
exports.FindManyUserArgs = FindManyUserArgs;
let FindUniqueUserOrThrowArgs = class FindUniqueUserOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], FindUniqueUserOrThrowArgs.prototype, "where", void 0);
FindUniqueUserOrThrowArgs = __decorate([
    (0, graphql_7.ArgsType)()
], FindUniqueUserOrThrowArgs);
exports.FindUniqueUserOrThrowArgs = FindUniqueUserOrThrowArgs;
let FindUniqueUserArgs = class FindUniqueUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], FindUniqueUserArgs.prototype, "where", void 0);
FindUniqueUserArgs = __decorate([
    (0, graphql_7.ArgsType)()
], FindUniqueUserArgs);
exports.FindUniqueUserArgs = FindUniqueUserArgs;
let UpdateManyUserArgs = class UpdateManyUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserUpdateManyMutationInput)
], UpdateManyUserArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UpdateManyUserArgs.prototype, "where", void 0);
UpdateManyUserArgs = __decorate([
    (0, graphql_7.ArgsType)()
], UpdateManyUserArgs);
exports.UpdateManyUserArgs = UpdateManyUserArgs;
let UpdateOneUserArgs = class UpdateOneUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserUpdateInput)
], UpdateOneUserArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], UpdateOneUserArgs.prototype, "where", void 0);
UpdateOneUserArgs = __decorate([
    (0, graphql_7.ArgsType)()
], UpdateOneUserArgs);
exports.UpdateOneUserArgs = UpdateOneUserArgs;
let UpsertOneUserArgs = class UpsertOneUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], UpsertOneUserArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserCreateInput)
], UpsertOneUserArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserUpdateInput)
], UpsertOneUserArgs.prototype, "update", void 0);
UpsertOneUserArgs = __decorate([
    (0, graphql_7.ArgsType)()
], UpsertOneUserArgs);
exports.UpsertOneUserArgs = UpsertOneUserArgs;
let UserAggregateArgs = class UserAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UserAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserOrderByWithRelationInput], { nullable: true })
], UserAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true })
], UserAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], UserAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], UserAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCountAggregateInput, { nullable: true })
], UserAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMinAggregateInput, { nullable: true })
], UserAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMaxAggregateInput, { nullable: true })
], UserAggregateArgs.prototype, "_max", void 0);
UserAggregateArgs = __decorate([
    (0, graphql_7.ArgsType)()
], UserAggregateArgs);
exports.UserAggregateArgs = UserAggregateArgs;
let UserCountAggregateInput = class UserCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "_all", void 0);
UserCountAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], UserCountAggregateInput);
exports.UserCountAggregateInput = UserCountAggregateInput;
let UserCountAggregate = class UserCountAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], UserCountAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], UserCountAggregate.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], UserCountAggregate.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], UserCountAggregate.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], UserCountAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], UserCountAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], UserCountAggregate.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], UserCountAggregate.prototype, "_all", void 0);
UserCountAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], UserCountAggregate);
exports.UserCountAggregate = UserCountAggregate;
let UserCountOrderByAggregateInput = class UserCountOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "gender", void 0);
UserCountOrderByAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], UserCountOrderByAggregateInput);
exports.UserCountOrderByAggregateInput = UserCountOrderByAggregateInput;
let UserCount = class UserCount {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], UserCount.prototype, "products", void 0);
UserCount = __decorate([
    (0, graphql_2.ObjectType)()
], UserCount);
exports.UserCount = UserCount;
let UserCreateManyInput = class UserCreateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateManyInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateManyInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateManyInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateManyInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => GenderEnum, { nullable: true })
], UserCreateManyInput.prototype, "gender", void 0);
UserCreateManyInput = __decorate([
    (0, graphql_4.InputType)()
], UserCreateManyInput);
exports.UserCreateManyInput = UserCreateManyInput;
let UserCreateNestedOneWithoutProductsInput = class UserCreateNestedOneWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserCreateWithoutProductsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserCreateWithoutProductsInput)
], UserCreateNestedOneWithoutProductsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateOrConnectWithoutProductsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserCreateOrConnectWithoutProductsInput)
], UserCreateNestedOneWithoutProductsInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], UserCreateNestedOneWithoutProductsInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutProductsInput = __decorate([
    (0, graphql_4.InputType)()
], UserCreateNestedOneWithoutProductsInput);
exports.UserCreateNestedOneWithoutProductsInput = UserCreateNestedOneWithoutProductsInput;
let UserCreateOrConnectWithoutProductsInput = class UserCreateOrConnectWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], UserCreateOrConnectWithoutProductsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateWithoutProductsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserCreateWithoutProductsInput)
], UserCreateOrConnectWithoutProductsInput.prototype, "create", void 0);
UserCreateOrConnectWithoutProductsInput = __decorate([
    (0, graphql_4.InputType)()
], UserCreateOrConnectWithoutProductsInput);
exports.UserCreateOrConnectWithoutProductsInput = UserCreateOrConnectWithoutProductsInput;
let UserCreateWithoutProductsInput = class UserCreateWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateWithoutProductsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateWithoutProductsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateWithoutProductsInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateWithoutProductsInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateWithoutProductsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateWithoutProductsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => GenderEnum, { nullable: true })
], UserCreateWithoutProductsInput.prototype, "gender", void 0);
UserCreateWithoutProductsInput = __decorate([
    (0, graphql_4.InputType)()
], UserCreateWithoutProductsInput);
exports.UserCreateWithoutProductsInput = UserCreateWithoutProductsInput;
let UserCreateInput = class UserCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => GenderEnum, { nullable: true })
], UserCreateInput.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateNestedManyWithoutUserInput, { nullable: true })
], UserCreateInput.prototype, "products", void 0);
UserCreateInput = __decorate([
    (0, graphql_4.InputType)()
], UserCreateInput);
exports.UserCreateInput = UserCreateInput;
let UserGroupByArgs = class UserGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UserGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserOrderByWithAggregationInput], { nullable: true })
], UserGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarFieldEnum], { nullable: false })
], UserGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserScalarWhereWithAggregatesInput, { nullable: true })
], UserGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], UserGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], UserGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCountAggregateInput, { nullable: true })
], UserGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMinAggregateInput, { nullable: true })
], UserGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMaxAggregateInput, { nullable: true })
], UserGroupByArgs.prototype, "_max", void 0);
UserGroupByArgs = __decorate([
    (0, graphql_7.ArgsType)()
], UserGroupByArgs);
exports.UserGroupByArgs = UserGroupByArgs;
let UserGroupBy = class UserGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserGroupBy.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserGroupBy.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserGroupBy.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], UserGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], UserGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => GenderEnum, { nullable: true })
], UserGroupBy.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCountAggregate, { nullable: true })
], UserGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMinAggregate, { nullable: true })
], UserGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMaxAggregate, { nullable: true })
], UserGroupBy.prototype, "_max", void 0);
UserGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], UserGroupBy);
exports.UserGroupBy = UserGroupBy;
let UserMaxAggregateInput = class UserMaxAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "gender", void 0);
UserMaxAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], UserMaxAggregateInput);
exports.UserMaxAggregateInput = UserMaxAggregateInput;
let UserMaxAggregate = class UserMaxAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMaxAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMaxAggregate.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMaxAggregate.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMaxAggregate.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserMaxAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserMaxAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => GenderEnum, { nullable: true })
], UserMaxAggregate.prototype, "gender", void 0);
UserMaxAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], UserMaxAggregate);
exports.UserMaxAggregate = UserMaxAggregate;
let UserMaxOrderByAggregateInput = class UserMaxOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "gender", void 0);
UserMaxOrderByAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], UserMaxOrderByAggregateInput);
exports.UserMaxOrderByAggregateInput = UserMaxOrderByAggregateInput;
let UserMinAggregateInput = class UserMinAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "gender", void 0);
UserMinAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], UserMinAggregateInput);
exports.UserMinAggregateInput = UserMinAggregateInput;
let UserMinAggregate = class UserMinAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMinAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMinAggregate.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMinAggregate.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMinAggregate.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserMinAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserMinAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => GenderEnum, { nullable: true })
], UserMinAggregate.prototype, "gender", void 0);
UserMinAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], UserMinAggregate);
exports.UserMinAggregate = UserMinAggregate;
let UserMinOrderByAggregateInput = class UserMinOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "gender", void 0);
UserMinOrderByAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], UserMinOrderByAggregateInput);
exports.UserMinOrderByAggregateInput = UserMinOrderByAggregateInput;
let UserNullableRelationFilter = class UserNullableRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true })
], UserNullableRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true })
], UserNullableRelationFilter.prototype, "isNot", void 0);
UserNullableRelationFilter = __decorate([
    (0, graphql_4.InputType)()
], UserNullableRelationFilter);
exports.UserNullableRelationFilter = UserNullableRelationFilter;
let UserOrderByWithAggregationInput = class UserOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCountOrderByAggregateInput, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMaxOrderByAggregateInput, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMinOrderByAggregateInput, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "_min", void 0);
UserOrderByWithAggregationInput = __decorate([
    (0, graphql_4.InputType)()
], UserOrderByWithAggregationInput);
exports.UserOrderByWithAggregationInput = UserOrderByWithAggregationInput;
let UserOrderByWithRelationInput = class UserOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductOrderByRelationAggregateInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "products", void 0);
UserOrderByWithRelationInput = __decorate([
    (0, graphql_4.InputType)()
], UserOrderByWithRelationInput);
exports.UserOrderByWithRelationInput = UserOrderByWithRelationInput;
let UserScalarWhereWithAggregatesInput = UserScalarWhereWithAggregatesInput_1 = class UserScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [UserScalarWhereWithAggregatesInput_1], { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarWhereWithAggregatesInput_1], { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarWhereWithAggregatesInput_1], { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumGenderEnumNullableWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "gender", void 0);
UserScalarWhereWithAggregatesInput = UserScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_4.InputType)()
], UserScalarWhereWithAggregatesInput);
exports.UserScalarWhereWithAggregatesInput = UserScalarWhereWithAggregatesInput;
let UserUncheckedCreateWithoutProductsInput = class UserUncheckedCreateWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedCreateWithoutProductsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateWithoutProductsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateWithoutProductsInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateWithoutProductsInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateWithoutProductsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateWithoutProductsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => GenderEnum, { nullable: true })
], UserUncheckedCreateWithoutProductsInput.prototype, "gender", void 0);
UserUncheckedCreateWithoutProductsInput = __decorate([
    (0, graphql_4.InputType)()
], UserUncheckedCreateWithoutProductsInput);
exports.UserUncheckedCreateWithoutProductsInput = UserUncheckedCreateWithoutProductsInput;
let UserUncheckedCreateInput = class UserUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => GenderEnum, { nullable: true })
], UserUncheckedCreateInput.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUncheckedCreateNestedManyWithoutUserInput, { nullable: true })
], UserUncheckedCreateInput.prototype, "products", void 0);
UserUncheckedCreateInput = __decorate([
    (0, graphql_4.InputType)()
], UserUncheckedCreateInput);
exports.UserUncheckedCreateInput = UserUncheckedCreateInput;
let UserUncheckedUpdateManyInput = class UserUncheckedUpdateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableEnumGenderEnumFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "gender", void 0);
UserUncheckedUpdateManyInput = __decorate([
    (0, graphql_4.InputType)()
], UserUncheckedUpdateManyInput);
exports.UserUncheckedUpdateManyInput = UserUncheckedUpdateManyInput;
let UserUncheckedUpdateWithoutProductsInput = class UserUncheckedUpdateWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutProductsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutProductsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutProductsInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutProductsInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutProductsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutProductsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableEnumGenderEnumFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutProductsInput.prototype, "gender", void 0);
UserUncheckedUpdateWithoutProductsInput = __decorate([
    (0, graphql_4.InputType)()
], UserUncheckedUpdateWithoutProductsInput);
exports.UserUncheckedUpdateWithoutProductsInput = UserUncheckedUpdateWithoutProductsInput;
let UserUncheckedUpdateInput = class UserUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableEnumGenderEnumFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUncheckedUpdateManyWithoutUserNestedInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "products", void 0);
UserUncheckedUpdateInput = __decorate([
    (0, graphql_4.InputType)()
], UserUncheckedUpdateInput);
exports.UserUncheckedUpdateInput = UserUncheckedUpdateInput;
let UserUpdateManyMutationInput = class UserUpdateManyMutationInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableEnumGenderEnumFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "gender", void 0);
UserUpdateManyMutationInput = __decorate([
    (0, graphql_4.InputType)()
], UserUpdateManyMutationInput);
exports.UserUpdateManyMutationInput = UserUpdateManyMutationInput;
let UserUpdateOneWithoutProductsNestedInput = class UserUpdateOneWithoutProductsNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserCreateWithoutProductsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserCreateWithoutProductsInput)
], UserUpdateOneWithoutProductsNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateOrConnectWithoutProductsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserCreateOrConnectWithoutProductsInput)
], UserUpdateOneWithoutProductsNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpsertWithoutProductsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserUpsertWithoutProductsInput)
], UserUpdateOneWithoutProductsNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UserUpdateOneWithoutProductsNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UserUpdateOneWithoutProductsNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], UserUpdateOneWithoutProductsNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpdateToOneWithWhereWithoutProductsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserUpdateToOneWithWhereWithoutProductsInput)
], UserUpdateOneWithoutProductsNestedInput.prototype, "update", void 0);
UserUpdateOneWithoutProductsNestedInput = __decorate([
    (0, graphql_4.InputType)()
], UserUpdateOneWithoutProductsNestedInput);
exports.UserUpdateOneWithoutProductsNestedInput = UserUpdateOneWithoutProductsNestedInput;
let UserUpdateToOneWithWhereWithoutProductsInput = class UserUpdateToOneWithWhereWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UserUpdateToOneWithWhereWithoutProductsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpdateWithoutProductsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserUpdateWithoutProductsInput)
], UserUpdateToOneWithWhereWithoutProductsInput.prototype, "data", void 0);
UserUpdateToOneWithWhereWithoutProductsInput = __decorate([
    (0, graphql_4.InputType)()
], UserUpdateToOneWithWhereWithoutProductsInput);
exports.UserUpdateToOneWithWhereWithoutProductsInput = UserUpdateToOneWithWhereWithoutProductsInput;
let UserUpdateWithoutProductsInput = class UserUpdateWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutProductsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutProductsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutProductsInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutProductsInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutProductsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutProductsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableEnumGenderEnumFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutProductsInput.prototype, "gender", void 0);
UserUpdateWithoutProductsInput = __decorate([
    (0, graphql_4.InputType)()
], UserUpdateWithoutProductsInput);
exports.UserUpdateWithoutProductsInput = UserUpdateWithoutProductsInput;
let UserUpdateInput = class UserUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableEnumGenderEnumFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateManyWithoutUserNestedInput, { nullable: true })
], UserUpdateInput.prototype, "products", void 0);
UserUpdateInput = __decorate([
    (0, graphql_4.InputType)()
], UserUpdateInput);
exports.UserUpdateInput = UserUpdateInput;
let UserUpsertWithoutProductsInput = class UserUpsertWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserUpdateWithoutProductsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserUpdateWithoutProductsInput)
], UserUpsertWithoutProductsInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateWithoutProductsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserCreateWithoutProductsInput)
], UserUpsertWithoutProductsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UserUpsertWithoutProductsInput.prototype, "where", void 0);
UserUpsertWithoutProductsInput = __decorate([
    (0, graphql_4.InputType)()
], UserUpsertWithoutProductsInput);
exports.UserUpsertWithoutProductsInput = UserUpsertWithoutProductsInput;
let UserWhereUniqueInput = class UserWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserWhereUniqueInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput], { nullable: true })
], UserWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput], { nullable: true })
], UserWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput], { nullable: true })
], UserWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumGenderEnumNullableFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductListRelationFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "products", void 0);
UserWhereUniqueInput = __decorate([
    (0, graphql_4.InputType)()
], UserWhereUniqueInput);
exports.UserWhereUniqueInput = UserWhereUniqueInput;
let UserWhereInput = UserWhereInput_1 = class UserWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true })
], UserWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true })
], UserWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true })
], UserWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], UserWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], UserWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumGenderEnumNullableFilter, { nullable: true })
], UserWhereInput.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductListRelationFilter, { nullable: true })
], UserWhereInput.prototype, "products", void 0);
UserWhereInput = UserWhereInput_1 = __decorate([
    (0, graphql_4.InputType)()
], UserWhereInput);
exports.UserWhereInput = UserWhereInput;
let User = class User {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], User.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], User.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], User.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], User.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], User.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => GenderEnum, { nullable: true })
], User.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Product], { nullable: true })
], User.prototype, "products", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCount, { nullable: false })
], User.prototype, "_count", void 0);
User = __decorate([
    (0, graphql_2.ObjectType)()
], User);
exports.User = User;
//# sourceMappingURL=index.js.map