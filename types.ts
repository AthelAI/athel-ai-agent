
export type ViewType = 'dashboard' | 'scribe' | 'email' | 'tasks' | 'calendar';

export interface MeetingSummary {
  title: string;
  summary: string;
  keyPoints: string[];
}

export interface ActionItem {
  id: string;
  task: string;
  dueDate?: string;
  assignee?: string;
}

export interface Meeting {
  id: string;
  timestamp: number;
  transcript: string;
  summary?: MeetingSummary;
  actionItems?: ActionItem[];
}
