import { createFileRoute } from '@tanstack/react-router';
import PlayWithReact from '../features/playground/PlayWithReact';

export const Route = createFileRoute('/play-with-react')({
  component: PlayWithReact,
});
