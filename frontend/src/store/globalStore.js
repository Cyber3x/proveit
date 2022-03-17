import create from 'zustand';

const useStore = create(set => ({
  currentSport: '',
  setCurrentSport: currentSport => set({ currentSport }),
}));

export { useStore };
