import useStore from '@/lib/store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HashIcon } from 'lucide-react';

export default function HashTagsBox() {
  const hashtags = useStore((state) => state.hashtags);
  return (
    <Card className="bg-gray-900 text-white rounded-lg h-full w-5/12 border">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">Hashtags</CardTitle>
        <HashIcon className="w-4 h-4 text-blue-400 dark:text-gray-400" />
      </CardHeader>
      <CardContent className="space-y-2 mt-4 w-full h-5/6 overflow-auto">
        {Object.entries(hashtags).map(([name, url]) => (
          <a href={url} target="_blank" rel="noreferrer" key={name} className="flex items-center cursor-pointer">
            <p className="text-sm underline decoration-blue-400 underline-offset-2">#{name}</p>{' '}
          </a>
        ))}
      </CardContent>
    </Card>
  );
}
