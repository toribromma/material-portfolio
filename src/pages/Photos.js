import React, { useState, useCallback, useEffect } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import LazyLoad from 'react-lazyload';
import Grid from "@material-ui/core/Grid";
import Placeholder from "../components/Placeholder"

const regPhotos = require.context ( '../photos/photos', true, /\.jpg$/ )
const photos = regPhotos.keys().map(path =>({path, src: regPhotos(path), width: 375, height: 300}))

function Photos() {

  return (
    
    <SRLWrapper>
      <Grid container spacing={3}>
      {photos.map((photo, index) =>  (
        <Grid item xs={12} md={4}>
          <LazyLoad offset={-100} debounce placeholder={<Placeholder/>} height={300}>
            <img style={{height:photo.height, width: photo.width, cursor: "pointer"}} src={photo.src} />
          </LazyLoad>
        </Grid>
      ))}
      </Grid>
      </SRLWrapper>
  );
}

export default Photos;