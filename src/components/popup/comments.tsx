import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card';
import { MessageCircleIcon } from 'lucide-react';
import useStore from '@/lib/store';
export default function CommentsBox() {
  const comments = useStore((state) => state.comments);
  return (
    <Card className="w-5/12 bg-gray-900 text-white border">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">Comments</CardTitle>
        <MessageCircleIcon className="w-4 h-4 text-blue-400 dark:text-gray-400" />
      </CardHeader>
      <CardContent>
        <p className="text-2xl mt-2 font-bold text-start">{comments}</p>
      </CardContent>
    </Card>
  );
}
