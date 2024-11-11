import React from 'react';
//npm imports
let today = new Date();
// //Date function related

function Foot(props){
    return(<footer className="footer bg-transparent"> <span id="date-section">

    <span id="footer-date">{today.getDate()}</span>
    <span id="footer-month">{`/${today.getMonth()+1}`}</span>
    
    <div className="socials" style={{float: "right",textAlign:"center",marginRight:"10%",marginTop: "0",paddingTop: "0"}}>

    <a href="https://www.instagram.com/sdi_bit/"><div className="insta"></div></a>
    
    

    <a href="https://x.com/MLSAxSDI"><div className="twitter"></div></a>
    <a href="https://www.linkedin.com/company/sdibangalorebit/"><div className="linkedin"></div></a>
    <div>{props.content}</div>
    </div>

</span></footer>)
}

export default Foot;