import skiddo from '../images/672.png'
const CHome = ()=>{
    return <div>
        <h1>旅遊規劃</h1>
        <section>
            <p> 出去玩要把回憶好好收好 </p>
            <p> 所以要把行程的前後都要做好規劃!! <span><img style={{verticalAlign:"middle"}} width={34} src={skiddo}/></span></p>
        </section>
        <h2>功能說明</h2>
        <section>
            <h3>已完成功能</h3>
            <text>
                <ul>
                    <li>Line 登入功能</li>
                    <li>地圖搜尋景點</li>
                    <li>加入行程</li>
                    <li>行程細項說明紀錄，各景點預計花費設定</li>
                    <li>行程分享 (可分享單一行程)</li>
                    <li>行程規劃，車程時間計算</li>
                    <li>個人，朋友路徑查詢 </li>
                    <li>專案管理 (每一次出去玩的規劃)</li>
                </ul>
            </text>
            <h3>待完成功能</h3>
            <text>
                <ul>
                    <li>行前小書生成</li>
                    <li>回憶小書生成</li>
                    <li>照片儲存 (使用 Mega 20GB免費空間)</li>
                    <li>預算規劃</li>
                    <li>個人留言</li>
                </ul>
            </text>
        </section>
    </div>
}

export default CHome