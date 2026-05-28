import Card from "./Card"
function OurTeam(){
    const teamMembers = [
    {
        profile_image: "https://randomuser.me/api/portraits/men/1.jpg",
        name: "Rahul Sharma",
        profile: "Frontend Developer",
        description: "Passionate about creating beautiful and responsive user interfaces",
        social_media_icons: [
        "https://imgs.search.brave.com/yMx4D81h6ZrtnLIxVB54RkNrDugqiwhC2bs9R8OvZA8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvTGlu/a2VkaW4tTG9nby5w/bmc", 
        "https://imgs.search.brave.com/8mOBRxsNSf_cP47x2uxXYYtay_4L6Yxn5glHO9fJzvA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMwLzEvZ2l0aHVi/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTMwNDYx/Mi5wbmc", 
        "https://imgs.search.brave.com/e_IkMktLhd7nD8CDYYZEeJ7tGr2gSbsGFNOe7L8n7HA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1wc2Qv/Y29ubmVjdC1pY29u/c2NvbnRhY3QtdXMt/aWNvbi1zZXRjb250/YWN0LWNvbW11bmlj/YXRpb24taWNvbnNz/ZXQtY29tbXVuaWNh/dGlvbi1pY29uc2V0/LXNfMTEzMTkzNC01/Mjg2NC5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQwJnE9ODA"
    ]
    },

    {
        profile_image: "https://randomuser.me/api/portraits/women/2.jpg",
        name: "Priya Verma",
        profile: "UI/UX Designer",
        description: "Designing intuitive and engaging experiences for users",
        social_media_icons: [
        "https://imgs.search.brave.com/yMx4D81h6ZrtnLIxVB54RkNrDugqiwhC2bs9R8OvZA8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvTGlu/a2VkaW4tTG9nby5w/bmc", 
        "https://imgs.search.brave.com/8mOBRxsNSf_cP47x2uxXYYtay_4L6Yxn5glHO9fJzvA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMwLzEvZ2l0aHVi/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTMwNDYx/Mi5wbmc", 
        "https://imgs.search.brave.com/e_IkMktLhd7nD8CDYYZEeJ7tGr2gSbsGFNOe7L8n7HA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1wc2Qv/Y29ubmVjdC1pY29u/c2NvbnRhY3QtdXMt/aWNvbi1zZXRjb250/YWN0LWNvbW11bmlj/YXRpb24taWNvbnNz/ZXQtY29tbXVuaWNh/dGlvbi1pY29uc2V0/LXNfMTEzMTkzNC01/Mjg2NC5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQwJnE9ODA"
    ]
    },

    {
        profile_image: "https://randomuser.me/api/portraits/men/3.jpg",
        name: "Amit Kumar",
        profile: "Backend Developer",
        description: "Building robust and scalable backend systems and APIs",
        social_media_icons: [
        "https://imgs.search.brave.com/yMx4D81h6ZrtnLIxVB54RkNrDugqiwhC2bs9R8OvZA8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvTGlu/a2VkaW4tTG9nby5w/bmc", 
        "https://imgs.search.brave.com/8mOBRxsNSf_cP47x2uxXYYtay_4L6Yxn5glHO9fJzvA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMwLzEvZ2l0aHVi/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTMwNDYx/Mi5wbmc", 
        "https://imgs.search.brave.com/e_IkMktLhd7nD8CDYYZEeJ7tGr2gSbsGFNOe7L8n7HA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1wc2Qv/Y29ubmVjdC1pY29u/c2NvbnRhY3QtdXMt/aWNvbi1zZXRjb250/YWN0LWNvbW11bmlj/YXRpb24taWNvbnNz/ZXQtY29tbXVuaWNh/dGlvbi1pY29uc2V0/LXNfMTEzMTkzNC01/Mjg2NC5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQwJnE9ODA"
    ]
    },

    {
        profile_image: "https://randomuser.me/api/portraits/women/4.jpg",
        name: "Neha Singh",
        profile: "QA Engineer",
        description: "Ensuring product quality through testing and automation",
        social_media_icons: [
        "https://imgs.search.brave.com/yMx4D81h6ZrtnLIxVB54RkNrDugqiwhC2bs9R8OvZA8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvTGlu/a2VkaW4tTG9nby5w/bmc", 
        "https://imgs.search.brave.com/8mOBRxsNSf_cP47x2uxXYYtay_4L6Yxn5glHO9fJzvA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMwLzEvZ2l0aHVi/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTMwNDYx/Mi5wbmc", 
        "https://imgs.search.brave.com/e_IkMktLhd7nD8CDYYZEeJ7tGr2gSbsGFNOe7L8n7HA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1wc2Qv/Y29ubmVjdC1pY29u/c2NvbnRhY3QtdXMt/aWNvbi1zZXRjb250/YWN0LWNvbW11bmlj/YXRpb24taWNvbnNz/ZXQtY29tbXVuaWNh/dGlvbi1pY29uc2V0/LXNfMTEzMTkzNC01/Mjg2NC5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQwJnE9ODA"
    ]
    }
];
    return (
        <div>
            <h1 style={{"font-size": "44px", "text-align": "center"}}>Our Team</h1>
            <p style={{"text-align": "center"}}>Meet the amazing people behind our success.</p>

            <div style={{"display": "flex", "justify-content":"space-around"}}>
                {teamMembers.map((teamMember, i)=>{
                    return <Card key={"member_card_"+i} member = {teamMember} />

                })}
            </div>
        </div>
    )
}

export default OurTeam



