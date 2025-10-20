import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
        <footer id="footer">
  <div className="footer-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="footer-info">
            <h3>Umzug <span>Transport Group.</span></h3>
            <p>
              Am Haferfeld 15, <br />86156 Augsburg<br /> <br />
              <strong>Phone:</strong> +49 157 591 295 00<br />
              <strong>Email:</strong> info@umzügetransportgroup.de<br />
            </p>
            <div className="social-links mt-3">
              <a href="https://www.facebook.com/share/1Ni2XmzmMZ/" className="facebook"><i className="bx bxl-facebook" /></a>
              <a href="https://www.instagram.com/abdulkarimahaj?utm_source=qr&igsh=YzZkMjNkb3ptdDZw" className="instagram"><i className="bx bxl-instagram" /></a>

              
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <i className="bx bx-chevron-right" /> <Link to={""}>Home</Link>
            </li>
            <li>
              <i className="bx bx-chevron-right" /> <Link to={"About"}>About us</Link>
            </li>
            <li>
              <i className="bx bx-chevron-right" /> <Link to={"Services"}>Services</Link>
            </li>
            <li>
              <i className="bx bx-chevron-right" />
              <Link to={"/Datenschutzerklaerung"}>Datenschutz</Link>
            </li>
            <li>
              <i className="bx bx-chevron-right" />
              <Link to={"/Impressum"} href="#">Impressum</Link>
            </li>
          </ul>
        </div>
        {/*  
      <div class="col-lg-3 col-md-6 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li>
            <i class="bx bx-chevron-right"></i> <a href="#">Web Design</a>
          </li>
          <li>
            <i class="bx bx-chevron-right"></i>
            <a href="#">Web Development</a>
          </li>
          <li>
            <i class="bx bx-chevron-right"></i>
            <a href="#">Product Management</a>
          </li>
          <li>
            <i class="bx bx-chevron-right"></i> <a href="#">Marketing</a>
          </li>
          <li>
            <i class="bx bx-chevron-right"></i>
            <a href="#">Graphic Design</a>
          </li>
        </ul>
      </div>
  */}
        



      </div>
    </div>
  </div>
  <div className="container">
    <div className="copyright">
      © Copyright <strong><span>Umzug Transport Group.</span></strong>. All Rights Reserved
    </div>
    <div className="credits">
      Designed by <a href="#">Umzug Transport Group.</a>
    </div>
  </div>
</footer>

    </>
  )
}
