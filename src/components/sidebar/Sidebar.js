import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar"> 
        <div className="sidebarItems"> 
            <span className="sidebarTitle">ABOUT US</span>
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR7Z5Bz4NT1MHExbJpZa3EAi83_B-WzkF_4PhTFs68GCY5KJXbX" alt=""/>
            <p> 
            Hi, I’m so glad you’re here! <br></br>
            This is a place to share all things related to pet.
            If you found any of my resources or posts helpful, consider replying me so that I can continue to keep producing helpful and awesome content.
            </p>
        </div>
        <div className="sidebarItems">
            <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList"> 
                    <li className="sidebarListItem">Pet Care</li>
                    <li className="sidebarListItem">Food</li>
                    <li className="sidebarListItem">Breed</li>
                    <li className="sidebarListItem">Trainning</li>
                    <li className="sidebarListItem">Vaccinnation</li>
                    <li className="sidebarListItem">Health</li>
                </ul>
        </div>
        <div className="sidebarItems"> 
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial"> 
                <i className="sidebarIcon fab fa-facebook-square"> </i>
                <i className="sidebarIcon fab fa-twitter-square"> </i>
                <i className="sidebarIcon fab fa-pinterest-square"> </i>
                <i className="sidebarIcon fab fa-instagram-square"> </i>


            </div>
        </div>
    </div>
  )
}
