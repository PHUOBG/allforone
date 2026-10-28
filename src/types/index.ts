export type SubjectType = 'math' | 'physics' | 'cs';

export interface SubjectBadge {
  id: SubjectType;
  title: string;
  grade: string;
  topics: string;
  icon: string;
  color: string;
  glowColor: string;
  borderHover: string;
}

export interface DailyQuestion {
  id: string;
  index: number;
  subject: SubjectType;
  subjectLabel: string;
  topic: string;
  level: 'Nhận biết' | 'Thông hiểu' | 'Vận dụng' | 'Vận dụng cao';
  levelTag: string;
  title: string;
  content: string;
  eloGain: number;
  status: 'done' | 'current' | 'locked';
  isBoss?: boolean;
}

export interface StudentProfile {
  name: string;
  school: string;
  classRoom: string;
  cohort: string;
  tier: string;
  rankPercentile: string;
  streak: number;
  solvedCount: number;
  mathElo: number;
  physicsElo: number;
  csElo: number;
  mathDelta: number;
  physicsDelta: number;
  csDelta: number;
}

export interface ThinkingTrap {
  id: string;
  subject: string;
  topic: string;
  title: string;
  trapDescription: string;
  aiPromptRemedy: string;
  remedyCode: string;
  status: string;
}
