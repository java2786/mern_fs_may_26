function Header(){
    return (
        <header style={{
            border: "1px solid black",
            display: "flex",
            justifyContent: "space-between"
        }}>
            <div>Logo</div>
            <div>
                <button>Home</button>
                <button>About</button>
                <button>Services</button>
                <button>Team</button>
                <button>Contact</button>
            </div>
            <div>Button</div>
        </header>
    )
}

export default Header