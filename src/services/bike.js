const getBike = async(params) => {
    let bike = {}
    if(params.name === 'Gios'){
        bike.id = 1
        bike.nome = 'Gios'
        bike.aro = []
        bike.aro.push(10)
    }else{
       throw "Bicicleta não cadastrada!"
    }
    return bike
  }
  module.exports.getBike = getBike