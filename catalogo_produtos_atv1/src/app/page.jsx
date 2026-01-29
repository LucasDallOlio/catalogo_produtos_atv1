import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
  const data = await (await fetch("https://dummyjson.com/products")).json()
  const produtos = data.products
  console.log(produtos)

  return (<>
  <div className="bgcolor">
    <div className="container pb-5 py-5 ">
      <div className="d-flex gap-5 flex-wrap align-items-center justify-content-center">
        {produtos.map((produto, index) => {
          return (
            <div key={produto.id} style={{ width: "18rem" }}>
              <Link href={"/produtos/" + produto.id} className="text-decoration-none">
                <div className="card">
                  <div
                    className="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={produto.thumbnail}
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">
                      {produto.title}
                    </h5>
                    <ul className="list-unstyled list-inline mb-0">
                      <li className="list-inline-item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="yellow"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>

                      </li>
                      <li className="list-inline-item">
                        <p className="text-muted">{produto.rating}</p>
                      </li>
                    </ul>
                    <p className="mb-2">R${produto.price} • {produto.category}, {produto.brand}</p>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
    </div>
  </>)
}
