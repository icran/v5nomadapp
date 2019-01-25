import { connect } from "react-redux";
import Container from "./container";



// profile컴포넌트는 다른사람들의 프로필을 보여주기 위한 컴포넌트다. 
// 즉 프로필 컴포넌트는 get props만 할것이다. prop을 요구하지 않는다. 
// 데이터는 스크린에서 오는것이다. DetailScreen 혹은 profileScreen에서.


export default connect()(Container);