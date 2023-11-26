import { Button } from '@mui/material';
import { Check } from '@mui/icons-material';
import { getHeaderDate } from '../util/dateUtil';

function Header() {
  return (
    <div className="p-5 h-100 d-flex justify-content-between align-items-center">
      <span className="today">{getHeaderDate()}</span>
      <div className="mani-placeholder">
        Mascot comes here
      </div>
      <Button variant="contained" size="large" startIcon={<Check />}>
        Archive
      </Button>
    </div>
  );
}

export default Header;
