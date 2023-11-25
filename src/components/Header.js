import { getHeaderDate } from '../util/dateUtil';
import { Button } from '@mui/material';
import { Check } from '@mui/icons-material';


const Header = () => {
    return (
        <div className='p-5 h-100 d-flex justify-content-between align-items-center'>
            <span className='today'>{getHeaderDate()}</span>
            <div className='mani-placeholder'>
                Mascot comes here
            </div>
            <Button variant="contained" size="large" startIcon={<Check />}>
                Archive
            </Button>
        </div>
      );
        {/* <span>{getHeaderDate()}</span>
        <div className='mani-placeholder'>Mani lives here</div>
        <button> Archive </button> */}
}

export default Header;