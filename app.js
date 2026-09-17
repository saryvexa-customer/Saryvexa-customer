const cfg = window.SARYVEXA_CONFIG || {};
window.supabaseClient = null;
function supabaseReady(){
  return cfg.SUPABASE_URL && cfg.SUPABASE_ANON_KEY &&
    !cfg.SUPABASE_ANON_KEY.includes("PASTE_YOUR");
}
function initSupabase(){
  if(!supabaseReady()) return null;
  if(!window.supabase) return null;
  if(!window.supabaseClient){
    window.supabaseClient = window.supabase.createClient(
      cfg.SUPABASE_URL,
      cfg.SUPABASE_ANON_KEY
    );
  }
  return window.supabaseClient;
}
function supabaseReadyClient(){ return initSupabase(); }
async function loadSupabase(){ return initSupabase(); }
function esc(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]));}
// Initialize immediately so later page scripts can safely use window.supabaseClient.
initSupabase();
