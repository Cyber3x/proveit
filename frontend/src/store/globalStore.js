import create from 'zustand';

const useStore = create(set => ({
  currentSport: '',
  setCurrentSport: currentSport => set({ currentSport }),

  user: {},
  setUser: user => set({ user }),
  clearUser: user => set({ user: {} }),
}));

export { useStore };
