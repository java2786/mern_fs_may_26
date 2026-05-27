function OurTeam(){
    return (
        <div>
            <h1 style={{"font-size": "44px", "text-align": "center"}}>Our Team</h1>
            <p style={{"text-align": "center"}}>Meet the amazing people behind our success.</p>

            <div style={{"display": "flex", "justify-content":"space-around"}}>
                <div style={{"border":"1px solid black","width":"250px","text-align":"center"}}>
                    <img style={{
                        "width":"60%",
                        "border-radius": "50%"
                    }} src="https://placehold.net/400x400.png" />
                    <p style={{"font-weight": "bold"}}>Rahul Sharma</p>
                    <p style={{"color": "blue"}}>Frontend Developer</p>
                    <p style={{"font-weight": "bold"}}>Rahul Sharma</p>

                    <div style={{"display": "flex", "justify-content":"space-around"}}>
                    <img style={{
                        "width":"10%"                        
                    }} src="https://placehold.net/400x400.png" />
                    <img style={{
                        "width":"10%"                        
                    }} src="https://placehold.net/400x400.png" />
                    <img style={{
                        "width":"10%"                        
                    }} src="https://placehold.net/400x400.png" />

                    </div>
                </div>
                <div style={{"border":"1px solid black","width":"250px"}}>DIV 1</div>
                <div style={{"border":"1px solid black","width":"250px"}}>DIV 1</div>
                <div style={{"border":"1px solid black","width":"250px"}}>DIV 1</div>
            </div>
        </div>
    )
}

export default OurTeam