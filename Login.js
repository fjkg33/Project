import "./Login.css"

export default function Login(){
        return(
            <div className='login-wrapper'>
               <div className='login-top'>
                    <h3>로그인</h3>
                    <span>이메일 또는 아이디</span>
                    <input type='email' placeholder='아이디를 입력해 주세요'/>
                    <span>비밀번호</span>
                    <input type='email' placeholder='비밀번호를 입력해 주세요'/>
               </div>
               <div className='login-bottom'>
                    <div className='pointer'>로그인</div>
                    <span>회원이 아니신가요?</span>
                    <div className='join'>회원가입</div>
                    <p>아이디 / 비밀번호 찾기</p>
               </div>
            </div>
        )
}