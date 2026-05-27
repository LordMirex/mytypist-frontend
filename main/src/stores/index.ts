import { create } from 'zustand'
import type { Document, Template, User, PipelineStage } from '@/types'

interface UIState {
  sidebarOpen: boolean
  commandPaletteOpen: boolean
  theme: 'light' | 'dark'
  toggleSidebar: () => void
  toggleCommandPalette: () => void
  setTheme: (theme: 'light' | 'dark') => void
}

export const useUIStore = create<UIState>((set) => ({
  sidebarOpen: typeof window !== 'undefined' ? window.innerWidth >= 768 : true,
  commandPaletteOpen: false,
  theme: 'light',
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  toggleCommandPalette: () => set((s) => ({ commandPaletteOpen: !s.commandPaletteOpen })),
  setTheme: (theme) => set({ theme }),
}))

interface DocumentState {
  documents: Document[]
  selectedDocument: Document | null
  setDocuments: (docs: Document[]) => void
  selectDocument: (doc: Document | null) => void
  updateDocumentStage: (id: string, stage: PipelineStage) => void
}

export const useDocumentStore = create<DocumentState>((set) => ({
  documents: [],
  selectedDocument: null,
  setDocuments: (documents) => set({ documents }),
  selectDocument: (doc) => set({ selectedDocument: doc }),
  updateDocumentStage: (id, stage) =>
    set((s) => ({
      documents: s.documents.map((d) => (d.id === id ? { ...d, stage } : d)),
    })),
}))

interface TemplateState {
  templates: Template[]
  setTemplates: (templates: Template[]) => void
}

export const useTemplateStore = create<TemplateState>((set) => ({
  templates: [],
  setTemplates: (templates) => set({ templates }),
}))

interface AuthState {
  user: User | null
  setUser: (user: User | null) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}))
