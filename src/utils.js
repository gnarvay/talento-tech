function ucfirst(str){
  str += '';
  const f = str.charAt(0).toUpperCase();
  return f + str.substr(1);
}

export {ucfirst}