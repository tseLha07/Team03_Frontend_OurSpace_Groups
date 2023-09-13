import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { User } from '../../../types/models/User.model';
import UserService from '../../../Services/UserService';
import { useNavigate, useParams } from 'react-router-dom';

const UserTable = () => {
  const {groupId} = useParams();
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (groupId !== undefined){
      UserService.getUserFromGroup(groupId).then((data) => {
        setUsers(data.data);
      });
    }
    
  }, []);

  const handleAdd = () => {
    navigate('../useredit/');
  };

  const handleEdit = (id: string) => {
    navigate('../useredit/' + id);
  };

  const handleDelete = (id: string) => {
    UserService.deleteUser(id).then(() => setUsers(users.filter((user) => user.id == id)))
  };

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              {user.firstName} {user.lastName} {user.email}
              <CardActions>
                <Button
                  size='small'
                  color='primary'
                  variant='contained'
                  onClick={() => handleEdit(user.id)}
                >
                  Edit
                </Button>
                <Button
                  size='small'
                  color='error'
                  variant='contained'
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </div>
      ))}
      <Button
        onClick={handleAdd}
      >
        Add
      </Button>
      <Button onClick={() => navigate('../')}>
        Home
      </Button>
    </>
  );
};

export default UserTable;
