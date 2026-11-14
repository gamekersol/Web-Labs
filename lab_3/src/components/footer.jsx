import { useState, useEffect } from "react";
import { UAParser } from "ua-parser-js";

function Footer() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const { browser, os } = UAParser(navigator.userAgent);
    const data = {
      browser: `${browser.name} ${browser.version}`,
      os: `${os.name} ${os.version}`,
    };
    localStorage.setItem("clientInfo", JSON.stringify(data));
    setInfo(data);
  }, []);

  return (
    <footer className="border-t pt-4 text-sm text-slate-500">
      <p>&copy; 2026 Roman Kaminskiy</p>
      {info && (
        <>
          <p>Browser: {info.browser}</p>
          <p>OS: {info.os}</p>
        </>
      )}
    </footer>
  );
}

export default Footer;