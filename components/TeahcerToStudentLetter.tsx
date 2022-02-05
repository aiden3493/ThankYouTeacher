import { json } from "node:stream/consumers";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "../styles/TeacherToStudentCSS.module.css";

function Letter() {
  const [filesArray, setFilesArray] = useState<object[]>([]);
  const onDrop = useCallback((acceptedFiles) => {
    setFilesArray((oldArray) => [...oldArray, acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragAccept } =
    useDropzone({
      onDrop,
      multiple: true,
    });

  return (
    <div>
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
          {...getRootProps()}
          className={styled.dragAndDropZoneOut}
          style={
            filesArray.length === 0
              ? { height: "100px" }
              : { height: `${110 + 100 * filesArray.length}px` }
          }>
          <div
            className={styled.dragAndDropZoneIn}
            style={isDragAccept === true ? { borderColor: "gray" } : {}}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>여기에 파일을 드롭해 주세요</p>
            ) : (
              <p>클릭 또는 드래그 앤 드롭으로 파일을 업로드해주세요</p>
            )}
          </div>
        </div>
      </form>
      <h1>여백</h1>
      <h1>여백</h1>
      <h1>여백</h1>
      <h1>여백</h1>
      <h1>여백</h1>
    </div>
  );
}

export default Letter;
