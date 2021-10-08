/* eslint-disable */
import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import DefaultYoutube from '@/assets/youtube.png';
import { TypeList } from '@/services';

type Props = {
  listData: TypeList;
};
const List: React.FC<Props> = (props: Props) => {
  const { listData } = props;
  const handleOpen = (item: string) => {
    document.location.href = item;
  };

  return (
    <Box sx={{ width: '50rem', height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {listData.map((item) => (
          <ImageListItem key={item.img}>
            {/youtube/gm.test(item.img) ? (
              <a href={item.img}>
                <Image src={DefaultYoutube} alt={item.name} loading="lazy" />
              </a>
            ) : (
              <img
                onClick={() => handleOpen(item.img)}
                src={
                  `${item.img}` ||
                  'https://blog.sinapsis.agency/wp-content/uploads/2021/04/DEFINICIONES.-ERROR-404.png'
                }
                srcSet={`${item.img}`}
                alt={item.name}
                loading="lazy"
              />
            )}
            <ImageListItemBar position="below" title={item.name} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
export default List;
