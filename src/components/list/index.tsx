import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Item from '../listItem';
import { TypeList } from '@/services';

type Props = {
  listData: TypeList;
};

const AlignItemsList: React.FC<Props> = (props: Props) => {
  const { listData } = props;
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {listData.map((item, index) => (
        <>
          <Item itemData={item} />

          {index !== listData.length - 1 ? (
            <Divider variant="inset" component="li" />
          ) : null}
        </>
      ))}
    </List>
  );
};

export default AlignItemsList;
