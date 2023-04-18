import './App.css'
import AppInfo from "../app_info/App_info"
import SearchPanel from "../search_panel/search_panel"
import AppFilter from "../app_filter/app_filter"

const App = () => {
    return (
        <div className="app font-monospace">
            <div className="content">
                <AppInfo />
                <div className='cearch_panel'>
                    <SearchPanel />
                    <AppFilter />
                </div>
            </div>
        </div>
    )
}
export default App  