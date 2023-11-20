import { Button } from "@mui/material";
import menu from "../assets/menu.svg";

function SeeMore() {
    return (
        <Button variant={'contained'} fullWidth={false}  sx={{borderRadius: '0.75rem',bgcolor:'#323443',width:'10rem',color:'#C9C9C9',textTransform:'none',justifyContent:'space-around'}}>
            <img src={menu} alt={'more'}/>
                See More
        </Button>
    );
}

export default SeeMore;