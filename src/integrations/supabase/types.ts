export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      catalogue_brand_categories: {
        Row: {
          brand_id: string
          category_id: string
        }
        Insert: {
          brand_id: string
          category_id: string
        }
        Update: {
          brand_id?: string
          category_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "catalogue_brand_categories_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "catalogue_brands"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "catalogue_brand_categories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "catalogue_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      catalogue_brands: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          logo_text: string | null
          name: string
          slug: string
          sort_order: number
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          logo_text?: string | null
          name: string
          slug: string
          sort_order?: number
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          logo_text?: string | null
          name?: string
          slug?: string
          sort_order?: number
        }
        Relationships: []
      }
      catalogue_brochure_files: {
        Row: {
          brochure_id: string
          file_size_label: string | null
          file_url: string
        }
        Insert: {
          brochure_id: string
          file_size_label?: string | null
          file_url: string
        }
        Update: {
          brochure_id?: string
          file_size_label?: string | null
          file_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "catalogue_brochure_files_brochure_id_fkey"
            columns: ["brochure_id"]
            isOneToOne: true
            referencedRelation: "catalogue_brochures"
            referencedColumns: ["id"]
          },
        ]
      }
      catalogue_brochures: {
        Row: {
          brand_id: string
          category_id: string
          cover_key: string | null
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          name: string
          published_year: string | null
          slug: string
          sort_order: number
        }
        Insert: {
          brand_id: string
          category_id: string
          cover_key?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          name: string
          published_year?: string | null
          slug: string
          sort_order?: number
        }
        Update: {
          brand_id?: string
          category_id?: string
          cover_key?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          name?: string
          published_year?: string | null
          slug?: string
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "catalogue_brochures_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "catalogue_brands"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "catalogue_brochures_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "catalogue_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      catalogue_categories: {
        Row: {
          created_at: string
          description: string | null
          id: string
          image_key: string | null
          is_active: boolean
          name: string
          slug: string
          sort_order: number
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          image_key?: string | null
          is_active?: boolean
          name: string
          slug: string
          sort_order?: number
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          image_key?: string | null
          is_active?: boolean
          name?: string
          slug?: string
          sort_order?: number
        }
        Relationships: []
      }
      catalogue_hero: {
        Row: {
          created_at: string
          cta_label: string | null
          ends_at: string | null
          eyebrow: string | null
          headline: string
          id: string
          is_active: boolean
          starts_at: string | null
          supporting_copy: string
        }
        Insert: {
          created_at?: string
          cta_label?: string | null
          ends_at?: string | null
          eyebrow?: string | null
          headline: string
          id?: string
          is_active?: boolean
          starts_at?: string | null
          supporting_copy: string
        }
        Update: {
          created_at?: string
          cta_label?: string | null
          ends_at?: string | null
          eyebrow?: string | null
          headline?: string
          id?: string
          is_active?: boolean
          starts_at?: string | null
          supporting_copy?: string
        }
        Relationships: []
      }
      catalogue_leads: {
        Row: {
          area: string
          brand_id: string | null
          brand_name: string | null
          brochure_id: string | null
          brochure_name: string | null
          category_id: string | null
          category_name: string | null
          created_at: string
          follow_up_date: string | null
          id: string
          lead_source: string | null
          mobile: string
          name: string
          page_url: string | null
          project_name: string
          project_type: string | null
          referrer: string | null
          remarks: string | null
          status: string
          utm_campaign: string | null
          utm_content: string | null
          utm_medium: string | null
          utm_source: string | null
        }
        Insert: {
          area: string
          brand_id?: string | null
          brand_name?: string | null
          brochure_id?: string | null
          brochure_name?: string | null
          category_id?: string | null
          category_name?: string | null
          created_at?: string
          follow_up_date?: string | null
          id?: string
          lead_source?: string | null
          mobile: string
          name: string
          page_url?: string | null
          project_name: string
          project_type?: string | null
          referrer?: string | null
          remarks?: string | null
          status?: string
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
        }
        Update: {
          area?: string
          brand_id?: string | null
          brand_name?: string | null
          brochure_id?: string | null
          brochure_name?: string | null
          category_id?: string | null
          category_name?: string | null
          created_at?: string
          follow_up_date?: string | null
          id?: string
          lead_source?: string | null
          mobile?: string
          name?: string
          page_url?: string | null
          project_name?: string
          project_type?: string | null
          referrer?: string | null
          remarks?: string | null
          status?: string
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "catalogue_leads_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "catalogue_brands"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "catalogue_leads_brochure_id_fkey"
            columns: ["brochure_id"]
            isOneToOne: false
            referencedRelation: "catalogue_brochures"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "catalogue_leads_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "catalogue_categories"
            referencedColumns: ["id"]
          },
        ]
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
