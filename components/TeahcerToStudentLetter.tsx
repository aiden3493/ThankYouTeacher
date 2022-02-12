import { LOADIPHLPAPI } from "dns";
import Link from "next/link";
import Router from "next/router";
import { FunctionComponent, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "../styles/TeacherToStudentCSS.module.css";

const Letter: FunctionComponent = () => {
  const [filesList, setFilesList] = useState<any[]>([]);
  const [text, setText] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file: any) => setFilesList((prev) => [...prev, file]));
  }, []);

  // 드래그 앤 드롭
  // const { getRootProps, getInputProps, isDragActive, isDragAccept } =
  //   useDropzone({
  //     onDrop,
  //     multiple: true,
  //   });

  // const removeFileList = (file: any) => {
  //   const updatedList = [...filesList];
  //   updatedList.splice(filesList.indexOf(file), 1);
  //   setFilesList(updatedList);
  //   console.log(updatedList);
  // };

  const changeText = (e: any) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const upload = async (event: any) => {
    if (filesList.length != 0) {
      const res = await fetch(
        `/api/upload/${text}/${filesList.map((file) => file?.path)}`
      );
      Router.push("/");
    } else {
      const res = await fetch(`/api/upload/${text}/${null}`);
      Router.push("/");
    }
  };

  return (
    <div className={styled.page}>
      <form
        className={styled.writeLetterForm}
        key='TTS-form'
        method='post'
        action='upload'
        encType='multipart/form-data'>
        {/* letter */}
        <h1 key='TTS-letter'>편지</h1>
        <p key='TTS-text'>
          <textarea
            onChange={changeText}
            key='TTS-text-area'
            cols={10}
            rows={10}
            placeholder='이곳에 편지를 입력해 주세요'
            className={styled.writeLetterInput}></textarea>
        </p>

        {/* photos */}
        {/* 원래 드래그 앤 드롭 구역인데 폐기함 */}
        {/* <h1 key='TTS-fiel'>업로드</h1>
        <h4 key='TTS-fiel' style={{ marginTop: "0px" }}>
          선택사항
        </h4>
        <div
          key='TTS-file-form'
          className={styled.dragAndDropZoneOut}
          style={
            filesList.length === 0
              ? { height: "100px" }
              : { height: `${100 + 60 * filesList.length + 10}px` }
          }>
          <div
            key='TTS-file-dnd'
            {...getRootProps()}
            className={styled.dragAndDropZoneIn}
            style={isDragAccept === true ? { borderColor: "gray" } : {}}>
            <input key='TTS-file-dnd-input' {...getInputProps()} />
            {isDragActive ? (
              <p key='TTS-file-dnd-text'>여기에 파일을 드롭해 주세요</p>
            ) : (
              <p key='TTS-file-dnd-text2'>
                클릭 또는 드래그 앤 드롭으로 파일을 업로드해주세요
              </p>
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
        </div> */}
      </form>
      <button onClick={upload} key='TTS-upload' className={styled.upload}>
        UPLOAD
      </button>
      <p style={{ marginTop: "-80px" }}>업로드 후 내용을 수정할 수 없습니다</p>
    </div>
  );
};

export default Letter;
