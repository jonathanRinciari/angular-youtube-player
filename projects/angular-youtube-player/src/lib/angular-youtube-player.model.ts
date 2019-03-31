export interface PlayerConfig {
  videoId?: string;
  videoUrl?: string;
  width?: string;
  height?: string;
  startSeconds?: number;
  autoPlay?: boolean;
  mediaContentUrl?: string;
  endSeconds?: number;
  suggestedQuality?: 'large' | 'medium' | 'small';
}
