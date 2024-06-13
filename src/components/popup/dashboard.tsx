import { useEffect } from 'react';
import { Mentions, HashTags, ProfileData } from '@/lib/types';
import { getPostData } from '@/lib/utils/popup';
import Profile from './profile';
import MentionsBox from './mentions';
import useStore from '@/lib/store';
import HashTagsBox from './hashtags';
import CommentsBox from './comments';
import RepostsBox from './reposts';
import ReactionsBox from './reactions';
import registerCharts from '@/lib/utils/popup/chartRegister';
import ReactionsChart from './reactions-chart';

export default function Dashboard() {
  registerCharts();
  const setComments = useStore((state) => state.setComments);
  const setReposts = useStore((state) => state.setReposts);
  const setDate = useStore((state) => state.setDate);
  const setMentions = useStore((state) => state.setMentions);
  const setHashTags = useStore((state) => state.setHashTags);
  const setProfile = useStore((state) => state.setProfile);
  const setReactions = useStore((state) => state.setReactions);

  useEffect(() => {
    getPostData<number>('comments', setComments);
    getPostData<number>('reposts', setReposts);
    getPostData<string>('date', setDate);
    getPostData<Mentions>('mentions', setMentions);
    getPostData<HashTags>('hashtags', setHashTags);
    getPostData<ProfileData>('profile', setProfile);

    (async () => {
      const reactionData = await chrome.storage.local.get('reactions');
      setReactions(reactionData.reactions);
    })();
  });
  return (
    <div className="h-screen w-full items-center justify-center bg-gray-900 pt-4">
      <Profile />

      <div className="w-full h-fit my-6 bg-gray-900 flex flex-row items-center justify-center gap-12">
        <CommentsBox />
        <RepostsBox />
      </div>
      <div className="bg-gray-900 w-full h-56 flex flex-row items-center justify-center gap-12">
        <MentionsBox />
        <HashTagsBox />
      </div>
      <div className="bg-gray-900 w-full h-1/2 my-6   gap-12 px-7">
        <div className="h-full bg-gray-900 flex flex-row items-center justify-center border rounded-lg">
          <ReactionsBox />
          <ReactionsChart />
        </div>
      </div>
      <div className="pb-5 flex flex-col gap-2">
        <p className="text-sm text-gray-400">If reactions look broken or outdated, please refresh the tab</p>
        <a
          href="https://github.com/lovelindhoni/postedin"
          target="_blank"
          rel="noreferrer"
          className="block text-blue-400 text-xs underline"
        >
          github.com/lovelindhoni/postedin
        </a>
      </div>
    </div>
  );
}
