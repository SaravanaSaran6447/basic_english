import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UserProgress = {
  testScores: { date: string; score: number; total: number; topic: string }[];
};

export type User = {
  username: string;
  password?: string;
  q1: string;
  a1: string;
  q2: string;
  a2: string;
  progress: UserProgress;
};

export type Settings = {
  theme: 'light' | 'dark' | 'system';
  geminiKey: string;
  chatgptKey: string;
  chatProvider: 'gemini' | 'chatgpt';
};

interface AppState {
  users: Record<string, User>;
  currentUser: string | null;
  settings: Settings;
  
  // Actions
  addUser: (user: User) => void;
  updateUser: (username: string, data: Partial<User>) => void;
  setCurrentUser: (username: string | null) => void;
  changeUsername: (oldUsername: string, newUsername: string) => void;
  updateSettings: (settings: Partial<Settings>) => void;
  addTestScore: (score: { date: string; score: number; total: number; topic: string }) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      users: {},
      currentUser: null,
      settings: {
        theme: 'system',
        geminiKey: '',
        chatgptKey: '',
        chatProvider: 'gemini',
      },

      addUser: (user) => set((state) => ({ users: { ...state.users, [user.username]: user } })),
      
      updateUser: (username, data) => set((state) => ({
        users: {
          ...state.users,
          [username]: { ...state.users[username], ...data }
        }
      })),
      
      setCurrentUser: (username) => set({ currentUser: username }),
      
      changeUsername: (oldUsername, newUsername) => set((state) => {
        if (!state.users[oldUsername] || state.users[newUsername]) return state; // Don't overwrite existing
        
        const userToMove = { ...state.users[oldUsername], username: newUsername };
        const newUsers = { ...state.users };
        delete newUsers[oldUsername];
        newUsers[newUsername] = userToMove;
        
        return {
          users: newUsers,
          currentUser: state.currentUser === oldUsername ? newUsername : state.currentUser
        };
      }),
      
      updateSettings: (newSettings) => set((state) => ({
        settings: { ...state.settings, ...newSettings }
      })),
      
      addTestScore: (score) => set((state) => {
        if (!state.currentUser) return state;
        const user = state.users[state.currentUser];
        return {
          users: {
            ...state.users,
            [state.currentUser]: {
              ...user,
              progress: {
                ...user.progress,
                testScores: [...(user.progress.testScores || []), score]
              }
            }
          }
        };
      }),
    }),
    {
      name: 'magic-learn-storage', // App name changed to Magic Learn
    }
  )
);
