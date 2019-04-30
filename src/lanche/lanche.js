import lanches from './lanches.js'
export default {
  obterPeloNome: function(nome){
   return this.filter('nome', nome)
  },
  obterPeloCodigo(codigo){
    return this.filter('id', codigo)[0]
  },
  comprarLanches(ids = []){
    const total = 0
    ids.forEach((id)=>{ 
     total += this.obterPeloCodigo(id).preco   
    })  
    return total
  },
  filter(propriedade, busca){
   return lanches.filter((item) => {
      return item[propriedade] === busca
   })
  }
}