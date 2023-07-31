import React from "react";
import Link from "next/link";

export const AdminFooter = () => {
  return (
    <footer>
      <div className="footer-area pt-100">
        <div className="copyright-content">
          <div className="d-flex align-items-center justify-content-center">
            <p>
            Designed by {" "}
              <a href="https://hibootstrap.com/" passHref>
                {" "}
                Brainclick
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
