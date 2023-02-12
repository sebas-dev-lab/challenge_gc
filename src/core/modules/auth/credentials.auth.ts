// ============ TO USE LOGIN AND REGISTER ========== //
export type credentials = {
  username: string
  password?: string
}

export type authUsers = credentials & {
  id: string
  token?: string
}

export type authToken = string;