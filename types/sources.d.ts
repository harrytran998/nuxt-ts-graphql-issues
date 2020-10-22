declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.gql' {
  import { DocumentNode } from 'graphql'
  const gql: DocumentNode
  export default gql
}
