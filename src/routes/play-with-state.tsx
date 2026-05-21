import { createFileRoute } from '@tanstack/react-router';
import PlayWithState from '../features/playground/PlayWithState';

export const Route = createFileRoute('/play-with-state')({
  component: PlayWithState,
});
