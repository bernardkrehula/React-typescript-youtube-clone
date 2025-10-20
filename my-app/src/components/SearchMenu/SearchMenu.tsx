import './SearchMenu.css'

type SearchMenuType = {
    placeholder?: string;
    variation?: string;
    onChange?: () => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    value?: string;
}

const SearchMenu = ({placeholder, onChange, onKeyDown, value}: SearchMenuType) => {
    console.log(value)

    return(
        <input className='search-menu' placeholder={placeholder} value={value} onChange={onChange} onKeyDown={onKeyDown}></input>
    )
}
export default SearchMenu;