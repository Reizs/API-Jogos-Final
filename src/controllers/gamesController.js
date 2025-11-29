
import { supabase } from '../services/supabase.js';

export async function list(req,res){
  const { data, error } = await supabase.from('games').select('*');
  if(error) return res.status(500).json({error:error.message});
  return res.json(data);
}

export async function get(req,res){
  const { id } = req.params;
  const { data, error } = await supabase.from('games').select('*').eq('id',id).single();
  if(error) return res.status(404).json({error:'Jogo não encontrado'});
  return res.json(data);
}

export async function create(req,res){
  const { title, platform, hours_played, finished_at } = req.body;
  if(!title || !platform) return res.status(400).json({error:"Campos obrigatórios faltando"});
  const { data, error } = await supabase.from('games').insert([{title,platform,hours_played,finished_at}]).select();
  if(error) return res.status(500).json({error:error.message});
  return res.status(201).json(data[0]);
}

export async function update(req,res){
  const { id } = req.params;
  const body = req.body;
  const { data, error } = await supabase.from('games').update(body).eq('id',id).select();
  if(error) return res.status(404).json({error:'Erro ao atualizar'});
  return res.json(data[0]);
}

export async function remove(req,res){
  const { id } = req.params;
  const { error } = await supabase.from('games').delete().eq('id',id);
  if(error) return res.status(404).json({error:'Erro ao excluir'});
  return res.json({message:'Jogo removido'});
}
