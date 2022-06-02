import React from 'react'

const Footer = () => {

    const footerYear = new Date().getFullYear();

  return (
    <div className="footer footer-expand-lg footer-dark bg-dark" style={{padding: "30px"}}>
    <p style={{color: "#fff", display:"flex", justifyContent: "center", alignItems: "center"}}>Copyright &copy; {footerYear} All rights reserved</p>
    </div>
  )
}

export default Footer