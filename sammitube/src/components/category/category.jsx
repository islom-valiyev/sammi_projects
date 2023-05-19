import { Stack } from "@mui/material"
import { category } from '../../constants/index'
import { colors } from "../../constants/colors"
const Category = ({ selactedCategoryHandle, selactedCategory }) => {
    return (
        <Stack direction={'row'} sx={{ height: 'auto', overflowX: 'scroll ' }}>
            {category.map(item => (
                <button key={item.name} className="category-btn" style={{ borderRadius: '0', backgroundColor: item.name === selactedCategory && colors.secondary, color: item.name === selactedCategory && 'white' }} onClick={() => selactedCategoryHandle(item.name)}>
                    <span style={{ color: colors.secondary, marginRight: '15px' }}>{item.icon}</span>
                    <span style={{ opacity: '1', }}>{item.name}</span>
                </button>
            ))
            }
        </Stack >
    )
}

export default Category
