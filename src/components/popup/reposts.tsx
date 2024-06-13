import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card';
import { RepeatIcon } from 'lucide-react';
import useStore from '@/lib/store';
export default function RepostsBox() {
  const reposts = useStore((state) => state.reposts);
  return (
    <Card className="w-5/12 bg-gray-900 text-white border">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">Reposts</CardTitle>
        <RepeatIcon className="w-4 h-4 text-blue-400" />
      </CardHeader>
      <CardContent>
        <p className="text-2xl mt-2 font-bold text-start">{reposts}</p>
      </CardContent>
    </Card>
  );
}
