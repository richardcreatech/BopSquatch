import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://hctuakhyrgcuonqukqec.supabase.co"
const supabaseKey = "sb_publishable_IEAwMdDx-pTSVLK9BTT61g_Xun-KNiz"

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;