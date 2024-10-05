import { cn } from '@/lib/utils';
import { LoaderCircleIcon } from 'lucide-react';

interface LoaderProps {
  fullscreen?: boolean;
}

export const Loader = (props: LoaderProps) => {
  return (
    <div className={cn(
      'flex flex-col items-center justify-center animate-spin',
      props.fullscreen && 'h-screen w-[calc(100%-56px)]',
    )}>
      <LoaderCircleIcon />
    </div>
  )
}