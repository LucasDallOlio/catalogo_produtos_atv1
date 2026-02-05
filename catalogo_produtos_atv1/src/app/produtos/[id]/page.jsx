export default async function produtoDetail({ params }) {
    const { id } = await params;
    const data = await (await fetch("https://dummyjson.com/products")).json()
    const produtos = data.products
    const produto = produtos[id - 1]


    return (<>
        <div className="bgcolor">
            <div className="d-flex justify-content-center align-items-center min-vh-100 p-3">
                <div className="d-flex flex-wrap flex-md-nowrap m-auto bg-white rounded" style={{ maxWidth: "1200px", width: "100%", minHeight: "450px", maxHeight: "800px" }}>
                    <div className="d-flex justify-content-center align-items-center p-3 flex-shrink-0" style={{ width: "100%", maxWidth: "500px" }}>
                        <img src={produto.thumbnail} alt="imagem" className="img-fluid" />
                    </div>
                    <div className="flex-grow-1">
                        <div className="d-flex flex-column justify-content-start p-3">
                            <p className="outfit text-primary">Acesse a Loja Oficial de {produto.brand}</p>
                        </div>
                        <div className="d-flex justify-content-start align-items-end p-3 gap-3 flex-wrap">
                            <h2 className="outfit fs-3 m-0 fw-bold">{produto.title}</h2>
                            <p className="outfit fs-5 m-0 text-primary">{produto.category}</p>
                        </div>
                        <div className="d-flex flex-column justify-content-start p-3">
                            <p className="outfit fs-5 m-0 fw-bold">R${produto.price}</p>
                        </div>
                        <div className="d-flex flex-column justify-content-start p-3">
                            <p className="outfit sinopse">{produto.description}</p>
                        </div>
                        <div className="d-flex flex-column justify-content-start p-3">
                            <button type="button" className="btn btn-primary">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}