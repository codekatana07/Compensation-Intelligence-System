
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model CompensationEntry
 * 
 */
export type CompensationEntry = $Result.DefaultSelection<Prisma.$CompensationEntryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CompanyTier: {
  FAANG: 'FAANG',
  TIER_1: 'TIER_1',
  TIER_2: 'TIER_2',
  STARTUP: 'STARTUP',
  ENTERPRISE: 'ENTERPRISE',
  UNKNOWN: 'UNKNOWN'
};

export type CompanyTier = (typeof CompanyTier)[keyof typeof CompanyTier]


export const WorkMode: {
  ONSITE: 'ONSITE',
  HYBRID: 'HYBRID',
  REMOTE: 'REMOTE'
};

export type WorkMode = (typeof WorkMode)[keyof typeof WorkMode]


export const NormalizedLevel: {
  INTERN: 'INTERN',
  ENTRY: 'ENTRY',
  MID: 'MID',
  SENIOR: 'SENIOR',
  STAFF: 'STAFF',
  PRINCIPAL: 'PRINCIPAL',
  DISTINGUISHED: 'DISTINGUISHED'
};

export type NormalizedLevel = (typeof NormalizedLevel)[keyof typeof NormalizedLevel]

}

export type CompanyTier = $Enums.CompanyTier

export const CompanyTier: typeof $Enums.CompanyTier

export type WorkMode = $Enums.WorkMode

export const WorkMode: typeof $Enums.WorkMode

export type NormalizedLevel = $Enums.NormalizedLevel

