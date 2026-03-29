
export interface ConferenceTrack {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface ImportantDate {
  id: string;
  date: string;
  title: string;
  description: string;
  icon: string;
  isActive?: boolean;
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface CommitteeMember {
  name: string;
  role?: string;
  designation: string;
  institution: string;
}

export interface CommitteeSection {
  title: string;
  members: CommitteeMember[];
}
