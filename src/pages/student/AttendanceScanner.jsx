import { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

function AttendanceScanner() {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 5,
      },
      false,
    );

    scanner.render(success, error);

    function success(result) {
      console.log(result);

      alert(`QR Scanned: ${result}`);
    }

    function error(err) {
      console.warn(err);
    }
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-5">QR Attendance Scanner</h1>

      <div id="reader"></div>
    </div>
  );
}

export default AttendanceScanner;
