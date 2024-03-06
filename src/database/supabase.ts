export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  public: {
    Tables: {
      BoardPersons: {
        Row: {
          created_at: string
          email: string | null
          function: string
          id: number
          imageSrc: string
          name: string
          tel: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          function: string
          id?: number
          imageSrc: string
          name: string
          tel?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          function?: string
          id?: number
          imageSrc?: string
          name?: string
          tel?: string | null
        }
        Relationships: []
      }
      HomeArticles: {
        Row: {
          created_at: string
          id: number
          images: string[] | null
          text: string
        }
        Insert: {
          created_at?: string
          id?: number
          images?: string[] | null
          text: string
        }
        Update: {
          created_at?: string
          id?: number
          images?: string[] | null
          text?: string
        }
        Relationships: []
      }
      Program: {
        Row: {
          created_at: string
          dates: string[] | null
          description: string | null
          forAll: boolean | null
          forJugendGroup: boolean | null
          forJunior: boolean | null
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          dates?: string[] | null
          description?: string | null
          forAll?: boolean | null
          forJugendGroup?: boolean | null
          forJunior?: boolean | null
          id?: number
          name: string
        }
        Update: {
          created_at?: string
          dates?: string[] | null
          description?: string | null
          forAll?: boolean | null
          forJugendGroup?: boolean | null
          forJunior?: boolean | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      Reports: {
        Row: {
          created_at: string
          id: number
          text: string
        }
        Insert: {
          created_at?: string
          id?: number
          text: string
        }
        Update: {
          created_at?: string
          id?: number
          text?: string
        }
        Relationships: []
      }
      Vips: {
        Row: {
          created_at: string
          function: string
          id: number
          imageSrc: string
          name: string
        }
        Insert: {
          created_at?: string
          function: string
          id?: number
          imageSrc: string
          name: string
        }
        Update: {
          created_at?: string
          function?: string
          id?: number
          imageSrc?: string
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database['public']['Tables'] & Database['public']['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database['public']['Tables'] &
      Database['public']['Views'])
  ? (Database['public']['Tables'] & Database['public']['Views'])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends keyof Database['public']['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
  ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof Database['public']['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
  ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends keyof Database['public']['Enums'] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof Database['public']['Enums']
  ? Database['public']['Enums'][PublicEnumNameOrOptions]
  : never
