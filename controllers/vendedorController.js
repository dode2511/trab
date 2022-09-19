import dbKnex from '../data/db.js'
import bcrypt from 'bcrypt';

const saltRounds =10


export const vendedorIndex = async (req, res) => {
  try {
    const vendedor = await dbKnex.select("*").from("vendedor").orderBy("nome")
    res.status(200).json(vendedor)
  } catch (error) {
    res.status(400).json({ id: 0, msg: "Erro: " + error.message })
  }
}



export const vendedorRegistro = async (req,res) => {
    const { nome, loja, senha } = req.body
    if (!nome || !loja || !senha) {
        res.status(400).json({ id: 0, msg: "Erro... informe  os dados corretamente" })
        return
      }
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(senha, salt);

      try {
        const novo = await dbKnex('clientes')
          .insert({ nome, loja, senha: hash })    
        res.status(201).json({ id: novo[0], msg: "Ok! Inserido com sucesso" })
      } catch (error) {
        res.status(400).json({ id: 0, msg: "Erro: " + error.message })
      }
}