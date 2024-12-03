export interface Task {
    id: string;
    title: string;
    completed: boolean;
    createdAt: Date;
    dueDate: Date;
    groupId: string;
  }