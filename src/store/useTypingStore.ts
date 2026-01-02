import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface TypingState {
  difficulty: 'Easy' | 'Medium' | 'Hard';
  mode: 'Timed' | 'Passage';
  setDifficulty: (level: 'Easy' | 'Medium' | 'Hard') => void;
  setMode: (mode: 'Timed' | 'Passage') => void;
}

export const useTypingStore = create<TypingState>()(
  persist(
    (set) => ({
      difficulty: 'Medium',
      mode: 'Timed',
      setDifficulty: (level) => set({ difficulty: level }),
      setMode: (mode) => set({ mode }),
    }),
    {
      name: 'typing-settings',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
