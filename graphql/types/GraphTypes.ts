// ====================================================
// GraphQL query operation: MyProfile
// ====================================================

export interface MyProfile_myProfile {
  id: string
  email: string
  fullName: string
  emailVerified: boolean
  roles: 'a' | 'b' | 'c'
  avatar: string
}

export interface MyProfile {
  myProfile: MyProfile_myProfile
}
