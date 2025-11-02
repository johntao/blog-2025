import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types for TypeScript
export type Comment = {
  id: string
  post_slug: string
  author_name: string
  author_email: string | null
  content: string
  approved: boolean
  created_at: string
}

export type ViewCount = {
  id: string
  post_slug: string
  count: number
  updated_at: string
}

export type Reaction = {
  id: string
  post_slug: string
  reaction_type: string
  user_identifier: string
  created_at: string
}

export type ReactionCount = {
  id: string
  post_slug: string
  reaction_type: string
  count: number
  updated_at: string
}
