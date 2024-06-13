import { create } from 'zustand';
import { HashTags, PostData, ProfileData, Reactions, Mentions } from '@/lib/types';

const useStore = create<PostData>((set) => ({
  comments: 0,
  reposts: 0,
  date: '',
  reactions: {
    all: 0,
  },
  profile: {
    name: '',
    description: '',
    photo: '',
  },
  mentions: {},
  hashtags: {},
  setComments: (comments: number) => set({ comments }),
  setReposts: (reposts: number) => set({ reposts }),
  setDate: (date: string) => set({ date }),
  setReactions: (reactions: Reactions) => set({ reactions }),
  setProfile: (profile: ProfileData) => set({ profile }),
  setMentions: (mentions: Mentions) => set({ mentions }),
  setHashTags: (hashtags: HashTags) => set({ hashtags }),
}));

export default useStore;
