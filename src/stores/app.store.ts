import { create } from 'zustand';

type AppStore = {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
};

export const useAppStore = create<AppStore>((set) => ({
  isLoading: false,

  setLoading: (loading) =>
    set({
      isLoading: loading,
    }),
}));