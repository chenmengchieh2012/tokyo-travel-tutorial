import UsageLogin from "../images/usage-login.png"
import UsageLogout from "../images/usage-logout.png"
import UsageMainPage from "../images/usage-mainpage.png"
import UsageNav from "../images/usage-nav.png"
import UsageSearch from "../images/usage-search.png"
import UsageSearchHover from "../images/usage-search-hover.png"
import UsageJourneyItem from "../images/usage-journey-item.png"
import UsageJourney from "../images/usage-journey.png"
import UsageMyJourneyItem from "../images/usage-my-journey-item.png"
const CUsage = ()=>{
    return <>
        <h1>使用說明</h1>
        <h3>登入/登出</h3>
        <section>
            <h4>登入</h4>
            <img src={UsageLogin} alt=""/>
            <p>點選按鍵登入，將跳轉至LINE，不管什麼都案確定就對了</p>
            <h4>登出</h4>
            <p>點選右下角LINE頭像</p>
            <img src={UsageLogout} alt=""/>
            <p>點選自己的名字，確定登出彈跳視窗按下去</p>
        </section>
        <h3>首頁</h3>
        <img src={UsageMainPage} alt=""/>
        <h4>選單</h4>
        <section>
            <img src={UsageNav} alt=""/>
            <p>上至下</p>
            <ul>
                <li>個人行程</li>
                <li>其他人行程</li>
            </ul>
        </section>
        <h4>查詢景點</h4>
        <section>
            <img src={UsageSearch} alt=""/>
            <p>輸入文字後按放大鏡，若要關閉將文字清空即可</p>
            <p>游標於景點上時，會出現按鈕</p>
            <img src={UsageSearchHover} alt=""/>
            <p>一個為點出地圖位置，一個為新增行程</p>
        </section>
        <h4>新增行程</h4>
        <section>
            <img src={UsageJourneyItem} alt=""/>
            <p>摘要是之後會會顯示於畫面中，小書也會呈現</p>
            <p>備註欄可以寫入相關活動說明，或是當日有特別的活動</p>
        </section>
        <h4>行程規劃</h4>
        <section>
            <img src={UsageJourney} alt=""/>
            <p>深藍色框框為自己的行程，淺灰色框框為別人分享的行程</p>
            <p>等待一下會顯示旅程時間</p>
            <p>游標於景點上時，會出現按鈕</p>
            <img src={UsageMyJourneyItem} alt=""/>
            <p>上至下，左至右</p>
            <ul>
                <li>刪除行程</li>
                <li>分享行程</li>
                <li>位置</li>
                <li>設定</li>
            </ul>
        </section>
        <h4>自行新增景點</h4>
        <section>
            <p>於地圖長按按鍵，顯示PIN後，點選PIN，跳出加入</p>
        </section>
    </>
}

export default CUsage