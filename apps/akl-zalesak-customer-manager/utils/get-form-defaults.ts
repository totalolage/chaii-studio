import { z } from "zod";

export const getDefaultValuesFromZodSchema = <Schema extends z.ZodSchema>(
  schemaArg: Schema,
): z.infer<Schema> => {
  let schema = schemaArg;
  // Unwrap refined types
  while (schema instanceof z.ZodTransformer || schema instanceof z.ZodEffects) {
    schema = schema._def.schema;
  }

  if (schema instanceof z.ZodDefault) return schema._def.defaultValue();

  // Explicit values
  if (schema instanceof z.ZodLiteral) return schema._def.value;
  if (schema instanceof z.ZodEnum) return schema._def.values[0];
  if (schema instanceof z.ZodNull) return null;
  if (schema instanceof z.ZodUndefined) return undefined;

  // Optional types
  if (schema instanceof z.ZodOptional) return undefined;
  if (schema instanceof z.ZodNullable) return null;

  // Nested types
  if (schema instanceof z.ZodObject) {
    const result: Record<string, unknown> = {};
    for (const key in schema.shape) {
      if (Object.prototype.hasOwnProperty.call(schema.shape, key)) {
        result[key] = getDefaultValuesFromZodSchema(schema.shape[key]);
      }
    }
    return result;
  }

  if (schema instanceof z.ZodUnion)
    return getDefaultValuesFromZodSchema(schema._def.options[0]);

  if (schema instanceof z.ZodIntersection)
    return getDefaultValuesFromZodSchema(schema._def.left);

  if (schema instanceof z.ZodTuple)
    return schema._def.items.map((item: z.ZodSchema) =>
      getDefaultValuesFromZodSchema(item),
    );

  // Empty-able types
  if (schema instanceof z.ZodArray) return [];
  if (schema instanceof z.ZodRecord) return {};

  // Complex types
  if (schema instanceof z.ZodPromise) return Promise.resolve();
  if (schema instanceof z.ZodDate) return new Date();
  if (schema instanceof z.ZodSet) return new Set();

  // Primitive types
  if (schema instanceof z.ZodString) return "";
  if (schema instanceof z.ZodNumber) return 0;
  if (schema instanceof z.ZodBoolean) return false;
  if (schema instanceof z.ZodFunction) return () => {};
  if (schema instanceof z.ZodBigInt) return BigInt(0);

  // Other types
  return undefined;
};