export const NormalizedLevel: typeof $Enums.NormalizedLevel

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.compensationEntry`: Exposes CRUD operations for the **CompensationEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompensationEntries
    * const compensationEntries = await prisma.compensationEntry.findMany()
    * ```
    */
  get compensationEntry(): Prisma.CompensationEntryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Company: 'Company',
    CompensationEntry: 'CompensationEntry'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "company" | "compensationEntry"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      CompensationEntry: {
        payload: Prisma.$CompensationEntryPayload<ExtArgs>
        fields: Prisma.CompensationEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompensationEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompensationEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationEntryPayload>
          }
          findFirst: {
            args: Prisma.CompensationEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompensationEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationEntryPayload>
          }
          findMany: {
            args: Prisma.CompensationEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationEntryPayload>[]
          }
          create: {
            args: Prisma.CompensationEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationEntryPayload>
          }
          createMany: {
            args: Prisma.CompensationEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompensationEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationEntryPayload>[]
          }
          delete: {
            args: Prisma.CompensationEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationEntryPayload>
          }
          update: {
            args: Prisma.CompensationEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationEntryPayload>
          }
          deleteMany: {
            args: Prisma.CompensationEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompensationEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompensationEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationEntryPayload>[]
          }
          upsert: {
            args: Prisma.CompensationEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationEntryPayload>
          }
          aggregate: {
            args: Prisma.CompensationEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompensationEntry>
          }
          groupBy: {
            args: Prisma.CompensationEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompensationEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompensationEntryCountArgs<ExtArgs>
            result: $Utils.Optional<CompensationEntryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    company?: CompanyOmit
    compensationEntry?: CompensationEntryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    compensations: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compensations?: boolean | CompanyCountOutputTypeCountCompensationsArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountCompensationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompensationEntryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    normalizedName: string | null
    slug: string | null
    domain: string | null
    tier: $Enums.CompanyTier | null
    logoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    normalizedName: string | null
    slug: string | null
    domain: string | null
    tier: $Enums.CompanyTier | null
    logoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    normalizedName: number
    slug: number
    aliases: number
    domain: number
    tier: number
    logoUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    normalizedName?: true
    slug?: true
    domain?: true
    tier?: true
    logoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    normalizedName?: true
    slug?: true
    domain?: true
    tier?: true
    logoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    normalizedName?: true
    slug?: true
    aliases?: true
    domain?: true
    tier?: true
    logoUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    normalizedName: string
    slug: string
    aliases: string[]
    domain: string | null
    tier: $Enums.CompanyTier
    logoUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    normalizedName?: boolean
    slug?: boolean
    aliases?: boolean
    domain?: boolean
    tier?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    compensations?: boolean | Company$compensationsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    normalizedName?: boolean
    slug?: boolean
    aliases?: boolean
    domain?: boolean
    tier?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    normalizedName?: boolean
    slug?: boolean
    aliases?: boolean
    domain?: boolean
    tier?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    normalizedName?: boolean
    slug?: boolean
    aliases?: boolean
    domain?: boolean
    tier?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "normalizedName" | "slug" | "aliases" | "domain" | "tier" | "logoUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compensations?: boolean | Company$compensationsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      compensations: Prisma.$CompensationEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      normalizedName: string
      slug: string
      aliases: string[]
      domain: string | null
      tier: $Enums.CompanyTier
      logoUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    compensations<T extends Company$compensationsArgs<ExtArgs> = {}>(args?: Subset<T, Company$compensationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompensationEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly normalizedName: FieldRef<"Company", 'String'>
    readonly slug: FieldRef<"Company", 'String'>
    readonly aliases: FieldRef<"Company", 'String[]'>
    readonly domain: FieldRef<"Company", 'String'>
    readonly tier: FieldRef<"Company", 'CompanyTier'>
    readonly logoUrl: FieldRef<"Company", 'String'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.compensations
   */
  export type Company$compensationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationEntry
     */
    select?: CompensationEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationEntry
     */
    omit?: CompensationEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompensationEntryInclude<ExtArgs> | null
    where?: CompensationEntryWhereInput
    orderBy?: CompensationEntryOrderByWithRelationInput | CompensationEntryOrderByWithRelationInput[]
    cursor?: CompensationEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompensationEntryScalarFieldEnum | CompensationEntryScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model CompensationEntry
   */

  export type AggregateCompensationEntry = {
    _count: CompensationEntryCountAggregateOutputType | null
    _avg: CompensationEntryAvgAggregateOutputType | null
    _sum: CompensationEntrySumAggregateOutputType | null
    _min: CompensationEntryMinAggregateOutputType | null
    _max: CompensationEntryMaxAggregateOutputType | null
  }

  export type CompensationEntryAvgAggregateOutputType = {
    levelOrder: number | null
    baseSalary: Decimal | null
    bonus: Decimal | null
    stockAnnual: Decimal | null
    totalComp: Decimal | null
    yearsExperience: number | null
    yearsAtCompany: number | null
  }

  export type CompensationEntrySumAggregateOutputType = {
    levelOrder: number | null
    baseSalary: Decimal | null
    bonus: Decimal | null
    stockAnnual: Decimal | null
    totalComp: Decimal | null
    yearsExperience: number | null
    yearsAtCompany: number | null
  }

  export type CompensationEntryMinAggregateOutputType = {
    id: string | null
    companyId: string | null
    role: string | null
    normalizedRole: string | null
    level: string | null
    normalizedLevel: $Enums.NormalizedLevel | null
    levelOrder: number | null
    city: string | null
    state: string | null
    country: string | null
    workMode: $Enums.WorkMode | null
    currency: string | null
    baseSalary: Decimal | null
    bonus: Decimal | null
    stockAnnual: Decimal | null
    totalComp: Decimal | null
    submissionHash: string | null
    yearsExperience: number | null
    yearsAtCompany: number | null
    verified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompensationEntryMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    role: string | null
    normalizedRole: string | null
    level: string | null
    normalizedLevel: $Enums.NormalizedLevel | null
    levelOrder: number | null
    city: string | null
    state: string | null
    country: string | null
    workMode: $Enums.WorkMode | null
    currency: string | null
    baseSalary: Decimal | null
    bonus: Decimal | null
    stockAnnual: Decimal | null
    totalComp: Decimal | null
    submissionHash: string | null
    yearsExperience: number | null
    yearsAtCompany: number | null
    verified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompensationEntryCountAggregateOutputType = {
    id: number
    companyId: number
    role: number
    normalizedRole: number
    level: number
    normalizedLevel: number
    levelOrder: number
    city: number
    state: number
    country: number
    workMode: number
    currency: number
    baseSalary: number
    bonus: number
    stockAnnual: number
    totalComp: number
    submissionHash: number
    yearsExperience: number
    yearsAtCompany: number
    verified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompensationEntryAvgAggregateInputType = {
    levelOrder?: true
    baseSalary?: true
    bonus?: true
    stockAnnual?: true
    totalComp?: true
    yearsExperience?: true
    yearsAtCompany?: true
  }

  export type CompensationEntrySumAggregateInputType = {
    levelOrder?: true
    baseSalary?: true
    bonus?: true
    stockAnnual?: true
    totalComp?: true
    yearsExperience?: true
    yearsAtCompany?: true
  }

  export type CompensationEntryMinAggregateInputType = {
    id?: true
    companyId?: true
    role?: true
    normalizedRole?: true
    level?: true
    normalizedLevel?: true
    levelOrder?: true
    city?: true
    state?: true
    country?: true
    workMode?: true
    currency?: true
    baseSalary?: true
    bonus?: true
    stockAnnual?: true
    totalComp?: true
    submissionHash?: true
    yearsExperience?: true
    yearsAtCompany?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompensationEntryMaxAggregateInputType = {
    id?: true
    companyId?: true
    role?: true
    normalizedRole?: true
    level?: true
    normalizedLevel?: true
    levelOrder?: true
    city?: true
    state?: true
    country?: true
    workMode?: true
    currency?: true
    baseSalary?: true
    bonus?: true
    stockAnnual?: true
    totalComp?: true
    submissionHash?: true
    yearsExperience?: true
    yearsAtCompany?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompensationEntryCountAggregateInputType = {
    id?: true
    companyId?: true
    role?: true
    normalizedRole?: true
    level?: true
    normalizedLevel?: true
    levelOrder?: true
    city?: true
    state?: true
    country?: true
    workMode?: true
    currency?: true
    baseSalary?: true
    bonus?: true
    stockAnnual?: true
    totalComp?: true
    submissionHash?: true
    yearsExperience?: true
    yearsAtCompany?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompensationEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompensationEntry to aggregate.
     */
    where?: CompensationEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompensationEntries to fetch.
     */
    orderBy?: CompensationEntryOrderByWithRelationInput | CompensationEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompensationEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompensationEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompensationEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompensationEntries
    **/
    _count?: true | CompensationEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompensationEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompensationEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompensationEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompensationEntryMaxAggregateInputType
  }

  export type GetCompensationEntryAggregateType<T extends CompensationEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateCompensationEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompensationEntry[P]>
      : GetScalarType<T[P], AggregateCompensationEntry[P]>
  }




  export type CompensationEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompensationEntryWhereInput
    orderBy?: CompensationEntryOrderByWithAggregationInput | CompensationEntryOrderByWithAggregationInput[]
    by: CompensationEntryScalarFieldEnum[] | CompensationEntryScalarFieldEnum
    having?: CompensationEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompensationEntryCountAggregateInputType | true
    _avg?: CompensationEntryAvgAggregateInputType
    _sum?: CompensationEntrySumAggregateInputType
    _min?: CompensationEntryMinAggregateInputType
    _max?: CompensationEntryMaxAggregateInputType
  }

  export type CompensationEntryGroupByOutputType = {
    id: string
    companyId: string
    role: string
    normalizedRole: string
    level: string
    normalizedLevel: $Enums.NormalizedLevel
    levelOrder: number
    city: string | null
    state: string | null
    country: string
    workMode: $Enums.WorkMode
    currency: string
    baseSalary: Decimal
    bonus: Decimal
    stockAnnual: Decimal
    totalComp: Decimal
    submissionHash: string
    yearsExperience: number | null
    yearsAtCompany: number | null
    verified: boolean
    createdAt: Date
    updatedAt: Date
    _count: CompensationEntryCountAggregateOutputType | null
    _avg: CompensationEntryAvgAggregateOutputType | null
    _sum: CompensationEntrySumAggregateOutputType | null
    _min: CompensationEntryMinAggregateOutputType | null
    _max: CompensationEntryMaxAggregateOutputType | null
  }

  type GetCompensationEntryGroupByPayload<T extends CompensationEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompensationEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompensationEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompensationEntryGroupByOutputType[P]>
            : GetScalarType<T[P], CompensationEntryGroupByOutputType[P]>
        }
      >
    >


  export type CompensationEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    role?: boolean
    normalizedRole?: boolean
    level?: boolean
    normalizedLevel?: boolean
    levelOrder?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    workMode?: boolean
    currency?: boolean
    baseSalary?: boolean
    bonus?: boolean
    stockAnnual?: boolean
    totalComp?: boolean
    submissionHash?: boolean
    yearsExperience?: boolean
    yearsAtCompany?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compensationEntry"]>

  export type CompensationEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    role?: boolean
    normalizedRole?: boolean
    level?: boolean
    normalizedLevel?: boolean
    levelOrder?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    workMode?: boolean
    currency?: boolean
    baseSalary?: boolean
    bonus?: boolean
    stockAnnual?: boolean
    totalComp?: boolean
    submissionHash?: boolean
    yearsExperience?: boolean
    yearsAtCompany?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compensationEntry"]>

  export type CompensationEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    role?: boolean
    normalizedRole?: boolean
    level?: boolean
    normalizedLevel?: boolean
    levelOrder?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    workMode?: boolean
    currency?: boolean
    baseSalary?: boolean
    bonus?: boolean
    stockAnnual?: boolean
    totalComp?: boolean
    submissionHash?: boolean
    yearsExperience?: boolean
    yearsAtCompany?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compensationEntry"]>

  export type CompensationEntrySelectScalar = {
    id?: boolean
    companyId?: boolean
    role?: boolean
    normalizedRole?: boolean
    level?: boolean
    normalizedLevel?: boolean
    levelOrder?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    workMode?: boolean
    currency?: boolean
    baseSalary?: boolean
    bonus?: boolean
    stockAnnual?: boolean
    totalComp?: boolean
    submissionHash?: boolean
    yearsExperience?: boolean
    yearsAtCompany?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompensationEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "role" | "normalizedRole" | "level" | "normalizedLevel" | "levelOrder" | "city" | "state" | "country" | "workMode" | "currency" | "baseSalary" | "bonus" | "stockAnnual" | "totalComp" | "submissionHash" | "yearsExperience" | "yearsAtCompany" | "verified" | "createdAt" | "updatedAt", ExtArgs["result"]["compensationEntry"]>
  export type CompensationEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type CompensationEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type CompensationEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $CompensationEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompensationEntry"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: string
      role: string
      normalizedRole: string
      level: string
      normalizedLevel: $Enums.NormalizedLevel
      levelOrder: number
      city: string | null
      state: string | null
      country: string
      workMode: $Enums.WorkMode
      currency: string
      baseSalary: Prisma.Decimal
      bonus: Prisma.Decimal
      stockAnnual: Prisma.Decimal
      totalComp: Prisma.Decimal
      submissionHash: string
      yearsExperience: number | null
      yearsAtCompany: number | null
      verified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["compensationEntry"]>
    composites: {}
  }

  type CompensationEntryGetPayload<S extends boolean | null | undefined | CompensationEntryDefaultArgs> = $Result.GetResult<Prisma.$CompensationEntryPayload, S>

  type CompensationEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompensationEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompensationEntryCountAggregateInputType | true
    }

  export interface CompensationEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompensationEntry'], meta: { name: 'CompensationEntry' } }
    /**
     * Find zero or one CompensationEntry that matches the filter.
     * @param {CompensationEntryFindUniqueArgs} args - Arguments to find a CompensationEntry
     * @example
     * // Get one CompensationEntry
     * const compensationEntry = await prisma.compensationEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompensationEntryFindUniqueArgs>(args: SelectSubset<T, CompensationEntryFindUniqueArgs<ExtArgs>>): Prisma__CompensationEntryClient<$Result.GetResult<Prisma.$CompensationEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompensationEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompensationEntryFindUniqueOrThrowArgs} args - Arguments to find a CompensationEntry
     * @example
     * // Get one CompensationEntry
     * const compensationEntry = await prisma.compensationEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompensationEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, CompensationEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompensationEntryClient<$Result.GetResult<Prisma.$CompensationEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompensationEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompensationEntryFindFirstArgs} args - Arguments to find a CompensationEntry
     * @example
     * // Get one CompensationEntry
     * const compensationEntry = await prisma.compensationEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompensationEntryFindFirstArgs>(args?: SelectSubset<T, CompensationEntryFindFirstArgs<ExtArgs>>): Prisma__CompensationEntryClient<$Result.GetResult<Prisma.$CompensationEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompensationEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompensationEntryFindFirstOrThrowArgs} args - Arguments to find a CompensationEntry
     * @example
     * // Get one CompensationEntry
     * const compensationEntry = await prisma.compensationEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompensationEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, CompensationEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompensationEntryClient<$Result.GetResult<Prisma.$CompensationEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompensationEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompensationEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompensationEntries
     * const compensationEntries = await prisma.compensationEntry.findMany()
     * 
     * // Get first 10 CompensationEntries
     * const compensationEntries = await prisma.compensationEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const compensationEntryWithIdOnly = await prisma.compensationEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompensationEntryFindManyArgs>(args?: SelectSubset<T, CompensationEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompensationEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompensationEntry.
     * @param {CompensationEntryCreateArgs} args - Arguments to create a CompensationEntry.
     * @example
     * // Create one CompensationEntry
     * const CompensationEntry = await prisma.compensationEntry.create({
     *   data: {
     *     // ... data to create a CompensationEntry
     *   }
     * })
     * 
     */
    create<T extends CompensationEntryCreateArgs>(args: SelectSubset<T, CompensationEntryCreateArgs<ExtArgs>>): Prisma__CompensationEntryClient<$Result.GetResult<Prisma.$CompensationEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompensationEntries.
     * @param {CompensationEntryCreateManyArgs} args - Arguments to create many CompensationEntries.
     * @example
     * // Create many CompensationEntries
     * const compensationEntry = await prisma.compensationEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompensationEntryCreateManyArgs>(args?: SelectSubset<T, CompensationEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompensationEntries and returns the data saved in the database.
     * @param {CompensationEntryCreateManyAndReturnArgs} args - Arguments to create many CompensationEntries.
     * @example
     * // Create many CompensationEntries
     * const compensationEntry = await prisma.compensationEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompensationEntries and only return the `id`
     * const compensationEntryWithIdOnly = await prisma.compensationEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompensationEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, CompensationEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompensationEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompensationEntry.
     * @param {CompensationEntryDeleteArgs} args - Arguments to delete one CompensationEntry.
     * @example
     * // Delete one CompensationEntry
     * const CompensationEntry = await prisma.compensationEntry.delete({
     *   where: {
     *     // ... filter to delete one CompensationEntry
     *   }
     * })
     * 
     */
    delete<T extends CompensationEntryDeleteArgs>(args: SelectSubset<T, CompensationEntryDeleteArgs<ExtArgs>>): Prisma__CompensationEntryClient<$Result.GetResult<Prisma.$CompensationEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompensationEntry.
     * @param {CompensationEntryUpdateArgs} args - Arguments to update one CompensationEntry.
     * @example
     * // Update one CompensationEntry
     * const compensationEntry = await prisma.compensationEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompensationEntryUpdateArgs>(args: SelectSubset<T, CompensationEntryUpdateArgs<ExtArgs>>): Prisma__CompensationEntryClient<$Result.GetResult<Prisma.$CompensationEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompensationEntries.
     * @param {CompensationEntryDeleteManyArgs} args - Arguments to filter CompensationEntries to delete.
     * @example
     * // Delete a few CompensationEntries
     * const { count } = await prisma.compensationEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompensationEntryDeleteManyArgs>(args?: SelectSubset<T, CompensationEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompensationEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompensationEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompensationEntries
     * const compensationEntry = await prisma.compensationEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompensationEntryUpdateManyArgs>(args: SelectSubset<T, CompensationEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompensationEntries and returns the data updated in the database.
     * @param {CompensationEntryUpdateManyAndReturnArgs} args - Arguments to update many CompensationEntries.
     * @example
     * // Update many CompensationEntries
     * const compensationEntry = await prisma.compensationEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompensationEntries and only return the `id`
     * const compensationEntryWithIdOnly = await prisma.compensationEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompensationEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, CompensationEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompensationEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompensationEntry.
     * @param {CompensationEntryUpsertArgs} args - Arguments to update or create a CompensationEntry.
     * @example
     * // Update or create a CompensationEntry
     * const compensationEntry = await prisma.compensationEntry.upsert({
     *   create: {
     *     // ... data to create a CompensationEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompensationEntry we want to update
     *   }
     * })
     */
    upsert<T extends CompensationEntryUpsertArgs>(args: SelectSubset<T, CompensationEntryUpsertArgs<ExtArgs>>): Prisma__CompensationEntryClient<$Result.GetResult<Prisma.$CompensationEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompensationEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompensationEntryCountArgs} args - Arguments to filter CompensationEntries to count.
     * @example
     * // Count the number of CompensationEntries
     * const count = await prisma.compensationEntry.count({
     *   where: {
     *     // ... the filter for the CompensationEntries we want to count
     *   }
     * })
    **/
    count<T extends CompensationEntryCountArgs>(
      args?: Subset<T, CompensationEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompensationEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompensationEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompensationEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompensationEntryAggregateArgs>(args: Subset<T, CompensationEntryAggregateArgs>): Prisma.PrismaPromise<GetCompensationEntryAggregateType<T>>

    /**
     * Group by CompensationEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompensationEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompensationEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompensationEntryGroupByArgs['orderBy'] }
        : { orderBy?: CompensationEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompensationEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompensationEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompensationEntry model
   */
  readonly fields: CompensationEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompensationEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompensationEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompensationEntry model
   */
  interface CompensationEntryFieldRefs {
    readonly id: FieldRef<"CompensationEntry", 'String'>
    readonly companyId: FieldRef<"CompensationEntry", 'String'>
    readonly role: FieldRef<"CompensationEntry", 'String'>
    readonly normalizedRole: FieldRef<"CompensationEntry", 'String'>
    readonly level: FieldRef<"CompensationEntry", 'String'>
    readonly normalizedLevel: FieldRef<"CompensationEntry", 'NormalizedLevel'>
    readonly levelOrder: FieldRef<"CompensationEntry", 'Int'>
    readonly city: FieldRef<"CompensationEntry", 'String'>
    readonly state: FieldRef<"CompensationEntry", 'String'>
    readonly country: FieldRef<"CompensationEntry", 'String'>
    readonly workMode: FieldRef<"CompensationEntry", 'WorkMode'>
    readonly currency: FieldRef<"CompensationEntry", 'String'>
    readonly baseSalary: FieldRef<"CompensationEntry", 'Decimal'>
    readonly bonus: FieldRef<"CompensationEntry", 'Decimal'>
    readonly stockAnnual: FieldRef<"CompensationEntry", 'Decimal'>
    readonly totalComp: FieldRef<"CompensationEntry", 'Decimal'>
    readonly submissionHash: FieldRef<"CompensationEntry", 'String'>
    readonly yearsExperience: FieldRef<"CompensationEntry", 'Int'>
    readonly yearsAtCompany: FieldRef<"CompensationEntry", 'Int'>
    readonly verified: FieldRef<"CompensationEntry", 'Boolean'>
    readonly createdAt: FieldRef<"CompensationEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"CompensationEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompensationEntry findUnique
   */
  export type CompensationEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationEntry
     */
    select?: CompensationEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationEntry
     */
    omit?: CompensationEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompensationEntryInclude<ExtArgs> | null
    /**
     * Filter, which CompensationEntry to fetch.
     */
    where: CompensationEntryWhereUniqueInput
  }

  /**
   * CompensationEntry findUniqueOrThrow
   */
  export type CompensationEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationEntry
     */
    select?: CompensationEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationEntry
     */
    omit?: CompensationEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompensationEntryInclude<ExtArgs> | null
    /**
     * Filter, which CompensationEntry to fetch.
     */
    where: CompensationEntryWhereUniqueInput
  }

  /**
   * CompensationEntry findFirst
   */
  export type CompensationEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationEntry
     */
    select?: CompensationEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationEntry
     */
    omit?: CompensationEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompensationEntryInclude<ExtArgs> | null
    /**
     * Filter, which CompensationEntry to fetch.
     */
    where?: CompensationEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompensationEntries to fetch.
     */
    orderBy?: CompensationEntryOrderByWithRelationInput | CompensationEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompensationEntries.
     */
    cursor?: CompensationEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompensationEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompensationEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompensationEntries.
     */
    distinct?: CompensationEntryScalarFieldEnum | CompensationEntryScalarFieldEnum[]
  }

  /**
   * CompensationEntry findFirstOrThrow
   */
  export type CompensationEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationEntry
     */
    select?: CompensationEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationEntry
     */
    omit?: CompensationEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompensationEntryInclude<ExtArgs> | null
    /**
     * Filter, which CompensationEntry to fetch.
     */
    where?: CompensationEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompensationEntries to fetch.
     */
    orderBy?: CompensationEntryOrderByWithRelationInput | CompensationEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompensationEntries.
     */
    cursor?: CompensationEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompensationEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompensationEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompensationEntries.
     */
    distinct?: CompensationEntryScalarFieldEnum | CompensationEntryScalarFieldEnum[]
  }

  /**
   * CompensationEntry findMany
   */
  export type CompensationEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationEntry
     */
    select?: CompensationEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationEntry
     */
    omit?: CompensationEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompensationEntryInclude<ExtArgs> | null
    /**
     * Filter, which CompensationEntries to fetch.
     */
    where?: CompensationEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompensationEntries to fetch.
     */
    orderBy?: CompensationEntryOrderByWithRelationInput | CompensationEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompensationEntries.
     */
    cursor?: CompensationEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompensationEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompensationEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompensationEntries.
     */
    distinct?: CompensationEntryScalarFieldEnum | CompensationEntryScalarFieldEnum[]
  }

  /**
   * CompensationEntry create
   */
  export type CompensationEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationEntry
     */
    select?: CompensationEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationEntry
     */
    omit?: CompensationEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompensationEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a CompensationEntry.
     */
    data: XOR<CompensationEntryCreateInput, CompensationEntryUncheckedCreateInput>
  }

  /**
   * CompensationEntry createMany
   */
  export type CompensationEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompensationEntries.
     */
    data: CompensationEntryCreateManyInput | CompensationEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompensationEntry createManyAndReturn
   */
  export type CompensationEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationEntry
     */
    select?: CompensationEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationEntry
     */
    omit?: CompensationEntryOmit<ExtArgs> | null
    /**
     * The data used to create many CompensationEntries.
     */
    data: CompensationEntryCreateManyInput | CompensationEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompensationEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompensationEntry update
   */
  export type CompensationEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationEntry
     */
    select?: CompensationEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationEntry
     */
    omit?: CompensationEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompensationEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a CompensationEntry.
     */
    data: XOR<CompensationEntryUpdateInput, CompensationEntryUncheckedUpdateInput>
    /**
     * Choose, which CompensationEntry to update.
     */
    where: CompensationEntryWhereUniqueInput
  }

  /**
   * CompensationEntry updateMany
   */
  export type CompensationEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompensationEntries.
     */
    data: XOR<CompensationEntryUpdateManyMutationInput, CompensationEntryUncheckedUpdateManyInput>
    /**
     * Filter which CompensationEntries to update
     */
    where?: CompensationEntryWhereInput
    /**
     * Limit how many CompensationEntries to update.
     */
    limit?: number
  }

  /**
   * CompensationEntry updateManyAndReturn
   */
  export type CompensationEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationEntry
     */
    select?: CompensationEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationEntry
     */
    omit?: CompensationEntryOmit<ExtArgs> | null
    /**
     * The data used to update CompensationEntries.
     */
    data: XOR<CompensationEntryUpdateManyMutationInput, CompensationEntryUncheckedUpdateManyInput>
    /**
     * Filter which CompensationEntries to update
     */
    where?: CompensationEntryWhereInput
    /**
     * Limit how many CompensationEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompensationEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompensationEntry upsert
   */
  export type CompensationEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationEntry
     */
    select?: CompensationEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationEntry
     */
    omit?: CompensationEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompensationEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the CompensationEntry to update in case it exists.
     */
    where: CompensationEntryWhereUniqueInput
    /**
     * In case the CompensationEntry found by the `where` argument doesn't exist, create a new CompensationEntry with this data.
     */
    create: XOR<CompensationEntryCreateInput, CompensationEntryUncheckedCreateInput>
    /**
     * In case the CompensationEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompensationEntryUpdateInput, CompensationEntryUncheckedUpdateInput>
  }

  /**
   * CompensationEntry delete
   */
  export type CompensationEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationEntry
     */
    select?: CompensationEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationEntry
     */
    omit?: CompensationEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompensationEntryInclude<ExtArgs> | null
    /**
     * Filter which CompensationEntry to delete.
     */
    where: CompensationEntryWhereUniqueInput
  }

  /**
   * CompensationEntry deleteMany
   */
  export type CompensationEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompensationEntries to delete
     */
    where?: CompensationEntryWhereInput
    /**
     * Limit how many CompensationEntries to delete.
     */
    limit?: number
  }

  /**
   * CompensationEntry without action
   */
  export type CompensationEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationEntry
     */
    select?: CompensationEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationEntry
     */
    omit?: CompensationEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompensationEntryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    normalizedName: 'normalizedName',
    slug: 'slug',
    aliases: 'aliases',
    domain: 'domain',
    tier: 'tier',
    logoUrl: 'logoUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const CompensationEntryScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    role: 'role',
    normalizedRole: 'normalizedRole',
    level: 'level',
    normalizedLevel: 'normalizedLevel',
    levelOrder: 'levelOrder',
    city: 'city',
    state: 'state',
    country: 'country',
    workMode: 'workMode',
    currency: 'currency',
    baseSalary: 'baseSalary',
    bonus: 'bonus',
    stockAnnual: 'stockAnnual',
    totalComp: 'totalComp',
    submissionHash: 'submissionHash',
    yearsExperience: 'yearsExperience',
    yearsAtCompany: 'yearsAtCompany',
    verified: 'verified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompensationEntryScalarFieldEnum = (typeof CompensationEntryScalarFieldEnum)[keyof typeof CompensationEntryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'CompanyTier'
   */
  export type EnumCompanyTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompanyTier'>
    


  /**
   * Reference to a field of type 'CompanyTier[]'
   */
  export type ListEnumCompanyTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompanyTier[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'NormalizedLevel'
   */
  export type EnumNormalizedLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NormalizedLevel'>
    


  /**
   * Reference to a field of type 'NormalizedLevel[]'
   */
  export type ListEnumNormalizedLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NormalizedLevel[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'WorkMode'
   */
  export type EnumWorkModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkMode'>
    


  /**
   * Reference to a field of type 'WorkMode[]'
   */
  export type ListEnumWorkModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkMode[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    normalizedName?: StringFilter<"Company"> | string
    slug?: StringFilter<"Company"> | string
    aliases?: StringNullableListFilter<"Company">
    domain?: StringNullableFilter<"Company"> | string | null
    tier?: EnumCompanyTierFilter<"Company"> | $Enums.CompanyTier
    logoUrl?: StringNullableFilter<"Company"> | string | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    compensations?: CompensationEntryListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    normalizedName?: SortOrder
    slug?: SortOrder
    aliases?: SortOrder
    domain?: SortOrderInput | SortOrder
    tier?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    compensations?: CompensationEntryOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    normalizedName?: string
    slug?: string
    domain?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    aliases?: StringNullableListFilter<"Company">
    tier?: EnumCompanyTierFilter<"Company"> | $Enums.CompanyTier
    logoUrl?: StringNullableFilter<"Company"> | string | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    compensations?: CompensationEntryListRelationFilter
  }, "id" | "normalizedName" | "slug" | "domain">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    normalizedName?: SortOrder
    slug?: SortOrder
    aliases?: SortOrder
    domain?: SortOrderInput | SortOrder
    tier?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    normalizedName?: StringWithAggregatesFilter<"Company"> | string
    slug?: StringWithAggregatesFilter<"Company"> | string
    aliases?: StringNullableListFilter<"Company">
    domain?: StringNullableWithAggregatesFilter<"Company"> | string | null
    tier?: EnumCompanyTierWithAggregatesFilter<"Company"> | $Enums.CompanyTier
    logoUrl?: StringNullableWithAggregatesFilter<"Company"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type CompensationEntryWhereInput = {
    AND?: CompensationEntryWhereInput | CompensationEntryWhereInput[]
    OR?: CompensationEntryWhereInput[]
    NOT?: CompensationEntryWhereInput | CompensationEntryWhereInput[]
    id?: StringFilter<"CompensationEntry"> | string
    companyId?: StringFilter<"CompensationEntry"> | string
    role?: StringFilter<"CompensationEntry"> | string
    normalizedRole?: StringFilter<"CompensationEntry"> | string
    level?: StringFilter<"CompensationEntry"> | string
    normalizedLevel?: EnumNormalizedLevelFilter<"CompensationEntry"> | $Enums.NormalizedLevel
    levelOrder?: IntFilter<"CompensationEntry"> | number
    city?: StringNullableFilter<"CompensationEntry"> | string | null
    state?: StringNullableFilter<"CompensationEntry"> | string | null
    country?: StringFilter<"CompensationEntry"> | string
    workMode?: EnumWorkModeFilter<"CompensationEntry"> | $Enums.WorkMode
    currency?: StringFilter<"CompensationEntry"> | string
    baseSalary?: DecimalFilter<"CompensationEntry"> | Decimal | DecimalJsLike | number | string
    bonus?: DecimalFilter<"CompensationEntry"> | Decimal | DecimalJsLike | number | string
    stockAnnual?: DecimalFilter<"CompensationEntry"> | Decimal | DecimalJsLike | number | string
    totalComp?: DecimalFilter<"CompensationEntry"> | Decimal | DecimalJsLike | number | string
    submissionHash?: StringFilter<"CompensationEntry"> | string
    yearsExperience?: IntNullableFilter<"CompensationEntry"> | number | null
    yearsAtCompany?: IntNullableFilter<"CompensationEntry"> | number | null
    verified?: BoolFilter<"CompensationEntry"> | boolean
    createdAt?: DateTimeFilter<"CompensationEntry"> | Date | string
    updatedAt?: DateTimeFilter<"CompensationEntry"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type CompensationEntryOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    role?: SortOrder
    normalizedRole?: SortOrder
    level?: SortOrder
    normalizedLevel?: SortOrder
    levelOrder?: SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrder
    workMode?: SortOrder
    currency?: SortOrder
    baseSalary?: SortOrder
    bonus?: SortOrder
    stockAnnual?: SortOrder
    totalComp?: SortOrder
    submissionHash?: SortOrder
    yearsExperience?: SortOrderInput | SortOrder
    yearsAtCompany?: SortOrderInput | SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type CompensationEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    submissionHash?: string
    AND?: CompensationEntryWhereInput | CompensationEntryWhereInput[]
    OR?: CompensationEntryWhereInput[]
    NOT?: CompensationEntryWhereInput | CompensationEntryWhereInput[]
    companyId?: StringFilter<"CompensationEntry"> | string
    role?: StringFilter<"CompensationEntry"> | string
    normalizedRole?: StringFilter<"CompensationEntry"> | string
    level?: StringFilter<"CompensationEntry"> | string
    normalizedLevel?: EnumNormalizedLevelFilter<"CompensationEntry"> | $Enums.NormalizedLevel
    levelOrder?: IntFilter<"CompensationEntry"> | number
    city?: StringNullableFilter<"CompensationEntry"> | string | null
    state?: StringNullableFilter<"CompensationEntry"> | string | null
    country?: StringFilter<"CompensationEntry"> | string
    workMode?: EnumWorkModeFilter<"CompensationEntry"> | $Enums.WorkMode
    currency?: StringFilter<"CompensationEntry"> | string
    baseSalary?: DecimalFilter<"CompensationEntry"> | Decimal | DecimalJsLike | number | string
    bonus?: DecimalFilter<"CompensationEntry"> | Decimal | DecimalJsLike | number | string
    stockAnnual?: DecimalFilter<"CompensationEntry"> | Decimal | DecimalJsLike | number | string
    totalComp?: DecimalFilter<"CompensationEntry"> | Decimal | DecimalJsLike | number | string
    yearsExperience?: IntNullableFilter<"CompensationEntry"> | number | null
    yearsAtCompany?: IntNullableFilter<"CompensationEntry"> | number | null
    verified?: BoolFilter<"CompensationEntry"> | boolean
    createdAt?: DateTimeFilter<"CompensationEntry"> | Date | string
    updatedAt?: DateTimeFilter<"CompensationEntry"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id" | "submissionHash">

  export type CompensationEntryOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    role?: SortOrder
    normalizedRole?: SortOrder
    level?: SortOrder
    normalizedLevel?: SortOrder
    levelOrder?: SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrder
    workMode?: SortOrder
    currency?: SortOrder
    baseSalary?: SortOrder
    bonus?: SortOrder
    stockAnnual?: SortOrder
    totalComp?: SortOrder
    submissionHash?: SortOrder
    yearsExperience?: SortOrderInput | SortOrder
    yearsAtCompany?: SortOrderInput | SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompensationEntryCountOrderByAggregateInput
    _avg?: CompensationEntryAvgOrderByAggregateInput
    _max?: CompensationEntryMaxOrderByAggregateInput
    _min?: CompensationEntryMinOrderByAggregateInput
    _sum?: CompensationEntrySumOrderByAggregateInput
  }

  export type CompensationEntryScalarWhereWithAggregatesInput = {
    AND?: CompensationEntryScalarWhereWithAggregatesInput | CompensationEntryScalarWhereWithAggregatesInput[]
    OR?: CompensationEntryScalarWhereWithAggregatesInput[]
    NOT?: CompensationEntryScalarWhereWithAggregatesInput | CompensationEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompensationEntry"> | string
    companyId?: StringWithAggregatesFilter<"CompensationEntry"> | string
    role?: StringWithAggregatesFilter<"CompensationEntry"> | string
    normalizedRole?: StringWithAggregatesFilter<"CompensationEntry"> | string
    level?: StringWithAggregatesFilter<"CompensationEntry"> | string
    normalizedLevel?: EnumNormalizedLevelWithAggregatesFilter<"CompensationEntry"> | $Enums.NormalizedLevel
    levelOrder?: IntWithAggregatesFilter<"CompensationEntry"> | number
    city?: StringNullableWithAggregatesFilter<"CompensationEntry"> | string | null
    state?: StringNullableWithAggregatesFilter<"CompensationEntry"> | string | null
    country?: StringWithAggregatesFilter<"CompensationEntry"> | string
    workMode?: EnumWorkModeWithAggregatesFilter<"CompensationEntry"> | $Enums.WorkMode
    currency?: StringWithAggregatesFilter<"CompensationEntry"> | string
    baseSalary?: DecimalWithAggregatesFilter<"CompensationEntry"> | Decimal | DecimalJsLike | number | string
    bonus?: DecimalWithAggregatesFilter<"CompensationEntry"> | Decimal | DecimalJsLike | number | string
    stockAnnual?: DecimalWithAggregatesFilter<"CompensationEntry"> | Decimal | DecimalJsLike | number | string
    totalComp?: DecimalWithAggregatesFilter<"CompensationEntry"> | Decimal | DecimalJsLike | number | string
    submissionHash?: StringWithAggregatesFilter<"CompensationEntry"> | string
    yearsExperience?: IntNullableWithAggregatesFilter<"CompensationEntry"> | number | null
    yearsAtCompany?: IntNullableWithAggregatesFilter<"CompensationEntry"> | number | null
    verified?: BoolWithAggregatesFilter<"CompensationEntry"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CompensationEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CompensationEntry"> | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    normalizedName: string
    slug: string
    aliases?: CompanyCreatealiasesInput | string[]
    domain?: string | null
    tier?: $Enums.CompanyTier
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    compensations?: CompensationEntryCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
    normalizedName: string
    slug: string
    aliases?: CompanyCreatealiasesInput | string[]
    domain?: string | null
    tier?: $Enums.CompanyTier
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    compensations?: CompensationEntryUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    normalizedName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    aliases?: CompanyUpdatealiasesInput | string[]
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: EnumCompanyTierFieldUpdateOperationsInput | $Enums.CompanyTier
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    compensations?: CompensationEntryUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    normalizedName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    aliases?: CompanyUpdatealiasesInput | string[]
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: EnumCompanyTierFieldUpdateOperationsInput | $Enums.CompanyTier
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    compensations?: CompensationEntryUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
    normalizedName: string
    slug: string
    aliases?: CompanyCreatealiasesInput | string[]
    domain?: string | null
    tier?: $Enums.CompanyTier
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    normalizedName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    aliases?: CompanyUpdatealiasesInput | string[]
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: EnumCompanyTierFieldUpdateOperationsInput | $Enums.CompanyTier
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    normalizedName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    aliases?: CompanyUpdatealiasesInput | string[]
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: EnumCompanyTierFieldUpdateOperationsInput | $Enums.CompanyTier
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompensationEntryCreateInput = {
    id?: string
    role: string
    normalizedRole: string
    level: string
    normalizedLevel: $Enums.NormalizedLevel
    levelOrder: number
    city?: string | null
    state?: string | null
    country?: string
    workMode?: $Enums.WorkMode
    currency?: string
    baseSalary: Decimal | DecimalJsLike | number | string
    bonus?: Decimal | DecimalJsLike | number | string
    stockAnnual?: Decimal | DecimalJsLike | number | string
    totalComp: Decimal | DecimalJsLike | number | string
    submissionHash: string
    yearsExperience?: number | null
    yearsAtCompany?: number | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutCompensationsInput
  }

  export type CompensationEntryUncheckedCreateInput = {
    id?: string
    companyId: string
    role: string
    normalizedRole: string
    level: string
    normalizedLevel: $Enums.NormalizedLevel
    levelOrder: number
    city?: string | null
    state?: string | null
    country?: string
    workMode?: $Enums.WorkMode
    currency?: string
    baseSalary: Decimal | DecimalJsLike | number | string
    bonus?: Decimal | DecimalJsLike | number | string
    stockAnnual?: Decimal | DecimalJsLike | number | string
    totalComp: Decimal | DecimalJsLike | number | string
    submissionHash: string
    yearsExperience?: number | null
    yearsAtCompany?: number | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompensationEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    normalizedRole?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    normalizedLevel?: EnumNormalizedLevelFieldUpdateOperationsInput | $Enums.NormalizedLevel
    levelOrder?: IntFieldUpdateOperationsInput | number
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    workMode?: EnumWorkModeFieldUpdateOperationsInput | $Enums.WorkMode
    currency?: StringFieldUpdateOperationsInput | string
    baseSalary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bonus?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockAnnual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalComp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    submissionHash?: StringFieldUpdateOperationsInput | string
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    yearsAtCompany?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutCompensationsNestedInput
  }

  export type CompensationEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    normalizedRole?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    normalizedLevel?: EnumNormalizedLevelFieldUpdateOperationsInput | $Enums.NormalizedLevel
    levelOrder?: IntFieldUpdateOperationsInput | number
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    workMode?: EnumWorkModeFieldUpdateOperationsInput | $Enums.WorkMode
    currency?: StringFieldUpdateOperationsInput | string
    baseSalary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bonus?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockAnnual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalComp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    submissionHash?: StringFieldUpdateOperationsInput | string
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    yearsAtCompany?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompensationEntryCreateManyInput = {
    id?: string
    companyId: string
    role: string
    normalizedRole: string
    level: string
    normalizedLevel: $Enums.NormalizedLevel
    levelOrder: number
    city?: string | null
    state?: string | null
    country?: string
    workMode?: $Enums.WorkMode
    currency?: string
    baseSalary: Decimal | DecimalJsLike | number | string
    bonus?: Decimal | DecimalJsLike | number | string
    stockAnnual?: Decimal | DecimalJsLike | number | string
    totalComp: Decimal | DecimalJsLike | number | string
    submissionHash: string
    yearsExperience?: number | null
    yearsAtCompany?: number | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompensationEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    normalizedRole?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    normalizedLevel?: EnumNormalizedLevelFieldUpdateOperationsInput | $Enums.NormalizedLevel
    levelOrder?: IntFieldUpdateOperationsInput | number
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    workMode?: EnumWorkModeFieldUpdateOperationsInput | $Enums.WorkMode
    currency?: StringFieldUpdateOperationsInput | string
    baseSalary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bonus?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockAnnual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalComp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    submissionHash?: StringFieldUpdateOperationsInput | string
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    yearsAtCompany?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompensationEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    normalizedRole?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    normalizedLevel?: EnumNormalizedLevelFieldUpdateOperationsInput | $Enums.NormalizedLevel
    levelOrder?: IntFieldUpdateOperationsInput | number
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    workMode?: EnumWorkModeFieldUpdateOperationsInput | $Enums.WorkMode
    currency?: StringFieldUpdateOperationsInput | string
    baseSalary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bonus?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockAnnual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalComp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    submissionHash?: StringFieldUpdateOperationsInput | string
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    yearsAtCompany?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumCompanyTierFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanyTier | EnumCompanyTierFieldRefInput<$PrismaModel>
    in?: $Enums.CompanyTier[] | ListEnumCompanyTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompanyTier[] | ListEnumCompanyTierFieldRefInput<$PrismaModel>
    not?: NestedEnumCompanyTierFilter<$PrismaModel> | $Enums.CompanyTier
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CompensationEntryListRelationFilter = {
    every?: CompensationEntryWhereInput
    some?: CompensationEntryWhereInput
    none?: CompensationEntryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CompensationEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    normalizedName?: SortOrder
    slug?: SortOrder
    aliases?: SortOrder
    domain?: SortOrder
    tier?: SortOrder
    logoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    normalizedName?: SortOrder
    slug?: SortOrder
    domain?: SortOrder
    tier?: SortOrder
    logoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    normalizedName?: SortOrder
    slug?: SortOrder
    domain?: SortOrder
    tier?: SortOrder
    logoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumCompanyTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanyTier | EnumCompanyTierFieldRefInput<$PrismaModel>
    in?: $Enums.CompanyTier[] | ListEnumCompanyTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompanyTier[] | ListEnumCompanyTierFieldRefInput<$PrismaModel>
    not?: NestedEnumCompanyTierWithAggregatesFilter<$PrismaModel> | $Enums.CompanyTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCompanyTierFilter<$PrismaModel>
    _max?: NestedEnumCompanyTierFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumNormalizedLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.NormalizedLevel | EnumNormalizedLevelFieldRefInput<$PrismaModel>
    in?: $Enums.NormalizedLevel[] | ListEnumNormalizedLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.NormalizedLevel[] | ListEnumNormalizedLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumNormalizedLevelFilter<$PrismaModel> | $Enums.NormalizedLevel
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumWorkModeFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkMode | EnumWorkModeFieldRefInput<$PrismaModel>
    in?: $Enums.WorkMode[] | ListEnumWorkModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkMode[] | ListEnumWorkModeFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkModeFilter<$PrismaModel> | $Enums.WorkMode
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type CompensationEntryCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    role?: SortOrder
    normalizedRole?: SortOrder
    level?: SortOrder
    normalizedLevel?: SortOrder
    levelOrder?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    workMode?: SortOrder
    currency?: SortOrder
    baseSalary?: SortOrder
    bonus?: SortOrder
    stockAnnual?: SortOrder
    totalComp?: SortOrder
    submissionHash?: SortOrder
    yearsExperience?: SortOrder
    yearsAtCompany?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompensationEntryAvgOrderByAggregateInput = {
    levelOrder?: SortOrder
    baseSalary?: SortOrder
    bonus?: SortOrder
    stockAnnual?: SortOrder
    totalComp?: SortOrder
    yearsExperience?: SortOrder
    yearsAtCompany?: SortOrder
  }

  export type CompensationEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    role?: SortOrder
    normalizedRole?: SortOrder
    level?: SortOrder
    normalizedLevel?: SortOrder
    levelOrder?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    workMode?: SortOrder
    currency?: SortOrder
    baseSalary?: SortOrder
    bonus?: SortOrder
    stockAnnual?: SortOrder
    totalComp?: SortOrder
    submissionHash?: SortOrder
    yearsExperience?: SortOrder
    yearsAtCompany?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompensationEntryMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    role?: SortOrder
    normalizedRole?: SortOrder
    level?: SortOrder
    normalizedLevel?: SortOrder
    levelOrder?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    workMode?: SortOrder
    currency?: SortOrder
    baseSalary?: SortOrder
    bonus?: SortOrder
    stockAnnual?: SortOrder
    totalComp?: SortOrder
    submissionHash?: SortOrder
    yearsExperience?: SortOrder
    yearsAtCompany?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompensationEntrySumOrderByAggregateInput = {
    levelOrder?: SortOrder
    baseSalary?: SortOrder
    bonus?: SortOrder
    stockAnnual?: SortOrder
    totalComp?: SortOrder
    yearsExperience?: SortOrder
    yearsAtCompany?: SortOrder
  }

  export type EnumNormalizedLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NormalizedLevel | EnumNormalizedLevelFieldRefInput<$PrismaModel>
    in?: $Enums.NormalizedLevel[] | ListEnumNormalizedLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.NormalizedLevel[] | ListEnumNormalizedLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumNormalizedLevelWithAggregatesFilter<$PrismaModel> | $Enums.NormalizedLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNormalizedLevelFilter<$PrismaModel>
    _max?: NestedEnumNormalizedLevelFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumWorkModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkMode | EnumWorkModeFieldRefInput<$PrismaModel>
    in?: $Enums.WorkMode[] | ListEnumWorkModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkMode[] | ListEnumWorkModeFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkModeWithAggregatesFilter<$PrismaModel> | $Enums.WorkMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkModeFilter<$PrismaModel>
    _max?: NestedEnumWorkModeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CompanyCreatealiasesInput = {
    set: string[]
  }

  export type CompensationEntryCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CompensationEntryCreateWithoutCompanyInput, CompensationEntryUncheckedCreateWithoutCompanyInput> | CompensationEntryCreateWithoutCompanyInput[] | CompensationEntryUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompensationEntryCreateOrConnectWithoutCompanyInput | CompensationEntryCreateOrConnectWithoutCompanyInput[]
    createMany?: CompensationEntryCreateManyCompanyInputEnvelope
    connect?: CompensationEntryWhereUniqueInput | CompensationEntryWhereUniqueInput[]
  }

  export type CompensationEntryUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CompensationEntryCreateWithoutCompanyInput, CompensationEntryUncheckedCreateWithoutCompanyInput> | CompensationEntryCreateWithoutCompanyInput[] | CompensationEntryUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompensationEntryCreateOrConnectWithoutCompanyInput | CompensationEntryCreateOrConnectWithoutCompanyInput[]
    createMany?: CompensationEntryCreateManyCompanyInputEnvelope
    connect?: CompensationEntryWhereUniqueInput | CompensationEntryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CompanyUpdatealiasesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumCompanyTierFieldUpdateOperationsInput = {
    set?: $Enums.CompanyTier
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CompensationEntryUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CompensationEntryCreateWithoutCompanyInput, CompensationEntryUncheckedCreateWithoutCompanyInput> | CompensationEntryCreateWithoutCompanyInput[] | CompensationEntryUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompensationEntryCreateOrConnectWithoutCompanyInput | CompensationEntryCreateOrConnectWithoutCompanyInput[]
    upsert?: CompensationEntryUpsertWithWhereUniqueWithoutCompanyInput | CompensationEntryUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CompensationEntryCreateManyCompanyInputEnvelope
    set?: CompensationEntryWhereUniqueInput | CompensationEntryWhereUniqueInput[]
    disconnect?: CompensationEntryWhereUniqueInput | CompensationEntryWhereUniqueInput[]
    delete?: CompensationEntryWhereUniqueInput | CompensationEntryWhereUniqueInput[]
    connect?: CompensationEntryWhereUniqueInput | CompensationEntryWhereUniqueInput[]
    update?: CompensationEntryUpdateWithWhereUniqueWithoutCompanyInput | CompensationEntryUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CompensationEntryUpdateManyWithWhereWithoutCompanyInput | CompensationEntryUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CompensationEntryScalarWhereInput | CompensationEntryScalarWhereInput[]
  }

  export type CompensationEntryUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CompensationEntryCreateWithoutCompanyInput, CompensationEntryUncheckedCreateWithoutCompanyInput> | CompensationEntryCreateWithoutCompanyInput[] | CompensationEntryUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompensationEntryCreateOrConnectWithoutCompanyInput | CompensationEntryCreateOrConnectWithoutCompanyInput[]
    upsert?: CompensationEntryUpsertWithWhereUniqueWithoutCompanyInput | CompensationEntryUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CompensationEntryCreateManyCompanyInputEnvelope
    set?: CompensationEntryWhereUniqueInput | CompensationEntryWhereUniqueInput[]
    disconnect?: CompensationEntryWhereUniqueInput | CompensationEntryWhereUniqueInput[]
    delete?: CompensationEntryWhereUniqueInput | CompensationEntryWhereUniqueInput[]
    connect?: CompensationEntryWhereUniqueInput | CompensationEntryWhereUniqueInput[]
    update?: CompensationEntryUpdateWithWhereUniqueWithoutCompanyInput | CompensationEntryUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CompensationEntryUpdateManyWithWhereWithoutCompanyInput | CompensationEntryUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CompensationEntryScalarWhereInput | CompensationEntryScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutCompensationsInput = {
    create?: XOR<CompanyCreateWithoutCompensationsInput, CompanyUncheckedCreateWithoutCompensationsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCompensationsInput
    connect?: CompanyWhereUniqueInput
  }

  export type EnumNormalizedLevelFieldUpdateOperationsInput = {
    set?: $Enums.NormalizedLevel
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumWorkModeFieldUpdateOperationsInput = {
    set?: $Enums.WorkMode
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CompanyUpdateOneRequiredWithoutCompensationsNestedInput = {
    create?: XOR<CompanyCreateWithoutCompensationsInput, CompanyUncheckedCreateWithoutCompensationsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCompensationsInput
    upsert?: CompanyUpsertWithoutCompensationsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutCompensationsInput, CompanyUpdateWithoutCompensationsInput>, CompanyUncheckedUpdateWithoutCompensationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumCompanyTierFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanyTier | EnumCompanyTierFieldRefInput<$PrismaModel>
    in?: $Enums.CompanyTier[] | ListEnumCompanyTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompanyTier[] | ListEnumCompanyTierFieldRefInput<$PrismaModel>
    not?: NestedEnumCompanyTierFilter<$PrismaModel> | $Enums.CompanyTier
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCompanyTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanyTier | EnumCompanyTierFieldRefInput<$PrismaModel>
    in?: $Enums.CompanyTier[] | ListEnumCompanyTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompanyTier[] | ListEnumCompanyTierFieldRefInput<$PrismaModel>
    not?: NestedEnumCompanyTierWithAggregatesFilter<$PrismaModel> | $Enums.CompanyTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCompanyTierFilter<$PrismaModel>
    _max?: NestedEnumCompanyTierFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumNormalizedLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.NormalizedLevel | EnumNormalizedLevelFieldRefInput<$PrismaModel>
    in?: $Enums.NormalizedLevel[] | ListEnumNormalizedLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.NormalizedLevel[] | ListEnumNormalizedLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumNormalizedLevelFilter<$PrismaModel> | $Enums.NormalizedLevel
  }

  export type NestedEnumWorkModeFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkMode | EnumWorkModeFieldRefInput<$PrismaModel>
    in?: $Enums.WorkMode[] | ListEnumWorkModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkMode[] | ListEnumWorkModeFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkModeFilter<$PrismaModel> | $Enums.WorkMode
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumNormalizedLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NormalizedLevel | EnumNormalizedLevelFieldRefInput<$PrismaModel>
    in?: $Enums.NormalizedLevel[] | ListEnumNormalizedLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.NormalizedLevel[] | ListEnumNormalizedLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumNormalizedLevelWithAggregatesFilter<$PrismaModel> | $Enums.NormalizedLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNormalizedLevelFilter<$PrismaModel>
    _max?: NestedEnumNormalizedLevelFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumWorkModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkMode | EnumWorkModeFieldRefInput<$PrismaModel>
    in?: $Enums.WorkMode[] | ListEnumWorkModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkMode[] | ListEnumWorkModeFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkModeWithAggregatesFilter<$PrismaModel> | $Enums.WorkMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkModeFilter<$PrismaModel>
    _max?: NestedEnumWorkModeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CompensationEntryCreateWithoutCompanyInput = {
    id?: string
    role: string
    normalizedRole: string
    level: string
    normalizedLevel: $Enums.NormalizedLevel
    levelOrder: number
    city?: string | null
    state?: string | null
    country?: string
    workMode?: $Enums.WorkMode
    currency?: string
    baseSalary: Decimal | DecimalJsLike | number | string
    bonus?: Decimal | DecimalJsLike | number | string
    stockAnnual?: Decimal | DecimalJsLike | number | string
    totalComp: Decimal | DecimalJsLike | number | string
    submissionHash: string
    yearsExperience?: number | null
    yearsAtCompany?: number | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompensationEntryUncheckedCreateWithoutCompanyInput = {
    id?: string
    role: string
    normalizedRole: string
    level: string
    normalizedLevel: $Enums.NormalizedLevel
    levelOrder: number
    city?: string | null
    state?: string | null
    country?: string
    workMode?: $Enums.WorkMode
    currency?: string
    baseSalary: Decimal | DecimalJsLike | number | string
    bonus?: Decimal | DecimalJsLike | number | string
    stockAnnual?: Decimal | DecimalJsLike | number | string
    totalComp: Decimal | DecimalJsLike | number | string
    submissionHash: string
    yearsExperience?: number | null
    yearsAtCompany?: number | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompensationEntryCreateOrConnectWithoutCompanyInput = {
    where: CompensationEntryWhereUniqueInput
    create: XOR<CompensationEntryCreateWithoutCompanyInput, CompensationEntryUncheckedCreateWithoutCompanyInput>
  }

  export type CompensationEntryCreateManyCompanyInputEnvelope = {
    data: CompensationEntryCreateManyCompanyInput | CompensationEntryCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type CompensationEntryUpsertWithWhereUniqueWithoutCompanyInput = {
    where: CompensationEntryWhereUniqueInput
    update: XOR<CompensationEntryUpdateWithoutCompanyInput, CompensationEntryUncheckedUpdateWithoutCompanyInput>
    create: XOR<CompensationEntryCreateWithoutCompanyInput, CompensationEntryUncheckedCreateWithoutCompanyInput>
  }

  export type CompensationEntryUpdateWithWhereUniqueWithoutCompanyInput = {
    where: CompensationEntryWhereUniqueInput
    data: XOR<CompensationEntryUpdateWithoutCompanyInput, CompensationEntryUncheckedUpdateWithoutCompanyInput>
  }

  export type CompensationEntryUpdateManyWithWhereWithoutCompanyInput = {
    where: CompensationEntryScalarWhereInput
    data: XOR<CompensationEntryUpdateManyMutationInput, CompensationEntryUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CompensationEntryScalarWhereInput = {
    AND?: CompensationEntryScalarWhereInput | CompensationEntryScalarWhereInput[]
    OR?: CompensationEntryScalarWhereInput[]
    NOT?: CompensationEntryScalarWhereInput | CompensationEntryScalarWhereInput[]
    id?: StringFilter<"CompensationEntry"> | string
    companyId?: StringFilter<"CompensationEntry"> | string
    role?: StringFilter<"CompensationEntry"> | string
    normalizedRole?: StringFilter<"CompensationEntry"> | string
    level?: StringFilter<"CompensationEntry"> | string
    normalizedLevel?: EnumNormalizedLevelFilter<"CompensationEntry"> | $Enums.NormalizedLevel
    levelOrder?: IntFilter<"CompensationEntry"> | number
    city?: StringNullableFilter<"CompensationEntry"> | string | null
    state?: StringNullableFilter<"CompensationEntry"> | string | null
    country?: StringFilter<"CompensationEntry"> | string
    workMode?: EnumWorkModeFilter<"CompensationEntry"> | $Enums.WorkMode
    currency?: StringFilter<"CompensationEntry"> | string
    baseSalary?: DecimalFilter<"CompensationEntry"> | Decimal | DecimalJsLike | number | string
    bonus?: DecimalFilter<"CompensationEntry"> | Decimal | DecimalJsLike | number | string
    stockAnnual?: DecimalFilter<"CompensationEntry"> | Decimal | DecimalJsLike | number | string
    totalComp?: DecimalFilter<"CompensationEntry"> | Decimal | DecimalJsLike | number | string
    submissionHash?: StringFilter<"CompensationEntry"> | string
    yearsExperience?: IntNullableFilter<"CompensationEntry"> | number | null
    yearsAtCompany?: IntNullableFilter<"CompensationEntry"> | number | null
    verified?: BoolFilter<"CompensationEntry"> | boolean
    createdAt?: DateTimeFilter<"CompensationEntry"> | Date | string
    updatedAt?: DateTimeFilter<"CompensationEntry"> | Date | string
  }

  export type CompanyCreateWithoutCompensationsInput = {
    id?: string
    name: string
    normalizedName: string
    slug: string
    aliases?: CompanyCreatealiasesInput | string[]
    domain?: string | null
    tier?: $Enums.CompanyTier
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUncheckedCreateWithoutCompensationsInput = {
    id?: string
    name: string
    normalizedName: string
    slug: string
    aliases?: CompanyCreatealiasesInput | string[]
    domain?: string | null
    tier?: $Enums.CompanyTier
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyCreateOrConnectWithoutCompensationsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutCompensationsInput, CompanyUncheckedCreateWithoutCompensationsInput>
  }

  export type CompanyUpsertWithoutCompensationsInput = {
    update: XOR<CompanyUpdateWithoutCompensationsInput, CompanyUncheckedUpdateWithoutCompensationsInput>
    create: XOR<CompanyCreateWithoutCompensationsInput, CompanyUncheckedCreateWithoutCompensationsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutCompensationsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutCompensationsInput, CompanyUncheckedUpdateWithoutCompensationsInput>
  }

  export type CompanyUpdateWithoutCompensationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    normalizedName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    aliases?: CompanyUpdatealiasesInput | string[]
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: EnumCompanyTierFieldUpdateOperationsInput | $Enums.CompanyTier
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateWithoutCompensationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    normalizedName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    aliases?: CompanyUpdatealiasesInput | string[]
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: EnumCompanyTierFieldUpdateOperationsInput | $Enums.CompanyTier
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompensationEntryCreateManyCompanyInput = {
    id?: string
    role: string
    normalizedRole: string
    level: string
    normalizedLevel: $Enums.NormalizedLevel
    levelOrder: number
    city?: string | null
    state?: string | null
    country?: string
    workMode?: $Enums.WorkMode
    currency?: string
    baseSalary: Decimal | DecimalJsLike | number | string
    bonus?: Decimal | DecimalJsLike | number | string
    stockAnnual?: Decimal | DecimalJsLike | number | string
    totalComp: Decimal | DecimalJsLike | number | string
    submissionHash: string
    yearsExperience?: number | null
    yearsAtCompany?: number | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompensationEntryUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    normalizedRole?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    normalizedLevel?: EnumNormalizedLevelFieldUpdateOperationsInput | $Enums.NormalizedLevel
    levelOrder?: IntFieldUpdateOperationsInput | number
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    workMode?: EnumWorkModeFieldUpdateOperationsInput | $Enums.WorkMode
    currency?: StringFieldUpdateOperationsInput | string
    baseSalary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bonus?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockAnnual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalComp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    submissionHash?: StringFieldUpdateOperationsInput | string
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    yearsAtCompany?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompensationEntryUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    normalizedRole?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    normalizedLevel?: EnumNormalizedLevelFieldUpdateOperationsInput | $Enums.NormalizedLevel
    levelOrder?: IntFieldUpdateOperationsInput | number
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    workMode?: EnumWorkModeFieldUpdateOperationsInput | $Enums.WorkMode
    currency?: StringFieldUpdateOperationsInput | string
    baseSalary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bonus?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockAnnual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalComp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    submissionHash?: StringFieldUpdateOperationsInput | string
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    yearsAtCompany?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompensationEntryUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    normalizedRole?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    normalizedLevel?: EnumNormalizedLevelFieldUpdateOperationsInput | $Enums.NormalizedLevel
    levelOrder?: IntFieldUpdateOperationsInput | number
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    workMode?: EnumWorkModeFieldUpdateOperationsInput | $Enums.WorkMode
    currency?: StringFieldUpdateOperationsInput | string
    baseSalary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bonus?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockAnnual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalComp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    submissionHash?: StringFieldUpdateOperationsInput | string
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    yearsAtCompany?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}