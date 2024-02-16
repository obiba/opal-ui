export interface SubjectProfile {
  principal: string;
  realm: string;
  created: string;
  lastUpdate: string;
  groups: string[];
  otpEnabled: boolean;
}

export interface Project {
  name: string;
  title: string;
  description: string;
  tags: string[];
  directory: string;
  archived: boolean;
  database: string;
  datasourceStatus: string;
}
