import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface TypingState {
  difficulty: 'easy' | 'medium' | 'hard';
  mode: 'timed' | 'passage';
  setDifficulty: (level: 'easy' | 'medium' | 'hard') => void;
  setMode: (mode: 'timed' | 'passage') => void;
}

export const useTypingStore = create<TypingState>()(
  persist(
    (set) => ({
      difficulty: 'medium',
      mode: 'timed',
      setDifficulty: (level) => set({ difficulty: level }),
      setMode: (mode) => set({ mode }),
    }),
    {
      name: 'typing-settings',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
