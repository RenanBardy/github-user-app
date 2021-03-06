export type TUser = {
  login: string
  avatar_url: string
}

export enum TResponseStatus { 
  done = 'DONE',
  searching = 'SEARCHING',
  notFound = 'NOT_FOUND',
  error = 'ERROR',
}

export type TUserResponse = {
  total: number | null
  status: TResponseStatus
  list: TUser[]
  error_message?: string
}