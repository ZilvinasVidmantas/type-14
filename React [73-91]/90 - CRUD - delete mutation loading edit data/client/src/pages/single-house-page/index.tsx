import React from 'react';
import {
  Box, IconButton, Stack, styled,
} from '@mui/material';
import routes from 'navigation/routes';
import { useParams, Navigate } from 'react-router-dom';
import ApiService from 'services/api-service';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Img from 'components/ui/img';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const StyledSwiper = styled(Swiper)({
  width: '100%',
  height: '100%',
});

const SingleHousePage = () => {
  const leftArrowRef = React.useRef<HTMLButtonElement | null>(null);
  const rightArrowRef = React.useRef<HTMLButtonElement | null>(null);
  const { id } = useParams();
  const [house, setHouse] = React.useState<undefined | HouseModel>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedHouse = await ApiService.fetchHouse(id);
        setHouse(fetchedHouse);
      })();
    }
  }, []);

  if (id === undefined) return <Navigate to={routes.HomePage} />;
  if (house === undefined) return null;

  return (
    <Box>
      <Box component="pre">
        {JSON.stringify(house, null, 4)}
      </Box>
      <Box sx={{
        width: 600,
        height: 400,
        margin: 'auto',
        position: 'relative',
      }}
      >
        <StyledSwiper
          modules={[Pagination, Navigation]}
          pagination={{ dynamicBullets: true }}
          navigation={{
            enabled: true,
            nextEl: rightArrowRef.current,
            prevEl: leftArrowRef.current,
          }}
        >
          {house.images.map((img) => (
            <SwiperSlide key={img}>
              <Img src={img} sx={{ width: 1, height: 1 }} />
            </SwiperSlide>
          ))}
        </StyledSwiper>
        <Stack sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          zIndex: 3000,
          justifyContent: 'center',
        }}
        >
          <IconButton ref={leftArrowRef}>
            <ArrowCircleLeftIcon sx={{ color: 'primary.main', fontSize: 30 }} />
          </IconButton>
        </Stack>
        <Stack sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          zIndex: 3000,
          justifyContent: 'center',
        }}
        >
          <IconButton ref={rightArrowRef}>
            <ArrowCircleRightIcon sx={{ color: 'primary.main', fontSize: 30 }} />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default SingleHousePage;
