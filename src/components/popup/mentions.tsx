import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import useStore from '@/lib/store';
import { AtSignIcon } from 'lucide-react';

export default function MentionsBox() {
  const mentions = useStore((state) => state.mentions);
  return (
    <Card className="bg-gray-900 text-white rounded-lg h-full w-5/12 border">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">Mentions</CardTitle>
        <AtSignIcon className="w-4 h-4 text-blue-400 dark:text-gray-400" />
      </CardHeader>
      <CardContent className="space-y-2 mt-2 w-full h-5/6 overflow-auto">
        {Object.entries(mentions).map(([name, url]) => (
          <a href={url} target="_blank" rel="noreferrer" key={name} className="flex items-center cursor-pointer">
            <Avatar>
              <AvatarImage src="https://ik.imagekit.io/lovelin/Screenshot%20from%202024-06-12%2015-10-02.png?updatedAt=1718185554495" />
              <AvatarFallback>PIn</AvatarFallback>
            </Avatar>
            <div className="ml-3">
              <p className="text-sm underline decoration-blue-400 underline-offset-2 ">@{name}</p>
            </div>
          </a>
        ))}
      </CardContent>
    </Card>
  );
}
