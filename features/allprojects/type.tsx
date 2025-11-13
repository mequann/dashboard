
export interface IProject {
    fileName: string;     
    completed: number;      
    budget: number;         
    members: number;       
    status: 'not started' | 'in progress' | 'completed' | 'on hold';  
    dueDate: string;       
  }
  