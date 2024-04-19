export interface ISubject {
  id: number
  name: string
  imageSource: string
  questionCount: number
  createdAt: string
}

export interface ISubjectApiResponse {
  count: number
  next?: string | null
  previous?: string | null
  results: ISubject[]
}

export interface IAnswer {
  id: number
  questionId: number
  content: string
  isRejected: boolean
  createdAt: string
}

export interface IQuestion {
  id: number
  subjectId: number
  content: string
  like: number
  dislike: number
  createdAt: string
  answer?: IAnswer
}

export interface IQuestionsApiResponse {
  count: number
  next: string | null
  previous: string | null
  results: IQuestion[]
}
