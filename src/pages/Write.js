import React from "react";
import styled from "styled-components";
import Logo2 from "../elements/Logo2";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Write =()=>{
    const Options = [
        {value: "초소형 주택", name:"초소형 주택" },
        {value: "해변근처", name:"해변근처" },
        {value: "멋진 수영장", name:"멋진 수영장" },
        {value: "농장", name:"농장" },
        {value: "통나무집", name:"통나무집" }
    ]
    const dispatch =useDispatch()
    const history =useHistory()
    const is_login = localStorage.getItem("is_login")? true : false;
    // const user = useSelector((state) => state.user);
    // console.log(user)
  
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


    return (
        <React.Fragment>
                <Wrap>
                    <Back>
                        <Logo2/>
                        <Text>간단하게 호스팅 시작하기!<br/>에어비엔비 호스트가 되어보세요.<br/> 에어비엔비에서 모든 과정을 도와드립니다.</Text>
                    </Back>
                    <Wrap2>
                        <Label>숙소 이름 정하기</Label>
                        <Input placeholder="세상에서 제일 아름다운 숙소"/>
                        <Label>호스팅할 숙소 유형을 알려주세요</Label>
                        <Input placeholder="category"/>
                        <Label>호스팅할 숙소의 위치는 어디인가요</Label>
                        <Input placeholder="address"/>
                        <Label>숙소의 사진을 올릴 차례입니다 (최소 5장) </Label>
                        <input type="file" multiple="multiple" 
                        style={{border:"1px solid", padding:"16px", width:"80%",margin: "0px auto 30px auto",borderRadius: "6px"}}/>
                        <Label>숙소에 대해 자세히 설명해주세요</Label>
                        <Input placeholder="introduce"/>
                        <Label>숙소의 가격은 얼마인가요 (1박 기준)</Label>
                        <input style={{border: "1px solid",padding: "16px",width: "80%",margin: "0px auto 30px auto", borderRadius:"6px"}}
                        type="text" value={num} onChange={(e)=>setNum(inputPriceFormat(e.target.value))}/>
                        <div style={{display:"flex", justifyContent:"center", alignContent:"center", alignItems:"center", margin:"0px auto 40px auto"}}>
                            <p style={{fontSize:"15px", fontWeight:"600"}}>호스팅할 숙소의 최대 특징은 무엇인가요</p>
                            <SelectBox option={Options}/>
                        </div>
                        <Button onClick={()=>{dispatch(postActions.addPostDB())}}>숙소 호스팅 완료</Button>
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
export default Write;

const SelectBox =(props)=>{
    console.log(props)
    return (
        <Select>
            {props.option.map((option) => (
                <option value={option.value}>
                    {option.name}
                </option>
            ))}
        </Select>
    )
};

const Select = styled.select`
border: 1px solid ;
padding: 16px;
border-radius: 6px;
margin-left: 100px;
`