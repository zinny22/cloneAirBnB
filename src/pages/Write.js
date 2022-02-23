import React from "react";
import styled from "styled-components";
import Logo2 from "../elements/Logo2";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Write =()=>{
    const dispatch =useDispatch()
    const history =useHistory()
    const is_login = localStorage.getItem("is_login")? true : false;
  
    React.useEffect(()=>{
      if(!is_login){
        window.alert("로그인후 이용가능 합니다")
        history.push('/')
      }
    },[])
    
    //인풋 값에 자동으로 콤마 생성
    const [num, setNum] = useState(0);

    const inputPriceFormat = (str) => {
      const comma = (str) => {
        str = String(str);
        return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
      };
      const uncomma = (str) => {
        str = String(str);
        return str.replace(/[^\d]+/g, "");
      };
      return comma(uncomma(str));
    };
    //

    //인풋값 가져오기
    const [home, setHome] = useState("")
    const [address, setAddress] = useState("")
    const [introduce, setIntroduce] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")

    //이미지 formdata 변형 방법!
    //formdata로 이미지를 보낸다음에 변환해준 url을 받아서 다시 데이터로 넣어주기!!!!(리로딩 할 필요가 없응께)
    const onChange=(e)=>{
      const img1 =e.target.files[0];
      const img2 =e.target.files[1];
      const img3 =e.target.files[2];
      const img4 =e.target.files[3];
      const img5 =e.target.files[4];
      
      const formData = new FormData();
      formData.append('image', img1)
      formData.append('image', img2)
      formData.append('image', img3)
      formData.append('image', img4)
      formData.append('image', img5)

      dispatch(postActions.upLoadDB(formData))
    }

    //리덕스에 저장된 url데이터 (파일 선택하면 비동기로 저장되서 넘어옴)
    const image_url = useSelector((state)=>state.post.imgurl)

    return (
        <React.Fragment>
                <Wrap>
                    <Back>
                        <Logo2/>
                        <Text>간단하게 호스팅 시작하기!<br/>에어비엔비 호스트가 되어보세요.<br/> 에어비엔비에서 모든 과정을 도와드립니다.</Text>
                    </Back>
                    <Wrap2>
                        <Label>숙소 이름 정하기</Label>
                        <Input placeholder="세상에서 제일 아름다운 숙소" onChange={(e)=>setHome(e.target.value)}/>

                        <Label>호스팅할 숙소의 위치는 어디인가요</Label>
                        <Input placeholder="address" onChange={(e)=>setAddress(e.target.value)}/>

                        <Label>숙소의 사진을 올릴 차례입니다 (최대 5장) </Label>
                        <input type="file" multiple="multiple" 
                        style={{border:"1px solid", padding:"16px", width:"80%",margin: "0px auto 30px auto",borderRadius: "6px"}}
                        name={"image"}
                        onChange={onChange}
                        />
                        
                        <Label>숙소에 대해 자세히 설명해주세요</Label>
                        <Input placeholder="introduce" onChange={(e)=>setIntroduce(e.target.value)}/>

                        <Label>숙소의 가격은 얼마인가요 (1박 기준)</Label>
                        <input style={{border: "1px solid",padding: "16px",width: "80%",margin: "0px auto 30px auto", borderRadius:"6px"}}
                        type="text" value={num} onChange={(e)=>setNum(inputPriceFormat(e.target.value), setPrice(e.target.value))}/>
                        {/* <input onChange={(e)=>setPrice(e.target.value)}></input> */}


                        <div style={{display:"flex", justifyContent:"center", alignContent:"center", alignItems:"center", margin:"0px auto 40px auto"}}>
                            <p style={{fontSize:"15px", fontWeight:"600"}}>호스팅할 숙소의 최대 특징은 무엇인가요</p>
                            {/*드롭다운부분 select태그에는 onchange사용가능*/}
                            <div>
                              <Select onChange={(e)=>setCategory(e.target.value)}>
                                <option value={"초소형 주택"}>초소형 주택</option>
                                <option value={"해변근처"}>해변근처</option>
                                <option value={"멋진 수영장"}>멋진 수영장</option>
                                <option value={"농장"}>농장</option>
                                <option value={"통나무 집"}>통나무 집</option>
                              </Select>
                            </div>                            
                        </div>
                        <Button onClick={()=>{dispatch(postActions.addPostDB(home, address, introduce, price,category,image_url))}}>숙소 호스팅 완료</Button>
                    </Wrap2>
                </Wrap>
        </React.Fragment>
    )
}

const Label = styled.label`
font-weight: 600;
font-size: 15px;
margin-left: 40px;
margin-bottom: 8px;
`
const Button =styled.button`
border-radius: 6px;
border: none;
background-color:black ;
padding: 16px;
color: white;
font-weight:800;
font-size: 15px;
width: 50%;
margin: 0px auto;
:hover{
    background: linear-gradient(90deg, rgba(70,4,121,1) 35%, rgba(203,37,119,1) 100%)
}
`
const Text = styled.div`
font-size: 130%;
position: absolute;
color: white;
top: 40%;
margin-left:10%;
font-weight: 600;
font-family:  Helvetica , sans-serif;
@media screen and (min-width: 745px) {
    font-size: 130%;
    position: absolute;
    color: white;
    top: 40%;
    margin-left:5%;
    font-weight: 600;
    font-family:  Helvetica , sans-serif;
  }
`
const Wrap = styled.div`
display: grid;
grid-template-columns: repeat(1, 1fr);
background-size: cover;
height: 100vh;
@media screen and (min-width: 745px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
const Back = styled.div`
position: relative;
background-size: cover;
height: 100%;
background: rgb(70,4,121);
background: linear-gradient(90deg, rgba(70,4,121,1) 35%, rgba(203,37,119,1) 100%);
`
const Input = styled.input`
border: 1px solid ;
padding: 16px;
width: 80%;
margin: 0px auto 30px auto;
border-radius: 6px;
cursor:auto;
`

const Wrap2 = styled.div`
display:flex;
flex-direction:column;
margin-top:5%;
@media screen and (min-width: 745px) {
    display:flex;
    flex-direction:column;
    margin-top: 100px;
  }
`

const Select = styled.select`
border: 1px solid ;
padding: 16px;
border-radius: 6px;
margin-left: 100px;
`

export default Write;