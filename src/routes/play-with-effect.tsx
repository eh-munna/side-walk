import { createFileRoute } from '@tanstack/react-router';
import PlayWithEffect from '../features/playground/PlayWithEffect';

export const Route = createFileRoute('/play-with-effect')({
  component: PlayWithEffect,
});
