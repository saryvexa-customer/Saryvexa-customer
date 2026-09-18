(function(){
  window.initSupabase = function(){
    if(window.supabaseClient) return window.supabaseClient;
    const cfg=window.SARYVEXA_CONFIG||{};
    if(!window.supabase?.createClient || !cfg.SUPABASE_URL || !cfg.SUPABASE_ANON_KEY) return null;
    window.supabaseClient=window.supabase.createClient(cfg.SUPABASE_URL,cfg.SUPABASE_ANON_KEY);
    return window.supabaseClient;
  };
  window.loadSupabase = async function(){ return initSupabase(); };
  window.esc = function(v){return String(v??'').replace(/[&<>\"']/g,s=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[s]));};
})();
