export function ProductFormUI({product, errors, loading, onChange, onFileChange, onSubmit}){
  return (
    <div className="d-lg-flex half">
      <div className="contents">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-8">

              <div className="py-3 text-center">
                <h1 className="h3">Formulario de Alta de Pokemons</h1>
                <p className="lead">¡Bienvenido/a al Centro de Administración de la Tienda Pokémon! Aquí podrás registrar todos los productos que formarán parte de nuestro catálogo. Completa el siguiente formulario con la información de cada artículo, mientras más completa y precisa sea la información, más fácil será para los clientes encontrar el artículo y tomar una decisión de compra.</p>
              </div>
                  <form onSubmit={onSubmit}>
                    <div className="row">
                      <div className="col-12">
                        <label className="form-label">Nombre</label>
                        <input type="text" className="form-control" name="name" required value={product.name} onChange={onChange} /> 
                        {errors.id && <span className="badge text-bg-danger">{errors.name}</span>}
                      </div>
                      <div className="col-12">
                        <label className="form-label mt-3">Precio</label>
                        <input type="number" className="form-control" name="price" required value={product.price} onChange={onChange} /> 
                        {errors.price && <span className="badge text-bg-danger">{errors.price}</span>}
                      </div>
                      <div className="col-12">
                        <label className="form-label mt-3">Categoría/Familia</label>
                        <input type="text" className="form-control" name="family" required value={product.family} onChange={onChange} /> 
                        {errors.family && <span className="badge text-bg-danger">{errors.family}</span>}
                      </div>
                      <div className="col-12">
                        <label className="form-label mt-3">Descripción</label>
                        <input type="text" className="form-control" name="description" required value={product.description} onChange={onChange} /> 
                        {errors.description && <span className="badge text-bg-danger">{errors.description}</span>}
                      </div>
                      <div className="col-12">
                        <label className="form-label mt-3">Imagen</label>
                        <input type="file" className="form-control" accept="image/*" onChange={(e) => onFileChange(e.target.files?.[0] ?? null)} /> 
                        {errors.file && <span className="badge text-bg-danger">{errors.file}</span>}
                      </div>
                    </div>
                    <button className="w-100 btn btn-primary mt-4" type="submit" disabled={loading}>{loading ? "guardando..." : "guardar"}</button> 
                  </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};