import React from "react";
import QRCode from "react-qr-code";

const QR = ({ id }) => {
    return (
        <>
            {id &&
                <div className="bg-white p-3 shadow-md rounded-lg md:p-6 my-4">
                    <h3 className="text-xl text-center mb-4">QR Code</h3>
                    <div className="py-8 border border-4 border-double rounded-lg md:w-[40%] mx-auto flex flex-col items-center">
                        <QRCode
                            title="Unique ID"
                            value={id}
                            bgColor="white"
                            fgColor="black"
                            size={256}
                        />

                        <strong className="mt-4"> Unique ID : {id.split("/")[4]}</strong>
                    </div>
                </div>
            }
        </>
    )
}

export default QR;