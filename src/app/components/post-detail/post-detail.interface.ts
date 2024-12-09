export interface PostInfo {
    title: string;
    content: string;
    created_at: string; 
    primary_img_url: string; // Optional property
    secondary_img_url?: string;
  }