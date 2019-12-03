import React from "react";
import config from "../../config";
export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>&copy; Maghin inc.</li>
        <li>
          Design: <a href="https://github.com/maghin0">maghin</a>
        </li>
      </ul>
    </footer>
  );
}
