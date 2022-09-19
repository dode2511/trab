import dbKnex from '../data/db.js'

export const lojaIndex = async (req, res) => {
    try {
      
      const roupas = await dbKnex.select("*").from("produtos")
      res.status(200).json(roupas)
    } catch (error) {
      res.status(400).json({ id: 0, msg: "Erro: " + error.message })
    }
}

export const lojaStore = async (req, res) => {

    const { modelo, cor,  preco } = req.body
  
    if (!modelo || !cor || !preco) {
      res.status(400).json({ id: 0, msg: "Erro... informe modelo, cor,  e preco do produto" })
      return
    }
  
    try {
      const novo = await dbKnex('produtos')
        .insert({ modelo, marca, ano, preco })
  
      res.status(201).json({ id: novo[0], msg: "Ok! Inserido com sucesso" })
    } catch (error) {
      res.status(400).json({ id: 0, msg: "Erro: " + error.message })
    }
  }


  export const lojaUpdate = async (req, res) => {
    const { id } = req.params;
  
    const { modelo, cor, preco } = req.body
  
    if (!modelo || !cor ||  !preco) {
      res.status(400).json(
        {
          id: 0,
          msg: "Erro... informe modelo, cor e preco do produto"
        })
      return
    }
  
   try {
      await dbKnex("produtos").where({ id })
        .update({ modelo, cor, preco })
  
      res.status(200).json({ id, msg: "Ok! Alterado com sucesso" })
    } catch (error) {
      res.status(400).json({ id: 0, msg: "Erro: " + error.message })
    }
  
  }
  export const lojaDelete = async (req, res) => {
    const { id } = req.params;
  
    try {
      await dbKnex("produtos").where({ id }).del()
      res.status(200).json({ id, msg: "Ok! Excluído com sucesso" })
    } catch (error) {
      res.status(400).json({ id: 0, msg: "Erro: " + error.message })
    }
  }

  export const lojaModelo = async (req, res) => {

    const { modelo } = req.params
  
    try {
      const roupas = await dbKnex("produtos").whereLike('modelo', `%${modelo}%`)
      res.status(200).json(roupas)
    } catch (error) {
      res.status(400).json({ id: 0, msg: "Erro: " + error.message })
    }
  }
  