import "./footer.css"

export default function Footer() {
    return (<>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
            <div className="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
                <p className="col-md-4 mb-0 text-body-secondary">
                    © 2026 Beleza Beauty
                </p>{" "}
                <a
                    href="/"
                    className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
                    aria-label="Bootstrap"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={40}
                        height={40}
                        fill="yellow"
                        className="bi bi-bluesky"
                        viewBox="0 0 16 16"
                    >
                        <path d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.698-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948" />
                    </svg>
                </a>{" "}
                <ul className="nav col-md-4 justify-content-end">
                    {" "}
                    <li className="nav-item">
                        <a href="/" className="nav-link px-2 text-body-secondary">
                            Home
                        </a>
                    </li>{" "}
                </ul>{" "}
            </div>
            </footer>

    </>)
}