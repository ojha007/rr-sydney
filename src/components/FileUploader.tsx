import { useRef } from "react";
import { Trash, Upload } from "react-bootstrap-icons";

interface FilesUploader {
  setUploadedFiles: Function;
  uploadedFiles: File[];
}
interface FileUploader {
  setUploadedFile: Function;
  uploadedFile: any;
}
const FilesUpload = (props: FilesUploader) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const handleFileUpload = (e: any) => {
    if (e.target.files) {
      const file = {
        name: e.target.files[0].name,
        size: e.target.files[0].size,
        image: URL.createObjectURL(e.target.files[0]),
      };
      props.setUploadedFiles([...props.uploadedFiles, file]);
    }
  };

  const handleRemoveFile = (index: number) => {
    console.log(index);
    // let files = props.uploadedFiles[index];
  };

  return (
    <>
      {props.uploadedFiles.length <= 0 && (
        <div className="file-upload" onClick={() => fileRef.current?.click()}>
          <label className="text-center" htmlFor="file">
            <Upload />
            <p>
              Drag and Drop Image here or{" "}
              <span
                className="text-primary text-underline"
                role="button"
                onClick={() => fileRef.current?.click()}
              >
                browse {""}
              </span>
              your file
            </p>
            <small className="text-secondary mt-2">Maximum Size: 2MB</small>
          </label>
          <input
            name="file"
            hidden
            accept="image/jpg,image/jpeg,image/png"
            type="file"
            ref={fileRef}
            onChange={(e) => {
              handleFileUpload(e);
              e.stopPropagation();
            }}
          />
        </div>
      )}
      {props.uploadedFiles && props.uploadedFiles.length > 0 && (
        <div
          className="file-upload mt-3 p-2"
          onClick={() => fileRef.current?.click()}
        >
          <input
            className="d-none"
            type="file"
            ref={fileRef}
            accept="image/jpg,image/jpeg,image/png"
            onChange={handleFileUpload}
          />

          <label className="text-center" role="button">
            <Upload className="bi me-2" />
            <p>Upload More</p>
          </label>
        </div>
      )}
      {props.uploadedFiles &&
        props.uploadedFiles.length > 0 &&
        props.uploadedFiles.map((file: any, index: number) => {
          return (
            <div
              className="d-flex justify-content-between flex-wrap mt-3 file-list"
              key={index}
            >
              <div className="align-vertical">
                <img src={file.image} alt="" className="file-image" />
                <h6 className="ml-3">{file.name}</h6>
              </div>

              <div className="align-vertical">
                <h5 role="button" className="text-danger btn-ghost ml-3">
                  <Trash
                    className="bi me-2 courser-pointer"
                    onClick={() => handleRemoveFile(index)}
                  />
                </h5>
              </div>
            </div>
          );
        })}
    </>
  );
};

const FileUpload = (props: FileUploader) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const handleFileUpload = (e: any) => {
    if (e.target.files) {
      const file = {
        name: e.target.files[0].name,
        size: e.target.files[0].size,
        image: URL.createObjectURL(e.target.files[0]),
      };
      props.setUploadedFile(file);
    }
  };
  return (
    <>
      <div className="file-upload" onClick={() => fileRef.current?.click()}>
        <label className="text-center" htmlFor="file">
          <Upload />
          <p>
            Drag and Drop Image here or{" "}
            <span
              className="text-primary text-underline"
              role="button"
              onClick={() => fileRef.current?.click()}
            >
              browse {""}
            </span>
            your file
          </p>
          <small className="text-secondary mt-2">Maximum Size: 2MB</small>
        </label>
        <input
          name="file"
          hidden
          accept="image/jpg,image/jpeg,image/png"
          type="file"
          ref={fileRef}
          onChange={(e) => {
            handleFileUpload(e);
            e.stopPropagation();
          }}
        />
      </div>
      {props.uploadedFile ? (
        <div className="d-flex justify-content-between flex-wrap mt-3 file-list">
          <div className="align-vertical">
            <img src={props.uploadedFile.image} alt="" className="file-image" />
            <h6 className="ml-3">{props.uploadedFile.name}</h6>
          </div>

          <div className="align-vertical">
            <h5 role="button" className="text-danger btn-ghost ml-3">
              <Trash
                className="bi me-2 courser-pointer"
                onClick={() => {
                  console.log("AA");
                }}
              />
            </h5>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export { FileUpload, FilesUpload };