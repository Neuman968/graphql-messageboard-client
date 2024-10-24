/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    mutation addPostComment($add: AddNewCommentInput!) { \n        addComment(add: $add) {\n            id\n            text\n            authorUser {\n                id\n                name\n            }\n        }\n    }": types.AddPostCommentDocument,
    "\n    fragment PostFragment on Post {\n      id\n      text\n      authorUser {\n        id\n        name\n      }\n      comments(limit: $limit) {\n        id\n        text\n        authorUser {\n          id\n          name\n        }\n      }\n    }\n  ": types.PostFragmentFragmentDoc,
    "\n  fragment UserFragment on User {\n    id\n    name\n  }  \n  ": types.UserFragmentFragmentDoc,
    "\n    query Posts ($limit: Int!) {\n        posts {\n            ...PostFragment\n        }\n    }\n": types.PostsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation addPostComment($add: AddNewCommentInput!) { \n        addComment(add: $add) {\n            id\n            text\n            authorUser {\n                id\n                name\n            }\n        }\n    }"): (typeof documents)["\n    mutation addPostComment($add: AddNewCommentInput!) { \n        addComment(add: $add) {\n            id\n            text\n            authorUser {\n                id\n                name\n            }\n        }\n    }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment PostFragment on Post {\n      id\n      text\n      authorUser {\n        id\n        name\n      }\n      comments(limit: $limit) {\n        id\n        text\n        authorUser {\n          id\n          name\n        }\n      }\n    }\n  "): (typeof documents)["\n    fragment PostFragment on Post {\n      id\n      text\n      authorUser {\n        id\n        name\n      }\n      comments(limit: $limit) {\n        id\n        text\n        authorUser {\n          id\n          name\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserFragment on User {\n    id\n    name\n  }  \n  "): (typeof documents)["\n  fragment UserFragment on User {\n    id\n    name\n  }  \n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Posts ($limit: Int!) {\n        posts {\n            ...PostFragment\n        }\n    }\n"): (typeof documents)["\n    query Posts ($limit: Int!) {\n        posts {\n            ...PostFragment\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;