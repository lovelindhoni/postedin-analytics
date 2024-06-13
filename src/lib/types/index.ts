type Mentions = Record<string, string>;

type HashTags = Record<string, string>;

interface ProfileData {
  name: string;
  description: string;
  photo: string;
}

interface Reactions {
  all: number;
  like?: number;
  appreciation?: number;
  empathy?: number;
  interest?: number;
  praise?: number;
}

type Reaction = 'all' | 'empathy' | 'like' | 'appreciation' | 'praise' | 'interest';

interface PostData {
  comments: number;
  reposts: number;
  date: string;
  reactions: Reactions;
  profile: ProfileData;
  mentions: Mentions;
  hashtags: HashTags;
  setComments: (comments: number) => void;
  setReposts: (reposts: number) => void;
  setDate: (date: string) => void;
  setReactions: (reactions: Reactions) => void;
  setProfile: (profile: ProfileData) => void;
  setMentions: (mentions: Mentions) => void;
  setHashTags: (hashtags: HashTags) => void;
}

export type { Mentions, HashTags, ProfileData, Reactions, Reaction, PostData };
