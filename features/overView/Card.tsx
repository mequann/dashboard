import React from 'react';
import { IOverViewInterface } from './overViewInterface';
import { Box, Card, Typography } from '@mui/material';


const OverViewCard = ({ data }: IOverViewInterface) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      {data?.map((item, index) => (
        <Card
          key={index}
          sx={{
            padding: 2,
            width: { xs: '100%', sm: '48%', md: '30%' }, 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
        
          <Box sx={{ fontSize: '2rem', marginBottom: 1 }}>
            {item?.icon}
          </Box>

       
          <Typography variant="h6" sx={{ marginBottom: 1 }}>
            {item?.title}
          </Typography>

        
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
            {item?.count}
          </Typography>

          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            {item?.status}
          </Typography>

        
          <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
            {item?.rate}%
            <Box component="span" sx={{ marginLeft: 1 }}>{item?.rateIcon}</Box>
          </Typography>
        </Card>
      ))}
    </Box>
  );
};

export default OverViewCard;
