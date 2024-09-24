/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddNewCommentInput = {
  postId: Scalars['Int']['input'];
  text: Scalars['String']['input'];
};

export type AddNewPostInput = {
  text: Scalars['String']['input'];
};

export type Comment = {
  __typename?: 'Comment';
  authorUser: UserEntity;
  authorUserId: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  post: Post;
  postId: Scalars['Int']['output'];
  text: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addComment?: Maybe<Comment>;
  addPost?: Maybe<Post>;
};


export type MutationAddCommentArgs = {
  add: AddNewCommentInput;
};


export type MutationAddPostArgs = {
  add: AddNewPostInput;
};

export type Post = {
  __typename?: 'Post';
  authorUser: UserEntity;
  authorUserId: Scalars['Int']['output'];
  comments: Array<Comment>;
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
};


export type PostCommentsArgs = {
  limit: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  getComment?: Maybe<Comment>;
  getComments?: Maybe<Array<Comment>>;
  getPostComments?: Maybe<Array<Comment>>;
  getPosts?: Maybe<Array<Post>>;
  getUser?: Maybe<UserEntity>;
  getUserPosts?: Maybe<Array<Post>>;
  getUsers?: Maybe<Array<Maybe<UserEntity>>>;
};


export type QueryGetCommentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetPostCommentsArgs = {
  postId: Scalars['ID']['input'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserPostsArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type UserEntity = {
  __typename?: 'UserEntity';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type PostFragmentFragment = { __typename?: 'Post', id: string, text: string, authorUser: { __typename?: 'UserEntity', id: string, name: string }, comments: Array<{ __typename?: 'Comment', id: string, text: string, authorUser: { __typename?: 'UserEntity', id: string, name: string } }> } & { ' $fragmentName'?: 'PostFragmentFragment' };

export type GetPostsQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
}>;


export type GetPostsQuery = { __typename?: 'Query', getPosts?: Array<(
    { __typename?: 'Post' }
    & { ' $fragmentRefs'?: { 'PostFragmentFragment': PostFragmentFragment } }
  )> | null };

export const PostFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"authorUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"authorUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<PostFragmentFragment, unknown>;
export const GetPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"authorUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"authorUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetPostsQuery, GetPostsQueryVariables>;