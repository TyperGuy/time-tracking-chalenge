export type TimeFrames = {
  timeframes: {
    daily: {
      current: number;
      previous: number;
    };
    monthly: {
      current: number;
      previous: number;
    };
    weekly: {
      current: number;
      previous: number;
    };
  };
  title: string;
};

export interface Views {
  daily: {
    current: number;
    previous: number;
  };
  monthly: {
    current: number;
    previous: number;
  };
  weekly: {
    current: number;
    previous: number;
  };
} 

export interface ColorsType {
  Work: string;
  Play: string;
  Study: string;
  Exercise: string;
  Social: string;
  Other: string;
}