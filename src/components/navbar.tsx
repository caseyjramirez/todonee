interface NavBarProps {
    onChangeDisplayMode: () => void;
    isLight: boolean;
}

const Navbar = ({ onChangeDisplayMode, isLight }: NavBarProps) => {

    function renderIsLight(isLight: boolean): string {
        return isLight ? "dark" : "light";
    }


    return (
        <div className="navbar pos-fixed">
            <div className={`light-dark-switch pointer ${renderIsLight(isLight)}`} onClick={onChangeDisplayMode}></div>
        </div>
    );
}
 
export default Navbar;