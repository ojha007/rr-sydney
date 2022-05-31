import { FormikErrors } from "formik";
import { useRef } from "react";
import { Trash, Upload } from "react-bootstrap-icons";
import { FormFeedback } from "reactstrap";

export interface FileInterface {
  name: string;
  size: string;
  image_base64: string;
  file: FileInterface;
}

interface FilesUploader {
  setUploadedFiles: Function;
  uploadedFiles: FileInterface[];
  error?:
    | string
    | string[]
    | FormikErrors<any>
    | FormikErrors<any>[]
    | undefined;
}
interface FileUploader {
  setUploadedFile: Function;
  uploadedFile: any;
  error?: any;
  serverFile?: string;
  fileName?: string;
}
const FilesUpload = (props: FilesUploader) => {
  const fileRef = useRef<HTMLInputElement>(null);
  let message = "";
  if (typeof props.error === "string") message = props.error;
  if (Array.isArray(props.error)) message = props.error.join(" || ");
  const handleFileUpload = (e: any) => {
    if (e.target.files) {
      const file: FileInterface = {
        name: e.target.files[0].name,
        size: e.target.files[0].size,
        image_base64: URL.createObjectURL(e.target.files[0]),
        file: e.target.files[0],
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
        <div
          className="file-upload"
          onClick={() => fileRef.current?.click()}
          role="button"
        >
          <label className="text-center" role="button" htmlFor="file">
            <Upload />
            <p>
              Drag and Drop Image here or{" "}
              <span
                className="text-primary text-underline"
                role="button"
                onClick={() => {}}
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
      {props.error ? (
        <FormFeedback style={{ display: "block" }}>{message}</FormFeedback>
      ) : null}
      {props.uploadedFiles && props.uploadedFiles.length > 0 && (
        <div
          className="file-upload mt-3 p-2"
          onClick={() => fileRef.current?.click()}
          role="button"
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
        props.uploadedFiles.map((file: FileInterface, index: number) => {
          return <ViewFile imageUrl={file.image_base64} name={file.name} />;
        })}
    </>
  );
};

const FileUpload = (props: FileUploader) => {
  const fileRef = useRef<HTMLInputElement>(null);
  let message = props.error;

  const handleFileUpload = (e: any) => {
    if (e.target.files) {
      const file = {
        name: e.target.files[0].name,
        size: e.target.files[0].size,
        image_base64: URL.createObjectURL(e.target.files[0]),
        file: e.target.files[0],
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
              onClick={(e) => {
                fileRef.current?.click();
                e.stopPropagation();
              }}
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
      {props.error ? (
        <FormFeedback style={{ display: "block" }}>{message}</FormFeedback>
      ) : null}
      {props.serverFile && !props.uploadedFile ? (
        <ViewFile imageUrl={props.serverFile} name={props.fileName} />
      ) : (
        ""
      )}
      {props.uploadedFile ? (
        <ViewFile
          imageUrl={props.uploadedFile.image_base64}
          name={props.uploadedFile.name}
        />
      ) : (
        ""
      )}
    </>
  );
};

const ViewFile = (props: any) => {
  return (
    <div className="d-flex justify-content-between flex-wrap mt-3 file-list">
      <div className="align-vertical">
        <img src={props.imageUrl} alt="User KYC FILE" className="file-image" />
        <h6 className="ml-3">{props.name}</h6>
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
  );
};

export { FileUpload, FilesUpload };
