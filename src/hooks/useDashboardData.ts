import type { IComment, IStats, IVideo } from '@/features/dashboard/types';
import { useEffect, useState } from 'react';

export function useDashboardData() {
  const [stats, setStats] = useState<IStats[]>([]);
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [comments, setComments] = useState<IComment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (isMounted) {
          setStats([
            { label: 'Views', value: '1.5M' },
            { label: 'Subs', value: '2M' },
            { label: 'Revenue', value: '29' },
          ]);
          setVideos([
            {
              id: '1',
              title: 'Vibe Coding Explained',
              views: '100K',
              publishedAt: '2d ago',
            },
            {
              id: '2',
              title: 'React 19 Features',
              views: '85K',
              publishedAt: '3d ago',
            },
          ]);
          setComments([
            {
              id: '1',
              author: 'John Doe',
              text: 'Great video!',
              createdAt: '2h ago',
            },
          ]);
          setIsLoading(false);
        }
      } catch (err) {
        setError(err as string | null);
        setIsLoading(false);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  return {
    stats,
    videos,
    comments,
    isLoading,
    error,
  };
}
