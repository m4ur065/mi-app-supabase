import { createClient } 
from '@supabase/supabase-js' 

const supabaseUrl = "https://vyipixmnezbgoeptxvow.supabase.co"
const supabaseKey = "sb_secret_Y4J5FdZpNvlVuGomEgd_1A_b8g6-HsJ"
const supabase = createClient(supabaseUrl, supabaseKey) 


async function obtenerEstudiantes() 
{ 
    const { data, error } = await supabase 
    .from('estudiantes') 
    .select('*')
    
    if (error) { 
        console.log('Error:', error) 
    } else { 
        console.table(data)
    } 
} obtenerEstudiantes()
