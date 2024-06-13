import useStore from '@/lib/store';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export default function Profile() {
  const profile = useStore((state) => state.profile);
  const date = useStore((state) => state.date);

  return (
    <Card className="w-full bg-gray-900 rounded-lg shadow h-fit flex justify-center items-center">
      <div className="flex flex-col items-center w-11/12 rounded-lg py-6 h-full border gap-4">
        <Avatar className="w-24 h-24">
          <AvatarImage src={profile.photo} />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="flex flex-col w-3/5 items-center justify-end">
          <h5 className="mb-1 text-xl font-medium text-gray-50">{profile.name}</h5>
          <p className="text-sm text-gray-400 w-full flex flex-wrap justify-center items-center">
            {profile.description}
          </p>
          <p className="text-xs text-white mt-2">{date}</p>
        </div>
      </div>
    </Card>
  );
}
