/* ................................................. */

function ucfirst(str){
  str += '';
  if(str.includes('-')){
    const myArray = str.split('-');
    myArray.pop();
    str = myArray.join(' ');
  }
  const f = str.charAt(0).toUpperCase();
  return f + str.substr(1);
}

/* ................................................. */

function slugi(str){
  str = str.replace(/^\s+|\s+$/g, '');
  str = str.toLowerCase();
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to   = "aaaaeeeeiiiioooouuuunc------";
  for(let i = 0, l = from.length ; i < l ; i++){
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }
  str = str.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
  return str;
}

/* ................................................. */

function rr(){
    // const numi = Math.floor(Math.random() * (13 - 9 + 1)) + 9;
    const numi = 5;
    let characters = 'abcdefghjkmnpqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for(let i = 0; i < numi; i++){
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

/* ................................................. */

function validateProduct(pokemon, fileRequired = true){
  const errors = {};

  if(!pokemon.name.trim()){
    errors.name = "El nombre es obligatorio";
  }

  if(!pokemon.price || pokemon.price <= 0){
    errors.price = "El precio debe ser mayor a cero";
  }

  if(!pokemon.description.trim()){
    errors.description = "La descripción es obligatoria";
  }

  if(!pokemon.family.trim()){
    errors.family = "La categoria es obligatoria";
  }

  if(fileRequired && !pokemon.file){
    errors.file = "Debes seleccionar una imagen";
  }
  return errors;
};

/* ................................................. */

export {ucfirst, validateProduct, slugi, rr}
