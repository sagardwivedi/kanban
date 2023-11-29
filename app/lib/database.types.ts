export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      columns: {
        Row: {
          column_name: string;
          created_at: string;
          id: number;
          project_id: string;
        };
        Insert: {
          column_name: string;
          created_at?: string;
          id?: number;
          project_id: string;
        };
        Update: {
          column_name?: string;
          created_at?: string;
          id?: number;
          project_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'columns_project_id_fkey';
            columns: ['project_id'];
            isOneToOne: false;
            referencedRelation: 'projects';
            referencedColumns: ['project_id'];
          },
        ];
      };
      projects: {
        Row: {
          created_at: string;
          project_id: string;
          project_name: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          project_id?: string;
          project_name: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          project_id?: string;
          project_name?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'projects_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      subtasks: {
        Row: {
          created_at: string;
          status: Database['public']['Enums']['Subtask Status'];
          subtask_id: string;
          subtask_name: string;
          task_id: string;
        };
        Insert: {
          created_at?: string;
          status?: Database['public']['Enums']['Subtask Status'];
          subtask_id?: string;
          subtask_name: string;
          task_id: string;
        };
        Update: {
          created_at?: string;
          status?: Database['public']['Enums']['Subtask Status'];
          subtask_id?: string;
          subtask_name?: string;
          task_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'subtasks_task_id_fkey';
            columns: ['task_id'];
            isOneToOne: false;
            referencedRelation: 'tasks';
            referencedColumns: ['task_id'];
          },
        ];
      };
      tasks: {
        Row: {
          created_at: string;
          description: string | null;
          project_id: string;
          status: string;
          task_id: string;
          task_name: string;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          project_id: string;
          status: string;
          task_id?: string;
          task_name: string;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          project_id?: string;
          status?: string;
          task_id?: string;
          task_name?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'tasks_project_id_fkey';
            columns: ['project_id'];
            isOneToOne: false;
            referencedRelation: 'projects';
            referencedColumns: ['project_id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      Status: 'Pending' | 'In Progress' | 'Completed';
      'Subtask Status': 'Pending' | 'Completed';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
