import { Button } from "react-bootstrap";
import { FaUpload } from "react-icons/fa";

/**
 * Use this file uploader button to upload file
 * @param {{text:string}} props 
 * @returns 
 */
export default function UploadButton(props) {

    const { text } = props;
    const id = Math.round();

    const getFile = () => {
        try {
            const fileId = document.getElementById(`file-${id}`);
            fileId.click();
        } catch (error) {
            console.error("error on getting file: ", error)
        }

    }

    const handleFileChange = (event) => {
        try {
            const file = event.target.files[0];
            console.log("file: ", file)
        } catch (error) {
            console.error("Error when file change: ", error)
        }

    };

    return (
        <>
            <Button
                variant="outline-primary"
                onClick={getFile}
                className="w-100"
            >
                <div className="d-flex-row align-center justify-center">
                    <FaUpload style={{ marginRight: 8 }} />
                    {text}
                </div>

            </Button>
            <input
                type="file"
                id={`file-${id}`}
                className="hide"
                onChange={handleFileChange}
            />
        </>

    )
}