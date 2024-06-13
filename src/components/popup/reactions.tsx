import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card';
import { RepeatIcon } from 'lucide-react';
import useStore from '@/lib/store';
export default function ReactionsBox() {
  const reactions = useStore((state) => state.reactions);
  return (
    <Card className="w-full bg-gray-900 text-white">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">Reactions</CardTitle>
        <RepeatIcon className="w-4 h-4 text-blue-400" />
      </CardHeader>
      <CardContent>
        <p className="text-2xl mt-2 font-bold text-start">{reactions.all}</p>

        <div className="mt-4">
          {Object.entries(reactions).map(([reaction, count]) => {
            if (reaction == 'all') return null;
            else
              return (
                <div key={reaction} className="flex items-center justify-between space-y-2">
                  <span className="text-sm">{reaction.charAt(0).toUpperCase() + reaction.slice(1).toLowerCase()}</span>
                  <span className="text-sm font-medium">{count}</span>
                </div>
              );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
