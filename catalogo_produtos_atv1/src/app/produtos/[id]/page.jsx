export default async function produtoDetail({ params }) {
    const { id } = await params ;
    const data = await (await fetch("https://dummyjson.com/products")).json()
    const produtos = data.products
    const produto = produtos[id - 1]    


    return (<>
        <div className="bgcolor">
            <div className="d-flex justify-content-center align-items-center min-vh-100">
                <div className="d-flex flex-wrap flex-md-nowrap w-100 w-md-75 m-auto">
                    <div className="d-flex justify-content-center align-items-center p-3" style={{ width: "70rem" }}>
                        <img src={produto.thumbnail} alt="imagem" className="img-fluid" />
                    </div>
                    <div className="">
                        <div className="d-flex justify-content-start align-items-end p-3 gap-3">
                            <h2 className="outfit fs-3 m-0">{produto.title}</h2>
                            <p className="outfit fs-5 m-0" style={{ color: "#DDEEFF" }}>{produto.category}</p>
                            <div className="d-flex gap-1">
                                <p className="outfit fs-5 m-0 color">Preço: </p>
                                <p className="outfit fs-5 m-0" style={{ color: "#DDEEFF" }}>{produto.price}</p>
                            </div>
                        </div>

                        <div className="mt-3 d-flex flex-column justify-content-start p-3 color">
                            <p className="outfit sinopse">{produto.description}</p>
                            <p className="outfit">{produto.brand}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}