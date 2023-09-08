import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { Group } from '../../types/models/Group';
import GroupService from '../../Services/Groupservice';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {

  const navigate = useNavigate();
  const [groupList, setGroupList] = useState<Group[]>([]); 

  useEffect(() => {
    GroupService()
    .getAllGroups()
    .then((data) => {
      setGroupList(data.data);
      console.log("data", data)
      }).catch((error) => {
      console.log(error)
      });

  },[]);

  return (
    <Box
      display='flex'
      alignItems='baseline'
      justifyContent='left'
      flexDirection={'column'}
    >
      <div style={{alignContent: 'left'}}>
        <h1>Welcome to the Homepage</h1>
        <h2>Groups:</h2>
        {groupList.map((group) => 
          (
            <>
            <div>
              <img src={group.logo} style={{height: 50, width: 50}}/>, <br />
              Id-Nr. = {group.id}, <br />
              Name = {group.name}, <br />
              Description = {group.description}, <br />
              Motto = {group.motto}, <br />
              <Button onClick={() => navigate('/users/:groupId')}>users</Button>
            </div>
            </>
          )
      )}
      </div>
      
    </Box>
  );
}
