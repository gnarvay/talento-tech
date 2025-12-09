import {useState} from "react";
import {ProductFormUI} from "./ProductFormUI.jsx";
import {validateProduct} from "../../utils.js";
import {uploadToImgbb} from "../../services/uploadImage.js";
import {createProduct} from "../../services/products.js";


export function ProductFormContainer(){
  const [loading, setLoading] = useState();
  const [errors, setErrors] = useState("");
  const [file, setFile] = useState(null);
  const [product, setProduct] = useState({name: "", price: "", family: "", description: ""});
  /* -------------------------------------- */

  function handleChange(e){
    const {name, value} = e.target;
    setProduct({...product, [name]: value});
  }

  /* -------------------------------------- */

  async function handleSubmit(e){
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const newErrors = validateProduct({...product, file});
    if(Object.keys(newErrors).length > 0){
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      const imageUrl = await uploadToImgbb(file);
      const productData = {
        ...product,
        price: Number(product.price),
        imageUrl
      };

      await createProduct(productData);
      alert("producto cargado con exito");

      setProduct({name: "", price: "", family: "", description: ""});
      setFile(null);
    } catch (error) {
      setErrors({general: error.message});
    } finally {
      setLoading(false);
    }
  }
  /* -------------------------------------- */
  return (
    <ProductFormUI
      product={product}
      errors={errors}
      onChange={handleChange}
      onFileChange={setFile}
      loading={loading}
      onSubmit={handleSubmit}
    />
  );
};
