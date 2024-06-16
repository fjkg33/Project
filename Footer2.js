import "../component/Footer2.css";
import { RiInstagramLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer2 =()=>{
    return(
        <div className="Footer2">
            <p>
                <li>
                    <span>조선일보 브랜드 대상 2년 연속 수상</span>
                    <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;서울특별시수의사회 인증</span><br/>
                    <span>'반려동물장례서비스 부문' 수상</span>
                    <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;'반려동물 장례식장'</span><br/>
                </li>
                <li2>
                    <h2 style={{display:"inline"}}>(주)펫닥</h2>
                    <a href="https://www.naver.com" style={{textDecoration: "none"}}><h4 style={{display:"inline"}}>&emsp;이용약관</h4></a> |
                    <a href="https://www.naver.com" style={{textDecoration: "none"}}><h4 style={{display:"inline"}}> 개인정보처리방침</h4></a><br/>
                    <span>서울특별시 서초구 강남대로 79길 32, 펫닥</span>
                    <span>&emsp;대표이사:오태환</span>
                    <span>&emsp;Tel:1588-2888</span>
                    <span>&emsp;사업자등록번호:432-86-00569</span>
                    <span>&emsp;개인정보관리책임자:오태환</span>
                    <span>&emsp;Email:fourpaws@petdoc.co.kr</span><br/>
                    <span>@2024 Petdoc inc.All rights reserved.</span>
                </li2>
            <ul>
                <li3><a href="https://www.instagram.com/" className="Insta"><RiInstagramLine  size="40px"/></a></li3>
                <li4><a href="https://www.facebook.com/?locale=ko_KR" className="FaceBook"><FaFacebookF  size="40px"/></a></li4>
                <li5><a href="https://www.youtube.com/" className="Youtube"><FaYoutube  size="40px"/></a></li5>
            </ul>
                
               
                

            </p>
        </div>
    )
}
export default Footer2;