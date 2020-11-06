import gql from 'graphql-tag'

export const userProfileQuery = gql`
  query QueryMyProfile {
    myProfile {
      id
      email
      fullName
      roles
      avatar
    }
  }
`
