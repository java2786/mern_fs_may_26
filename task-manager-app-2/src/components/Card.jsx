function Card(props){
    return (
        <div style={{"width":"250px","textAlign":"center"}}>
                    <img style={{
                        "width":"60%",
                        "borderRadius": "50%"
                    }} src={props.member.profile_image} />
                    <p style={{"fontWeight": "bold"}}>{props.member.name}</p>
                    <p style={{"color": "blue"}}>{props.member.profile}</p>
                    <p>{props.member.description}</p>

                    <div style={{"display": "flex", "justifyContent":"space-around"}}>
                        {props.member.social_media_icons.map((icon_image, i)=>{
                            return <img key={"social_media_icon_"+i} style={{
                            "width":"10%"                        
                        }} src={icon_image} />
                        })}
                    </div>
                </div>
    );
}

export default Card;