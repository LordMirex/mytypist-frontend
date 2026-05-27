export type PipelineStage = 'draft' | 'fidelity' | 'approval' | 'sign' | 'archive'
export type StageStatus = 'pending' | 'in-progress' | 'complete' | 'blocked' | 'failed'

export interface Document {
  id: string
  title: string
  stage: PipelineStage
  status: StageStatus
  templateId?: string
  createdAt: string
  updatedAt: string
  signers?: Signer[]
}

export interface Template {
  id: string
  name: string
  category: string
  description: string
}

export interface Signer {
  id: string
  email: string
  name: string
  signed: boolean
  signedAt?: string
}

export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'editor' | 'viewer' | 'signer'
}

export interface PipelineRun {
  id: string
  documentId: string
  stages: { name: string; status: StageStatus }[]
  progress: number
  status: StageStatus
}
