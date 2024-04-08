import { Link, LinkProps, Outlet, useMatch, useResolvedPath } from "react-router-dom"
import styles from "../App.module.css"
import { IoMenu } from 'react-icons/io5';
import { useEffect, useState } from "react";

const CNav = ()=>{
    const [show, setShow] = useState(false)
    return <>
    <div className={`${styles["container"]}`}>
        {!show && <div onClick={()=>{ setShow(s=>!s) }} className={`${styles["absolute-menuicon"]}`}><IoMenu size={32}/></div>}
        {show && <div className={`${styles["left"]}`}>
            <div onClick={()=>{ setShow(s=>!s) }} className={`${styles["menuicon"]}`}><IoMenu size={32}/></div>
            <CCustomLink to="/">首頁</CCustomLink>
            <CCustomLink to="/usage">使用說明</CCustomLink>
            <CCustomLink to="/develop">開發使用</CCustomLink>
        </div>
        }
        <div className={`${styles["right"]} ${!show && styles["hidden"]}`}>
            <Outlet />
        </div>
    </div>
    </>
}
const CCustomLink = ({ children, to, ...props }: LinkProps)=>{
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
            className={`${styles["link"]} ${match && styles["active"]}`}
            to={to}
            {...props}
        >
          {children}
        </Link>
      </div>
    );
}
export default CNav