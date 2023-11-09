const Header = () => {

    const getHeaderDate = () => {
        const today = new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const shortMonth = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
          ];
        return (
            <span>
               Today is {days[today.getDay()]}, {shortMonth[today.getMonth()]} {today.getDate()}
            </span>
        )
    }

    return <header>
        <span>{getHeaderDate()}</span>
        <div className='mani-placeholder'>Mani lives here</div>
        <button> Archive </button>
    </header>
    
}

export default Header;