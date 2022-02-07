import { PromiseProvider } from "mongoose";
import Link from "next/link";
import { FunctionComponent, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "../styles/TeacherToStudentCSS.module.css";

const Letter: FunctionComponent = () => {
  const [filesList, setFilesList] = useState<any[]>([]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file: any) => setFilesList((prev) => [...prev, file]));
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragAccept } =
    useDropzone({
      onDrop,
      multiple: true,
    });

  const removeFileList = (file: any) => {
    const updatedList = [...filesList];
    updatedList.splice(filesList.indexOf(file), 1);
    setFilesList(updatedList);
    console.log(updatedList);
  };

  return (
    <div className={styled.page}>
      <form className={styled.writeLetterForm}>
        {/* letter */}
        <h1>test</h1>
        <p>
          <textarea
            cols={10}
            rows={10}
            placeholder='이곳에 편지를 입력해 주세요'
            className={styled.writeLetterInput}></textarea>
        </p>

        {/* photos */}
        <h1>test</h1>
        <div
          className={styled.dragAndDropZoneOut}
          style={
            filesList.length === 0
              ? { height: "100px" }
              : { height: `${100 + 60 * filesList.length + 10}px` }
          }>
          <div
            {...getRootProps()}
            className={styled.dragAndDropZoneIn}
            style={isDragAccept === true ? { borderColor: "gray" } : {}}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>여기에 파일을 드롭해 주세요</p>
            ) : (
              <p>클릭 또는 드래그 앤 드롭으로 파일을 업로드해주세요</p>
            )}
          </div>
          {filesList.length === 0 ? (
            <></>
          ) : (
            filesList.map((file) => {
              return (
                <div
                  className={styled.filesList}
                  key={`${file?.path}`}
                  id={`${file?.name}`}>
                  <p>{`${file?.name}`}</p>
                  <button
                    id={`${file?.name}Remove`}
                    onClick={() => {
                      removeFileList(file);
                    }}>
                    x
                  </button>
                </div>
              );
            })
          )}
        </div>
      </form>
      <Link href='/'>
        <button className={styled.upload}>UPLOAD</button>
      </Link>
    </div>
  );
};

export default Letter;
