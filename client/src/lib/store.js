import { create } from "zustand";

export const useAppStore = create((set) => ({
    userInfo: undefined,
    setUserInfo: (userInfo) => set({userInfo})
}))