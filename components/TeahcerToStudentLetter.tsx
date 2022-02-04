import styled from "../styles/TeacherToStudentCSS.module.css";

function Letter() {
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
        <p>이곳에 원하는 사진 파일을 업로드 해주세요</p>
      </form>
    </div>
  );
}

export default Letter;
