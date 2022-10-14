
import { Box, Typography, styled, autocompleteClasses } from '@mui/material';
import MyWorld from '../Assets/Images/MyWorld.jpeg';


const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '100%',
    height: '600px',
   
});

const CodeForInterview = () => {
    
    return (
        <Header>
            <Typography variant="h5">Name: Sauravpal Singh Rana</Typography>
            <Typography variant="h6">Roll.NO: 2010991718</Typography>
            <Box style={{display: 'flex'}}>
                <Image src={MyWorld}  />
                
            </Box>
        </Header>
    )
}

export default CodeForInterview;