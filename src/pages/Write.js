import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { useHistory } from "react-router-dom";

const Write =()=>{
    const Options = [
        {value: "초소형 주택", name:"초소형 주택" },
        {value: "해변근처", name:"해변근처" },
        {value: "멋진 수영장", name:"멋진 수영장" },
        {value: "농장", name:"농장" },
        {value: "통나무집", name:"통나무집" }
    ]
    const history =useHistory()
    const is_login = localStorage.getItem("is_login")? true : false;
    const user = useSelector((state) => state.user);
    console.log(user)
  
    React.useEffect(()=>{
      if(!is_login){
        window.alert("로그인후 이용가능 합니다")
        // history.push('/')
      }
    },[])
    return (
        <React.Fragment>
            <Header/>
                <Wrap>
                    <Back>
                        <Text>간단하게 호스팅 시작하기!<br/>에어비엔비 호스트가 되어보세요.<br/> 에어비엔비에서 모든 과정을 도와드립니다.</Text>
                    </Back>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <p>숙소이름</p>
                        <Input placeholder="home_name"/>
                        <p>숙소특징</p>
                        {/* <SelectBox option={Options}/> */}
                        <Input placeholder="category"/>
                        <p>숙소주소</p>
                        <Input placeholder="address"/>
                        <p>숙소이름</p>
                        <Input placeholder="category"/>
                        <p>숙소사진</p>
                        <Input placeholder="image"/>
                        <p>숙소소개</p>
                        <Input placeholder="introduce"/>
                        <p>숙소가격</p>
                        <Input placeholder="price"/>
                        <Button>숙소 호스팅 완료</Button>
                    </div>
                </Wrap>
        </React.Fragment>
    )
}
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
`

const Text = styled.div`
font-size: 130%;
position: absolute;
color: white;
top: 40%;
margin-left:30px;
font-weight: 600;
font-family:  Helvetica , sans-serif;
`
const Wrap = styled.div`
display: grid;
grid-template-columns: repeat(1, 1fr);
background-size: cover;
height: 100%;
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
`
export default Write;

const SelectBox =(props)=>{
    console.log(props)
    return (
        <select>
            {props.Options.map((option) => (
                <option value={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
    )
}